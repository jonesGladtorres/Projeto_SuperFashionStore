import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export function RegisterPage(){
    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div>
                <h1>register</h1>
            </div>
            <Footer />
        </div>
    )
}