import type { CartItem } from "../data/products";

type CartProps = {
    items: CartItem[]
    onRemoveFromCart: (productId: number) => void
}

function Cart({ items, onRemoveFromCart, }: CartProps) {
    const total = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    )

    return (
        <section className="mt-12 rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold">Your Cart</h2>

            {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
                            <div>
                                <h3 className="font-semibold">{item.product.name}</h3>
                                <p className="text-sm text-gray-500">
                                    ${item.product.price.toFixed(2)} x {" "}{item.quantity}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="font-semibold">
                                    ${(item.product.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                    onClick={() => onRemoveFromCart(item.product.id)}
                                    className="rounded-lg border px-3 py-1 text-sm font-medium hover:bg-gray-100">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                    <div className="mt-6 flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </>
            )}
        </section>
    )
}

export default Cart