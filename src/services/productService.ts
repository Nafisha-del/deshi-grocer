// import { products,type Product, } from "../data/products"
import type { Product } from "../data/products"

const API_URL = "http://localhost:5000/api";

// export const getProducts = async (): Promise<Product[]> => {
//   return products
// }

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}