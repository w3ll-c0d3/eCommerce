import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicial, DetalhesProduto, QuemSomos, AdminIndex, Cart, } from "../Pages/";


export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PaginaInicial /> } />
            <Route path={`/produto/${1}`} element={ <DetalhesProduto /> } />
            <Route path="/quemsomos" element = {<QuemSomos/>}/>
            <Route path="/admin" element = {<AdminIndex/>}/>
            <Route path='/cart' element = {<Cart/>}/>
        </Routes> 
    </BrowserRouter>
  )
}
