export interface NavItem {
  label: string
  to: string
  hash?: string
}

export const storeInfo = {
  phone: '۰۲۱-۱۲۳۴۵۶۷۸',
  email: 'info@testshopp.ir',
  shipping: 'ارسال رایگان بالای ۵ میلیون تومان',
}

export const navItems: NavItem[] = [
  { label: 'خانه', to: '/' },
  { label: 'محصولات', to: '/', hash: '#products' },
  { label: 'تخفیف‌ها', to: '/', hash: '#discounts' },
  { label: 'تماس', to: '/', hash: '#contact' },
]

export const quickLinks: NavItem[] = [
  { label: 'دسته‌بندی‌ها', to: '/', hash: '#categories' },
  { label: 'جدیدترین‌ها', to: '/', hash: '#new-arrivals' },
  { label: 'پرفروش‌ها', to: '/', hash: '#best-sellers' },
  { label: 'برندها', to: '/', hash: '#brands' },
]

export function navLink(item: NavItem): string {
  return item.hash ? `${item.to}${item.hash}` : item.to
}
