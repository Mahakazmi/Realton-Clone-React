import React from 'react'
import { useState } from "react"
import OAuth from '../components/OAuth';

export default function ForgotPassword() {
  // creating hook
  
  const [email, setEmail] = useState("");

  function onChange(e) {
   setEmail(e.target.value) }
  return (
    <div>
      <section>
        <h1 className='text-3xl my-3 text-center text-semibold'>Forgot Password</h1>
      </section>
      <div className='flex justify-center flex-wrap items-center px-6 py-12'>
        <div className='mx-10 md:w-[67%] lg:w-[50%] mb-12'>
          <img src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=" alt="signIn" className='rounded-xl w-full' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-15 sm:top-12'>
          <form action="">
            <input className='w-full border-2 border-gray-500 px-2 py-2 bg-white text-xl rounded' type="email" placeholder='Email Address' name="" id="email" value={email} onChange={onChange} />
            <div className='flex justify-between'>
              <p className='text-semibold my-2'>Don't have an account? <a className='text-red-500' href="/sign-up">Register</a></p>
              <p><a className='text-blue-500' href="/sign-in">Sign in instead</a></p>
            </div>
            <button type='submit' className='w-full bg-blue-500 px-10 py-3 my-5 text-sm font-semibold 
          uppercase text-white shadow-amber-100 hover:bg-blue-900'>Reset Password</button>
          { /* OR and lines */ }
          <div className="flex items-center my-2
          before:border-t before:border-gray-400 before:flex-1
          after:border-t after:border-gray-400 after:flex-1 ">
            <p className='text-center font-semibold mx-3'>OR</p>
          </div>
          <OAuth/>
          </form>
        </div>
      </div>
    </div>
  )
}
