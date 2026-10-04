export type Product = {
    id: number
    name: string
    price: number
    category: string
    image: string
    // inStock: boolean
    stock: number
    description: string
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
    description: "Premium long-grain basmati rice with a fragrant aroma and fluffy texture.",
  },
  {
    id: 2,
    name: "Fresh Milk",
    price: 5.49,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    stock: 8,
    description: "Pure farm-fresh milk with a creamy texture and naturally rich taste.",
  },
  {
    id: 3,
    name: "Red Apples",
    price: 4.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    stock: 0,
    description: "Crisp and juicy red apples with a vibrant skin and a naturally sweet, refreshing flavor.",
  },
  {
    id: 4,
    name: "Fresh Broccoli",
    price: 3.49,
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    stock: 20,
    description: "Crisp, farm-fresh broccoli florets with a deep green color and a nutrient-rich, earthy taste.",
  },
  {
    id: 5,
    name: "Potato Chips",
    price: 3.99,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
    stock: 7,
    description: "Perfectly golden, crunchy potato chips seasoned to perfection for the ultimate savory snack.",
  },
  {
    id: 6,
    name: "Orange Juice",
    price: 6.49,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    stock: 10,
    description: "Sun-ripened, 100% pure orange juice packed with a bright, refreshing burst of citrus flavor.",
  },
  {
    id: 7,
    name: "Halal Beef",
    price: 8.49,
    category: "Meats",
    image: "https://images.unsplash.com/photo-1723893905879-0e309c2a8e06",
    stock: 0,
    description: "Premium-cut, certified Halal beef featuring rich marbling for an incredibly tender and flavorful meal.",
  },
  {
    id: 8,
    name: "Koral Fish (Barramundi)",
    price: 24.99,
    category: "Fish & Seafood",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa53DjWhCoi1n8hFMtxpj5TNc8nvyQNMn7R29V9ovPVuCK-dvNPRy_aX4&s=10",
    stock: 5,
    description: "Fresh, sustainably caught Barramundi with a mild, buttery flavor and a firm, flaky texture.",
  },
  {
    id: 9,
    name: "Loitta Fish (Lizard Fish)",
    price: 10.49,
    category: "Fish & Seafood",
    image: "https://sunderban.nl/cdn/shop/files/df54eeba-7c89-4911-90bc-31e9d03bdeec_1c93f63a-31f9-443a-bfa8-5bd952ec318d.jpg?v=1775644928",
    stock: 40,
    description: "Traditional, soft-textured Loitta fish, prized for its delicate flavor and perfect for rich, spicy curries.",
  },
  {
    id: 10,
    name: "Red Lentils",
    category: "Rice & Grains",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1672660589379-891ab59588a8",
    stock: 15,
    description: "High-quality red lentils that are perfect for dal, soups, and curries.",
  }
]