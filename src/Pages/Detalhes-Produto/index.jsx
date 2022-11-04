import React from 'react'
import { Navigation } from "../../Components";
import { Grid } from "@material-ui/core";
import ContainerStyled, { DescriptionStyled, ContainerButton, DescriptionText } from "./style";
import { Button } from "./style";
import Image from 'react-bootstrap/Image';

const DetalhesProduto = () => {

  return (
    <>
        <Navigation />
        <main>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={10} sm={10} md={2.5} lg={11}>
                    <ContainerStyled>
                      <Image src="https://mdbootstrap.com/img/new/slides/041.webp" width="100%" height="100%" alt="nome-do-produto"></Image>
                    </ContainerStyled>
                    <DescriptionStyled>
                        <h3>Título do produto</h3>
                        <DescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis adipisci odit illum itaque. Officia quis iusto adipisci necessitatibus ducimus sequi velit animi, laborum similique culpa temporibus unde a dolorem.
                        Harum voluptas excepturi iste cupiditate quam odit earum, nisi quasi velit dolore quos, nulla modi, non eos expedita saepe id eum necessitatibus. Et, impedit. Dicta pariatur culpa at maiores corporis.
                        A hic delectus dolorem reprehenderit quas velit odio quaerat laborum temporibus ea animi repellat provident, repellendus exercitationem veniam eveniet in tempore voluptatum at facere ipsam similique sed? Repellat, explicabo reiciendis.
                        Amet voluptatum, repudiandae voluptates, quam dolore excepturi asperiores dignissimos error non cum sit modi necessitatibus tenetur vel illum fugit ducimus iste pariatur. Doloremque doloribus magnam sed nulla ipsum iusto magni?
                        Aliquam, possimus quo. Illo quae ab ut quo. Quia magnam ipsum provident quos quidem officia nihil rerum nemo, laudantium earum est perspiciatis mollitia sunt molestiae aut ducimus quo voluptatem quis?</DescriptionText>
                    </DescriptionStyled>
                    <ContainerButton>
                      <Button>Comprar</Button>
                      <Button>Adicionar ao Carrinho</Button>
                    </ContainerButton>
                </Grid>
            </Grid>
        </main>
    </>
  )
}

export default DetalhesProduto