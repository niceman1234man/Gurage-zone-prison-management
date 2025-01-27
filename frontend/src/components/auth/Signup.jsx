import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../auth/login.jpg";
import Password from "../Password";

function Signup() {
  const navigate = useNavigate();
  const amharicLabel = {
    h1: "አዲስ መግቢያ ይፍጠሩ",
    fullname: "ሙሉ ስም",
    email: "ኢሜይል",
    password: "አዲስ ይለፍ ቃል",
    confirmPassword: "ይለፍ ቃል ያረጋግጡ",
    button: "ይፍጠሩ",
    login: "ይግቡ",
  };
  const englishLabel = {
    h1: "Sign up",
    fullname: "Full Name",
    email: "Email",
    password: "New Password",
    confirmPassword: "Confirm Password",
    button: "Create",
    login: "Already have an account? Login",
  };

  const initialUser = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(initialUser);
  const [label, setLabel] = useState(englishLabel);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    setShowButton((!user.fullname && !user.email && !user.password));
  }, [user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    if (!user.email || !user.fullname || !user.password) {
      alert("All fields are required!");
      return;
    }
    navigate("/list");
    setUser(initialUser);
  };

  return (
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
        <Password
          placeholder={label.password}
          value={user.password}
          handleChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder={label.confirmPassword}
          className="p-2 border w-[70%]"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={`p-2 ${user.fullname && user.email && user.password?  'bg-blue-500':'bg-gray-300 cursor-not-allowed' } m-2 w-[70%] text-white text-2xl` }
          disabled={!user.fullname || !user.email || !user.password}
        >
          {label.button}
        </button>
      </form>
      <button
        onClick={() => navigate("/login")}
        className={`text-2xl`}
      
      >
        {label.login}
      </button>
    </div>
  );
}

export default Signup;