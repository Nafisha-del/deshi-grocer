import type { Product } from "../../../src/data/products"

export const products: Product[] = [
  {
    id: 1,
    name: "Basmati Rice",
    category: "Rice & Grains",
    price: 12.99,
    stock: 20,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    description: "Premium long-grain basmati rice.",
  },
  {
    id: 2,
    name: "Fresh Bananas",
    category: "Fruits",
    price: 2.99,
    stock: 30,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    description: "Fresh and naturally sweet bananas.",
  },
]