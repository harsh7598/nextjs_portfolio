import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Harsh Tiwari <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend web developer based in India.
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>I am a frontend developer and freelancer from Mumbai, Maharashtra, with two years of experience working across multiple companies. I have worked on diverse projects, building responsive and scalable web applications while delivering seamless user experiences.</p>
        <div>
            <a href='#contact'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
            <a href='#contact'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
        </div>
    </div>
  )
}

export default Header