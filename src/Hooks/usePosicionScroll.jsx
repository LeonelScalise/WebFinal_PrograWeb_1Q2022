import { useState, useEffect } from "react";

export const usePosicionScroll = () => {
  const [PosicionScroll, setPosicionScroll] = useState(0);

  useEffect(() => { // Creación de un Custom Hook que toma en una variable las posiciones relativas del scroll en eje Y mientras el usuario navega
    const actualizarPosicion = () => {
      setPosicionScroll(window.pageYOffset);
    };

    window.addEventListener("scroll", actualizarPosicion);

    actualizarPosicion();

    return () => window.removeEventListener("scroll", actualizarPosicion);
  }, []);
  return PosicionScroll;
};
