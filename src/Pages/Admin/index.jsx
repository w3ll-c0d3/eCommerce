import React from 'react';
import Container from 'react-bootstrap/Container';
import './style.css';
import { Footer, Navigation } from "../../Components";
import { Link } from "react-router-dom";

const AdminIndex = () => {

    return (
      <>
      <Navigation />
      <Container>
        <div class="row">
            <h3>Categorias</h3>
            <div class="col">
                <Link to={`./CategoriasCadastro`}>
                    <button type="button" class="button-options-cadastrar2">Cadastrar Categoria</button>
                </Link>
            </div>
            <div class="col">
                <Link to={`./CategoriasEditar`}>
                    <button type="button" class="button-options-editar">Editar Categoria</button>
                </Link>
            </div>
            <div class="col">
                <button type="button" class="button-options-view">Visualizar Categoria</button>
            </div>
            <div class="col">
                <button type="button" class="button-options-del">Deletar Categoria</button>
            </div>
        </div>
        <div class="row">
            <h3>Produtos</h3>
            <div class="col">
                <button type="button" class="button-options-cadastrar2">Cadastrar Produto</button>
            </div>
            <div class="col">
                <button type="button" class="button-options-editar">Editar Produto</button>
            </div>
            <div class="col">
                <button type="button" class="button-options-view">Visualizar Produto</button>
            </div>
            <div class="col">
                <button type="button" class="button-options-del">Deletar Produto</button>
            </div>
        </div>
      </Container>
      <Footer />
      </>
    )
  }
  
  export default AdminIndex