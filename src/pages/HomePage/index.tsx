import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export function HomePage(){
    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div>
                <h1>homepage</h1>
            </div>
            <Footer />
        </div>
    )
}