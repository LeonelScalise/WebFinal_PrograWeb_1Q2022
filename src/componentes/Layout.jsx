import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar abs";
import { Navbarst } from "./Navbar/Navbar sticky";


export function Layout() {

  return (
    <div>
      <Navbar/>

      <Outlet />
    </div>
  );
}
