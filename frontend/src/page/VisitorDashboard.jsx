import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { HiUserGroup } from "react-icons/hi";
import { GrSchedule } from "react-icons/gr";
import {
  FaUsersCog,FaUser,FaLock
} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";


import MyAccount from "../components/Admin/MyAccount";
import { useNavigate } from "react-router";
import VisitorInformation from "../components/Visitor/VisitorInformation";
import VisitorsDashboard from "../components/Visitor/VisitorsDashboard";
import ListofUsers from "../components/Admin/ListofUsers";
import ViewSchedule from "../components/Visitor/ViewSchedule";
import ChangePassword from "../components/ChangePassword";
function VisitorDashboard() {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Dashboard");
 const [toggle,setToggle]=useState(true);
  const onLogout = () => {
    localStorage.clear();
    navigate("/login"); // Fixed the typo here
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <VisitorsDashboard />;
      case "Create New":
        return <ViewSchedule setActiveComponent={setActiveComponent} />;
      case "My Inmates":
        return <ListofUsers />;
      case "My Information":
        return <VisitorInformation setActiveComponent={setActiveComponent} />;
      case "myAccount":
        return <MyAccount />;
      case "logout":
        return onLogout();
      case "change-password":
        return <ChangePassword />;

      default:
        return <VisitorsDashboard />;
    }
  };

  return (
    <div className="flex">
      <div className="border-r w-1/6 p-3 bg-gray-950 h-screen fixed">
        <ul className="space-y-6 font-semibold text-white w-full">
          <li className="flex bg-gray-700">
            <div className="flex items-center justify-center mr-2">
              <div className="w-6 h-6 bg-slate-500 rounded-full"></div>
            </div>
            PMS
          </li>
          <li
            onClick={() => setActiveComponent("Dashboard")}
            className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${
              activeComponent === "Dashboard" ? "bg-green-400" : ""
            }`}
          >
            <RxDashboard className="mr-2" size={20} /> Dashboard
          </li>
          <li
            onClick={() => setActiveComponent("My Information")}
            className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${
              activeComponent === "My Information" ? "bg-green-400" : ""
            }`}
          >
            <FaUsersCog className="mr-2" size={20} /> Fill Information
          </li>
          <li
            onClick={() => setActiveComponent("Create New")}
            className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${
              activeComponent === "Create New" ? "bg-green-400" : ""
            }`}
          >
            <GrSchedule className="mr-2" size={20} /> View Schedule
          </li>
          <h3 className="flex items-center">Setting <span className="ml-2">{toggle?<FaAngleDown onClick={()=>setToggle(!toggle)}/>:<FaAngleUp onClick={()=>setToggle(!toggle)}/>}</span></h3>
          <div  className={`${toggle? 'hidden':''} space-y-6`}>
        
            <li
              onClick={() => setActiveComponent("myAccount")}
              className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${
                activeComponent === "myAccount" ? "bg-green-400" : ""
              }`}
            >
              <FaUser className="mr-2" size={20} /> My Account
            </li>
            <li
              onClick={() => setActiveComponent("change-password")}
              className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${
                activeComponent === "change-password" ? "bg-green-400" : ""
              }`}
            >
              <FaLock className="mr-2" size={20} />
              Change Password
            </li>
            <li
              onClick={() => setActiveComponent("logout")}
              className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${
                activeComponent === "My Inmates" ? "bg-green-400 " : ""
              }`}
            >
              <HiUserGroup className="mr-2" size={20} />
              Logout
            </li>
          </div>
          {/* <li onClick={() => setActiveComponent("Active Users")} className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${activeComponent === "Active Users" ? 'bg-green-400' : ''}`}>
            <FaUserCheck className="mr-2" size={20} /> Active Users
          </li>
          <li onClick={() => setActiveComponent("Blocked Users")} className={`hover:bg-gray-300 cursor-pointer flex items-center border-b border-white ${activeComponent === "Blocked Users" ? 'bg-green-400' : ''}`}>
            <FaUserSlash className="mr-2" size={20} /> Blocked Users
          </li> */}
        </ul>
      </div>

      <div className="w-full ml-60">
        <div className="fixed shadow-lg border-b flex items-center py-3 w-full bg-neutral-50 space-x-96">
          <h3 className="font-semibold ml-2">
            Prison Management System Visitor
          </h3>
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 bg-slate-500 rounded-full"></div>
            <p className="ml-3">
              Visitor{" "}
              <select onChange={(e) => setActiveComponent(e.target.value)}>
                <option value=""></option>
                <option value="myAccount">My Account</option>
                <option value="logout">Logout</option>
              </select>
            </p>
          </div>
        </div>
        <div className="border m-2 mt-12 h-screen">{renderComponent()}</div>
      </div>
    </div>
  );
}

export default VisitorDashboard;
