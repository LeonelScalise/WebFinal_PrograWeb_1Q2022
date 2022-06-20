import Carousel1 from "../assets/Carousel1.jpg";
import Carousel2 from "../assets/Carousel2.jpg";
import Carousel3 from "../assets/Carousel3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Obras } from "./Obras";
import { useEffect } from "react";

export function App() {

  const obrasPorDefecto = [
    {'id': 1,
     'titulo': 'asddasdas',
     'descripcion': 'asdadsdas',
     'imagen': 'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2019/08/5d52dce05cb0c_900.jpg',
     'fechaDeFin': '2022-05-13'},
     {'id': 2,
     'titulo': 'asddasdas',
     'descripcion': 'asdadsdas',
     'imagen': 'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2019/08/5d52dce05cb0c_900.jpg',
     'fechaDeFin': '2022-05-13'}
  ]

  useEffect(() => {
    localStorage.setItem('obras', obrasPorDefecto)
    localStorage.setItem('IdNuevaObra', 3)
  });

  return ( // Siempre hay que retornar un componente
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}

      >
        <div class="w-full">
          <img src={Carousel1} alt="" style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)',
            webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)'
          }} />
        </div>
        <div class="w-full">
          <img src={Carousel2} alt="" style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)',
            webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)'
          }} />
        </div>
        <div class="w-full">
          <img src={Carousel3} alt="" style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)',
            webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)'
          }} />
        </div>
      </Carousel>

      <Obras />
    </>
  );
}
