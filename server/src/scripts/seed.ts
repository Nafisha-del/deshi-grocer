import { prisma } from "../prisma"

const products = [
  {
    name: "Basmati Rice",
    category: "Rice & Grains",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    stock: 20,
    description: "Premium long-grain basmati rice.",
  },
  {
    name: "Fresh Bananas",
    category: "Fruits",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    stock: 30,
    description: "Fresh and naturally sweet bananas.",
  },
  {
    name: "Fresh Milk",
    category: "Dairy",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    stock: 8,
    description: "Pure farm-fresh milk with a creamy texture and naturally rich taste.",
  },
  {
    name: "Red Apples",
    category: "Fruits",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    stock: 0,
    description: "Crisp and juicy red apples with a vibrant skin and a naturally sweet, refreshing flavor.",
  },
  {
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    stock: 20,
    description: "Crisp, farm-fresh broccoli florets with a deep green color and a nutrient-rich, earthy taste.",
  },
  {
    name: "Potato Chips",
    category: "Snacks",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b",
    stock: 7,
    description: "Perfectly golden, crunchy potato chips seasoned to perfection for the ultimate savory snack.",
  },
  {
    name: "Orange Juice",
    category: "Beverages",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
    stock: 10,
    description: "Sun-ripened, 100% pure orange juice packed with a bright, refreshing burst of citrus flavor.",
  },
  {
    name: "Halal Beef",
    category: "Meats",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1723893905879-0e309c2a8e06",
    stock: 0,
    description: "Premium-cut, certified Halal beef featuring rich marbling for an incredibly tender and flavorful meal.",
  },
  {
    name: "Koral Fish (Barramundi)",
    category: "Fish & Seafood",
    price: 24.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa53DjWhCoi1n8hFMtxpj5TNc8nvyQNMn7R29V9ovPVuCK-dvNPRy_aX4&s=10",
    stock: 5,
    description: "Fresh, sustainably caught Barramundi with a mild, buttery flavor and a firm, flaky texture.",
  },
  {
    name: "Loitta Fish (Lizard Fish)",
    category: "Fish & Seafood",
    price: 10.49,
    image: "https://sunderban.nl/cdn/shop/files/df54eeba-7c89-4911-90bc-31e9d03bdeec_1c93f63a-31f9-443a-bfa8-5bd952ec318d.jpg?v=1775644928",
    stock: 40,
    description: "Traditional, soft-textured Loitta fish, prized for its delicate flavor and perfect for rich, spicy curries.",
  },
  {
    name: "Red Lentils",
    category: "Rice & Grains",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1672660589379-891ab59588a8",
    stock: 15,
    description: "High-quality red lentils that are perfect for dal, soups, and curries.",
  },
  {
    name: "Mangoes",
    category: "Fruits",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1623930376395-0f3ad22cfac2",
    stock: 15,
    description: "Sweet, ripe mangoes.",
},
]

async function main() {
  for (const product of products) {
    const existingProduct = await prisma.product.findFirst({
      where: { name: product.name },
    })

    if (!existingProduct) {
      await prisma.product.create({ data: product })
      console.log(`Added product: ${product.name}`)
    } else {
      console.log(`Product already exists: ${product.name}`)
    }
  }
}

main()
  .catch((error) => {
    console.error("Failed to seed products:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })