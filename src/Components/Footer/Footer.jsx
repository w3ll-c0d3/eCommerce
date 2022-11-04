import React from 'react';
import { Link } from "react-router-dom";
import ContainerLinks from "./style";

const Footer = () => {
  return (
    <footer>
      <span>{'\u00A9'} Copyright Grupo 4 2022</span>
      <ContainerLinks>
        <a href="#header">Início da página</a>
        <br></br>
        <Link to={`/quemsomos`}>Quem somos</Link>
      </ContainerLinks>
    </footer>
  )
}

export default Footer