import express from "express"
import cors from "cors"
import { products } from "./data/products"

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

app.get("/api/products", (_req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})