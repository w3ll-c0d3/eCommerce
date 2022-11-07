import React from 'react'
import { Navigation } from "../../Components";
import { useCart } from '../../Components/cartContext';
import Produto from '../../Components/Produtos/Produto/Produto';
import Produtos from '../../Components';
import TituloCart, { Fundo } from './style';

 export const Cart = ({produto}) => {
 const cart = useCart()
  return (
    <>
      <Navigation />
      <section class="h-100 h-custom" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <TituloCart class="fw-bold mb-0 text-black">Carrinho de Compras</TituloCart>
                    <h6 class="mb-0 text-muted"> X items</h6>
                  </div>
                  <hr class="my-4"/>
                  {Object.keys(cart.cart).map(key =>{
                    
                  return(

                  <Fundo class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                        class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">Camisa</h6>
                      <h6 class="text-black mb-0">Cotton T-shirt</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i class="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        class="form-control form-control-sm" />

                      <button class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">R$ 44.00</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </Fundo>
                  )
                  })}

                  <hr class="my-4"/>

                  <div class="pt-5">
                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Voltar a Loja</a></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Resumo</h3>
                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items X</h5>
                    <h5>R$ 132.00</h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Envio</h5>

                  <div class="mb-4 pb-2">
                    <select class="select">
                      <option value="1">Envio Padrão - R$10.00</option>
                      <option value="2">Sedex - R$30.00 </option>
                      <option value="3">JadLog - R$ 40.00</option>
                    </select>
                  </div>

                  <h5 class="text-uppercase mb-3">Tem um CUPOM?</h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Digite o código</label>
                    </div>
                  </div>

                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total:</h5>
                    <h5>R$ 137.00</h5>
                  </div>

                  <button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Comprar</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </>
)
}


