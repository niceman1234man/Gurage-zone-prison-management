import React from "react";
import { Routes, Route } from "react-router";
import Welcome from "./components/Welcome";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Admin from "./page/Admin";
import Visitor from "./page/Visitor";
import VisitorRegister from "./page/VisitorRegister";
import ForegotPassword from "./page/ForegotPassword";
import VisitorDashboard from "./page/VisitorDashboard";
import PoliceOfficer from "./page/PoliceOfficer";
import Inspector from "./page/Inspector";
import SecurityStaff from "./page/SecurityStaff";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/foregot-password" element={<ForegotPassword />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["visitor"]} />}>
          <Route path="/visitor-dash" element={<VisitorDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["visitor"]} />}>
          <Route path="/visitor" element={<Visitor />} />
          <Route path="/register" element={<VisitorRegister />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["police-officer"]} />}>
          <Route path="/police-officer" element={<PoliceOfficer />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["inspector"]} />}>
          <Route path="/inspector" element={<Inspector />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["security"]} />}>
          <Route path="/security" element={<SecurityStaff />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
