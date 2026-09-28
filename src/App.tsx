import { useState } from "react"
import { products } from "./data/products"
import type { Product } from "./data/products"
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import ProductList from "./components/ProductList"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<Product[]>([])

  const handleAddToCart = (productId: number) => {
    const product = products.find(
      (product) => product.id === productId
    )
    if (!product){ return }

    setCart((currentCart) => [
      ...currentCart,
      product,
    ])
  }

  return (
    <>
    <Header 
      storeName="Deshi Grocer"
      tagline="Fresh groceries, delivered to your door"
      cartCount={cart.length}
    />

    <main className="p-8">
      <h2 className="text-3xl font-bold">
        Welcome to Deshi Grocer
      </h2>

      <p className="mt-2 text-gray-600">
        Your online grocery store.
      </p>

      <CategoryList
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <ProductList 
        selectedCategory={selectedCategory} 
        onAddToCart={handleAddToCart}
      />
    </main>
    </>
  )
}

export default App
