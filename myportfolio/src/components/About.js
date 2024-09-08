import React from 'react'
//contup
import CountUp from "react-countup"
//intersection observer
import { useInView } from "react-intersection-observer"
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from "../variants"
//link
import { Link, link } from "react-scroll";

const About = () => {

    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section className='section' id='about' ref={ref}>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    {/* img */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
                    {/* text */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'>
                        <h2 className='h2 text-yellow-400'>Hakkımda</h2>
                        <h3 className='h3 mb-4'>Front-end developer olma yolunda emin adımlarla ilerliyorum</h3>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur error saepe corporis totam, officiis rerum eos consequatur laborum aliquam praesentium sapiente consequuntur aut quaerat, numquam ratione incidunt facere dolorum quisquam.
                        </p>
                        {/* stats */}
                        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {
                                        inView ?
                                            <CountUp start={0} end={3} duration={3} /> :
                                            null}
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>Aylık Tecrübe</div>
                            </div>
                        </div>
                        <div className='flex gap-x-8 items-center'>
                            <Link to='contact'>
                                <button className='btn btn-lg'>İletisime Geç</button>
                            </Link>
                            <a href="#" className='text-gradient btn-link'>Portföyüm</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
