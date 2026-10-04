import type { Product } from "../data/products"

type FeaturedProductsProps = {
  products: Product[]
  onAddToCart: (product: Product) => void
  onProductClick: (product: Product) => void
}

function FeaturedProducts({ products, onAddToCart, onProductClick, }: FeaturedProductsProps) {
    return (
    <section className="mt-10">
        <div className="mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <p className="mt-1 text-gray-500">
                Popular groceries you might like
            </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <div key={product.id}
                    className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
                    <button type="button" onClick={() => onProductClick(product)} className="block w-full">
                        <img src={product.image} alt={product.name}
                            className="h-48 w-full object-cover transition hover:opacity-90"/>
                    </button>
                    
                    <div className="p-4">
                        <button type="button" onClick={() => onProductClick(product)} 
                            className="text-left text-lg font-semibold hover:underline">
                            {product.name}
                        </button>
                        <p className="mt-2 text-lg font-bold">${product.price.toFixed(2)}</p>
                        <button type="button" onClick={() => onAddToCart(product)} disabled={product.stock === 0}
                            className="mt-4 w-full rounded-lg bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300">
                            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default FeaturedProducts