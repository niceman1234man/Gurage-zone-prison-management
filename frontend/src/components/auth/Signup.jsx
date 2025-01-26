import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../auth/login.jpg'
function Signup() {
    const navigate=useNavigate();
    const amharicLable={
     h1:'አዲስ መግቢያ ይፍጠሩ',
    fullname: 'ሙሉ ስም',
    email: 'ኢሜይል',
    password:'አዲስ ይለፍ ቃል',
    confirmPassword:'ይለፍ ቃል ያረጋግጡ',
    button:'ይፍጠሩ',
    login:'ይግቡ'

    }
    const englishLable={
        h1:'Sign up',
    fullname: 'Full Name',
    email: 'Email',
    password:'New Password',
    confirmPassword:'Confirm Password',
    button:'Create',
    login:'Already have account Login'


        
    }

  const initailUser = {
    fullname: '',
    email: '',
    password:'',
    confirmPassword:''
  };
  const [user, setUser] = useState(initailUser);
  const [label,setLabel]=useState(englishLable);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    if (!user.email || !user.fullname||!user.password) {
      alert('Both title and description are required!');
      return;
    }
    navigate('/list');
    setUser(initailUser); 
  };

  return (
    // <div className="max-w-full" style={{
    //           backgroundImage: `url(${image})`,
    //           backgroundSize: 'cover',
    //           backgroundPosition: 'center',
    //           width: '100vw',
    //           height: '100vh',
    //         }}>
      <div className="flex flex-col items-center justify-center mx-auto w-[50%] border mt-8 pb-8 shadow">
        <h1 className="text-4xl p-2 mt-8">{label.h1}</h1>
        <form
          className="flex flex-col w-full mx-auto justify-center items-center"
          onSubmit={handleUser}
        >
          <input
            type="text"
            name="fullname"
            placeholder={label.fullname}
            className="p-2 border w-[70%] m-2"
            value={user.fullname}
            onChange={handleChange}
          />
            <input
            type="email"
            name="email"
            placeholder={label.email}
            className="p-2 border w-[70%] m-2"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder={label.password}
            className="p-2 border w-[70%] m-2"
            value={user.password}
            onChange={handleChange}
          />
            <input
            type="password"
            name="confirmPassword"
            placeholder={label.confirmPassword}
            className="p-2 border w-[70%]"
            value={user.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="p-2 bg-blue-500 m-2 w-[70%] text-white text-2xl">
          {label.button}
          </button>
        </form>
        <button onClick={()=>navigate('/login')} className='text-2xl'>{label.login}</button>
      </div>
    // </div>
  );
}

export default Signup;
