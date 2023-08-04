import { ItensCartAtom } from "../../atoms/CartAtom";
import { useAtomValue } from "jotai"
import { CartCards } from "./CartCards/CartCards";

export function CartModal(){
    
    const cartList = useAtomValue(ItensCartAtom);

    function totalValue() {
        return cartList.reduce((total, product) => total + product.price, 0);
      }


    return (
        <div className="w-full md:w-[400px] bg-white p-4 rounded-lg h-[520px] flex flex-col justify-between shadow-lg outline-none">
            <div>
                <h3 className="font-sans text-[30px] font-bold">CARRINHO</h3>
                <ul className="flex gap-5 flex-col mt-4 h-[75%] overflow-auto">
                    {cartList.map((product) => (
                        <CartCards key={product.id} product={product} />
                    ))}
                </ul>
            </div>
            <div className="flex justify-between items-center md:mt-0">
                <span className="font-sans">TOTAL: <span className="font-sans font-bold">{`R$ ${totalValue().toFixed(2)}`}</span></span>
                <button className="bg-black text-white flex items-center justify-center h-[50px] py-2 px-6 gap-3">COMPRAR</button>
            </div>
        </div>
    )
}