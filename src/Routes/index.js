import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicial } from "../Pages/";


export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/inicio" element={ <PaginaInicial /> } />
        </Routes> 
    </BrowserRouter>
  )
}
