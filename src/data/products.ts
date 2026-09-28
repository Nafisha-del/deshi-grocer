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
  {
    id: 2,
    name: "Fresh Milk",
    price: 5.49,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    inStock: true,
  },
  {
    id: 3,
    name: "Red Apples",
    price: 4.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    inStock: true,
  },
  {
    id: 4,
    name: "Fresh Broccoli",
    price: 3.49,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    inStock: true,
  },
  {
    id: 5,
    name: "Potato Chips",
    price: 3.99,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
    inStock: true,
  },
  {
    id: 6,
    name: "Orange Juice",
    price: 6.49,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    inStock: false,
  },
]