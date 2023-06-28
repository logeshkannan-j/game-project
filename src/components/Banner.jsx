import React, { useEffect } from 'react';

function Banner({gameBanner}) {
  useEffect(()=>{
    console.log("gameBanner",gameBanner)
  },[])
  
  return (
    <div className='relative '>
      <div className='absolute bottom-0 p-6 bg-gradient-to-t
      from-slate-900 to-transparent w-full'>
        <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
        <button className='bg-blue-700 text-white'>Get Now</button>
      </div>
      <img src={gameBanner.background_image} className='md:h-[320] w-full object cover
      rounded-xl' />
    </div>
  )
}

export default Banner