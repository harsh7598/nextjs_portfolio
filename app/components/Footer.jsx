import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from "next-themes";

const Footer = () => {
    const { theme, setTheme } = useTheme();

  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={theme === "dark" ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
            <div className='w-max flex items-center justify-center gap-2 mx-auto'>
            <Image src={theme === "dark" ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5'/>
            harryht7@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Harsh Tiwari. All right reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href='https://github.com/harsh7598'className='flex items-center justify-center gap-2'><Image src={assets.github} alt='' className='w-4'/> Github</a>
                </li>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/harsh-tiwari-4859771ba/' className='flex items-center justify-center gap-2'><Image src={assets.linkdin} alt='' className='w-4' />LinkdIn</a>
                </li>
                <li>
                    <a target='_blank' href='https://x.com/heyitsharsh___'className='flex items-center justify-center gap-2'><Image src={assets.twitter} alt='' className='w-4' />Twitter</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer