<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { heroSlides } from '@/data/demo'
import AppIcon from '@/components/ui/AppIcon.vue'

const current = ref(0)
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % heroSlides.length
  }, 6000)
})

onUnmounted(() => clearInterval(interval))

function goTo(index: number) {
  current.value = index
}
</script>

<template>
  <section class="relative overflow-hidden rounded-3xl h-[400px] md:h-[480px] surface-card">
    <TransitionGroup name="slide">
      <div
        v-for="(slide, index) in heroSlides"
        v-show="index === current"
        :key="slide.id"
        class="absolute inset-0 bg-gradient-to-bl from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/20"
      >
        <div class="absolute inset-0 flex items-center justify-between px-8 md:px-14 gap-8">
          <div class="max-w-lg space-y-5 z-10">
            <span class="badge bg-primary/10 text-primary">پیشنهاد ویژه</span>
            <h2 class="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              {{ slide.title }}
            </h2>
            <p class="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              {{ slide.subtitle }}
            </p>
            <a
              :href="slide.link"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              {{ slide.cta }}
              <AppIcon name="chevron-left" :size="18" />
            </a>
          </div>
          <img
            :src="slide.image"
            :alt="slide.title"
            class="hidden md:block h-[80%] max-w-[42%] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </TransitionGroup>

    <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, index) in heroSlides"
        :key="index"
        class="h-1.5 rounded-full transition-all"
        :class="index === current ? 'bg-primary w-8' : 'bg-slate-300 dark:bg-slate-600 w-1.5'"
        @click="goTo(index)"
      />
    </div>
  </section>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: opacity 0.7s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; }
</style>
