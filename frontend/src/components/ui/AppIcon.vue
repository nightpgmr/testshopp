<script setup lang="ts">
withDefaults(defineProps<{
  name: 'search' | 'cart' | 'heart' | 'sun' | 'moon' | 'menu' | 'close' | 'phone' | 'truck' | 'star' | 'chevron-left' | 'user' | 'shield'
  size?: number
}>(), { size: 20 })
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'search'">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
    </template>
    <template v-else-if="name === 'cart'">
      <path d="M6 6h15l-1.5 9H7.5L6 6Z" /><path d="M6 6 5 3H2" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
    </template>
    <template v-else-if="name === 'heart'">
      <path d="M12 20.5 10.55 19.1C5.4 14.55 2 11.55 2 7.75 2 5.1 4.1 3 6.75 3c1.55 0 3.05.75 4 1.95C11.7 3.75 13.2 3 14.75 3 17.4 3 19.5 5.1 19.5 7.75c0 3.8-3.4 6.8-8.55 11.35L12 20.5Z" />
    </template>
    <template v-else-if="name === 'sun'">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </template>
    <template v-else-if="name === 'moon'">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z" />
    </template>
    <template v-else-if="name === 'menu'">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </template>
    <template v-else-if="name === 'close'">
      <path d="m18 6-12 12M6 6l12 12" />
    </template>
    <template v-else-if="name === 'phone'">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </template>
    <template v-else-if="name === 'truck'">
      <path d="M10 17h4M2 9h11v8H2V9ZM13 13h3l3 3v1h-6v-4ZM18 17h2a1 1 0 0 0 1-1v-3l-3-3h-4" />
    </template>
    <template v-else-if="name === 'star'">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'chevron-left'">
      <path d="m15 18-6-6 6-6" />
    </template>
    <template v-else-if="name === 'user'">
      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </template>
  </svg>
</template>
