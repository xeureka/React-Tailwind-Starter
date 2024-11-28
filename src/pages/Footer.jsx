import React from 'react'

const Footer = () => {
  return (
    <div className='p-6 text-black font-bold flex justify-center items-center h-[100%] text-2xl font-serif bg-emerald-200 rounded'>
      Made by Eureka @ {new Date().getFullYear()}
    </div>
  )
}

export default Footer
