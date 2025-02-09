import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Password from "../Password";
import { Link } from "react-router";
import axiosInstance from "../../../utils/axiosInstance";

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
    createAccount: "If you are Visitor ",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosInstance.post("/user/login", {
        email: user.email,
        password: user.password,
      });
  
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("role", response.data.userInfo.role); // Store user role
  
        // Redirect user based on role
        switch (response.data.userInfo.role) {
          case "admin":
            navigate("/admin");
            break;
          case "visitor":
            navigate("/visitor-dash");
            break;
          case "police-officer":
            navigate("/police-officer");
            break;
          case "inspector":
            navigate("/inspector");
            break;
          case "security":
            navigate("/security");
            break;
          default:
            navigate("/login"); // Default redirect if no valid role
        }
      }
    } catch (error) {
      console.error(
        error.response?.data?.message || "An unexpected error occurred. Please try again."
      );
    }
  };
  
    // Verify user credentials and navigate
   
  

  return (
    <div className="bg-gray-500 w-screen h-screen relative ">
    <div className="flex flex-col items-center justify-center mx-auto w-[30%] border shadow-lg mt-8 pb-3 absolute left-[30%] top-[20%] bg-white rounded">
      <h1 className="text-2xl p-1 mt-8 font-bold">{label.h1}</h1>
      <form
        className="flex flex-col w-full mx-auto justify-center items-center"
        onSubmit={handleSubmit}
      >  
      <div className=" flex justify-center items-center w-[80%] m-2 ">
      <input
          type="email"
          name="email"
          placeholder={label.email}
          value={user.email}
          onChange={handleChange}
          className="px-3 py-2 border w-[90%] m-2 mr-0 "
          required
        />
        <p className="border p-3 ml-0"> <FaUser/></p>
       
      </div>
        
       <div className=" flex justify-center items-center w-[80%] m-2">
       <Password
          placeholder={label.password}
          value={user.password}
          handleChange={handleChange}
        
        />
        <p className="border p-3 ml-0">
        <FaLock />
        </p>
        
       </div>
        
      
        <button
          type="submit"
          className={`py-1.5 px-2 ${user.email && user.password ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'} m-2 w-[30%] text-white text-xl rounded  `}
          disabled={!user.email || !user.password}
        >
          {label.login}
        </button>
        <Link to='/foregot-password' className="text-lg font-semibold py-1">Forgot Passowrd</Link>
      </form>
      <button
        onClick={() => navigate("/register")}
        className="text-xl text-gray-950"
      >
        {label.createAccount}
        <span className=" text-purple-600">Register</span>
      </button>
    </div>
    </div>
  );
}

export default Login;