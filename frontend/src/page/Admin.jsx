import React, { useState } from "react";
import ListofUsers from "../components/ListofUsers";
import CreateNewUser from "../components/CreateNewUser";
import AdminDashboard from "../components/AdminDashboard";
import SystenmInformation from "../components/SystenmInformation";

function Admin() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <AdminDashboard />;
      case "Create New":
        return <CreateNewUser />;
      case "All Users":
        return <ListofUsers />;
      case "System Information":
         return <SystenmInformation />;
      // Add more cases as needed
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="flex">
      <div className="border-r w-1/6 p-3 bg-gray-950 h-screen fixed">
        <ul className="space-y-3 font-semibold text-white">
          <li className="flex bg-gray-700">
            <div className="flex items-center justify-center mr-2">
              <div className="w-6 h-6 bg-slate-500 rounded-full"></div>
            </div>
            PMS
          </li>
          <li onClick={() => setActiveComponent("Dashboard")} className="hover:bg-gray-300 cursor-pointer">Dashboard</li>
          <li onClick={() => setActiveComponent("Create New")} className="hover:bg-gray-300 cursor-pointer">Create New</li>
          <li onClick={() => setActiveComponent("All Users")} className="hover:bg-gray-300 cursor-pointer">All Users</li>
          <li onClick={() => setActiveComponent("Active Users")} className="hover:bg-gray-300 cursor-pointer">Active Users</li>
          <li onClick={() => setActiveComponent("Blocked Users")} className="hover:bg-gray-300 cursor-pointer">Blocked Users</li>
          <li onClick={() => setActiveComponent("System Information")} className="hover:bg-gray-300 cursor-pointer">System Information</li>
        </ul>
      </div>

      <div className="w-full ml-60">
        <div className="fixed shadow-lg border-b flex items-center py-3 w-full bg-neutral-50 space-x-96">
          <h3 className="font-semibold ml-2">Prison Management System Admin</h3>
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 bg-slate-500 rounded-full"></div>
            <p className="ml-3">Admin</p>
          </div>
        </div>
        <div className="border m-2 mt-12 h-screen">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Admin;