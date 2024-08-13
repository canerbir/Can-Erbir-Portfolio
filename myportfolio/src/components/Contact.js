import React from 'react'
//motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center mb-4'>
            <div>
              <h4 className='text-xl uppercase text-yellow-400 font-medium mb-2 tracking-wide'>iletisime Gecin</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none'>Hadi <br /> birlikte <br /> calısalım!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Adınız' />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Email' />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Mesajınız'></textarea>
            <button className='btn btn-lg'>Gönder</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
