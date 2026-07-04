<script setup lang="ts">
defineProps<{
  modelValue?: string
  type?: string
  label?: string
  placeholder?: string
  error?: string
  required?: boolean
}>()

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div class="space-y-1.5">
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :type="type ?? 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
