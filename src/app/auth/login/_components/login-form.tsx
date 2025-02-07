
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useFormik, FormikHelpers } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import google from '../../../../../public/assets/images/Google.png'; 
import twitter from '../../../../../public/assets/images/twitter.png';
import facebook from '../../../../../public/assets/images/facebook.png';
import apple from '../../../../../public/assets/images/apple.png';

interface FormValues {
  email: string;
  password: string;
}
export  default function LoginForm(){
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true);

    try {
      const login = await signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: '/dashboard',
        redirect: false,
      });

      if (login?.ok) {
        router.push('/dashboard');
      } else {
        setApiError(login?.error || 'Login failed');
      }
    } catch (error) {
      setApiError('An unexpected error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const myForm = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="flex gap-8">
        
        <div className="container p-5  flex flex-col ">
       
          <div className="pl-52 text-xl font-bold pb-5">
            <p>Sign in</p>
          </div>

          {apiError && (
            <span className="text-red-600 text-center bg-red-300 mb-5">
              {apiError}
            </span>
          )}

          <form
            onSubmit={myForm.handleSubmit}
            className="flex flex-col items-center gap-5"
          >
            <div className="flex flex-col gap-5 items-center">
              <div>
                <input
                  onChange={myForm.handleChange}
                  value={myForm.values.email}
                  className="p-3 h-[55px] bg-[#F9F9F9] w-[410px] rounded-[7.93px] border border-[#E0E0E9]"
                  name="email"
                  placeholder="Email"
                  id="email"
                  type="email"
                />
              </div>
              <div>
                <input
                  onChange={myForm.handleChange}
                  value={myForm.values.password}
                  className="p-3 h-[55px] bg-[#F9F9F9] w-[410px] rounded-[7.93px] border border-[#E0E0E9]"
                  name="password"
                  placeholder="Password"
                  id="password"
                  type="password"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col items-end text-[#4461F2]">
                <Link href="/auth/forgotpassword">
                  <p>Recover Password?</p>
                </Link>
              </div>
              <button
                type="submit"
                className="p-5 mt-7 text-white w-[410px] h-[56px] rounded-[20px] bg-[#4461F2]"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center">
            <div className="mt-5 text-gray-400 font-bold">
              <p>Or Continue With</p>
            </div>
            <div className="icons flex justify-center gap-5 mt-5">
              <div
                onClick={async () => signIn('google', { callbackUrl: '/' })}
                className="rounded-[15.38px] bg-[#FFFFFF] w-[65px] h-[64px] flex justify-center items-center border border-[#E0E0E9] shadow-inner"
              >
                <Image src={google} alt="Google" />
              </div>
              <div className="rounded-[15.38px] bg-[#FFFFFF] w-[65px] h-[64px] flex justify-center items-center border border-[#E0E0E9] shadow-inner">
                <Image src={twitter} alt="Twitter" />
              </div>
              <div className="rounded-[15.38px] bg-[#FFFFFF] w-[65px] h-[64px] flex justify-center items-center border border-[#E0E0E9] shadow-inner">
                <Image src={facebook} alt="Facebook" />
              </div>
              <div className="rounded-[15.38px] bg-[#FFFFFF] w-[65px] h-[64px] flex justify-center items-center border border-[#E0E0E9] shadow-inner">
                <Image src={apple} alt="Apple" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};




 



