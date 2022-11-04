import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicial, DetalhesProduto } from "../Pages/";


export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PaginaInicial /> } />
            <Route path={`/produto/${1}`} element={ <DetalhesProduto /> } />
        </Routes> 
    </BrowserRouter>
  )
}
