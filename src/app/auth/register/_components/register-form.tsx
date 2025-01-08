'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import google from '../../../../../public/assets/images/Google.png';
import twitter from '../../../../../public/assets/images/twitter.png';
import facebook from '../../../../../public/assets/images/facebook.png';
import apple from '../../../../../public/assets/images/apple.png';
import { registerAction } from '../../../../lib/actions/auth.action'; 
import Navbar from '@/components/common/navbar';
import SidePhoto from '@/components/common/sidephoto';

interface RegisterFields {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export default function RegisterPage() {
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (formValues: RegisterFields) => {
    try {
      setApiError(null);
      const response = await registerAction(formValues);
      console.log(response)

      if (response.message === 'success') {
        router.push('/auth/login');
      } else {
        setApiError(response.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setApiError((error as Error).message || 'An unexpected error occurred.');
    }
  };

  const formik = useFormik<RegisterFields>({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    onSubmit: handleRegister,
  });

  return (
    <div className="flex gap-8">
        {/* <SidePhoto/> */}
      <div className="container p-5 flex flex-col ">
      {/* <Navbar/> */}
        <div className="pl-52 text-xl font-bold pb-5">
          <p>Sign Up</p>
        </div>
        {apiError && (
          <span className="text-red-600 text-center bg-red-300 mb-5">{apiError}</span>
        )}
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-5">
               <div>
                <input value={formik.values.username} onChange={formik.handleChange} className='p-3 h-[55px] bg-[#F9F9F9]  w-[410px] rounded-[7.93px] focus:border-red-600 border border-[#E0E0E9]  ' name='username' placeholder='user Name' id='username' type='name'/>
            </div>
            <div>
                <input value={formik.values.firstName} onChange={formik.handleChange} className='p-3 h-[55px] bg-[#F9F9F9]  w-[410px] rounded-[7.93px] focus:border-red-600 border border-[#E0E0E9]  ' name='firstName' placeholder='First Name' id='firstname' type='name'/>
            </div>
          <div>
                <input value={formik.values.lastName} onChange={formik.handleChange} className='p-3 h-[55px] bg-[#F9F9F9] w-[410px] rounded-[7.93px]  border border-[#E0E0E9] ' name='lastName' placeholder='Last Name' id='lastname' type='name'/>
            </div>
            <div>
                <input value={formik.values.email} onChange={formik.handleChange} className='p-3 h-[55px] bg-[#F9F9F9] w-[410px] rounded-[7.93px]  border border-[#E0E0E9] ' name='email' placeholder='Email' id='email' type='email'/>
            </div>
            <div>
                <input value={formik.values.password} onChange={formik.handleChange} className='p-3 h-[55px] bg-[#F9F9F9] w-[410px] rounded-[7.93px]  border border-[#E0E0E9] ' name='password' placeholder='Password' id='password' type='password'/>
            </div>
            <div>
                <input value={formik.values.rePassword} onChange={formik.handleChange} className='p-3 h-[55px] bg-[#F9F9F9] w-[410px] rounded-[7.93px]  border border-[#E0E0E9] ' name='rePassword' placeholder='Confirm Password' id='repassword' type='password'/>
            </div>
            <div>
                <input value={formik.values.phone} onChange={formik.handleChange} className='p-3 h-[55px] bg-[#F9F9F9]  w-[410px] rounded-[7.93px] focus:border-red-600 border border-[#E0E0E9]  ' name='phone' placeholder='Phone' id='phone' type='tel'/>
            </div>
          <div className="flex">
            <p>Already have an account?</p>
            <span className="text-[#4461F2] cursor-pointer ml-1" onClick={() => router.push('/login')}>
              Login
            </span>
          </div>
          <button
            type="submit"
            className="p-5 text-white w-[410px] h-[56px] rounded-[20px] bg-[#4461F2]"
          >
            Create Account
          </button>
        </form>
        <div className="flex flex-col items-center">
          <div className="mt-5 text-gray-400 font-bold">
            <p>Or Continue With</p>
          </div>
          <div className="icons flex justify-center gap-5 mt-5">
            {[google, twitter, facebook, apple].map((icon, index) => (
              <div
                key={index}
                className="rounded-[15.38px] bg-[#FFFFFF] w-[65px] h-[64px] flex justify-center items-center border border-[#E0E0E9] shadow-inner"
              >
                <Image src={icon} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
