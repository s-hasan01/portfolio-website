import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { IoDocumentText } from "react-icons/io5";


const Navbar = () => {
    return <nav className='mb-20 flex items-center justify-between pt-4'>
        <div className='flex flex-shrink-0 items-center'>
            <h2 className='text-4xl font hover:scale-110 duration-300'>&lt;SH&gt;</h2>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a className='hover:scale-110 duration-300' href='https://www.linkedin.com/in/sajjad-hasan1/'
               target='_blank'>
                <FaLinkedin/>
            </a>
            <a className='hover:scale-110 duration-300' href='https://github.com/s-hasan01' target='_blank'>
                <FaGithub/>
            </a>
            <a className='hover:scale-110 duration-300'
               href='https://drive.google.com/file/d/1eEo90JoS7ySGTeJW_tmkOipFpmbu3MC0/view' target='_blank'>
                <IoDocumentText/>
            </a>
        </div>
    </nav>

};

export default Navbar;