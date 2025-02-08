import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
function ViewSchedule({setActiveComponent}) {
    const handleEvent=()=>{
        setActiveComponent("Dashboard");
    }
  return (
     <div className="bg-gray-500 w-screen h-screen relative ">
      <div className="flex flex-col items-center justify-center mx-auto w-[30%] border mt-8 pb-8 bg-white absolute left-[30%] top-[10%] rounded shadow-lg">
        <h1 className="text-2xl p-2 mt-8 font-bold">View Schedule</h1>
        <div
          className="flex flex-col w-full mx-auto justify-center items-center"
       
        >
           <div className=" flex justify-center items-center w-[80%] m-2 ">
            <input
              type="text"
              name="inmate"
           
             className="px-3 py-2 border w-[90%] mb-2 mr-0 "
          
            />
             <p className="border p-3 ml-0 mb-2"> <FaUser/></p>
          </div>
          <div className=" flex justify-center items-center w-[80%] m-2 ">
            <input
              type="text"
              name="fullname"
             
             className="px-3 py-2 border w-[90%] mb-2 mr-0 "
            
            />
             <p className="border p-3 ml-0 mb-2"> <FaUser/></p>
          </div>
          
          <div className=" flex justify-center items-center w-[80%] m-2 ">
            <input
              type="text"
              name="relation"
              placeholder="Relation"
             className="px-3 py-2 border w-[90%] mb-2 mr-0 "
           
            />
             <p className="border p-3 ml-0 mb-2"> <FaUsers/></p>
          </div>
          <div className=" flex justify-center items-center w-[80%] m-2 ">
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
             className="px-3 py-2 border w-[90%] mb-2 mr-0 "
            
            />
             <p className="border p-3 ml-0 mb-2"> <LuPhoneCall/></p>
          </div>
          <div className=" flex justify-center items-center w-[80%] m-2 ">
            <input
              type="date"
              name="date"
              placeholder="Date"
             className="px-3 py-2 border w-[90%] mb-2 mr-0 "
             
            />
             <p className="border p-3 ml-0 mb-2"> <SlCalender/></p>
          </div>
         <div className="flex">
         
        <button onClick={handleEvent}>
        <Link to="/visitor-dash" className=" bg-red-600 text-white px-3 py-2 rounded">
          
          Cancel
        </Link>
        </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ViewSchedule