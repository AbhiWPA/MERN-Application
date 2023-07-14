import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-20 fixed bg-emerald-600 shadow-xl shadow-black rounded-b-lg grid grid-cols-1'>
        <h1 className='text-start mt-2 h-max text-red-700 text-3xl pl-8 font-bold'>SG - Stores</h1>
        
        <div className='flex'>
            <p className='text-sm font-bold pl-7 mb-2'>Vegetables & Fruits Shop</p>
        </div>

        <div className='absolute ml-9 end-4 mt-6 mr-12'>
            <ul className='list-none flex flex-row-reverse space-x-20 space-x-reverse'>
                <li className='font-bold text-white font-serif text-xl'><a href="#contact">Contact</a></li>
                <li className='font-bold text-white font-serif text-xl'><a href="#services">Shop Items</a></li>
                <li className='font-bold text-white font-serif text-xl'><a href="#about">About</a></li>
                <li className='font-bold text-white font-serif text-xl'><a href="#home">Home</a></li>
            </ul>
        </div> 
    </div>
  )
}

export default NavBar;