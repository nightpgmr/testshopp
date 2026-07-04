import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '@/types'
import { useToastStore } from './toast'

export const useCartStore = defineStore('cart', () => {
  const items = ref<{ product: Product; quantity: number }[]>([])

  const count = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0))
  const total = computed(() => items.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0))

  function add(product: Product) {
    const existing = items.value.find(i => i.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }
    useToastStore().show('محصول به سبد خرید اضافه شد', 'success')
  }

  return { items, count, total, add }
})
