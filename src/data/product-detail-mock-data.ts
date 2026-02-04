// Types and mock data for the product detail page

export interface ProductImage {
  id: string
  src: string
  alt: string
}

export interface ProductColor {
  name: string
  value: string
}

export interface ProductReview {
  id: string
  author: string
  avatar: string
  rating: number
  date: string
  title: string
  content: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductDetail {
  id: string
  slug: string
  name: string
  category: string
  tags: string[]
  sku: string
  price: number
  originalPrice?: number
  description: string
  shortDescription: string
  features: string[]
  images: ProductImage[]
  colors: ProductColor[]
  sizes: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  reviews: ProductReview[]
  specs: ProductSpec[]
}

const PLACEHOLDER = "https://placehold.co"

export const mockProduct: ProductDetail = {
  id: "1",
  slug: "classic-leather-jacket",
  name: "Classic Leather Jacket",
  category: "Jackets",
  tags: ["leather", "outerwear", "classic"],
  sku: "LJ-001-BLK",
  price: 199.99,
  originalPrice: 299.99,
  shortDescription:
    "Premium full-grain leather jacket with a timeless silhouette. Perfect for layering in any season.",
  description: `<p>Crafted from premium full-grain leather, this classic jacket combines durability with effortless style. The clean lines and tailored fit make it a versatile addition to any wardrobe.</p>
<p>The interior is lined with soft cotton for all-day comfort, while the sturdy YKK zippers ensure long-lasting functionality. Two exterior pockets and one interior pocket provide ample storage.</p>
<p>Whether paired with jeans for a casual look or dressed up over a button-down, this jacket delivers timeless appeal that only gets better with age.</p>`,
  features: [
    "Full-grain leather construction",
    "Cotton-lined interior for comfort",
    "YKK zipper hardware",
    "Two exterior zip pockets",
    "One interior pocket",
    "Adjustable snap cuffs",
    "Available in 4 colors",
  ],
  images: [
    { id: "img-1", src: `${PLACEHOLDER}/600x700/1a1a2e/e0e0e0?text=Jacket+Front`, alt: "Jacket front view" },
    { id: "img-2", src: `${PLACEHOLDER}/600x700/2d2d44/e0e0e0?text=Jacket+Back`, alt: "Jacket back view" },
    { id: "img-3", src: `${PLACEHOLDER}/600x700/3d3d5c/e0e0e0?text=Jacket+Side`, alt: "Jacket side view" },
    { id: "img-4", src: `${PLACEHOLDER}/600x700/16213e/e0e0e0?text=Jacket+Detail`, alt: "Jacket detail" },
    { id: "img-5", src: `${PLACEHOLDER}/600x700/0f3460/e0e0e0?text=Jacket+Worn`, alt: "Jacket worn look" },
  ],
  colors: [
    { name: "Black", value: "#1a1a2e" },
    { name: "Brown", value: "#6b4226" },
    { name: "Navy", value: "#16213e" },
    { name: "Burgundy", value: "#6b2737" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  inStock: true,
  rating: 4.6,
  reviewCount: 128,
  reviews: [
    {
      id: "r1",
      author: "Alex M.",
      avatar: `${PLACEHOLDER}/40x40/6366f1/ffffff?text=AM`,
      rating: 5,
      date: "2025-12-15",
      title: "Excellent quality leather",
      content:
        "The leather is thick and supple. Fits perfectly true to size. I've worn it almost every day since purchase.",
    },
    {
      id: "r2",
      author: "Sarah K.",
      avatar: `${PLACEHOLDER}/40x40/ec4899/ffffff?text=SK`,
      rating: 4,
      date: "2025-11-28",
      title: "Great jacket, runs slightly large",
      content:
        "Beautiful jacket overall. I'd recommend sizing down if you're between sizes. The leather quality is top-notch.",
    },
    {
      id: "r3",
      author: "James T.",
      avatar: `${PLACEHOLDER}/40x40/14b8a6/ffffff?text=JT`,
      rating: 5,
      date: "2025-10-02",
      title: "Worth every penny",
      content:
        "I've owned many leather jackets, and this one is by far the best. The stitching is flawless and the fit is perfect.",
    },
  ],
  specs: [
    { label: "Material", value: "Full-grain leather" },
    { label: "Lining", value: "100% Cotton" },
    { label: "Closure", value: "YKK Zip" },
    { label: "Pockets", value: "2 exterior, 1 interior" },
    { label: "Care", value: "Professional leather clean only" },
    { label: "Origin", value: "Handcrafted in Italy" },
    { label: "Weight", value: "1.2 kg" },
    { label: "Warranty", value: "2 years" },
  ],
}

export const relatedProducts = [
  { id: "2", slug: "bomber-jacket", name: "Bomber Jacket", price: 149.99, image: `${PLACEHOLDER}/300x350/2d2d44/e0e0e0?text=Bomber`, rating: 4.3 },
  { id: "3", slug: "denim-jacket", name: "Denim Jacket", price: 89.99, originalPrice: 129.99, image: `${PLACEHOLDER}/300x350/1e3a5f/e0e0e0?text=Denim`, rating: 4.5 },
  { id: "4", slug: "suede-jacket", name: "Suede Jacket", price: 179.99, image: `${PLACEHOLDER}/300x350/6b4226/e0e0e0?text=Suede`, rating: 4.7 },
  { id: "5", slug: "parka-coat", name: "Parka Coat", price: 219.99, originalPrice: 279.99, image: `${PLACEHOLDER}/300x350/1a3c34/e0e0e0?text=Parka`, rating: 4.4 },
  { id: "6", slug: "windbreaker", name: "Windbreaker", price: 69.99, image: `${PLACEHOLDER}/300x350/3d3d5c/e0e0e0?text=Wind`, rating: 4.1 },
  { id: "7", slug: "trench-coat", name: "Trench Coat", price: 259.99, image: `${PLACEHOLDER}/300x350/4a3728/e0e0e0?text=Trench`, rating: 4.8 },
]
