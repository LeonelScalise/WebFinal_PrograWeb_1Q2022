
import React from "react"
import { AiOutlineClose } from "react-icons/ai";
import Countdown from 'react-countdown';
import { CountdownNumber } from "./countdownNumber";

export const Obra = ({ id, titulo, descripcion, imagen, fechaDeFin, borrarObra }) => {

    const borrarme = () => {
        borrarObra(id)
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {

            return <span>Obra Finalizada</span>;
        } else {

            return (
                <div>
                    <label> </label>
                    <span className="flex">
                        <label className="font-semibold mr-3 mt-1 text-blue-400">La obra finaliza en:</label>
                        <CountdownNumber number={days} unidad={"d"} />
                        :
                        <CountdownNumber number={hours} unidad={"h"}/>
                        :
                        <CountdownNumber number={minutes} unidad={"m"} />
                        :
                        <CountdownNumber number={seconds} unidad={"s"} />
                    </span>
                </div>
            )
        }
    };

    return (
        <div className='flex-wrap flex md:flex-nowrap gap-10 justify-center border-b-2 bg-blue-100 border-gray-400 shadow-lg my-3 mx-auto w-full p-4'>
            <img src={imagen} className="w-full md:w-2/5 shadow-xl hover:opacity-70" alt='imagen-de-una-obra.png' />
            <div className="w-full font-sans p-2">
                <div className='flex flex-row justify-between'>
                    <h1 className="text-xl font-bold">{titulo}</h1>
                    {sessionStorage.getItem("estaLogueado") === "true" ?
                        <button onClick={() => borrarme()} className="text-rose-500 rounded-full transition-colors hover:bg-rose-500 hover:text-white hover:shadow-sm hover:shadow-rose-400/50" ><AiOutlineClose size={20} /></button>
                        : null
                    }
                </div>
                <p className="mt-5 h-2/4">{descripcion}</p>

                <div className="flex justify-end bottom-0 mt-3">
                    <Countdown renderer={renderer} date={Date.parse(fechaDeFin) + 10800000}></Countdown>
                </div>
            </div>
        </div>

    )
}