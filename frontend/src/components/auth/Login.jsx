import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import image from '../auth/login.jpg'

function Login() {
    const navigate=useNavigate();
    const amharicLable={
        h1:"መግቢያ",
        email:"ኢሜይል",
        Password:"ይለፍ ቃል",
        login:"ግባ",
        createAccount:"አዲስ መግቢያ ፍጠር"

    }
    const englishLable={
        h1:"Login",
        email:"Email",
        Password:"Password",
        login:"Login",
        createAccount:"Have no account Signup"
        
    }
    const [label ,setLabel]=useState(englishLable)
   
    return (
        // <div className="max-w-full" style={{
        //           backgroundImage: `url(${image})`,
        //           backgroundSize: 'cover',
        //           backgroundPosition: 'center',
        //           width: '100vw',
        //           height: '100vh',
        //         }}>
          <div className="flex flex-col items-center justify-center mx-auto w-[50%] border shadow mt-8 pb-8 ">
            <h1 className="text-4xl p-2 mt-8">{label.h1}</h1>
            <form
              className="flex flex-col w-full mx-auto justify-center items-center"
             
            >
                <input
                type="email"
                name="email"
                placeholder={label.email}
                className="p-3 border w-[70%] m-2"
               
           
              />
              <input
                type="password"
                name="password"
                placeholder={label.Password}
                className="p-3 border w-[70%] m-2"
              />
                
              <button type="submit" className="p-2 bg-blue-500 m-2 w-[70%] text-white text-2xl">
             {label.login}
              </button>
            </form>
            <button onClick={()=>navigate('/signup')} className='text-2xl text-purple-500'>{label.createAccount} </button>
          </div>
        // </div>
      );
}

export default Login