import React from 'react'
import { useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function SignIn() {
  // creating hook
  const [showPassword, setShowPassword] = useState(false); //bec we don't wanna show pass in the beginning, as default
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  return (
    <div>
      <section>
        <h1 className='text-3xl my-3 text-center text-semibold'>Sign In</h1>
      </section>
      <div className='flex justify-center flex-wrap items-center px-6 py-12'>
        <div className='mx-10 md:w-[70%] lg:w-[50%]'>
          <img src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=" alt="signIn" className='rounded-xl w-full' />
        </div>
        <div className='w-full md:w-[70%] lg:w-[40%] lg:ml-15'>
          <form action="">
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
          </form>
        </div>
      </div>
    </div>
  )
}
