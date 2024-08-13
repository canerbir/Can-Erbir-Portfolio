import React from 'react'
//images
import Image from "../assets/avatar.png"
//icons
import { FaGithub, FaYoutube, } from "react-icons/fa"
//type animation
import { TypeAnimation } from "react-type-animation"
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from "../variants"
//link
import { Link, link } from "react-scroll";


const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              İbrahim Can <span>ERBIR</span>
            </motion.h1>
            <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <TypeAnimation sequence={[
                "HTML",
                2000,
                "CSS",
                2000,
                "Bootstrap",
                2000,
                "Tailwindcss",
                2000,
                "Java Script",
                2000,
                "React",
                2000,
                "Typescript",
                2000,
              ]}
                speed={50}
                className='text-yellow-400'
                wrapper='span'
                repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum tenetur facere porro, odit expedita minus veniam nostrum quae mollitia facilis odio corporis aliquam fugit sint incidunt qui quidem ipsum! Unde?</motion.p>
            <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to="contact">   
              <button className='btn btn-lg'>Benimle iletişime geç</button>
              </Link>
              
              <a href="#" className='text-gradient btn-link'>Portföy</a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0'>
              <a href="https://www.youtube.com/@CanErbirYT">
                <FaYoutube />
              </a>
              <a href="https://github.com/canerbir">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView={"show"} className='hidden lg:flex flex-1 max-w-[480px] lg:max-w-[640px] mx-auto'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
