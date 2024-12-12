import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex w-full h-20 justify-between  bg-purple-600 py-8'>
        <div className='logo'>
            <span className='font-bold text-white px-7 text-4xl hover:text-red-500 '>Task.</span>
        </div>
        <ul className='flex gap-5 px-6'>
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar