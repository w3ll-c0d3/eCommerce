import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import './style.css';

const AdminCategoria = () => {

    return (
      <>
      <Container>
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
      </>
    )
  }
  export default AdminCategoria