import profilePic from "../assets/edited.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    },
});

const Main = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='mt-10 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Sajjad Hassan
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl
                         tracking-tight text-transparent selection:text-white'>
                            Software Developer. Sales Development.
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className='my-2 max-w-xl py-6 font-light'>
                            Welcome to my portfolio website! This space showcases my journey as a developer, featuring
                            the projects I’ve worked on, my work experience and also the skills I have attained working as a developer.

                            <div className='py-6'>Built with
                            <span className='font-bold text-fuchsia-700'> React, Node.js, HTML, CSS, and Tailwind
                            </span>
                            , this site is a reflection of my passion for creating clean, efficient, and user-friendly
                                applications. My Resume and Socials are also accessible on the very top right!</div>
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                    <motion.img
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.2}}
                            className='rounded-3xl' src={profilePic} alt='profilePic' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main