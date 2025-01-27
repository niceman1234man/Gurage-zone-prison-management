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
    createAccount: "Don't have an account? Signup",
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
    <div className="flex flex-col items-center justify-center mx-auto w-[50%] border shadow mt-8 pb-8">
      <h1 className="text-4xl p-2 mt-8">{label.h1}</h1>
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
          className="p-3 border w-[70%] m-2"
          required
        />

        <Password
          placeholder={label.password}
          value={user.password}
          handleChange={handleChange}
        />

        <button
          type="submit"
          className={`p-2 ${user.email && user.password ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'} m-2 w-[70%] text-white text-2xl`}
          disabled={!user.email || !user.password}
        >
          {label.login}
        </button>
      </form>
      <button
        onClick={() => navigate("/signup")}
        className="text-2xl text-purple-500"
      >
        {label.createAccount}
      </button>
    </div>
  );
}

export default Login;