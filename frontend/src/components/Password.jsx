import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Password({ placeholder, value, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-[72%] mx-auto flex justify-center">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="px-3 py-2 border w-full m-2 rounded"
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
  );
}

export default Password;