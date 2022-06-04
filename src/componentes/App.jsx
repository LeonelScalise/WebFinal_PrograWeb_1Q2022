import Construccionimg from "../assets/Construccion.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function App() {

  return (

  <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true}>
      <div class="w-screen h-screen">
        <img src={Construccionimg} alt=""/>
      </div>
      <div class="w-screen h-screen">
        <img src={Construccionimg} alt=""/>
      </div>
      <div class="w-screen h-screen">
        <img src={Construccionimg} alt=""/>
      </div>
    </Carousel> 
  );
}
