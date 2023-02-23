import React from 'react'
import {GrGoogle} from "react-icons/gr";

export default function OAuth() {
  return (
    <button className='flex justify-center items-center w-full bg-red-500 px-10 py-3 my-5 text-sm font-semibold 
    uppercase text-white shadow-amber-100 hover:bg-red-900'>
        <GrGoogle className='mr-4 '/>
        Continue with Google</button>
  )
}
