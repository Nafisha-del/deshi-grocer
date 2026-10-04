import type { CartItem } from "../data/products";

type CartProps = {
    items: CartItem[]
    onRemoveFromCart: (productId: number) => void
    onIncreaseQuantity: (productId: number) => void
    onDecreaseQuantity: (productId: number) => void
    onCheckout: () => void
    onClearCart: () => void
}

function Cart({ items, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity, onCheckout, onClearCart }: CartProps) {
    const subtotal = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    )
    const deliveryFee = subtotal > 0 ? 4.99:0
    const total = subtotal + deliveryFee

    const totalItems = items.reduce(
        (total, item) => total + item.quantity, 0
    )

    return (
        <section id="cart" className="mt-12 rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold">Your Cart</h2>
            {items.length > 0 && (
                <span className="text-sm text-gray-500">
                    {totalItems}{" "}
                    {totalItems === 1 ? 'item':'items'}
                </span>
            )}

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
                                <div className="flex items-center rounded-lg border">
                                    <button
                                        onClick={() => onDecreaseQuantity(item.product.id)}
                                        className="px-3 py-1 text-lg hover:bg-gray-100"
                                    >
                                        -
                                    </button>

                                    <span className="px-3 font-semibold">
                                        {item.quantity}
                                    </span>
                                    
                                    <button
                                        onClick={() => onIncreaseQuantity(item.product.id)}
                                        disabled={item.quantity >= item.product.stock}
                                        className="rounded border px-2 py-1 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        +
                                    </button>
                                </div>

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
                    
                    <div className="mt-8 border-t pt-6">
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Subtotal</span>
                            </div>
                            
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Delivery</span>
                            <span>{deliveryFee === 0 ? "Free": `$${deliveryFee.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between border-t pt-3 text-lg font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <button onClick={onClearCart}
                                className="flex-1 rounded-lg border px-4 py-3 font-semibold transition hover:bg-gray-100">
                                Clear Cart
                            </button>
                            <button  onClick={onCheckout} disabled={items.length === 0}
                                className="flex-1 rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}

export default Cart