import type { Product } from "../data/products";

type ProductDetailsProps = {
    product: Product
    onAddToCart: (product: Product) => void
    onClose: () => void
}

function ProductDetails({ product, onAddToCart, onClose }: ProductDetailsProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6">
                <div className="flex justify-end">
                    <button type="button" onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-black"
                        aria-label="Close product details">
                        x
                    </button>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <img src={product.image} alt={product.name} className="h-80 w-full rounded-lg object-cover"/>
                    <div>
                        <p className="text-sm font-medium uppercase text-gray-500">{product.category}</p>
                        <h2 className="mt-2 text-3xl font-bold">{product.name}</h2>
                        <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
                        <p className="mt-4 leading-7 text-gray-600">{product.description}</p>
                        <p className="mt-4 text-gray-600">{product.stock > 0 ? 
                            `${product.stock} available` : "Currently out of stock"}
                        </p>
                        <button type="button" onClick={() => onAddToCart(product)} disabled={product.stock === 0}
                            className="mt-6 w-full rounded-lg bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300">
                            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails