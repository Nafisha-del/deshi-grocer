import { use, useState } from "react"
import { products } from "./data/products"
import type { CartItem } from "./data/products"
import type { Product } from "./data/products"
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
  const [sortOption, setSortOption] = useState("featured")

  // Add to products to cart state
  const handleAddToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.product.id === product.id
      )
      
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          return currentCart
        }
        
        return currentCart.map((item) =>
          item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            } : item
        )
      }
      
      if (product.stock <= 0) { return currentCart }
      
      return [
        ...currentCart,
        {
          product,
          quantity: 1,
        },
      ]
    })
  }
  // const handleAddToCart = (productId: number) => {
  //   const product = products.find(
  //     (product) => product.id === productId
  //   )
    
  //   if (!product) { return }
    
  //   setCart((currentCart) => {
  //     const existingItem = currentCart.find(
  //       (item) => item.product.id === productId
  //     )
      
  //     if (existingItem) {
  //       return currentCart.map((item) =>
  //         item.product.id === productId ? {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         } : item
  //       )
  //     }
      
  //     return [
  //       ...currentCart,
  //       {
  //         product,
  //         quantity: 1,
  //       },
  //     ]
  //   })
  // }

  // Remove items from cart
  const handleRemoveFromCart = (productId: number) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.product.id !== productId
      )
    )
  }

  // Increase amount of 1 product (+)
  const handleIncreaseQuantity = (productId: number) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.product.id !== productId) { return item }
        if (item.quantity >= item.product.stock) { return item }
        
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      })
    )
  }
  // const handleIncreaseQuantity = (productId: number) => {
  //   setCart((currentCart) =>
  //     currentCart.map((item) =>
  //       item.product.id === productId
  //       ? {
  //           ...item,
  //           quantity: item.quantity + 1,
  //       } : item
  //     )
  //   )
  // }

  // Decrease amount of 1 product (-)
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

  // Check out logic
  const handleCheckout = () => {
    setIsCheckoutOpen(true)
  }

  // Order submit logic
  const handleOrderSubmit = () => {
    setIsCheckoutOpen(false)
    setIsOrderConfirmed(true)
  }

  // Items search 
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sorting items
  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {
      if (sortOption === 'price-low') {
        return a.price - b.price
      }
      if (sortOption === 'price-high') {
        return b.price - a.price
      }
      if (sortOption === 'return-az'){
        return a.name.localeCompare(b.name)
      }
      if (sortOption === 'return-za'){
        return b.name.localeCompare(a.name)
      }
      return 0
    }
  )

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

      <div className="mb-8 flex items-center gap-3">
        <label htmlFor="sort-products" className="font-medium">Sort by:</label>
        <select id="sort-products" value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
          className="rounded-lg border px-4 py-2 outline-none focus:ring-2">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A → Z</option>
            <option value="name-za">Name: Z → A</option>
        </select>
      </div>

      <CategoryList
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <ProductList 
        products={sortedProducts} 
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
