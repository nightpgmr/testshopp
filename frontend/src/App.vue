<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToastContainer from '@/components/ui/ToastContainer.vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
theme.init()
</script>

<template>
  <RouterView />
  <ToastContainer />
</template>
