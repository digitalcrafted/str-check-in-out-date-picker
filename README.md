# @digitalcrafted/str-check-in-out-date-picker

A reusable Vue 3 component library for check-in/check-out date pickers with booking date validation and disabled date logic.

## Installation

```bash
npm install @digitalcrafted/str-check-in-out-date-picker
```

## Prerequisites

- Vue 3.x
- Tailwind CSS configured in your project

## Setup

### Import CSS

Import the package CSS in your main entry file:

```typescript
import '@digitalcrafted/str-check-in-out-date-picker/dist/style.css'
```

Or add it to your main CSS file if you're using Tailwind:

```css
@import '@digitalcrafted/str-check-in-out-date-picker/dist/style.css';
```

## Usage

### Using the Combined Component

The easiest way to use the date picker is with the `BookingDateRange` component:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BookingDateRange } from '@digitalcrafted/str-check-in-out-date-picker'
import type { BookedDateRange } from '@digitalcrafted/str-check-in-out-date-picker'

const bookedDates = ref<BookedDateRange[]>([
  { start: '2024-12-15', end: '2024-12-20' },
  { start: '2024-12-25', end: '2024-12-30' }
])

const handleCheckInChange = (date: string | null) => {
  console.log('Check-in date:', date)
}

const handleCheckOutChange = (date: string | null) => {
  console.log('Check-out date:', date)
}

const handleValidationError = (message: string) => {
  console.error('Validation error:', message)
  // Show error to user (e.g., using toast notification)
}
</script>

<template>
  <BookingDateRange
    :booked-dates="bookedDates"
    @check-in-change="handleCheckInChange"
    @check-out-change="handleCheckOutChange"
    @validation-error="handleValidationError"
  />
</template>
```

### Using Individual Components

You can also use the individual date picker components with the composable:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { 
  CheckInDatePicker, 
  CheckOutDatePicker,
  useBookingDatePicker 
} from '@digitalcrafted/str-check-in-out-date-picker'
import type { BookedDateRange } from '@digitalcrafted/str-check-in-out-date-picker'

const bookedDates = ref<BookedDateRange[]>([
  { start: '2024-12-15', end: '2024-12-20' }
])

const {
  checkInDate,
  checkOutDate,
  minCheckOutDate,
  disabledCheckInDates,
  disabledCheckOutDates,
  handleCheckInChange,
  handleCheckOutChange,
  today
} = useBookingDatePicker({
  bookedDates: bookedDates.value,
  onCheckInChange: (date) => console.log('Check-in:', date),
  onCheckOutChange: (date) => console.log('Check-out:', date),
  onValidationError: (message) => console.error(message)
})
</script>

<template>
  <div>
    <CheckInDatePicker
      v-model="checkInDate"
      :min-date="today"
      :disabled-dates="disabledCheckInDates"
      @update:model-value="handleCheckInChange"
    />
    
    <CheckOutDatePicker
      v-model="checkOutDate"
      :min-date="minCheckOutDate"
      :start-date="checkInDate || minCheckOutDate"
      :disabled="!checkInDate"
      :disabled-dates="disabledCheckOutDates"
      @update:model-value="handleCheckOutChange"
    />
  </div>
</template>
```

### Using the Composable Directly

For maximum flexibility, you can use the composable directly:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useBookingDatePicker } from '@digitalcrafted/str-check-in-out-date-picker'
import type { BookedDateRange } from '@digitalcrafted/str-check-in-out-date-picker'

const bookedDates = ref<BookedDateRange[]>([
  { start: '2024-12-15', end: '2024-12-20' }
])

const {
  checkInDate,
  checkOutDate,
  disabledCheckInDates,
  disabledCheckOutDates,
  handleCheckInChange,
  handleCheckOutChange
} = useBookingDatePicker({
  bookedDates: bookedDates.value,
  onCheckInChange: (date) => {
    console.log('Check-in changed:', date)
  },
  onCheckOutChange: (date) => {
    console.log('Check-out changed:', date)
  },
  onValidationError: (message) => {
    alert(message)
  }
})
</script>
```

## API Reference

### BookingDateRange Component

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bookedDates` | `BookedDateRange[] \| (() => BookedDateRange[])` | `[]` | Array of booked date ranges or a function that returns them |
| `checkInDate` | `Date \| null` | `null` | Initial check-in date |
| `checkOutDate` | `Date \| null` | `null` | Initial check-out date |
| `minDate` | `Date` | `undefined` | Minimum selectable date (defaults to today) |
| `dateFormat` | `string` | `'YYYY-MM-DD'` | Format for date storage |
| `displayFormat` | `string` | `'dd/MM/yyyy'` | Format for date display |
| `checkInPlaceholder` | `string` | `'Check In Date'` | Placeholder for check-in input |
| `checkOutPlaceholder` | `string` | `'Check Out Date'` | Placeholder for check-out input |
| `checkInInputClass` | `string` | Default Tailwind classes | Custom CSS classes for check-in input |
| `checkOutInputClass` | `string` | Default Tailwind classes | Custom CSS classes for check-out input |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `check-in-change` | `string \| null` | Emitted when check-in date changes |
| `check-out-change` | `string \| null` | Emitted when check-out date changes |
| `validation-error` | `string` | Emitted when validation fails |

### useBookingDatePicker Composable

#### Options

```typescript
interface UseBookingDatePickerOptions {
  bookedDates: BookedDateRange[] | (() => BookedDateRange[])
  onCheckInChange?: (date: string | null) => void
  onCheckOutChange?: (date: string | null) => void
  onValidationError?: (message: string) => void
  minDate?: Date
  dateFormat?: string
  displayFormat?: string
}
```

#### Returns

```typescript
{
  checkInDate: Ref<Date | null>
  checkOutDate: Ref<Date | null>
  minCheckOutDate: ComputedRef<Date>
  disabledCheckInDates: ComputedRef<Date[]>
  disabledCheckOutDates: ComputedRef<Date[]>
  handleCheckInChange: (date: Date | null) => void
  handleCheckOutChange: (date: Date | null) => void
  today: ComputedRef<Date>
}
```

## Business Logic

The library implements the following business rules:

1. **Check-in dates**: Can be selected on checkout dates (end dates) and check-in dates (start dates) of booked ranges - allows same-day turnarounds
2. **Check-in dates**: Cannot be selected on dates strictly between booked start and end (excludes both start and end dates)
3. **Check-out dates**: Can be selected on checkout dates and check-in dates (same-day bookings allowed)
4. **Check-out dates**: Cannot span into booked periods (dates strictly between booked start and end are disabled)
5. **Check-out**: Automatically cleared when check-in changes
6. **Validation**: Check-out cannot be before check-in (same day is allowed)
7. **Validation**: Range cannot span booked dates (excluding check-in/checkout dates)

## Type Definitions

```typescript
interface BookedDateRange {
  start: string | Date
  end: string | Date
}
```

## License

MIT

