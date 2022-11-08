import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './style.css';
import { Section } from "./style.js";
import { Footer, Navigation, CadastrarProdutos, EditarProduto, DeletarProduto, AdminCategoria, AdminCategoriaEditar, AtualizarPedido, AtualizarCliente, CadastroCliente } from "../../Components";

const AdminIndex = () => {

    var showdate = new Date();
    var displayTodaysDate = showdate.getFullYear() + "-" + showdate.getMonth() + "-" + showdate.getDate() + "T";
    var displayTime = showdate.getHours()+":"+showdate.getMinutes()+":"+showdate.getSeconds().toFixed(3)+"Z";
    var todaysDate = displayTodaysDate+displayTime;
    console.log(todaysDate) 

    return (
      <>
      <Navigation />
      <Container>
        <Section id="admin-sec">
            <div className="row">
                <h2>Admin</h2>
                <div className="col">
                    <a href="#categorias-sec">
                        <button type="button" className="button-options-cadastrar2">Categorias</button>
                    </a>
                </div>
                <div className="col">
                    <a href="#clientes-sec" >
                        <button type="button" className="button-options-editar">Clientes</button>
                    </a>
                </div>
                <div className="col">
                    <a href="#produtos-sec">
                        <button type="button" className="button-options-view">Produtos</button>
                    </a>
                </div>
                <div className="col">
                    <a href="#pedidos-sec" >
                        <button type="button" className="button-options-del">Pedidos</button>
                    </a>
                </div>
            </div>
        </Section>
        <Section id="categorias-sec">
            <div className="row">
                <h2>Categorias</h2>
                <h3>Cadastrar</h3>
                <AdminCategoria/>
                <h3>Atualizar</h3>
                <AdminCategoriaEditar />
            </div>
        </Section>
        <Section id="produtos-sec">
            <div className="row">
                <h2>Produtos</h2>
                <h3>Cadastrar</h3>
                <CadastrarProdutos data={todaysDate}/>
                <h3>Atualizar</h3>
                <EditarProduto />
                <h3>Deletar Produto</h3>
                <DeletarProduto />
            </div>
        </Section>
        <Section id="pedidos-sec">
            <div className="row">
                <h2>Pedidos</h2>
                <h3>Atualizar</h3>
                <AtualizarPedido />
            </div>
        </Section>
        <Section id="clientes-sec">
            <div className="row">
                <h2>Clientes</h2>
                <h3>Cadastrar</h3>
                <CadastroCliente/>
                <h3>Atualizar</h3>
                <AtualizarCliente />
            </div>
        </Section>
      </Container>
      <Footer />
      </>
    )
  }
  
  export default AdminIndex