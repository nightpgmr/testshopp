<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  block?: boolean
  type?: 'button' | 'submit'
}>()
</script>

<template>
  <button
    :type="type ?? 'button'"
    :disabled="loading"
    class="inline-flex items-center justify-center gap-2 font-medium rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[
      block && 'w-full',
      size === 'sm' && 'px-4 py-2 text-sm',
      size === 'lg' && 'px-8 py-4 text-lg',
      (!size || size === 'md') && 'px-6 py-3 text-base',
      variant === 'secondary' && 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700',
      variant === 'ghost' && 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
      variant === 'outline' && 'border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary',
      (!variant || variant === 'primary') && 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25',
    ]"
  >
    <svg v-if="loading" class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
    <slot />
  </button>
</template>
