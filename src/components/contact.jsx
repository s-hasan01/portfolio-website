import { motion} from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className='my-20 text-center text-4xl'>
                Contact
            </motion.h2>
            <div className='w-full flex justify-center items-center p-4'>
                <form method='POST' action='https://getform.io/f/adrrynya' className='flex flex-col max-w-xl w-full'>
                    <motion.input
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1.5}}
                        className='bg-neutral-800 p-2 rounded' type='text' placeholder=' Name' name='name'/>
                    <motion.input
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1.5}}
                        className='my-4 bg-neutral-800 p-2 rounded' type='email' placeholder=' Email' name='email'/>
                    <motion.textarea
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1.5}}
                        className='bg-neutral-800 p-2 rounded' placeholder=' Message' name='message' rows='10'></motion.textarea>
                    <motion.button
                        whileInView={{opacity: 1}}
                        initial={{opacity: 0}}
                        transition={{duration: 2.9}}
                        className='text-white group border-2 px-4 py-2 my-8 hover:bg-neutral-700 flex hover:border-neutral-700
                        duration-300 mx-auto items-center rounded'>
                        Lets Connect
                        <span className='ml-2 my-1 group-hover:translate-x-1 duration-150'>
                            <HiArrowRight />
                        </span>
                    </motion.button>
                </form>
            </div>
        </div>
    )
}

export default Contact