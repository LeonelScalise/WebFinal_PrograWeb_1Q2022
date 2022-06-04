import Construccionimg from "../assets/Construccion.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function App() {

  return (

     /* <img className="w-screen h-" src={Construccionimg} alt="Construccion"  />  */
  <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true}>
      <div class="w-screen h-screen">
        <img src={Construccionimg} alt="Hola"/>
        <p>Legend 1</p>
      </div>
      <div class="w-screen h-screen">
        <img src={Construccionimg} alt="como"/>
        <p className="legend">Legend 2</p>
      </div>
      <div class="w-screen h-screen">
        <img src={Construccionimg} alt="estas"/>
        <p className="legend">Que onda</p>
      </div>
    </Carousel> 
  );
}
