import type { Product, Category, Brand, Slide } from '@/types'
import { assetUrl } from '@/utils/asset'

const IMG = {
  iphone16Teal: assetUrl('images/products/iphone-16-teal.png'),
  iphone16Pro: assetUrl('images/products/iphone-16-pro-desert-titanium.png'),
  mobileCategory: assetUrl('images/categories/mobile.png'),
  laptopCategory: assetUrl('images/categories/laptop.png'),
  watchCategory: assetUrl('images/categories/watch.png'),
  tabletCategory: assetUrl('images/categories/tablet.png'),
}

export const heroSlides: Slide[] = [
  {
    id: 1,
    title: 'آیفون ۱۶ پرو — تیتانیوم صحرایی',
    subtitle: 'طراحی پریمیوم، دوربین حرفه‌ای، چیپ A18 Pro',
    image: IMG.iphone16Pro,
    cta: 'مشاهده محصولات',
    link: '#products',
  },
  {
    id: 2,
    title: 'آیفون ۱۶ — رنگ سبز آبی',
    subtitle: 'طراحی جدید با دوربین Control و Action Button',
    image: IMG.iphone16Teal,
    cta: 'خرید آیفون ۱۶',
    link: '#new-arrivals',
  },
  {
    id: 3,
    title: 'ارسال رایگان',
    subtitle: 'برای سفارش‌های بالای ۵ میلیون تومان',
    image: IMG.iphone16Pro,
    cta: 'شروع خرید',
    link: '#products',
  },
]

export const categories: Category[] = [
  { id: 1, name: 'موبایل', slug: 'mobile', image: IMG.mobileCategory, productCount: 48 },
  { id: 2, name: 'لپ‌تاپ', slug: 'laptop', image: IMG.laptopCategory, productCount: 32 },
  { id: 3, name: 'ساعت هوشمند', slug: 'watch', image: IMG.watchCategory, productCount: 24 },
  { id: 4, name: 'هدفون', slug: 'headphone', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', productCount: 56 },
  { id: 5, name: 'تبلت', slug: 'tablet', image: IMG.tabletCategory, productCount: 18 },
  { id: 6, name: 'لوازم جانبی', slug: 'accessories', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80', productCount: 89 },
]

export const brands: Brand[] = [
  { id: 1, name: 'Apple', logo: '🍎' },
  { id: 2, name: 'Samsung', logo: '📱' },
  { id: 3, name: 'Sony', logo: '🎧' },
  { id: 4, name: 'Dell', logo: '💻' },
  { id: 5, name: 'Xiaomi', logo: '📲' },
  { id: 6, name: 'Huawei', logo: '📡' },
]

const productImages = [
  IMG.iphone16Pro,
  IMG.iphone16Teal,
  IMG.iphone16Pro,
  IMG.iphone16Teal,
  IMG.iphone16Pro,
  IMG.iphone16Teal,
  IMG.iphone16Pro,
  IMG.iphone16Teal,
]

const productNames = [
  'آیفون ۱۶ پرو مکس ۲۵۶ گیگ — تیتانیوم صحرایی',
  'آیفون ۱۶ ۱۲۸ گیگ — سبز آبی',
  'آیفون ۱۶ پرو ۲۵۶ گیگ — تیتانیوم صحرایی',
  'آیفون ۱۶ پلاس ۲۵۶ گیگ — سبز آبی',
  'مک‌بوک پرو ۱۴ اینچ M3',
  'ایرپادز پرو نسل دوم',
  'اپل واچ سری ۹',
  'آیپد پرو ۱۲.۹ اینچ',
  'سامسونگ گلکسی S24 Ultra',
  'سونی WH-1000XM5',
  'شیائومی ۱۴ Ultra',
  'دل XPS 15',
]

export const products: Product[] = productNames.map((name, i) => ({
  id: i + 1,
  name,
  slug: `product-${i + 1}`,
  price: [45900000, 89900000, 12500000, 52000000, 28000000, 65000000, 18500000, 38000000, 72000000, 42000000, 35000000, 68000000][i] ?? 25000000,
  comparePrice: i % 3 === 0 ? ([45900000, 89900000, 12500000][i % 3] ?? 25000000) * 1.15 : undefined,
  image: productImages[i % productImages.length]!,
  category: categories[i % categories.length]!.name,
  brand: brands[i % brands.length]!.name,
  rating: +(4 + Math.random()).toFixed(1),
  reviewCount: Math.floor(Math.random() * 200) + 10,
  isNew: i < 4,
  isFeatured: i % 2 === 0,
  discount: i % 3 === 0 ? 15 : undefined,
}))

export const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8)
export const newArrivals = products.filter(p => p.isNew).slice(0, 4)
export const bestSellers = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8)
export const discountedProducts = products.filter(p => p.discount).slice(0, 4)

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('fa-IR').format(n)
}
