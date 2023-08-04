import { Link, useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { z } from "zod";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import registerIMG from '../../assets/registerIMG.png'

const registerUserSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório.').min(3, 'O nome deve conter no minimo 3 caracteres.'),
    email: z.string().email('Digite um email válido.'),
    password: z.string().nonempty('A senha é obrigatória.').regex(/[A-Za-z\d@#$%^&+=]{6,}/, { message: 'A senha deve conter letras, números e ao menos um caractere especial.' }),
    confirm: z.string().nonempty('É necessário confirmar a senha.'),
}).refine(({ password, confirm }) => password === confirm, {
    message: 'As senhas não correspondem.',
    path: ['confirm'],
})

type TRegisterUser = z.infer<typeof registerUserSchema>

export function RegisterPage(){

    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterUser>({
        resolver: zodResolver(registerUserSchema)
    })

    const navigate = useNavigate()

    async function submit(formData: TRegisterUser) {
        try {
            const { data } = await api.post('/users', formData)
            navigate('/login')
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="flex flex-col md:flex-row px-4 md:px-52 gap-6 h-[70vh] items-center">
                <div className="w-full md:w-1/2 h-full md:h-auto">
                    <img
                        src={registerIMG}
                        alt="três mulheres sorridentes"
                        className="w-500 h-300 object-contain"
                    />
                </div>
                <form
                    onSubmit={handleSubmit(submit)}
                    className="flex flex-col items-start w-full md:w-1/2 justify-center gap-1 md:gap-5">
                    <Link to={'/'} className="flex items-center gap-1 font-sans font-bold">
                        <HiOutlineArrowNarrowLeft />
                        VOLTAR
                    </Link>
                    <h1 className="font-sans text-4xl font-bold">CADASTRE-SE</h1>
                    <input type="text" placeholder="NOME" className="bg-grey w-full h-12 p-3 outline-none" {...register('name')} />
                    <p>{errors.name?.message}</p>
                    <input type="text" placeholder="E-MAIL" className="bg-grey w-full h-12 p-3 outline-none" {...register('email')} />
                    <p>{errors.email?.message}</p>
                    <input type="password" placeholder="SENHA" className="bg-grey w-full h-12 p-3 outline-none" {...register('password')} />
                    <p>{errors.password?.message}</p>
                    <input type="password" placeholder="CONFIRMAR SENHA" className="bg-grey w-full h-12 p-3 outline-none" {...register('confirm')} />
                    <p>{errors.confirm?.message}</p>
                    <div className="flex gap-5 justify-end">
                        <button className="border border-black text-[10px] md:text-[18px] px-5 py-3 hover:bg-black hover:text-white" type="submit">CADASTRAR</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}