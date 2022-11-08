import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import './style.css';
import { ecommerceAPI } from "../../Services";

const AdminCategoria = (props) => {
    const [nome, setNome] = useState(null)
    const [descricao, setDescricao] = useState(null)
    
    function getNome(val) {
      setNome(val.target.value)
    }

    function getDescricao(val) {
      setDescricao(val.target.value)
      console.warn(val.target.value)
    }
    
    const novaCategoria = {nome: nome, descricao: descricao};
    const postCategoria = (e) => {
      e.preventDefault();
      ecommerceAPI.post("/categoria", novaCategoria).then(res => console.log("Posting...", res)).catch(err => console.log(err))
    }

    return (
      <>
      <Container>
        <Form>
          <div class="row">
            <label class="texto">Nome:</label>
            <input type="text" onChange={getNome}/>
          </div>
          <div class="row">
            <label>Descrição:</label>
            <textarea type="text" onChange={getDescricao}/>
          </div>
          <button type="button" class="button-options-cadastrar" onClick={postCategoria}>Salvar</button>
        </Form>
      </Container>
      </>
    )
  }
  export default AdminCategoria