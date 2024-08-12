"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SignUpPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
    if (res?.status === 200) {
      e.target.reset();
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
            Sign Up
          </h6>
          <form onSubmit={handleSignUp}>
            <label htmlFor='name'>Name: </label> <br />
            <input
              type='text'
              placeholder='Your name'
              name='name'
              className='input input-bordered w-full mt-3'
            />
            <br /> <br />
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
              Sign Up
            </button>
          </form>
          <div>
            <h6 className='my-12 text-center'>or sign in with</h6>
            <div className='flex items-center justify-center space-x-3'>
              <button className='btn flex items-center justify-center text-green-600'>
                <BsGoogle />
              </button>
              <button className='btn flex items-center justify-center text-primary'>
                <BsGithub />
              </button>
            </div>
            <h6 className='my-12 text-center'>
              Already have an account?{" "}
              <Link href={"/login"} className='text-primary font-semibold'>
                Sign In
              </Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
