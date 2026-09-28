import { products } from "../data/products"
import ProductCard from "./ProductCard"

type ProductListProps = {
  selectedCategory: string
}

function ProductList({ selectedCategory }: ProductListProps) {
    const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        )

    return (
        <section className="mt-10">
        <h2 className="mb-5 text-2xl font-bold">
            Popular Products
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
            />
            ))}
        </div>
        </section>
    )
}

export default ProductList