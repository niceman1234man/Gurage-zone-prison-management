import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

function VisitorInformation({ setActiveComponent }) {
  const navigate = useNavigate();

  const englishLabel = {
    h1: "Fill Information",
    fullname: "Visitor's Full Name",
    inmate: "Inmate",
    relation: "Relation",
    number: "Phone Number",
    date: "Date",
    button: "Save",
  };

  const initialUser = {
    inmate: "",
    fullname: "",
    relation: "",
    number: "",
    date: "",
  };

  const [user, setUser] = useState(initialUser);
  const [label, setLabel] = useState(englishLabel);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    setShowButton(
      !user.fullname || !user.inmate || !user.relation || !user.number || !user.date
    );
  }, [user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    if (!user.fullname || !user.inmate || !user.relation || !user.number || !user.date) {
      alert("All fields are required!");
      return;
    }
    navigate("/list");
    setUser(initialUser);
  };

  const onHandleEvent = () => {
    setActiveComponent("Dashboard");
  };

  return (
    <div className="bg-gray-500 w-screen h-screen flex items-center justify-center">
      <div className="w-[30%] border bg-white rounded shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center">{label.h1}</h1>
        <form className="flex flex-col mt-4" onSubmit={handleUser}>
          {/* Inmate Name */}
          <div className="flex items-center border p-2 mb-2">
            <input
              type="text"
              name="inmate"
              placeholder={label.inmate}
              className="flex-1 px-3 py-1 outline-none"
              value={user.inmate}
              onChange={handleChange}
            />
            <FaUser className="text-gray-500" />
          </div>

          {/* Visitor's Full Name */}
          <div className="flex items-center border p-2 mb-2">
            <input
              type="text"
              name="fullname"
              placeholder={label.fullname}
              className="flex-1 px-3 py-1 outline-none"
              value={user.fullname}
              onChange={handleChange}
            />
            <FaUser className="text-gray-500" />
          </div>

          {/* Relation */}
          <div className="flex items-center border p-2 mb-2">
            <input
              type="text"
              name="relation"
              placeholder={label.relation}
              className="flex-1 px-3 py-1 outline-none"
              value={user.relation}
              onChange={handleChange}
            />
            <FaUsers className="text-gray-500" />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border p-2 mb-2">
            <input
              type="text"
              name="number"
              placeholder={label.number}
              className="flex-1 px-3 py-1 outline-none"
              value={user.number}
              onChange={handleChange}
            />
            <LuPhoneCall className="text-gray-500" />
          </div>

          {/* Date */}
          <div className="flex items-center border p-2 mb-4">
            <input
              type="date"
              name="date"
              placeholder={label.date}
              className="flex-1 px-3 py-1 outline-none"
              value={user.date}
              onChange={handleChange}
            />
            <SlCalender className="text-gray-500" />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className={`py-2 px-4 text-white font-semibold rounded ${
                showButton ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={showButton}
            >
              {label.button}
            </button>

            <Link
            onClick={onHandleEvent}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VisitorInformation;
