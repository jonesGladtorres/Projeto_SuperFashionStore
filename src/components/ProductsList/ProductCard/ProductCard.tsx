import { ItensCartAtom } from "../../../atoms/CartAtom";
import { useAtom } from "jotai";
import { IProducts } from "../../../atoms/ProductsAtom";
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom";

interface IProductCardProps{
    product: IProducts
}

export function ProductCard({product}: IProductCardProps){

    const [cartList, setCartList] = useAtom(ItensCartAtom) 

    function addInCart(){
        setCartList([...cartList, product])
        // toast(`${product.name} adicionado ao carrinho!`)
    }

    return(
        <li className="flex flex-col gap-4 items-start w-[280px] md:w-[320px] lg:w-[360px] mb-[4rem]">
            <img src={product.image} alt={`Uma imagem de um ${product.name}`} className="w-full"/>
            <h3 className="text-xl font-bold font-sans">{product.name}</h3>
            <span className="text-lg font-medium">{`R$ ${product.price.toFixed(2)}`}</span>
            <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-black flex items-center justify-center"><MdOutlineAddShoppingCart fill="white" size={20} onClick={() => addInCart()}/></button>
                <Link className="text-lg font-bold font-sans" to={`/products/${product.id}`}>Saiba mais</Link>
            </div>
        </li>
    )
}