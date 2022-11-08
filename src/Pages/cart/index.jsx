import React from 'react';
import { Footer, Navigation } from "../../Components";
import { useCart } from '../../Components/cartContext';
import  Tudo from './style';

 export const Cart = ({}) => {
 const cart = useCart()
 const remove = id => () =>{
  cart.rmvFromCart(id)
 }
 const changeQtd = (id) => (evt) =>{
  cart.changeQtd(id, Number(evt.target.value))
 }
 const itemsCount = Object.keys(cart.cart).length

 let valorTotal = 0

  return (
    <>
      <Navigation />
      <Tudo className="h-100 h-custom" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2">
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Carrinho de Compras</h1>
                    <h6 className="mb-0 text-muted"> {itemsCount > 0 && <span>{itemsCount}</span>} itens</h6>
                  </div>
                  <hr className="my-4"/>
                  {Object.keys(cart.cart).map((key, index) =>{
                    const {produto, qtd }  = cart.cart[key]
                    const subTotal = produto.valorUnitario*qtd
                    valorTotal += subTotal
                    
                  return(
                     
                  <div key={index} className="row mb-4 d-flex justify-content-between align-items-center"> 
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={produto.imagemUrl}
                        className="img-fluid rounded-3" alt="produto"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">{produto.nome}</h6>
                      <h6 className="text-black mb-0">{produto.categoria.nome}</h6>
                      <a type='submit' onClick={remove(key)}>
                        <small>(Remover item)</small>
                      </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                      <input defaultValue={qtd} type="number" onBlur={changeQtd(key)}
                        className="form-control form-control-sm" />
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">R$ {subTotal}</h6>
                    </div>
                  </div>
                  )
                  })}

                  <hr className="my-4"/>

                  <div className="pt-5">
                    <h6 className="mb-0"><a href="/" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Voltar a Loja</a></h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Resumo</h3>
                  <hr className="my-4"/>

                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">itens: {itemsCount > 0 && <span>{itemsCount}</span>}</h5>
                    <h5>R$ {valorTotal}</h5>
                  </div>

                  <h5 className="text-uppercase mb-3">Envio</h5>

                  <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Envio Padrão - GRÁTIS</option>
                    </select>
                  </div>

                  <h5 className="text-uppercase mb-3">Onde quer receber?</h5>

                  <div className="mb-10">
                  <select className="select">
                      <option value="1">Endereço 1</option>
                      <option value="2">SEndereço 2</option>
                      <option value="3">Endereço 3</option>
                    </select>
                  </div>

                  <hr className="my-4"/>

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total:</h5>
                    <h5>R${valorTotal}</h5>
                  </div>

                  <button type="button" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Comprar</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Tudo>
<Footer/>
      
    </>
)
}


