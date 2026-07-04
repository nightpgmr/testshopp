<script setup lang="ts">
import { useToastStore } from '@/stores/toast'
import type { ToastType } from '@/stores/toast'

const toast = useToastStore()

const icons: Record<ToastType, string> = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
}

const colors: Record<ToastType, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-primary',
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-3 w-full max-w-sm px-4">
      <TransitionGroup name="toast">
        <div
          v-for="t in toast.toasts"
          :key="t.id"
          class="flex items-center gap-3 px-5 py-4 rounded-2xl glass shadow-2xl animate-in"
        >
          <span
            class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            :class="colors[t.type]"
          >
            {{ icons[t.type] }}
          </span>
          <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ t.message }}</p>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
