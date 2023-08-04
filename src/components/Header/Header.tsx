import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from 'jotai';
import { ItensCartAtom } from "../../atoms/CartAtom";
import Modal from 'react-modal'
import { GrCart } from 'react-icons/gr';
import { CartModal } from "../CartModal/CartModal";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export function Header() {
    const navegate = useNavigate()

    const user = localStorage.getItem('@USERNAME')

    function logout(){
        localStorage.clear()
        location.reload()
        navegate('/')
    }

    const [modalIsOpen, setIsOpen] = useState(false)
    
    const cartList = useAtomValue(ItensCartAtom)

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    function isMobileScreen() {
        if (typeof window !== 'undefined') {
            return window.innerWidth < 768; // Você pode ajustar esse ponto de interrupção conforme necessário.
        }
        return false;
    }
    return(
        <header className='flex flex-col md:flex-row items-center justify-between p-4 md:p-10 px-4 md:px-52'>
            <Link to={'/'}><img src={logo} alt='logomarca escrito FashionStore' className="w-32 md:w-auto mb-3" /></Link>
            <div className='flex items-center gap-5'>
                { user ? (
                    <>
                        <h3 className='text-[12px] md:text-[30px] font-sans font-bold'>{`Olá, ${user}`}</h3>
                        <button onClick={() => logout()} className='border-black border text-[12px] md:text-[20px] px-4 py-2 md:px-5 md:py-3 hover:bg-black hover:text-white'>LOGOUT</button>
                    </>
                ) : (
                    <>
                        <Link to={'/login'} className='border-black border text-[12px] md:text-[20px]  px-4 py-2 md:px-5 md:py-3 hover:bg-black hover:text-white'>LOGIN</Link>
                        <Link to={'/register'} className='border-black border text-[12px] md:text-[20px] px-4 py-2 md:px-5 md:py-3 hover:bg-black hover:text-white'>CADASTRE-SE</Link>
                    </>
                )}
                <div className='relative cursor-pointer' onClick={() => openModal()}>
                    <p className='bg-black text-white w-[15px] flex justify-center rounded-md absolute bottom-0 left-0'>{cartList.length}</p>
                    <GrCart size={35} />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className={`ReactModal__Content--after-open ${isMobileScreen() ? "modal-mobile" : "modal-large"}`}
                contentLabel='Example Modal'
                ariaHideApp={false}
                >
                <CartModal />
            </Modal>
        </header>
    )
}