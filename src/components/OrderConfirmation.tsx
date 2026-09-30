type OrderConfirmationProps = {
    onContinueShopping: () => void
}

function OrderConfirmation({ onContinueShopping }: OrderConfirmationProps) {
    return(
        <section>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                ✓
            </div>
            <h2 className="mb-3 text-2xl font-bold">
                Order Confirmed!
            </h2>
            <p className="mb-2 text-gray-600">
                Thank you for your order.
            </p>
            <p className="mb-6 text-sm text-gray-500">
                Your groceries are being prepared for delivery.
            </p>
            <button
                onClick={onContinueShopping}
                className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
                Continue Shopping
            </button>
        </section>
    )
}

export default OrderConfirmation