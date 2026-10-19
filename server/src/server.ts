import express from "express"
import cors from "cors"
// import { products } from "./data/products"
import { prisma } from "./prisma"

const app = express()
const PORT = 5000

app.use(
  cors({
    origin: "http://localhost:5173",
  })
)

app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Deshi Grocer API is running",
  })
})

app.get("/api/products", async (_req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
    })

    res.json(products)
  } catch (error) {
    console.error("Failed to fetch products:", error)
    res.status(500).json({
      message: "Failed to fetch products",
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})