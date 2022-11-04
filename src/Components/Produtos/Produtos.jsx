import React from 'react';
import { Grid } from "@material-ui/core";
import Produto from "./Produto/Produto";

// Produtos mocados
const produtos = [
    {id: 1, name: "Shoes", description: "Running shoes.", image: "https://png.pngitem.com/pimgs/s/555-5550642_nike-shoe-png-transparent-png.png", price: "65" },
    {id: 2, name: "Macbook", description: "Apple Macbook.", image: "https://w7.pngwing.com/pngs/522/727/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-thumbnail.png", price: "105" },
    {id: 3, name: "Macbook", description: "Apple Macbook.", image: "https://w7.pngwing.com/pngs/522/727/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-thumbnail.png", price: "105" },
    {id: 4, name: "Macbook", description: "Apple Macbook.", image: "https://w7.pngwing.com/pngs/522/727/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-thumbnail.png", price: "105" }
];
////////////////////

const Produtos = () => {
  return (
    <main>
        <Grid container justify="center" spacing={4}>
            {produtos.map((product) =>
                <Grid item key={product.id} xs={10} sm={5} md={2.5} lg={2}>
                    <Produto produto={product} /> 
                </Grid>
            )}
        </Grid>
    </main>
  )
}

export default Produtos