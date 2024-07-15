import { endpoints } from "../../lib/endpoints";

export async function getProductsCategory(){
    const res =await fetch(`http://localhost:8000/${endpoints.PRODUCTS_CATEGORIES}`)
    return res
}