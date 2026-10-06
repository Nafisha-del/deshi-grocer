import express from "express"

const app = express()

const PORT = 5000

app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Deshi Grocer API is running",
  })
})

const products = [
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

app.get("/api/products", (_req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})