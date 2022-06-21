import React from "react";

export const CountdownNumber = ({number, unidad}) => {
    return <div className="flex justify-center border-2 border-gray-300 bg-zinc-100 rounded shadow-lg font-bold w-10">{number + unidad}</div>
}