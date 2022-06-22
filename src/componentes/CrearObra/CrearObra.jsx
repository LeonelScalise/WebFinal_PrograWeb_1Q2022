import React from "react";
import { useState } from "react";
import "./CrearObra.css";
import { crearNuevaObraCon } from "../../funciones/funcionesDeObras";
import { useNavigate } from "react-router-dom";

export const CrearObra = () => {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [fechaDeFin, setFechaDeFin] = useState("");

  function handleChange(setValue) {
    // Funcion que detecta los cambios caracter por caracter en el input y los va asignando a la variable que se ponga como parámetro
    return (event) => {
      setValue(event.target.value);
    };
  }

  const accionDeCrearObra = (event) => {
    event.preventDefault();
    crearNuevaObraCon(titulo, descripcion, imagenUrl, fechaDeFin);
    navigate("/");
  };

  return (
    <div class="CrearObra">
      <form className="w-2/3 lg:w-2/5">
        <div class="CrearObraContainer rounded-lg overflow-hidden">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="titulo"
                  class="block text-sm font-medium text-gray-700"
                >
                  Titulo de obra
                </label>
                <input
                  type="text"
                  onChange={handleChange(setTitulo)}
                  name="titulo"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-1">
                <label
                  for="fechafin"
                  class="block text-sm font-medium text-gray-700"
                >
                  Fecha de finalización
                </label>
                <input
                  type="date"
                  onChange={handleChange(setFechaDeFin)}
                  class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="URL Imagen"
                  class="block text-sm font-medium text-gray-700"
                >
                  URL Imagen
                </label>
                <input
                  type="url"
                  onChange={handleChange(setImagenUrl)}
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="Descripcion"
                  class="block text-sm font-medium text-gray-700"
                >
                  Descripción (máximo 350 caracteres)
                </label>
                <textarea
                  onChange={handleChange(setDescripcion)}
                  maxLength="350"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={accionDeCrearObra}
            >
              Agregar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
