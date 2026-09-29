import { useState } from "react"
import { products } from "./data/products"
import type { CartItem } from "./data/products"
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import ProductList from "./components/ProductList"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<CartItem[]>([])

  const handleAddToCart = (productId: number) => {
    const product = products.find(
      (product) => product.id === productId
    )
    
    if (!product) { return }
    
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.product.id === productId
      )
      
      if (existingItem) {
        return currentCart.map((item) =>
          item.product.id === productId ? {
            ...item,
            quantity: item.quantity + 1,
          } : item
        )
      }
      
      return [
        ...currentCart,
        {
          product,
          quantity: 1,
        },
      ]
    })
  }

  return (
    <>
    <Header 
      storeName="Deshi Grocer"
      tagline="Fresh groceries, delivered to your door"
      cartCount={cart.reduce(
        (total, item) => total + item.quantity, 0
      )}
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
