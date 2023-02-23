import React from 'react'
import { useState } from "react"
import { AiFillEyeInvisible, AiFillEye,FcGoogle } from "react-icons/ai";
import OAuth from '../components/OAuth';

export default function SignUp() {
  // creating hook
  const [showPassword, setShowPassword] = useState(false); //bec we don't wanna show pass in the beginning, as default
  const [formData, setFormData] = useState(
    {
      name:"",
      email: "",
      password: "",
    });
  const {name, email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  return (
    <div>
      <section>
        <h1 className='text-3xl my-3 text-center text-semibold'>Sign Up</h1>
      </section>
      <div className='flex justify-center flex-wrap items-center px-6 py-12'>
        <div className='mx-10 md:w-[67%] lg:w-[50%] mb-12'>
          <img src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=" alt="signIn" className='rounded-xl w-full' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-15 sm:top-12'>
          <form action="">
          <input className='w-full border-2 border-gray-500 px-2 py-2 bg-white text-xl rounded my-8' type="text" placeholder='Full Name' name="" id="name" value={name} onChange={onChange} />
            <input className='w-full border-2 border-gray-500 px-2 py-2 bg-white text-xl rounded' type="email" placeholder='Email Address' name="" id="email" value={email} onChange={onChange} />
            <div className='relative'>
              <input className='w-full border-2 border-gray-500 px-2 py-2 my-8 bg-white text-xl rounded'
                type={showPassword ? "text" : "password"}
                placeholder='Password' name="" id="password" value={password} onChange={onChange} />
              {showPassword ? (<AiFillEyeInvisible className="absolute right-3 cursor-pointer bottom-12"
                onClick={() => setShowPassword((prevState) => !prevState)} />) : 
                (<AiFillEye className="absolute right-3 cursor-pointer bottom-12" 
                onClick={() => setShowPassword((prevState) => !prevState)} />)
              }
            </div>
            <div className='flex justify-between'>
              <p className='text-semibold'>Have an account? <a className='text-red-500' href="/sign-up">Sign In</a></p>
              <p><a className='text-blue-500' href="/forgot-password">Forgot Password?</a></p>
            </div>
            <button type='submit' className='w-full bg-blue-500 px-10 py-3 my-5 text-sm font-semibold 
          uppercase text-white shadow-amber-100 hover:bg-blue-900'>Sign Up</button>
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
