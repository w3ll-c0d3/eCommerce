import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicial } from "../Pages/";
import { Cart } from '../Pages';


export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PaginaInicial /> } />
            <Route path="/cart" element={< Cart/>} />
        </Routes> 
    </BrowserRouter>
  )
}
