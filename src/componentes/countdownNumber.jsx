import React from "react";

export const CountdownNumber = ({ number, unidad }) => {
  return (
    <div className="flex text-xs max-h-7 sm:max-h-10 align-center md:text-lg justify-center border-2 border-gray-300 bg-zinc-100 rounded shadow-lg font-bold w-7 md:w-10">
      {number + unidad}
    </div>
  );
};
