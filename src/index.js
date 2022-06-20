import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./componentes/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Example } from "./componentes/About";
import { Contacto } from "./componentes/Contacto";
import { Layout } from "./componentes/Layout";
import { Login } from "./componentes/Login/Login";
import { obras } from "./componentes/Obras";

/* 
function Contenido(props) {
  const titulo = props.titulo;
  const contenido = props.contenido;
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{contenido}</p>
    </div>
);
}

function Contenido(props) {
  const {titulo, contenido} = props
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{contenido}</p>
    </div>
);
} */

/* function Contenido({titulo, children}) { // children es el hijo del componenente, pondrá lo que se encuentra dentro del componente
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{children}</p>
    </div>
);
}  

ReactDOM.render(
  <Contenido titulo="Decumanus atr">Hola React</Contenido>,
  document.getElementById('root')
);
*/



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />;
        
      </Route>
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/about" element={<Example />} />;
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
