import Carousel1 from "../assets/Carousel1.jpg";
import Carousel2 from "../assets/Carousel2.jpg";
import Carousel3 from "../assets/Carousel3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Obras } from "./Obras";
import { useEffect, useState } from "react";
import React from "react";
import { inicializarObrasSiNoEstaLaClaveEnLocalStorage }  from "../funciones/funcionesDeObras"
export function App() {

  useEffect(() => {inicializarObrasSiNoEstaLaClaveEnLocalStorage()}, []);

  return ( // Siempre hay que retornar un componente
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        <div class="w-full bg-gradient-to-r from-blue-400 to-blue-800">
          <img src={Carousel1} alt="" style={{
            webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 80%)'
          }} />
        </div>
        <div class="w-full bg-gradient-to-r from-blue-400 to-blue-800">
          <img src={Carousel2} alt="" style={{
            webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 80%)'
          }} />
        </div>
        <div class="w-full bg-gradient-to-r from-blue-400 to-blue-800">
          <img src={Carousel3} alt="" style={{
            webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 80%)'
          }} />
        </div>
      </Carousel>
      
      
      <Obras/>
    </>
  );
}
