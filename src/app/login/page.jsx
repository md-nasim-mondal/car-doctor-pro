"use client";
import SocialSignIn from "@/components/shared/SocialSignIn";
import {signIn} from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    if (res.status === 200) {
      router.push('/')
    }
  };

  return (
    <div className='container mx-auto p-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
        <div>
          <Image
            src={"/assets/images/login/login.svg"}
            alt='login-Svg'
            height={540}
            width={540}
            className=''
          />
        </div>
        <div className='border-2 p-12 '>
          <h6 className='text-3xl font-semibold text-primary text-center'>
            Sign In
          </h6>
          <form onSubmit={handleLogin}>
            <label htmlFor='email'>Email: </label> <br />
            <input
              type='text'
              placeholder='Your Email'
              name='email'
              className='input input-bordered w-full mt-3'
            />
            <br /> <br />
            <label htmlFor='password'>Password: </label> <br />
            <input
              type='password'
              placeholder='Your password'
              name='password'
              className='input input-bordered w-full mt-3'
            />
            <br />
            <button type='submit' className='btn btn-primary w-full mt-8'>
              Sign In
            </button>
          </form>
          <div>
            <h6 className='my-12 text-center'>or sign in with</h6>
            <SocialSignIn/>
            <h6 className='my-12 text-center'>
              Not have an account?{" "}
              <Link href={"/signup"} className='text-primary font-semibold'>
                Sign Up
              </Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
