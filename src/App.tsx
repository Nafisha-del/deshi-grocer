import { use, useState } from "react"
import { products } from "./data/products"
import type { CartItem } from "./data/products"
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import CheckoutForm from "./components/CheckoutForm"
import OrderConfirmation from "./components/OrderConfirmation"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

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

  const handleRemoveFromCart = (productId: number) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.product.id !== productId
      )
    )
  }

  const handleIncreaseQuantity = (productId: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
        } : item
      )
    )
  }

  const handleDecreaseQuantity = (productId: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
            } : item
      ).filter((item) => item.quantity > 0)
    )
  }

  const handleCheckout = () => {
    setIsCheckoutOpen(true)
  }

  const handleOrderSubmit = () => {
    setIsCheckoutOpen(false)
    setIsOrderConfirmed(true)
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
      
      <div className="mb-8">
        <label
        htmlFor="product-search"
        className="mb-2 block text-sm font-medium">
          Search Products
        </label>
        <input
          id="product-search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search for rice, milk, apples..."
          className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"/>
      </div>

      <CategoryList
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <ProductList 
        products={filteredProducts} 
        onAddToCart={handleAddToCart}
      />
      <Cart 
        items={cart} 
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onCheckout={handleCheckout}
      />
      {isCheckoutOpen && (
        <CheckoutForm
          onSubmit={handleOrderSubmit}
        />
      )}
      {isOrderConfirmed && (
        <OrderConfirmation
          onContinueShopping={() => {
            setIsOrderConfirmed(false)
            setCart([])
          }}
        />
)}
    </main>
    </>
  )
}

export default App
