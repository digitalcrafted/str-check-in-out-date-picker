<script setup lang="ts">
import { VueDatePicker } from '@vuepic/vue-datepicker'
import type { CheckOutDatePickerProps } from '../types'

interface Props extends CheckOutDatePickerProps {
  modelValue?: Date | null
}

interface Emits {
  (e: 'update:modelValue', value: Date | null): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  disabledDates: () => [],
  minDate: undefined,
  startDate: null,
  disabled: false,
  placeholder: 'Check Out Date',
  inputClass: 'w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900'
})

const emit = defineEmits<Emits>()

const handleUpdate = (value: Date | null) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <VueDatePicker
    :model-value="modelValue"
    :min-date="minDate"
    :start-date="startDate || minDate"
    :disabled="disabled"
    :disabled-dates="disabledDates"
    :formats="{ input: 'dd/MM/yyyy' }"
    :time-config="{ enableTimePicker: false }"
    auto-apply
    :placeholder="placeholder"
    :input-class-name="inputClass"
    @update:model-value="handleUpdate"
  />
</template>

