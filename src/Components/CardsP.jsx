import React from 'react'
import single from '../assets/single.png'
import triple from '../assets/triple.png'
import double from '../assets/double.png'

const CardsP = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={single} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8 '>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 font-bold mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 font-bold'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 font-bold'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'><h1 className='font-bold'>Start Trial</h1> </button>
            </div>
           {/* second card*/}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={double} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8 '>Double User</h2>
                <p className='text-center text-4xl font-bold'>$200</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 font-bold mt-8'>1 TR Storage</p>
                    <p className='py-2 border-b mx-8 font-bold'>5 Granted User</p>
                    <p className='py-2 border-b mx-8 font-bold'>Send up to 10 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'><h1 className='font-bold'>Start Trial</h1> </button>
            </div>
            {/* third card*/}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={triple} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8 '>Triple User</h2>
                <p className='text-center text-4xl font-bold'>$250</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 font-bold mt-8'>2 TR Storage</p>
                    <p className='py-2 border-b mx-8 font-bold'>Unlimited User</p>
                    <p className='py-2 border-b mx-8 font-bold'>Send up to 20 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'><h1 className='font-bold'>Start Trial</h1> </button>
            </div>
           
        </div>
    </div>
  )
}

export default CardsP
