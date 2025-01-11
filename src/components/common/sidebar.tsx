'use client'
import React from 'react'
import Image from 'next/image'
import finallogo from '../../../public/assets/images/FinalLogo.png'
import quiz from '../../../public/assets/images/quiz.png'
import logout from '../../../public/assets/images/logout.png'
import { signOut } from 'next-auth/react'

export default function SideBar() {
  return (
   <>
    <div className='  w-[193px] h-[311px] flex flex-col gap-10'>
        <div className='logo'>
            <Image src={finallogo} alt='' className='w-[151px] h-[29px]' />
        </div>

        <div className='flex flex-col gap-5 items-center '>
        <div className='w-[193px] h-[49px] bg-[#4461F2] rounded-[10px] flex justify-center items-center'>
            <p className='text-white font-bold'>Dashboard</p>

        </div>
        <div className='flex flex-col gap-10'>
        <div className='flex gap-10 justify-center'>
        <Image src={quiz} alt=''/>
            <p>Quiz History</p>
           
        </div>
        <div className='flex gap-10'>
            <Image src={logout} alt=''/>
           
            <button onClick={ ()=> signOut({
                callbackUrl:'/auth/login?callbackUrl=/dashboard '
            })}>Log Out </button>
        </div>
        </div>
        </div>
     </div>

   

  

   
   
   
   </>
  )
}