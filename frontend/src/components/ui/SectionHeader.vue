<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  align?: 'start' | 'center'
}>()
</script>

<template>
  <div
    class="mb-10 md:mb-12"
    :class="align === 'center' ? 'text-center' : 'flex items-end justify-between gap-4'"
  >
    <div :class="align === 'center' && 'mx-auto'">
      <p class="text-primary text-sm font-semibold tracking-wide mb-2">TestShopp</p>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-2 text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl">
        {{ subtitle }}
      </p>
    </div>
    <slot name="action" />
  </div>
</template>
