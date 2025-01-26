import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure you're using 'react-router-dom'

function Welcome() {
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
    welcome: "Welcome To Gurage Zone Prison Management System",
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
    <div className="container flex mx-auto mt-6">
      <div>
        <div className="float-right flex mx-auto justify-center items-center">
          <select className="h-10 bg-slate-500" onChange={handleLanguage}>
            <option value="english">English</option>
            <option value="amharic">አማርኛ</option>
          </select>
          <button className="text-xl text-rose-600 p-7 bg-slate-500 h-6 rounded-lg ml-4 flex items-center justify-center">
            <Link to="/login">{label.login}</Link>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl my-20 text-gray-950">{label.welcome}</h1>
          <p className="text-3xl text-gray-900">{label.motive}</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded mt-4 text-xl">
            <Link to="/login"> {label.signin2}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
