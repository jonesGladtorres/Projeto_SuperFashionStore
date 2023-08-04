import { IProducts } from "../atoms/ProductsAtom"
import { api } from "./api"

export async function getAllProcucts() {
    try {
        const { data } = await api.get<IProducts[]>('/products')
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}
