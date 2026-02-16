import React from 'react'

const Hero = () => {
  return (
    <div className='h-[500px] justify-center items-center w-full   flex flex-col z-30 gap-5 text-white leading-none'>
        <div className='font-medium'>ABOUT US</div>
        <div className='text-soft-lavender text-[40px] md:text-[100px] uppercase font-medium oswald'>showing up for</div>
        <div className='text-neon-yellow font-medium text-nowrap  uppercase text-[60px] md:text-[120px] special-gothic-one-regular'>20 years</div>
    </div>
  )
}

export default Hero