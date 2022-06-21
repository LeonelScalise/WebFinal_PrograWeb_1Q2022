
import React from "react"
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";

export const Obra = ({ id, titulo, descripcion, imagen, fechaDeFin, borrarObra }) => {

    const borrarme = () => {
        borrarObra(id)
    }

    return (
        <div className='flex gap-48 justify-between border-2 border-gray-400 my-3 mx-auto w-full p-4'>
            <img src={imagen} className="w-1/4 h-64 border-2 border-black" alt='imagen-de-una-obra.png' />
            <div className="border-2 border-black w-full p-2">
                <div className='flex flex-row justify-between'>
                    <h1 className="text-xl font-bold">{titulo}</h1>
                    {sessionStorage.getItem("estaLogueado") === "true" ?
                        <button onClick={() => borrarme()} className="hover:text-red-600" ><AiOutlineClose size={20} /></button>
                        : null
                    }
                </div>
                <p className="mt-5">{descripcion}</p>

                {/* <Countdown from={fechaDeFin}/> Ejemplo de uso de un componente traido */}

            </div>
        </div>

    )
}