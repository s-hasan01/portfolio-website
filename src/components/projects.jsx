import {PROJECTS} from "../constants/index.js";
import { motion} from "framer-motion";
import {HiArrowRight} from "react-icons/hi";

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className='my-20 text-center text-4xl'>
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
                        <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1.5}}
                            className='w-full lg:w-1/4'>
                            <img className='mb-6 rounded' width={150} src={project.image} height={150} alt={project.title}/>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 1.5}}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {project.title}
                            </h6>
                            <p className='mb-4 text-neutral-500'>
                                {project.description}
                            </p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-cyan-950 px-2 py-1 text-sm font-medium
                                text-white'>
                                    {tech}
                                </span>

                            ))}
                            <div>
                                <a href={project.link} target='_blank'>
                                    <button className='bg-cyan-950 text-white hover:bg-neutral-700 hover:border-neutral-700
                                    duration-300 px-2 py-2 rounded my-8 mx-auto'>
                                        Check it out
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects