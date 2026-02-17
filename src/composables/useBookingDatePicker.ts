import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { BookedDateRange, UseBookingDatePickerOptions } from '../types'

dayjs.extend(utc)
dayjs.extend(customParseFormat)

/** Normalize to YYYY-MM-DD for UTC parsing (handles Date or string). */
function toYYYYMMDD(d: Date | string): string {
  if (typeof d === 'string') return dayjs(d).format('YYYY-MM-DD')
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Convert YYYY-MM-DD string to local-midnight Date for the picker. */
function dateStrToLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function useBookingDatePicker(options: UseBookingDatePickerOptions) {
  const {
    bookedDates: bookedDatesInput,
    onCheckInChange,
    onCheckOutChange,
    onValidationError,
    minDate,
    dateFormat = 'YYYY-MM-DD'
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
  // Backend convention: range.end = last night (checkout - 1). Blocked = [start, end] inclusive.
  // Use UTC for iteration; return local-midnight Date[] for the picker.
  const disabledCheckInDates = computed(() => {
    if (!bookedDates.value || bookedDates.value.length === 0) return []

    const disabledSet = new Set<string>()
    bookedDates.value.forEach((range: BookedDateRange) => {
      const startStr = toYYYYMMDD(range.start)
      const endStr = toYYYYMMDD(range.end)
      const bookedStart = dayjs.utc(startStr)
      const bookedEnd = dayjs.utc(endStr)

      let current = bookedStart
      while (current.isBefore(bookedEnd, 'day') || current.isSame(bookedEnd, 'day')) {
        disabledSet.add(current.format('YYYY-MM-DD'))
        current = current.add(1, 'day')
      }
    })

    return Array.from(disabledSet).map(dateStrToLocalDate)
  })

  // Disabled dates for check-out picker (str-frontend / backend convention)
  // bookedCheckout = end + 1 (actual checkout day). Allow checkout on range.start; disable during stay and from bookedCheckout onwards when overlap.
  const disabledCheckOutDates = computed(() => {
    const currentCheckIn = checkInDate.value
    if (!bookedDates.value || bookedDates.value.length === 0) return []

    const disabledSet = new Set<string>()
    bookedDates.value.forEach((range: BookedDateRange) => {
      const startStr = toYYYYMMDD(range.start)
      const endStr = toYYYYMMDD(range.end)
      const bookedStart = dayjs.utc(startStr)
      const bookedEnd = dayjs.utc(endStr)
      const bookedCheckout = bookedEnd.add(1, 'day')

      if (currentCheckIn) {
        const checkInStr = toYYYYMMDD(currentCheckIn)
        const checkIn = dayjs.utc(checkInStr)
        const wouldOverlap = checkIn.isBefore(bookedCheckout, 'day')

        if (wouldOverlap) {
          // Disable dates during the existing booking: from (range.start + 1) to bookedEnd inclusive
          let current = bookedStart.add(1, 'day')
          while (current.isBefore(bookedCheckout, 'day')) {
            disabledSet.add(current.format('YYYY-MM-DD'))
            current = current.add(1, 'day')
          }
          // Disable from actual checkout day onwards (e.g. 365 days)
          current = bookedCheckout
          const maxDate = bookedCheckout.add(365, 'day')
          while (current.isBefore(maxDate, 'day') || current.isSame(maxDate, 'day')) {
            disabledSet.add(current.format('YYYY-MM-DD'))
            current = current.add(1, 'day')
          }
        }
      } else {
        disabledSet.add(bookedCheckout.format('YYYY-MM-DD'))
      }
    })

    return Array.from(disabledSet).map(dateStrToLocalDate)
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
      const checkInStr = toYYYYMMDD(checkInDate.value)
      const checkOutStr = toYYYYMMDD(date)
      const checkIn = dayjs.utc(checkInStr)
      const checkOut = dayjs.utc(checkOutStr)

      // Validate: check-out must not be before check-in (same day is allowed)
      if (checkOut.isBefore(checkIn, 'day')) {
        onValidationError?.('Check-out date cannot be before check-in date. Please select a different date.')
        checkOutDate.value = null
        onCheckOutChange?.(null)
        return
      }

      // Overlap (backend-aligned): checkIn < bookedCheckout && checkOut > bookedStart, bookedCheckout = end + 1
      const hasBookedDatesInRange = bookedDates.value?.some((range: BookedDateRange) => {
        const startStr = toYYYYMMDD(range.start)
        const endStr = toYYYYMMDD(range.end)
        const bookedStart = dayjs.utc(startStr)
        const bookedEnd = dayjs.utc(endStr)
        const bookedCheckout = bookedEnd.add(1, 'day')
        return checkIn.isBefore(bookedCheckout, 'day') && checkOut.isAfter(bookedStart, 'day')
      })

      if (hasBookedDatesInRange) {
        onValidationError?.('The selected date range contains unavailable dates. Please select a different range.')
        checkOutDate.value = null
        onCheckOutChange?.(null)
        return
      }

      checkOutDate.value = date
      onCheckOutChange?.(dayjs(date).format(dateFormat))
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

