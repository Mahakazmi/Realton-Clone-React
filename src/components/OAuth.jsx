import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import {GrGoogle} from "react-icons/gr";
import { toast } from 'react-toastify';
import { db } from '../Firebase';
import { useNavigate } from 'react-router';

export default function OAuth() {
  const Navigate= useNavigate()
  async function onGoogleclick()
  {
    try {
      const auth= getAuth()
      const provider = new GoogleAuthProvider()
      const result= await signInWithPopup(auth,provider)
      const user = result.user

      // checks if the user is already registred using this email
      // users is the name of the collection in firestore database
      const docRef= doc(db ,"users",user.uid)
      const docSnap =await getDoc(docRef)

      if (!docSnap.exists())
      {
        await setDoc(docRef,{
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }

      Navigate("/")
    } catch (error) {
      toast.error("Could not authenticate with google")
   
    }
  }
  return (
    <button type="button" onClick={onGoogleclick} className='flex justify-center items-center w-full bg-red-500 px-10 py-3 my-5 text-sm font-semibold 
    uppercase text-white shadow-amber-100 hover:bg-red-900'>
        <GrGoogle className='mr-4 '/>
        Continue with Google</button>
  )
}
