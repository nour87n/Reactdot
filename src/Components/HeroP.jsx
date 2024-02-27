import React from 'react'
import { ReactTyped } from "react-typed";


const HeroP = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[20rem] w-full h-screen mx-auto text-center flex flex-col'>
            <p className='text-[#00df9a] text-xl  font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for </p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-3' strings={[' BTB' ,'BTC' ,'SASS']} typeSpeed={140} loop/>
            </div>
            <p className=' md:text-2xl text-xl font-bold text-gray-500 py-4'>Monitor your data analytics to increase for BTB, BTC & SASS platforms.</p>
            <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black '><h1 className='text-2xl font-bold'>Get started</h1></button>
        </div>
      
    </div>
  )
}

export default HeroP
