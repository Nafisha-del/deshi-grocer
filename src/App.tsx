import { use, useState, useEffect } from "react"
// import { products } from "./data/products"
// import { products as initialProducts, type Product } from "./data/products"
import type { CartItem } from "./data/products"
import type { Product } from "./data/products"
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import CheckoutForm from "./components/CheckoutForm"
import OrderConfirmation from "./components/OrderConfirmation"
import ProductDetails from "./components/ProductDetails"
import FeaturedProducts from "./components/FeaturedProducts"
import { getProducts } from "./services/productService"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("featured")
  const [isLoading, setIsLoading] = useState(false)
  const [productError, setProductError] = useState<string | null>(null)
  const [productList, setProductList] = useState<Product[]>([])

  // Featured products
  const featuredProducts = productList.filter((product) => product.stock > 0).slice(0, 4)

  // Loading State
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true)
      setProductError(null)
      
      try {
        const data = await getProducts()
        setProductList(data)
      } catch (error) {
        setProductError("Unable to load products.")
      } finally {
        setIsLoading(false)
      }
    }
    loadProducts()
  }, [])

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
    if (cart.length === 0) { return }
    setIsCheckoutOpen(true)
  }

  // Order submit logic
  const handleOrderSubmit = () => {
    setIsCheckoutOpen(false)
    setIsOrderConfirmed(true)
  }

  // Items search 
  const filteredProducts = productList.filter((product) => {
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

  // Clearing Cart
  const handleClearCart = () =>{
    setCart([])
  }

  // clicking on "Cart" in Header
  const handleCartClick = () => {
    document.getElementById('cart')?.scrollIntoView({
      behavior: "smooth",
    })
  }

  // Check product
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }
  const handleCloseProductDetails = () => {
    setSelectedProduct(null)
  }

  return (
    <>
    <Header 
      storeName="Deshi Grocer"
      tagline="Fresh groceries, delivered to your door"
      cartCount={cart.reduce(
        (total, item) => total + item.quantity, 0
      )}
      onCartClick={handleCartClick}
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
            <option value="return-az">Name: A → Z</option>
            <option value="return-za">Name: Z → A</option>
        </select>
      </div>

      <CategoryList
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <FeaturedProducts 
        products={featuredProducts}
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
      />
      <ProductList 
        products={sortedProducts} 
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
        isLoading={isLoading}
        productError={productError}
      />
      <Cart 
        items={cart} 
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onCheckout={handleCheckout}
        onClearCart={handleClearCart}
      />
      {isCheckoutOpen && (
        <CheckoutForm
          onSubmit={handleOrderSubmit}
        />
      )}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onClose={handleCloseProductDetails}
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
