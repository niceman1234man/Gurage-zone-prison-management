import React, { useState } from "react";
import { useNavigate } from "react-router";
import Password from "../Password";

function Login() {
  const navigate = useNavigate();
  const amharicLabel = {
    h1: "መግቢያ",
    email: "ኢሜይል",
    password: "ይለፍ ቃል",
    login: "ግባ",
    createAccount: "አዲስ መግቢያ ፍጠር",
  };
  const englishLabel = {
    h1: "Login",
    email: "Email",
    password: "Password",
    login: "Login",
    createAccount: "Don't have an account? ",
  };

  const initialUser = {
    email: "",
    password: "",
  };
  const [label, setLabel] = useState(englishLabel);
  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in:", user);
    // Verify user credentials and navigate
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-500 w-screen h-screen relative ">
    <div className="flex flex-col items-center justify-center mx-auto w-[30%] border shadow-lg mt-8 pb-3 absolute left-[30%] top-[20%] bg-white rounded">
      <h1 className="text-2xl p-1 mt-8 font-bold">{label.h1}</h1>
      <form
        className="flex flex-col w-full mx-auto justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder={label.email}
          value={user.email}
          onChange={handleChange}
          className="px-3 py-2 border w-[70%] m-2 rounded"
          required
        />

        <Password
          placeholder={label.password}
          value={user.password}
          handleChange={handleChange}
        />
      
        <button
          type="submit"
          className={`py-1.5 ${user.email && user.password ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'} m-2 w-[30%] text-white text-2xl rounded  `}
          disabled={!user.email || !user.password}
        >
          {label.login}
        </button>
      </form>
      <button
        onClick={() => navigate("/signup")}
        className="text-xl text-gray-950"
      >
        {label.createAccount}
        <span className=" text-purple-600">Signup</span>
      </button>
    </div>
    </div>
  );
}

export default Login;