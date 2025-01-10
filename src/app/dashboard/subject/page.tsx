'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Subjects() {
    
  const [subjects, setSubjects] = useState();
  async function getSubjects () {
      const res =  await fetch('http://localhost:3000/api/subjects');
      const data = await res.json();
      console.log(data)
      setSubjects(data.subjects);
      console.log("The Data Is From Fetch: ", data)   
  }
   
  useEffect(() => {

    getSubjects();

    console.log("The Data Is: ", subjects)

  }, [])

  return (
    <>
      <div className='w-[1063px] h-[734.01px] shadow-lg p-5 '>

        <h1 className='text-[#4461F2] text-xl font-bold'>Quizes</h1>

        <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-1 '>

        {subjects?.map((subject,index) => {
        
        return( 
          <div key={index} className=' relative  mt-5 '>
            
            <Link href={`/dashboard/exam/${subject?._id}`}>
            
            <Image src={subject?.icon} alt={subject?.name} width={330} height={200} className='rounded-lg '/>

            <div className="absolute inset-0 flex items-end  mb-5 justify-center">

              <div className="bg-[#1935CA66] w-3/4 h-12 rounded-lg text-white  drop-shadow-lg font-bold flex items-center justify-center opacity-90 blur-[27.01]">
                  {subject?.name}
              </div>

              </div> 

            </Link>  
          </div>
        )
        })} 
        </div>
        
      </div>
    </>
  )}
