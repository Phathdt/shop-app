// Product types and mock data for the shop page

export interface Product {
  id: number
  name: string
  slug: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
  rating: number
  reviewCount: number
  sizes: string[]
  colors: string[]
  isSale: boolean
  isNew: boolean
}

export interface FilterState {
  categories: string[]
  priceRange: [number, number]
  brands: string[]
  ratings: number[]
  sizes: string[]
  colors: string[]
}

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "rating"

export type ViewMode = "grid" | "list"

// Available filter options
export const CATEGORIES = [
  { name: "Clothing", count: 42 },
  { name: "Electronics", count: 28 },
  { name: "Shoes", count: 35 },
  { name: "Accessories", count: 23 },
]

export const BRANDS = [
  { name: "Nike", count: 18 },
  { name: "Adidas", count: 15 },
  { name: "Apple", count: 12 },
  { name: "Samsung", count: 10 },
  { name: "Zara", count: 22 },
  { name: "H&M", count: 14 },
]

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

export const COLORS = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Red", value: "#EF4444" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#22C55E" },
  { name: "Yellow", value: "#EAB308" },
]

export const PRICE_MIN = 0
export const PRICE_MAX = 500

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Best Rating" },
]

export const PER_PAGE_OPTIONS = [12, 24, 36, 48]

// Mock product data
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Running Shoes",
    slug: "classic-running-shoes",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://picsum.photos/seed/shoe1/400/400",
    category: "Shoes",
    brand: "Nike",
    rating: 4.5,
    reviewCount: 128,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    isSale: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    price: 199.99,
    image: "https://picsum.photos/seed/headphone1/400/400",
    category: "Electronics",
    brand: "Apple",
    rating: 4.8,
    reviewCount: 256,
    sizes: [],
    colors: ["Black", "White"],
    isSale: false,
    isNew: true,
  },
  {
    id: 3,
    name: "Slim Fit Cotton T-Shirt",
    slug: "slim-fit-cotton-tshirt",
    price: 24.99,
    originalPrice: 39.99,
    image: "https://picsum.photos/seed/tshirt1/400/400",
    category: "Clothing",
    brand: "Zara",
    rating: 4.2,
    reviewCount: 89,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    isSale: true,
    isNew: false,
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    slug: "leather-crossbody-bag",
    price: 149.99,
    image: "https://picsum.photos/seed/bag1/400/400",
    category: "Accessories",
    brand: "Zara",
    rating: 4.6,
    reviewCount: 67,
    sizes: [],
    colors: ["Black", "Red"],
    isSale: false,
    isNew: false,
  },
  {
    id: 5,
    name: "Ultra Boost Sports Sneakers",
    slug: "ultra-boost-sports-sneakers",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://picsum.photos/seed/shoe2/400/400",
    category: "Shoes",
    brand: "Adidas",
    rating: 4.7,
    reviewCount: 203,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Green"],
    isSale: true,
    isNew: false,
  },
  {
    id: 6,
    name: "Smart Watch Series 5",
    slug: "smart-watch-series-5",
    price: 349.99,
    image: "https://picsum.photos/seed/watch1/400/400",
    category: "Electronics",
    brand: "Samsung",
    rating: 4.4,
    reviewCount: 178,
    sizes: [],
    colors: ["Black", "White"],
    isSale: false,
    isNew: true,
  },
  {
    id: 7,
    name: "Casual Denim Jacket",
    slug: "casual-denim-jacket",
    price: 79.99,
    image: "https://picsum.photos/seed/jacket1/400/400",
    category: "Clothing",
    brand: "H&M",
    rating: 4.1,
    reviewCount: 45,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],
    isSale: false,
    isNew: false,
  },
  {
    id: 8,
    name: "Premium Sunglasses",
    slug: "premium-sunglasses",
    price: 59.99,
    originalPrice: 89.99,
    image: "https://picsum.photos/seed/sunglasses1/400/400",
    category: "Accessories",
    brand: "Nike",
    rating: 4.3,
    reviewCount: 92,
    sizes: [],
    colors: ["Black", "Red", "Yellow"],
    isSale: true,
    isNew: false,
  },
  {
    id: 9,
    name: "Organic Cotton Hoodie",
    slug: "organic-cotton-hoodie",
    price: 64.99,
    image: "https://picsum.photos/seed/hoodie1/400/400",
    category: "Clothing",
    brand: "H&M",
    rating: 4.0,
    reviewCount: 56,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Green"],
    isSale: false,
    isNew: true,
  },
  {
    id: 10,
    name: "Trail Running Shoes Pro",
    slug: "trail-running-shoes-pro",
    price: 134.99,
    image: "https://picsum.photos/seed/shoe3/400/400",
    category: "Shoes",
    brand: "Nike",
    rating: 4.6,
    reviewCount: 145,
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Blue", "Green"],
    isSale: false,
    isNew: false,
  },
  {
    id: 11,
    name: "Noise Cancelling Earbuds",
    slug: "noise-cancelling-earbuds",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://picsum.photos/seed/earbuds1/400/400",
    category: "Electronics",
    brand: "Samsung",
    rating: 4.5,
    reviewCount: 312,
    sizes: [],
    colors: ["Black", "White"],
    isSale: true,
    isNew: false,
  },
  {
    id: 12,
    name: "Canvas Backpack",
    slug: "canvas-backpack",
    price: 44.99,
    image: "https://picsum.photos/seed/backpack1/400/400",
    category: "Accessories",
    brand: "Adidas",
    rating: 4.2,
    reviewCount: 78,
    sizes: [],
    colors: ["Black", "Blue", "Green"],
    isSale: false,
    isNew: false,
  },
  {
    id: 13,
    name: "Linen Summer Dress",
    slug: "linen-summer-dress",
    price: 54.99,
    originalPrice: 74.99,
    image: "https://picsum.photos/seed/dress1/400/400",
    category: "Clothing",
    brand: "Zara",
    rating: 4.4,
    reviewCount: 103,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Red", "Yellow"],
    isSale: true,
    isNew: false,
  },
  {
    id: 14,
    name: "Minimalist Wrist Watch",
    slug: "minimalist-wrist-watch",
    price: 89.99,
    image: "https://picsum.photos/seed/watch2/400/400",
    category: "Accessories",
    brand: "Apple",
    rating: 4.7,
    reviewCount: 64,
    sizes: [],
    colors: ["Black", "White"],
    isSale: false,
    isNew: true,
  },
  {
    id: 15,
    name: "Performance Running Shorts",
    slug: "performance-running-shorts",
    price: 34.99,
    image: "https://picsum.photos/seed/shorts1/400/400",
    category: "Clothing",
    brand: "Nike",
    rating: 4.3,
    reviewCount: 87,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue"],
    isSale: false,
    isNew: false,
  },
  {
    id: 16,
    name: "Retro Skateboard Shoes",
    slug: "retro-skateboard-shoes",
    price: 74.99,
    originalPrice: 99.99,
    image: "https://picsum.photos/seed/shoe4/400/400",
    category: "Shoes",
    brand: "Adidas",
    rating: 4.1,
    reviewCount: 156,
    sizes: ["S", "M", "L"],
    colors: ["White", "Red", "Yellow"],
    isSale: true,
    isNew: false,
  },
]

// Helper: initial filter state
export const INITIAL_FILTERS: FilterState = {
  categories: [],
  priceRange: [PRICE_MIN, PRICE_MAX],
  brands: [],
  ratings: [],
  sizes: [],
  colors: [],
}
