<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BackgroundDecor from '@/components/ui/BackgroundDecor.vue'
</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <BackgroundDecor />
    <AppHeader />
    <main class="flex-1 relative z-10">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
