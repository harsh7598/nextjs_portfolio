import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div className='sm:mt-24 md:mt-16'>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Harsh Tiwari <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend web developer based in India.
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>I am a frontend developer and freelancer from Mumbai, Maharashtra, with two years of experience working across multiple companies. I have worked on diverse projects, building responsive and scalable web applications while delivering seamless user experiences.</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
            <a href='/assets/Harsh_Tiwari (Software Engineer) .pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume  <Image src={assets.download_icon} alt='' className='w-4' /></a>
        </div>
    </div>
  )
}

export default Header