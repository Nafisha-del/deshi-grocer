export type Product = {
    id: number
    name: string
    price: number
    category: string
    image: string
    inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Basmati Rice",
    price: 12.99,
    category: "Rice & Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    inStock: true,
  },
]