import React from 'react'
import { Obra } from "./Obra";
import DecuNavbar from "../assets/DecumanusNavbar.png";
import { useEffect } from 'react';
import { obrasAlmacenadas } from '../funciones/funcionesDeObras'
import { borrarObraQueTieneID } from '../funciones/funcionesDeObras'
import { useNavigate } from 'react-router-dom';

export function Obras() {

  const navigate = useNavigate()

  const irAPaginaDeCrearObra = () => {
    navigate('/crearObra')
  }

  const borrarObraConId = (unId) => {
    borrarObraQueTieneID(unId)
    navigate('/')
  }

  var obras = obrasAlmacenadas()

  useEffect(() => { obras = obrasAlmacenadas() })

  return (

    <div className='flex flex-col mx-auto align-center w-9/12'>
      <button class="flex justify-center self-end w-36 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold mt-6 item-end hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={irAPaginaDeCrearObra}>Agregar obra</button>
      {obras && obras.map(obra => {
        return (<Obra id={obra.id} titulo={obra.titulo} descripcion={obra.descripcion} imagen={obra.imagen} fechaDeFin={obra.fechaDeFin} borrarObra={borrarObraConId} />)
      })}

    </div>
  )
}
