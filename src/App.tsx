import { useState } from "react"
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import ProductList from "./components/ProductList"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleAddToCart = (productId: number) => {
    console.log("Added product: ", productId)
  }

  return (
    <>
    <Header 
      storeName="Deshi Grocer"
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
