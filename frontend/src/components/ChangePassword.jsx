import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function ChangePassword({ placeholder, value, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
<div className="w-[50%] flex flex-col mx-auto">
    <h3>Change Password</h3>
    <label>Current Password</label>
    <div className="relative w-[50%] mx-auto flex flex-col justify-center">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="px-3 py-2 border w-full m-2 mr-0"
        required
      />
      <span
        className="absolute right-4 top-5 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
      </span>
     
    </div>
    <label>Current Password</label>
    <div className="relative w-[50%] mx-auto flex flex-col justify-center ">
        
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="px-3 py-2 border w-full m-2 mr-0"
        required
      />
      <span
        className="absolute right-4 top-5 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
      </span>
     
    </div>
    </div>
  );
}

export default ChangePassword;