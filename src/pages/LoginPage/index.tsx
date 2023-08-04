import homeIMG from "../../assets/homeIMG.png"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer/Footer";
import { HeaderAdm } from "../../components/HeaderAdm/HeaderAdm";




const loginUserSchema = z.object({
    email: z.string().email('Digite um formato de email válido.').nonempty('O E-mail é obrigatório.'),
    password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres.').nonempty('A senha é obrigatória.')
        .regex(/[A-Za-z\d@#$%^&+=]{6,}/, { message: 'A senha deve conter letras, números e ao menos um caractere especial.' })
})

type TLoginUser = z.infer<typeof loginUserSchema>


export function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginUser>({
        resolver: zodResolver(loginUserSchema)
    })

    const navegate = useNavigate()

    async function submit(formData: TLoginUser) {
        try {
            const { data } = await api.post('/login', formData)
            localStorage.setItem('@ITOKEN', data.accessToken)
            localStorage.setItem('@USERID', data.user.id)
            localStorage.setItem('@USERNAME', data.user.name)
            if(data.user.id === 1){
                navegate('/admin')
            }else{
                navegate('/')
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="overflow-y-auto">
            <HeaderAdm />
            <div className="flex flex-col md:flex-row px-4 md:px-52 gap-6 h-[70vh] items-center">
                <img src={homeIMG} alt="três mulheres sorridentes" className="w-full md:w-60% md:max-w-[60%]" height={300} width={500}
                />
                <form onSubmit={handleSubmit(submit)} className="flex flex-col items-start w-full md:w-1/2 justify-center gap-5">
                    <h1 className="font-sans text-[40px] font-bold">ENTRAR</h1>
                    <input type="text" placeholder="E-MAIL" className="bg-grey w-full h-[70px] p-5 outline-none" {...register('email')} />
                    <p>{errors.email?.message}</p>
                    <input type="text" placeholder="SENHA" className="bg-grey w-full h-[70px] p-5 outline-none" {...register('password')} />
                    <p>{errors.password?.message}</p>
                    <div className="flex gap-5">
                        <button type="submit" className="border-black border px-5 py-3 hover:bg-black font-medium hover:text-white text-[12px] md:text-[18px]">ACESSAR</button>
                        <Link to={'/register'} className="flex items-center border-black font-medium border px-5 py3 hover:bg-black hover:text-white text-[12px] md:text-[18px]">CADASTRE-SE</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </main>
    )
}