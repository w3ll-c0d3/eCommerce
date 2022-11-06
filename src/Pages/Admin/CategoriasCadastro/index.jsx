import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import './style.css';
import { Footer, Navigation } from "../../../Components";

const AdminCategoria = () => {

    return (
      <>
      <Navigation />
      <Container>
        <div class="row">
            <h3>Categorias</h3>
            <h5>Cadastrar Categoria</h5>
        </div>
        <Form>
          <div class="row">
            <label class="texto">Nome:</label>
            <input type="text" />
          </div>
          <div class="row">
            <label>Descrição:</label>
            <textarea type="text" />
          </div>
          <button type="button" class="button-options-cadastrar">Salvar</button>
        </Form>
      </Container>
      <Footer />
      </>
    )
  }
  export default AdminCategoria