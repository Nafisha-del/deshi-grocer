import type { Product } from "../data/products";

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps){
    return(
        <article className="overflow-hidden rounded-lg border bg-white shadow-sm">
        <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover"
        />

        <div className="p-4">
            <h3 className="text-lg font-semibold">
            {product.name}
            </h3>

            <p className="mt-2 text-xl font-bold">
            ${product.price.toFixed(2)}
            </p>

            <p className="mt-1 text-sm text-gray-500">
            {product.category}
            </p>

            <p className="mt-3 text-sm">
            {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
            </p>
        </div>
        </article>
    )
}

export default ProductCard