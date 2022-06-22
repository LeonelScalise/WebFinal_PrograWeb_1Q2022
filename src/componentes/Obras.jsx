import React from "react";
import { Obra } from "./Obra";
import { useEffect } from "react";
import { obrasAlmacenadas } from "../funciones/funcionesDeObras";
import { borrarObraQueTieneID } from "../funciones/funcionesDeObras";
import { useNavigate } from "react-router-dom";

export function Obras() {
  const navigate = useNavigate();

  const irAPaginaDeCrearObra = () => {
    navigate("/crearObra");
  };

  const borrarObraConId = (unId) => {
    borrarObraQueTieneID(unId);
    navigate("/");
  };

  var obras = obrasAlmacenadas();

  useEffect(() => {
    obras = obrasAlmacenadas();
  });

  return (
    <>
      <div className="flex justify-center sm:justify-start border-b-2 border-blue-300 font-bold font-sans shadow-lg shadow-blue-300/50 text-2xl text-blue-400 mt-5 p-2 pl-5">
        Nuestras obras
      </div>
      <div className="flex flex-col mx-auto align-center w-9/12">
        {sessionStorage.getItem("estaLogueado") === "true" ? (
          <button
            class="flex justify-center self-center sm:self-end w-36 bg-transparent hover:shadow-lg hover:shadow-blue-400/50 hover:bg-blue-400 text-blue-700 font-semibold mt-6 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-colors"
            onClick={irAPaginaDeCrearObra}
          >
            Agregar obra
          </button>
        ) : null}
        {obras &&
          obras.map((obra) => {
            return (
              <Obra
                id={obra.id}
                titulo={obra.titulo}
                descripcion={obra.descripcion}
                imagen={obra.imagen}
                fechaDeFin={obra.fechaDeFin}
                borrarObra={borrarObraConId}
              />
            );
          })}
      </div>
    </>
  );
}
