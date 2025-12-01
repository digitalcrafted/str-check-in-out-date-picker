<script setup lang="ts">
import CheckInDatePicker from './CheckInDatePicker.vue'
import CheckOutDatePicker from './CheckOutDatePicker.vue'
import { useBookingDatePicker } from '../composables/useBookingDatePicker'
import type { BookingDateRangeProps } from '../types'

interface Props extends BookingDateRangeProps {
  checkInDate?: Date | null
  checkOutDate?: Date | null
}

const props = withDefaults(defineProps<Props>(), {
  bookedDates: () => [],
  checkInDate: null,
  checkOutDate: null,
  minDate: undefined,
  dateFormat: 'YYYY-MM-DD',
  displayFormat: 'dd/MM/yyyy',
  checkInPlaceholder: 'Check In Date',
  checkOutPlaceholder: 'Check Out Date',
  checkInInputClass: 'w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900',
  checkOutInputClass: 'w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
})

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
  bookedDates: props.bookedDates,
  onCheckInChange: props.onCheckInChange,
  onCheckOutChange: props.onCheckOutChange,
  onValidationError: props.onValidationError,
  minDate: props.minDate,
  dateFormat: props.dateFormat,
  displayFormat: props.displayFormat
})

// Initialize with external props if provided
if (props.checkInDate) {
  checkInDate.value = props.checkInDate
}
if (props.checkOutDate) {
  checkOutDate.value = props.checkOutDate
}
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 justify-start items-center w-full">
    <!-- Check In Date -->
    <div class="flex flex-col gap-1.5 justify-center items-start w-full sm:flex-1">
      <CheckInDatePicker
        :model-value="checkInDate"
        :min-date="today"
        :disabled-dates="disabledCheckInDates"
        :placeholder="checkInPlaceholder"
        :input-class="checkInInputClass"
        @update:model-value="handleCheckInChange"
      />
    </div>

    <!-- Check Out Date -->
    <div class="flex flex-col gap-1.5 justify-center items-start w-full sm:flex-1">
      <CheckOutDatePicker
        :model-value="checkOutDate"
        :min-date="minCheckOutDate"
        :start-date="checkInDate || minCheckOutDate"
        :disabled="!checkInDate"
        :disabled-dates="disabledCheckOutDates"
        :placeholder="checkOutPlaceholder"
        :input-class="checkOutInputClass"
        @update:model-value="handleCheckOutChange"
      />
    </div>
  </div>
</template>

