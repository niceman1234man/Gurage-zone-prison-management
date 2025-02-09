import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Check if passwords are entered
    if (!formData.currentPassword || !formData.newPassword) {
      setError("Both fields are required!");
      return;
    }

    // Clear error & proceed with password update logic
    setError("");
    alert("Password changed successfully!"); // Replace this with API call
    setFormData({ currentPassword: "", newPassword: "" }); // Reset form
  };

  return (
    <div className="w-[40%] mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-center mb-4">Change Password</h3>

      <form onSubmit={handleSubmit}>
        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Current Password */}
        <label className="text-sm font-medium">Current Password</label>
        <div className="relative flex items-center w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="currentPassword"
            placeholder="Enter current password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="px-4 py-2 border w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <span
            className="absolute right-3 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
          </span>
        </div>

        {/* New Password */}
        <label className="text-sm font-medium">New Password</label>
        <div className="relative flex items-center w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            className="px-4 py-2 border w-full rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <span
            className="absolute right-3 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-4">
          <button type="submit" className="mr-4 px-4 py-2 bg-blue-600 text-white rounded">
            Change
          </button>
          <button type="button" onClick={() => setFormData({ currentPassword: "", newPassword: "" })} className="px-4 py-2 bg-red-500 text-white rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
