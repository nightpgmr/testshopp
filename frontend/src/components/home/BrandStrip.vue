<script setup lang="ts">
import { brands } from '@/data/demo'
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section id="brands" class="py-14 md:py-20">
    <div class="container mx-auto px-4">
      <SectionHeader title="برندهای محبوب" subtitle="خرید از معتبرترین برندهای دنیا" align="center" />

      <div class="flex flex-wrap justify-center gap-3">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="px-6 py-3 rounded-xl surface-card card-hover cursor-pointer"
        >
          <span class="font-semibold text-slate-700 dark:text-slate-200 tracking-wide">{{ brand.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
