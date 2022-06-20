import  Carousel1  from "../assets/Carousel1.jpg";
import Carousel2 from "../assets/Carousel2.jpg";
import Carousel3 from "../assets/Carousel3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Obras } from "./Obras";
import { usePosicionScroll } from "../Hooks/usePosicionScroll";
import { Navbarst } from "./Navbar/Navbar sticky";

export function App() {
  const posicionScroll = usePosicionScroll();
  return ( // Siempre hay que retornar un componente único
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        
      >
        <div class="w-screen">
          <img src={Carousel1} alt="" style={{maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)',
   webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)'}}/>
        </div>
        <div class="w-screen">
          <img src={Carousel2} alt="" style={{maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)',
   webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)'}}/>
        </div>
        <div class="w-screen">
          <img src={Carousel3} alt="" style={{maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)',
   webkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,20) 100%)'}}/>
        </div>
      </Carousel>

      <Obras />
    </>
  );
}
