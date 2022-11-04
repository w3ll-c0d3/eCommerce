import React from 'react'
import { Footer, Navigation, Produtos, SlideCarousel } from "../../Components";
import ContainerSlide from "./style";


const PaginaInicial = () => {
  return (
    <>
      <Navigation />
      <SlideCarousel />
      <Produtos />
      <Footer />
    </>
)
}

export default PaginaInicial
