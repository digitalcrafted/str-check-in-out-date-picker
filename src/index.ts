import CheckInDatePicker from './components/CheckInDatePicker.vue'
import CheckOutDatePicker from './components/CheckOutDatePicker.vue'
import BookingDateRange from './components/BookingDateRange.vue'
import { useBookingDatePicker } from './composables/useBookingDatePicker'

// Import CSS to ensure it's bundled, but it won't be automatically injected
// when the package is imported. Consumers must explicitly import the CSS:
// import '@digitalcrafted/str-check-in-out-date-picker/style.css'
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

