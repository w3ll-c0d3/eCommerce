import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import Produto from "./Produto/Produto";
import { useCart } from '../cartContext';
import { ecommerceAPI } from '../../Services';

// Produtos mocados
// const produtos = [
//     {id: 1, name: "Shoes", description: "Running shoes.", image: "https://png.pngitem.com/pimgs/s/555-5550642_nike-shoe-png-transparent-png.png", price: "65" },
//     {id: 2, name: "Macbook", description: "Apple Macbook.", image: "https://w7.pngwing.com/pngs/522/727/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-thumbnail.png", price: "105" },
//     {id: 3, name: "Macbook", description: "Apple Macbook.", image: "https://w7.pngwing.com/pngs/522/727/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-thumbnail.png", price: "105" },
//     {id: 4, name: "Macbook", description: "Apple Macbook.", image: "https://w7.pngwing.com/pngs/522/727/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-thumbnail.png", price: "105" }
// ];
////////////////////



export const Produtos = () => {
    const [produto, setProduto] = useState([])
    const cart = useCart()

    const getProdutos = async () => {
        var item = await ecommerceAPI.get(`/produtos`)
        setProduto(item.data.content)
    }

    useEffect(() => {
        getProdutos()
    }, [])
  return (
    <main>
        <Grid container justifyContent="center" spacing={10}>
            {produto.map((product) =>
                <Grid item key={product.id} xs={10} sm={5} md={2} lg={2}>
                    <Produto produto={product} /> 
                </Grid>
            )}
        </Grid>
        <pre>
            {JSON.stringify(cart.cart, null, 2)}
        </pre>
    </main>
  )
}

export default Produtos