import React from 'react'
import laptop from '../assets/laptop.jpg'

const AnalyticsP = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt='/'/>
        <div  className='flex flex-col justify-center  '>
          <p className=' text-[#00df9a] font-bold text-2xl'>DATA ANALYTICS DASHBORD</p>
          <h1 className='md:text-5xl sm:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p className='font-bold my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo deleniti laboriosam laborum reprehenderit odit deserunt. Doloremque eaque facere voluptatibus vero obcaecati saepe. Odio, nostrum esse. Placeat sit soluta nulla!</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-5 mx-auto px-6 md:mx-0 py-3 text-[#00df9a] '><h1 className='text-2xl font-bold'>Get Started</h1></button>
        </div>

      </div>
    </div>
  )
}

export default AnalyticsP
