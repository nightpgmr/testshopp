export interface Product {
  id: number
  name: string
  slug: string
  price: number
  comparePrice?: number
  image: string
  category: string
  brand: string
  rating: number
  reviewCount: number
  isNew?: boolean
  isFeatured?: boolean
  discount?: number
}

export interface Category {
  id: number
  name: string
  slug: string
  image: string
  productCount: number
}

export interface Brand {
  id: number
  name: string
  logo: string
}

export interface Slide {
  id: number
  title: string
  subtitle: string
  image: string
  cta: string
  link: string
}

export interface User {
  id: number
  name: string
  email: string
  phone?: string
  avatar?: string
  roles: string[]
}
