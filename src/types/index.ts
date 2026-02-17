/**
 * A booked date range from the API.
 * - start: check-in date of the existing booking (YYYY-MM-DD).
 * - end: last night of stay (check-out date minus 1). Actual checkout day = end + 1.
 * The package uses UTC for all range comparisons to match backend behavior.
 */
export interface BookedDateRange {
  start: string | Date
  end: string | Date
}

export interface DatePickerProps {
  modelValue?: Date | null
  disabledDates?: Date[]
  minDate?: Date
  placeholder?: string
  inputClass?: string
}

export interface CheckOutDatePickerProps extends DatePickerProps {
  startDate?: Date | null
  disabled?: boolean
}

export interface UseBookingDatePickerOptions {
  bookedDates: BookedDateRange[] | (() => BookedDateRange[])
  onCheckInChange?: (date: string | null) => void
  onCheckOutChange?: (date: string | null) => void
  onValidationError?: (message: string) => void
  minDate?: Date
  dateFormat?: string
  displayFormat?: string
}

export interface BookingDateRangeProps {
  bookedDates: BookedDateRange[] | (() => BookedDateRange[])
  checkInDate?: Date | null
  checkOutDate?: Date | null
  onCheckInChange?: (date: string | null) => void
  onCheckOutChange?: (date: string | null) => void
  onValidationError?: (message: string) => void
  minDate?: Date
  dateFormat?: string
  displayFormat?: string
  checkInPlaceholder?: string
  checkOutPlaceholder?: string
  checkInInputClass?: string
  checkOutInputClass?: string
}

