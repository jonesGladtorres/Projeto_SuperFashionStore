import { atom } from "jotai";
import { IProducts } from "./ProductsAtom";

export const ItensCartAtom = atom<IProducts[]>([])