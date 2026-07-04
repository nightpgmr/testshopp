<script setup lang="ts">
import type { Product } from '@/types'
import { formatPrice } from '@/data/demo'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
import AppIcon from '@/components/ui/AppIcon.vue'

defineProps<{ product: Product }>()

const cart = useCartStore()
const wishlist = useWishlistStore()
</script>

<template>
  <article class="group surface-card rounded-2xl overflow-hidden card-hover">
    <div class="relative aspect-square overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-4">
      <img
        :src="product.image"
        :alt="product.name"
        loading="lazy"
        class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div class="absolute top-3 right-3 flex flex-col gap-1.5">
        <span v-if="product.discount" class="badge bg-rose-500 text-white">
          {{ product.discount }}٪
        </span>
        <span v-if="product.isNew" class="badge bg-primary text-white">
          جدید
        </span>
      </div>

      <button
        class="absolute top-3 left-3 w-9 h-9 rounded-full surface-card flex items-center justify-center transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
        :class="wishlist.has(product.id) ? 'text-rose-500' : 'text-slate-500'"
        @click="wishlist.toggle(product.id)"
      >
        <AppIcon name="heart" :size="16" />
      </button>

      <div class="absolute inset-x-0 bottom-0 p-3 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
        <button
          class="w-full h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          @click="cart.add(product)"
        >
          <AppIcon name="cart" :size="16" />
          افزودن به سبد
        </button>
      </div>
    </div>

    <div class="p-4 space-y-2.5">
      <p class="text-[11px] font-medium uppercase tracking-wider text-slate-400">
        {{ product.brand }} · {{ product.category }}
      </p>
      <h3 class="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug text-sm md:text-base">
        {{ product.name }}
      </h3>
      <div class="flex items-center gap-1.5">
        <AppIcon name="star" :size="14" class="text-amber-400" />
        <span class="text-sm text-slate-500">{{ product.rating }}</span>
        <span class="text-xs text-slate-400">({{ product.reviewCount }} نظر)</span>
      </div>
      <div class="flex items-baseline gap-2 pt-0.5">
        <span class="text-base md:text-lg font-bold text-slate-900 dark:text-white">{{ formatPrice(product.price) }}</span>
        <span v-if="product.comparePrice" class="text-xs text-slate-400 line-through">{{ formatPrice(product.comparePrice) }}</span>
      </div>
    </div>
  </article>
</template>
