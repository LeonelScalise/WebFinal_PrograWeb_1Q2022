import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar abs";


export function Layout() {
  return (
    <div className="h-screen">
      <Navbar />

      <Outlet />
    </div>
  );
}
