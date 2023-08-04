import { atom } from "jotai";

export interface IProducts{
    id: string,
    name: string,
    price: number,
    description: string,
    image: string,
}

export const ProductsAtom = atom<IProducts[]>([])