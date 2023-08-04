import { BsLinkedin, BsGithub } from 'react-icons/bs'

export function Footer() {
    return (
        <footer className='bg-black px-6 py-6 md:py-8 lg:py-12 flex flex-col md:flex-row justify-between items-center mt-4 md:mt-8 w-full'>
            <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className='text-white text-lg'>Contate-me:</h3>
                <p className='text-white'>jonestorresadv@icloud.com</p>
                <a href='https://wa.me/5583998852432?text=Oi%2C+gostei+do+seu+projeto+Super+Fashion+Store' target='_blank' className='text-white'>(83)99885-2432</a>
            </div>
            <h2 className='text-white mb-4 md:mb-0'>Todos os direitos reservados - Jones Torres</h2>
            <div className='flex gap-5'>
                <a href="https://github.com/jonesGladtorres" target='_blank'><BsGithub fill='white' size={40} /></a>
                <a href="https://www.linkedin.com/in/jonestorres/" target='_blank'><BsLinkedin fill='white' size={40} /></a>
            </div>
        </footer>
    )
}