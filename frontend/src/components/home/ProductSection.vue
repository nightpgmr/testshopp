<script setup lang="ts">
import ProductCard from '@/components/product/ProductCard.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import type { Product } from '@/types'

defineProps<{
  title: string
  subtitle?: string
  products: Product[]
  id?: string
}>()
</script>

<template>
  <section :id="id" class="py-14 md:py-20">
    <div class="container mx-auto px-4">
      <SectionHeader :title="title" :subtitle="subtitle">
        <template #action>
          <a href="#" class="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80 transition-opacity shrink-0">
            مشاهده همه
            <AppIcon name="chevron-left" :size="16" />
          </a>
        </template>
      </SectionHeader>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
