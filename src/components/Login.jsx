import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {

    const [isSignedIn, setIsSignedin] = useState(true);

    const toggleSignIn = ()=>{
        setIsSignedin(!isSignedIn);
    }

  return (
    <div>
        <Header/>

        <div className='bg-[#000000a2] h-screen w-screen absolute'></div>

        <img className='bg- h-screen w-screen' src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt='backgorund' />  

        <div className='absolute z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p- bg-black bg-opacity-65 w-[225px]'>
            <form className='flex flex-col gap-5' action="">
                <h1 className='text-white font-bold text-2xl py-2'>{isSignedIn ? "Sign In" : "Sign Up"}</h1>
                {isSignedIn ? null : <input className='bg-gray-700 p-2 text-[10px] font-bold w-full' type='text' placeholder='Full Name' /> }
                <input className='bg-gray-700 p-2 text-[10px] font-bold w-full' type='text' placeholder='Email' />
                <input className='bg-gray-700 p-2 text-[10px] font-bold w-full' type='password' placeholder='Password' />
                <button className='text-white bg-red-700 font-bold p-1 text-[10px] rounded-md h-7' type='submit'>{isSignedIn ? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleSignIn} className='cursor-pointer font-bold text-white text-[10px]'>{isSignedIn ? "New to Netflix ? Sign up Now" : "Already Registered? Login Now"}</p> 
            </form>
        </div>  
    </div>
    
  )
}

export default Login