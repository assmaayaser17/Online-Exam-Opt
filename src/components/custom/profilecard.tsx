import React from 'react'
import Image from 'next/image'
import pcard from '../../../public/assets/images/pcard.png'; 
import flag from '../../../public/assets/images/flag.png'; 
import alarm from '../../../public/assets/images/alarm.png'; 
import check from '../../../public/assets/images/check.png'; 

export default function ProfileCard() {
  return (
    <div className="  bg-white  rounded-lg shadow p-6 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  gap-8 ">
    <Image
      src={pcard}
      alt="Profile"
      className="w-[216px] h-[216px]  object-cover"
    />
    <div className="flex flex-col  gap-8">
      <div className='flex flex-col gap-2'>
      <h2 className="text-3xl font-bold text-[#4461F2]  ">Ahmed Mohamed</h2>
      <p className="text-[#979CA3] text-xl ">Voluptatem aut</p>

      </div>
      
      <div className=" bg-gray-200 rounded-full h-2.5 w-[619px] ">
    <div
      className="bg-blue-500 h-2.5 rounded-full"
      style={{ width: "60%" }} 
    ></div>
  </div>
     <div className='icons flex gap-16'>
      <div className='flex gap-5'>
      <div className='w-[70px] h-[70px] rounded-[10px] shadow flex justify-center items-center'>
          <Image
          src={flag}
          alt='flag'
          />
      </div>

      <div className='flex flex-col gap-4'>
          <p className='font-bold text-2xl text-[#696F79]'>27</p>
          <p className='text-[#696F79]'>Quiz Passed</p>
      </div>

      </div>
      <div className='flex gap-5'>
      <div className='w-[70px] h-[70px] rounded-[10px] shadow flex justify-center items-center'>
          <Image
          src={alarm}
          alt='alarm'
          />
      </div>

      <div className='flex flex-col gap-4'>
          <p className='font-bold text-2xl text-[#696F79]'>13 min</p>
          <p className='text-[#696F79]'>Fastest Time</p>
      </div>

      </div>
      <div className='flex gap-5'>
      <div className='w-[70px] h-[70px] rounded-[10px] shadow flex justify-center items-center'>
          <Image
          src={check}
          alt='check'
          />
      </div>

      <div className='flex flex-col gap-4'>
          <p className='font-bold text-2xl text-[#696F79]'>200</p>
          <p className='text-[#696F79]'>Correct Answers</p>
      </div>

      </div>
      
      



     </div>
    </div>
  </div> 
  )
}
