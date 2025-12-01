import CheckInDatePicker from './components/CheckInDatePicker.vue'
import CheckOutDatePicker from './components/CheckOutDatePicker.vue'
import BookingDateRange from './components/BookingDateRange.vue'
import { useBookingDatePicker } from './composables/useBookingDatePicker'
import './style.css'

export {
  CheckInDatePicker,
  CheckOutDatePicker,
  BookingDateRange,
  useBookingDatePicker
}

export type {
  BookedDateRange,
  DatePickerProps,
  CheckOutDatePickerProps,
  UseBookingDatePickerOptions,
  BookingDateRangeProps
} from './types'

