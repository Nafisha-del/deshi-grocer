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

app.post("/api/products", async (req, res) => {
  const { name, category, price, image, stock, description } = req.body

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof category !== "string" ||
    !category.trim() ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price <= 0 ||
    typeof image !== "string" ||
    !image.trim() ||
    typeof stock !== "number" ||
    !Number.isInteger(stock) ||
    stock < 0 ||
    typeof description !== "string" ||
    !description.trim()
  ) {
    res.status(400).json({
      message: "Please provide valid product details.",
    })
    return
  }

  try {
    const product = await prisma.product.create({
      data: {
        name: name.trim(),
        category: category.trim(),
        price,
        image: image.trim(),
        stock,
        description: description.trim(),
      },
    })

    res.status(201).json(product)
  } catch (error) {
    console.error("Failed to create product:", error)
    res.status(500).json({
      message: "Failed to create product.",
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})