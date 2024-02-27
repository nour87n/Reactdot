import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full text-white px-4 mt-10'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Tips & tricks to optimize your flow?</h1>
                <p className='font-bold'>Sign up to our newsletter and stay up date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
               <input className='p-3 w-full rounded-md text-black' type='email' placeholder='Enter Email' />
               <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 '>Notify Me</button>
               </div>
               <p className='text-xl'>Care about the protection of your data.Read our <span className='text-[#00df9a] font-bold'>Privacy Policy</span></p>
            </div>
           
        </div>
      
    </div>
  )
}

export default NewsLetter
