import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export function HeaderAdm(){
    return(
        <header className="p-4 md:p-10 px-4 md:px-52 flex justify-center items-center">
            <Link to={'/'}>
                <img src={logo} alt="Logotipo com o nome FASHIONSTORE" width={200} height={50} />
            </Link>
        </header>
    )
}