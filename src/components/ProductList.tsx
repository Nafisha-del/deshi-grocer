import type { Product } from "../data/products"
import ProductCard from "./ProductCard"

type ProductListProps = {
    // selectedCategory: string
    products: Product[]
    onAddToCart: (product: Product) => void
}

function ProductList({ products, onAddToCart, }: ProductListProps) {
    // const filteredProducts =
    // selectedCategory === "All"
    //   ? products
    //   : products.filter(
    //       (product) => product.category === selectedCategory
    //     )

    return (
        <section className="mt-8">
        <h2 className="mb-6 text-2xl font-bold">Products</h2>

        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => onAddToCart(product.id)}
            />
            ))}
        </div> */}

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
                    <img src={product.image} alt={product.name} className="h-48 w-full object-cover"/>
                    
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
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