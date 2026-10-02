export type Product = {
    id: number
    name: string
    price: number
    category: string
    image: string
    // inStock: boolean
    stock: number
}

export type CartItem = {
  product: Product
  quantity: number
}

export const products: Product[] = [
  {
    id: 1,
    name: "Basmati Rice",
    price: 12.99,
    category: "Rice & Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    stock: 12,
  },
  {
    id: 2,
    name: "Fresh Milk",
    price: 5.49,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    stock: 8,
  },
  {
    id: 3,
    name: "Red Apples",
    price: 4.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    stock: 0,
  },
  {
    id: 4,
    name: "Fresh Broccoli",
    price: 3.49,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    stock: 20,
  },
  {
    id: 5,
    name: "Potato Chips",
    price: 3.99,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
    stock: 7,
  },
  {
    id: 6,
    name: "Orange Juice",
    price: 6.49,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    stock: 10,
  },
  {
    id: 7,
    name: "Halal Beef",
    price: 8.49,
    category: "Meats",
    image: "https://images.unsplash.com/photo-1723893905879-0e309c2a8e06",
    stock: 0,
  },
  {
    id: 8,
    name: "Koral Fish (Barramundi)",
    price: 24.99,
    category: "Fish & Seafood",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa53DjWhCoi1n8hFMtxpj5TNc8nvyQNMn7R29V9ovPVuCK-dvNPRy_aX4&s=10",
    stock: 5,
  },
  {
    id: 9,
    name: "Loitta Fish (Lizard Fish)",
    price: 10.49,
    category: "Fish & Seafood",
    image: "https://sunderban.nl/cdn/shop/files/df54eeba-7c89-4911-90bc-31e9d03bdeec_1c93f63a-31f9-443a-bfa8-5bd952ec318d.jpg?v=1775644928",
    stock: 40,
  },
]