import React from 'react'
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from '../variants'
//icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";


const Skills = () => {
    return (
        <section className='section' id='skills'>
            {/* progress bar */}
            <div className='container mx-auto'>
                <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex items-center justify-center'>
                    <h2 className='h2 text-yellow-400 mb-10 lg:mb-20'>Skills</h2>
                </motion.div>
                {/* html */}
                <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='mb-10 lg:mb-20'>
                    <div className='flex items-center justify-between  text-orange-600'>
                        <h3 className='h3 flex-1'>HTML</h3>
                        <FaHtml5 className='text-3xl' />
                    </div>
                    <div className="w-ful mix-blend-lighten rounded-full h-3 lg:h-5 dark:bg-gray-700">
                        <div className="bg-yellow-600 h-3 lg:h-5 rounded-full w-[90%]"></div>
                    </div>
                </motion.div>
                {/* css */}
                <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='mb-10 lg:mb-20'>
                    <div className='flex items-center justify-between  text-blue-700'>
                        <h3 className='h3 flex-1'>CSS</h3>
                        <FaCss3Alt className='text-3xl' />
                    </div>
                    <div className="w-ful mix-blend-lighten rounded-full h-3 lg:h-5 dark:bg-gray-700">
                        <div className="bg-blue-700 h-3 lg:h-5 rounded-full w-[70%]"></div>
                    </div>
                </motion.div>
                {/* javascript */}
                <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='mb-10 lg:mb-20'>
                    <div className='flex items-center justify-between  text-yellow-400'>
                        <h3 className='h3 flex-1'>JAVASCRIPT</h3>
                        <SiJavascript className='text-3xl' />
                    </div>
                    <div className="w-ful mix-blend-lighten rounded-full h-3 lg:h-5 dark:bg-gray-700">
                        <div className="bg-yellow-400 h-3 lg:h-5 rounded-full w-[40%]"></div>
                    </div>
                </motion.div>
                {/* react */}
                <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='mb-10 lg:mb-20'>
                    <div className='flex items-center justify-between  text-blue-400'>
                        <h3 className='h3 flex-1'>REACT</h3>
                        <FaReact className='text-3xl' />
                    </div>
                    <div className="w-ful mix-blend-lighten rounded-full h-3 lg:h-5 dark:bg-gray-700">
                        <div className="bg-blue-400 h-3 lg:h-5 rounded-full w-[50%]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
