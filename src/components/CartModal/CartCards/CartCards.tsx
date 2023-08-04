import { ItensCartAtom } from "../../../atoms/CartAtom"
import { IProducts } from "../../../atoms/ProductsAtom"
import { useAtom } from 'jotai'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface IProductProps{
    product: IProducts
}

export function CartCards({product}: IProductProps) {

    const [cartList, setCartList] = useAtom(ItensCartAtom)

    function deleteItemCart(itemId: string){
        const newList = cartList.filter((product) => product.id != itemId)
        setCartList(newList)
    }

    return(
        <li className='flex items-center'>
            <div className='flex items-center gap-4'>
                <img src={product.image} alt={`Uma imagem de um ${product.name}`}  className='w-[20%]'/>
                <div className='flex flex-col gap-4'>
                    <h3 className="text-xl font-bold font-sans">{product.name}</h3>
                    <span className="text-lg font-medium">{`R$ ${product.price.toFixed(2)}`}</span>
                </div>
            </div>
            <RiDeleteBin6Line onClick={() => deleteItemCart(product.id)} size={25} cursor={'pointer'}/>
        </li>
    )
}