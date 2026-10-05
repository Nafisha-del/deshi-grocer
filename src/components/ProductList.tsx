import type { Product } from "../data/products"
import ProductCard from "./ProductCard"

type ProductListProps = {
    // selectedCategory: string
    products: Product[]
    onAddToCart: (product: Product) => void
    onProductClick: (product: Product) => void
    isLoading: boolean
    productError: string | null
}

function ProductList({ products, onAddToCart, onProductClick, isLoading, productError }: ProductListProps) {
    if (isLoading) {
        return (
        <section className="mt-8">
            <h2 className="mb-6 text-2xl font-bold">Products</h2>
            <div className="flex justify-center py-12">
                <p className="text-gray-500">Loading products...</p>
            </div>
        </section>
        )
    }

    if (productError) {
        return (
            <section className="mt-8">
                <h2 className="mb-6 text-2xl font-bold">Products</h2>
                <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
                    <p className="font-semibold text-red-700">
                        Unable to load Products
                    </p>
                    <p className="mt-2 text-sm text-red-600">{productError}</p>
                </div>
            </section>
        )
    }
    
    return (
        <section className="mt-8">
        <h2 className="mb-6 text-2xl font-bold">Products</h2>

        {products.length === 0 ? (
            <p className="py-8 text-center text-gray-500">
                No products found.
            </p>
        ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <div
                key={product.id}
                className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
                    <button type="button" onClick={() => onProductClick(product)} className="block w-full">
                        <img src={product.image} alt={product.name} className="h-48 w-full object-cover"/>
                    </button>
                    
                    <div className="p-4">
                        <button type="button" onClick={() => onProductClick(product)} className="text-left text-lg font-semibold hover:underline">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                        </button>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>

                        <p className="mt-2 text-sm text-gray-500">
                            {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
                        </p>
                        
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                            <button
                            onClick={() => onAddToCart(product)}
                            disabled={product.stock === 0}
                            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300">
                                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        )}
        </section>
    )
}

export default ProductList