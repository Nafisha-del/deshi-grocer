import './App.css'
import Header from './components/Header'
import CategoryList from './components/CategoryList'
import ProductList from "./components/ProductList"

function App() {

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

      <CategoryList />
      <ProductList />
    </main>
    </>
  )
}

export default App
