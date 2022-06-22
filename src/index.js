import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./componentes/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./componentes/About";
import { Contacto } from "./componentes/Contacto";
import { Layout } from "./componentes/Layout";
import { Login } from "./componentes/Login/Login";
import { CrearObra } from "./componentes/CrearObra/CrearObra";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />;
      </Route>
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/crearObra" element={<CrearObra />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
