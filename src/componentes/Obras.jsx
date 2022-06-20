import React from 'react'
import { Obra } from "./Obra";
import DecuNavbar from "../assets/DecumanusNavbar.png";

export function Obras() {
  return (
    <div className='flex flex-col align-center'>

      <Obra id={1} titulo='Edificio piola' descripcion='Construido en Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' imagen={'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2019/08/5d52dce05cb0c_900.jpg'} fechaDeFin={'2022-03-15'} />
      <Obra id={2} titulo='Edificio piola' descripcion='Construido en Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' imagen={DecuNavbar} fechaDeFin={'2022-03-15'} />
      <Obra id={3} titulo='Edificio piola' descripcion='Construido en Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' imagen={DecuNavbar} fechaDeFin={'2022-03-15'} />
      <Obra id={4} titulo='Edificio piola' descripcion='Construido en Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.' imagen={DecuNavbar} fechaDeFin={'2022-03-15'} />

    </div>
  )
}
