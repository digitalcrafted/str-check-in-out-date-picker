import { computed, ref, type Ref, type ComputedRef } from 'vue'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { BookedDateRange, UseBookingDatePickerOptions } from '../types'

dayjs.extend(isBetween)
dayjs.extend(customParseFormat)

export function useBookingDatePicker(options: UseBookingDatePickerOptions) {
  const {
    bookedDates: bookedDatesInput,
    onCheckInChange,
    onCheckOutChange,
    onValidationError,
    minDate,
    dateFormat = 'YYYY-MM-DD',
    displayFormat = 'dd/MM/yyyy'
  } = options

  // Convert bookedDates to a ref if it's a function
  const bookedDates = computed(() => {
    if (typeof bookedDatesInput === 'function') {
      return bookedDatesInput()
    }
    return bookedDatesInput
  })

  // Today normalized to start of day
  const today = computed(() => {
    if (minDate) {
      return new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
    }
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate())
  })

  // Individual date refs for check-in and check-out
  const checkInDate = ref<Date | null>(null)
  const checkOutDate = ref<Date | null>(null)

  // Minimum check-out date (check-in + 1 day)
  const minCheckOutDate = computed(() => {
    if (!checkInDate.value) return today.value
    return dayjs(checkInDate.value).add(1, 'day').toDate()
  })

  // Disabled dates for check-in picker
  // Allows check-in on checkout dates (end dates) and check-in dates (start dates) of booked ranges
  // Only disables dates strictly between booked start and end (excludes both start and end dates)
  const disabledCheckInDates = computed(() => {
    const disabled: Date[] = []

    if (bookedDates.value && bookedDates.value.length > 0) {
      bookedDates.value.forEach((range: BookedDateRange) => {
        const bookedStart = dayjs(range.start)
        const bookedEnd = dayjs(range.end)

        // Only disable dates strictly between booked start and end (excludes both start and end dates)
        // This allows check-in on checkout dates and check-in dates (same-day turnarounds)
        let current = bookedStart.add(1, 'day')
        while (current.isBefore(bookedEnd, 'day')) {
          disabled.push(current.toDate())
          current = current.add(1, 'day')
        }
      })
    }

    return disabled
  })

  // Disabled dates for check-out picker
  // Allows checkout on checkout dates and check-in dates (same-day bookings)
  // Only disables dates strictly between booked start and end (excludes both start and end)
  const disabledCheckOutDates = computed(() => {
    const disabled: Date[] = []

    // Add booked dates, but exclude both check-in dates (start) and checkout dates (end)
    // to allow selecting them as checkout
    if (bookedDates.value && bookedDates.value.length > 0) {
      bookedDates.value.forEach((range: BookedDateRange) => {
        const bookedStart = dayjs(range.start)
        const bookedEnd = dayjs(range.end)

        // Only disable dates strictly between start and end (exclude both start and end dates)
        // This allows check-out on check-in dates and checkout dates
        let current = bookedStart.add(1, 'day')
        while (current.isBefore(bookedEnd, 'day')) {
          disabled.push(current.toDate())
          current = current.add(1, 'day')
        }
      })
    }

    // Add dates that would span into booked periods (excluding check-in and checkout dates)
    if (checkInDate.value && bookedDates.value && bookedDates.value.length > 0) {
      const checkIn = dayjs(checkInDate.value)
      bookedDates.value.forEach((range: BookedDateRange) => {
        const bookedStart = dayjs(range.start)
        const bookedEnd = dayjs(range.end)

        // If check-in is before the booked period, disable dates strictly between booked start and end
        if (checkIn.isBefore(bookedEnd)) {
          let current = bookedStart.add(1, 'day')
          while (current.isBefore(bookedEnd, 'day')) {
            disabled.push(current.toDate())
            current = current.add(1, 'day')
          }
        }
      })
    }

    return disabled
  })

  // Handle check-in date change
  const handleCheckInChange = (date: Date | null) => {
    checkInDate.value = date
    if (date) {
      const checkInStr = dayjs(date).format(dateFormat)
      onCheckInChange?.(checkInStr)
      // Clear check-out when check-in changes
      checkOutDate.value = null
      onCheckOutChange?.(null)
    } else {
      onCheckInChange?.(null)
      checkOutDate.value = null
      onCheckOutChange?.(null)
    }
  }

  // Handle check-out date change
  const handleCheckOutChange = (date: Date | null) => {
    if (!checkInDate.value) {
      checkOutDate.value = null
      return
    }

    if (date) {
      const checkIn = dayjs(checkInDate.value)
      const checkOut = dayjs(date)

      // Validate: check-out must not be before check-in (same day is allowed)
      if (checkOut.isBefore(checkIn, 'day')) {
        const errorMessage = 'Check-out date cannot be before check-in date. Please select a different date.'
        onValidationError?.(errorMessage)
        checkOutDate.value = null
        onCheckOutChange?.(null)
        return
      }

      // Validate: check if range spans booked dates (excluding check-in and checkout dates)
      const hasBookedDatesInRange = bookedDates.value?.some((range: BookedDateRange) => {
        const bookedStart = dayjs(range.start)
        const bookedEnd = dayjs(range.end)

        // Overlap occurs when the range contains any booked dates
        // Check-in on checkout date (bookedEnd) is allowed, so use isBefore (not isSameOrBefore)
        // Check-out on check-in date (bookedStart) is allowed, so use isAfter (not isSameOrAfter)
        // Check-out on checkout date (bookedEnd) is allowed, so use isBefore (not isSameOrBefore) for end check
        // We need to check if the range actually contains booked dates (not just touches check-in/checkout dates)
        return checkIn.isBefore(bookedEnd, 'day') && checkOut.isAfter(bookedStart, 'day')
      })

      if (hasBookedDatesInRange) {
        const errorMessage = 'The selected date range contains unavailable dates. Please select a different range.'
        onValidationError?.(errorMessage)
        checkOutDate.value = null
        onCheckOutChange?.(null)
        return
      }

      const checkOutStr = dayjs(date).format(dateFormat)
      checkOutDate.value = date
      onCheckOutChange?.(checkOutStr)
    } else {
      checkOutDate.value = null
      onCheckOutChange?.(null)
    }
  }

  return {
    checkInDate,
    checkOutDate,
    minCheckOutDate,
    disabledCheckInDates,
    disabledCheckOutDates,
    handleCheckInChange,
    handleCheckOutChange,
    today
  }
}

