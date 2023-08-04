import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import homeIMG from '../../assets/homeIMG.png'
// import { ProductsList } from "../../components/ProductsList/ProductsList"


export function HomePage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="px-4 md:px-8 lg:px-16 xl:px-32">
                <div className="md:flex md:gap-8 font-bold">
                    <img src={homeIMG} alt="três mulheres sorridentes" className="w-full md:w-1/2" />
                    <div className="flex flex-col justify-around md:w-1/2 md:ml-8">
                        <h1 className="text-4xl md:text-8xl leading-tight md:leading-[120px]">SUPER FASHION STORE</h1>
                        <a href="#list" className="bg-black text-white flex items-center justify-center p-4 mt-4 w-full md:w-[50%] transition-all">CONFIRA AS OFERTAS</a>
                    </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-sans leading-normal mt-8 mb-4">PRODUTOS EM DESTAQUES</h2>
                {/* <ProductsList /> */}
            </main>
            <Footer />
        </div>
    )
}