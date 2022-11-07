import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicial, DetalhesProduto, QuemSomos, AdminIndex } from "../Pages/";
import AdminCategoria from '../Pages/Admin/CategoriasCadastro';
import AdminCategoriaEditar from '../Pages/Admin/CategoriasEditar';
import { Cart } from '../Pages';


export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PaginaInicial /> } />
            <Route path={`/produto/${1}`} element={ <DetalhesProduto /> } />
            <Route path="/quemsomos" element = {<QuemSomos/>}/>
            <Route path="/admin" element = {<AdminIndex/>}/>
            <Route path="/admin/categoriascadastro" element = {<AdminCategoria/>}/>
            <Route path="/admin/categoriaseditar" element = {<AdminCategoriaEditar/>}/>
            <Route path="/cart" element={< Cart/>} />
        </Routes> 
    </BrowserRouter>
  )
}
