import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Produto = ({ produto }) => {
  const containerStyle = {
    cursor: 'pointer',
    maxWidth: '100%',
    minHeight: '100%',
  }

  const imgStyle = {
    maxWidth: '100%',
    height: '150px'
  }

  const bodyStyle = {
    padding: "11px",
  }

  const subTitle = {
    margin: "5px 0 5px 0"
  }

  return (
    <>
        <Card style={ containerStyle } id={produto.id}>
          <Card.Img variant="top" style={ imgStyle } src={produto.image} />
          <Card.Body style={bodyStyle}>
            <Card.Title>{produto.name}</Card.Title>
            <Card.Text>
                {produto.description}
            </Card.Text>
            <Card.Subtitle style={ subTitle }>Valor R$<span> {produto.price}</span></Card.Subtitle>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default Produto