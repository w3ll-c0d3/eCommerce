import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import './style.css';
import { ecommerceAPI } from "../../Services";
import Button from 'react-bootstrap/Button';

const AdminCategoriaEditar = () => {
    const [nome, setNome] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [id, setId] = useState(null)
    
    function getId(val) {
      setId(val.target.value)
    }

    function getNome(val) {
      setNome(val.target.value)
    }

    function getDescricao(val) {
      setDescricao(val.target.value)
    }
    
    const novaCategoria = {nome: nome, descricao: descricao};
    const updateCategoria = (e) => {
      e.preventDefault();
      ecommerceAPI.put(`/categoria/${id}`, novaCategoria).then(res => console.log("Updating...", res)).catch(err => console.log(err))
      console.alert("Categoria atualizada com sucesso!")
    }

    return (
      <>
      <Container>
        <Form>
          <div class="row">
            <label class="texto">Id Categoria:</label>
            <input type="number" onChange={getId}/>
          </div>
          <div class="row">
            <label class="texto">Nome:</label>
            <input type="text" onChange={getNome}/>
          </div>
          <div class="row">
            <label>Descrição:</label>
            <textarea type="text" onChange={getDescricao}/>
          </div>
          <Button type="button" class="button-options-cadastrar" onClick={updateCategoria}>Salvar</Button>
        </Form>
      </Container>
      </>
    )
  }
  export default AdminCategoriaEditar