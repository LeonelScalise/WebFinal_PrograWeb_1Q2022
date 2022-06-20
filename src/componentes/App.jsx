import Construccionimg from "../assets/Construccion.jpg";
import ppalCarousel from "../assets/ppalCarousel.jpg";
import ppalCarousel2 from "../assets/ppalCarousel2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Obras } from "./Obras";
import { usePosicionScroll } from "../Hooks/usePosicionScroll";
import { Navbarst } from "./Navbar/Navbar sticky";

export function App() {
  const posicionScroll = usePosicionScroll();
  return (
    <>
      {posicionScroll > 5 ? <Navbarst /> : null}
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        <div class="w-screen">
          <img src={ppalCarousel} alt="" />
        </div>
        <div class="w-screen">
          <img src={ppalCarousel} alt="" />
        </div>
        <div class="w-screen">
          <img src={ppalCarousel} alt="" />
        </div>
      </Carousel>

      <Obras />
    </>
  );
}
