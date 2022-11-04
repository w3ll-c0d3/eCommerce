import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicial } from "../Pages/";
import { QuemSomos } from '../Pages/quem_somos';


export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PaginaInicial /> } />
            <Route path="/quemsomos" element = {<QuemSomos/>}/>
        </Routes> 
    </BrowserRouter>
  )
}
