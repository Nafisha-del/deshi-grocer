import { products,type Product, } from "../data/products"

export const getProducts = async (): Promise<Product[]> => {
  return products
}