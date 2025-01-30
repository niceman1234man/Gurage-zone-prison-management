import React, { useState } from "react";
import { Link } from "react-router-dom"; 

function Visitor() {
      const amharicLabel = {
        login: "ግባ",
        signin: "ፍጠር",
        welcome: "እንኳን ወደ ወልቂጤ ማረሚያ ቤት በደህና መጡ !",
        motive: "ሥርዓት የፍትሕ መሠረት ነው፤ በትክክለኛ ሁኔታ የሚሠራ እስር ቤት ደጋፊው ነው።",
        signin2: "ግባ",
      };
    
      const englishLabel = {
        login: "Login",
        signin: "Signin",
        welcome: "Welcome To Gurage Zone Prison Management System Visitor Page",
        motive:
          "Order is the foundation of justice; a well-managed prison is its pillar.",
        signin2: "Sign In",
      };
    
      const [label, setLabel] = useState(englishLabel);
    
      const handleLanguage = (e) => {
        const selectedLanguage = e.target.value;
        if (selectedLanguage === "amharic") {
          setLabel(amharicLabel);
        } else {
          setLabel(englishLabel);
        }
      };
  return (
    <div className=" ">
      <div className="h-screen">
        <div className="flex mx-auto justify-between items-center bg-green-300 px-5 py-2">
        <h1 className="font-bold text-lg">Prison Management System</h1>
        <div className="flex space-x-6 items-center">
         <Link to='/'>Home</Link>
          <select className="h-6 bg-slate-500 rounded" onChange={handleLanguage}>
            <option value="english">English</option>
            <option value="amharic">አማርኛ</option>
          </select>
            <Link to="/register">Register</Link>
            <Link to="/login">{label.login}</Link>
        </div>
       
         
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl my-20 text-gray-950">{label.welcome}</h1>
          <p className="text-3xl text-gray-900">{label.motive}</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded mt-4 text-xl">
            <Link to="/login"> {label.signin2}</Link>
          </button>
          <Link to="/register" className="bg-green-400 rounded px-4 py-2 mt-4"> Registor</Link>
        </div>
        <div className="bg-green-300 flex py-1 font-semibold justify-center mt-32">
          <p>&copy; {new Date().getFullYear()} All rights reserverd</p>
        </div>
      </div>
    </div>
  )
}

export default Visitor