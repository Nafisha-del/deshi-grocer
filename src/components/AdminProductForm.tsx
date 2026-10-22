import { useState, type FormEvent } from "react";

function AdminProductForm () {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setMessage("")
        setIsSubmitting(true)

        try {
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.trim(),
                    category: category.trim(),
                    price: Number(price),
                    stock: Number(stock),
                    image: image.trim(),
                    description: description.trim(),
                }),
            })
            
            const data = await response.json()
            
            if (!response.ok) {
                throw new Error(data.message || "Failed to add product.")
            }

            setMessage(`Successfully added ${data.name}!`)
            setName("")
            setCategory("")
            setPrice("")
            setStock("")
            setImage("")
            setDescription("")
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
    <section className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Add a New Product
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
            {message && ( 
                <p role="status" className={`rounded-lg p-3 ${
                    message.startsWith("Successfully")
                    ? "bg-green-100 text-green-800": "bg-red-100 text-red-800"}`}>
            {message}</p>)}

            <div>
                <label htmlFor="product-name" className="mb-1 block font-medium">Product Name</label>
                <input id="product-name" value={name}
                    onChange={(event) => setName(event.target.value)} required
                    className="w-full rounded-lg border border-gray-300 p-3" 
                    placeholder="e.g. Isabgol er Bhusi"/>
            </div>
            
            <div>
                <label htmlFor="product-category" className="mb-1 block font-medium">Category</label>
                <input id="product-category" value={category}
                    onChange={(event) => setCategory(event.target.value)} required
                    className="w-full rounded-lg border border-gray-300 p-3"
                    placeholder="e.g. Health & Wellness"/>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="product-price" className="mb-1 block font-medium">Price ($)</label>
                    <input id="product-price" type="number" min="0.1" step="0.1" value={price}
                        onChange={(event) => setPrice(event.target.value)} required
                        className="w-full rounded-lg border border-gray-300 p-3"/>
                </div>
                
                <div>
                    <label htmlFor="product-stock" className="mb-1 block font-medium">Stock Quantity</label>
                    <input id="product-stock" type="number" min="0" step="1" value={stock}
                        onChange={(event) => setStock(event.target.value)} required
                        className="w-full rounded-lg border border-gray-300 p-3"/>
                </div>
            </div>
            
            <div>
                <label htmlFor="product-image" className="mb-1 block font-medium">Image URL</label>
                <input id="product-image" type="url" value={image} 
                    onChange={(event) => setImage(event.target.value)} required
                    className="w-full rounded-lg border border-gray-300 p-3"
                    placeholder="https://example.com/product.jpg"/>
            </div>
            
            <div>
                <label htmlFor="product-description" className="mb-1 block font-medium">Description</label>
                <textarea id="product-description" value={description}
                    onChange={(event) => setDescription(event.target.value)} required rows={3}
                    className="w-full rounded-lg border border-gray-300 p-3"
                    placeholder="Describe the product..."/>
            </div>
            
            <button type="submit" disabled={isSubmitting}
                className="w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60">
                    {isSubmitting ? "Adding Product..." : "Add Product"}
            </button>
        </form>
    </section>
    )
}

export default AdminProductForm