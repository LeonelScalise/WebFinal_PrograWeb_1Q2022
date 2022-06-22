import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar abs";

export function Layout() {
  return (
    <div className="bg-blue-200 h-full">
      <Navbar />
      <Outlet />
    </div>
  );
}
