import React from 'react'

const NavBar = () => {
    function scrollTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  
  return (
    <div className='font-mono fixed w-full backdrop-blur-lg border-b border-gray-200/30 p-6 text-black font-bold text-3xl'>
        <p onClick = {scrollTop} className='hover:cursor-pointer font-bold text-5xl text-start font-mono text-white flex justify-center flex-col'>
             Logo
        </p>
      <ul className='flex justify-center  gap-16 text-2xl min-h-full'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default NavBar
