import React from 'react'
//images
import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center mt-[-40px]'> 
          <a href="#">
            <img className='h-52' src={Logo} alt="" />
          </a>
          <button className='btn btn-sm'>Benimle Çalış</button>
        </div>
      </div>
    </header>
  )
}

export default Header
