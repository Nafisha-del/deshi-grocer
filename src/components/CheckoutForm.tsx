import { useState } from "react";

type CheckoutFormData = {
    name: string,
    email: string,
    phone: string,
    address: string,
    instructions: string
}

type CheckoutProps = {
    onSubmit: () => void
}

function CheckoutForm({ onSubmit }:CheckoutProps) {
    const [formData, setFormData] = useState<CheckoutFormData>({
        name: "",
        email: "",
        phone: "",
        address: "",
        instructions: "",
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
        onSubmit()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }))
    }

    return (
        <section className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="mb-2 block font-medium">Full Name</label>
                    <input id="name" name="name" type="text" value={formData.name}
                        onChange={handleChange} required
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2"
                        placeholder="Enter your full name" />
                </div>

                <div>
                    <label htmlFor="email" className="mb-2 block font-medium">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} 
                        onChange={handleChange} required
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2"
                        placeholder="you@example.com" />
                </div>

                <div>
                    <label htmlFor="phone" className="mb-2 block font-medium">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone}
                        onChange={handleChange} required
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2"
                        placeholder="Enter your phone number" />
                </div>
                
                <div>
                    <label htmlFor="address" className="mb-2 block font-medium">Delivery Address</label>
                    <textarea id="address" name="address" value={formData.address} 
                        onChange={handleChange} required rows={3}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2"
                        placeholder="Enter your delivery address"/>
                </div>
                
                <div>
                    <label htmlFor="instructions" className="mb-2 block font-medium">Delivery Instructions</label>
                    <textarea id="instructions" name="instructions" value={formData.instructions}
                        onChange={handleChange} rows={3}
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2"
                        placeholder="Optional delivery instructions"/>
                </div>
                
                <button type="submit" 
                    className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
                >
                    Place Order
                </button>
            </form>
        </section>
    )
}

export default CheckoutForm