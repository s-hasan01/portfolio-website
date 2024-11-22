import aboutImg from "../assets/about.jpg"
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className='my-20 text-center text-4xl'>
                About Me
            </motion.h2>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={aboutImg}/>
                    </motion.div>
                </div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            Hi, my name is Sajjad Hassan, nice to meet you. I am a Computer Science and Mathematics Double-Major graduated from the University of Toronto with an Honours Bachelor of Science (HBSc.). Currently, I am working as an
                            <span className='font-bold text-fuchsia-700'> IT Analyst </span> at Bell Canada.
                            Previously, I was a
                            <span className='font-bold text-fuchsia-700'> Full-Stack Developer</span> at InnScience Labs Inc.
                        </p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl'>
                            I’m passionate about developing robust, scalable applications and solving complex problems
                            with my code. Some of my most experienced tech stack includes
                            <span className='font-bold text-fuchsia-700'> Python, React, Node.js, .NET Core, Java, MongoDB
                                and PostgreSQL
                            </span>
                            , which I leverage to build efficient, and high-quality applications. Whether it’s
                            through professional projects or self-learning, I’m always exploring new technologies to
                            broaden my expertise.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About