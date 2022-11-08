import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../cartContext';
import {Bto, Dbt} from './style'

export const Produto = ({ produto}) => {
  const containerStyle = {
    cursor: 'pointer',
    maxWidth: '100%',
    minHeight: '100%'
    
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

  const cart = useCart()
  const add = produto =>()=>{
    cart.addToCart(produto)
  }
  

  // const handleAddToCart = () => onAddToCart(produto.id, 1);



  return (
    <>
        <Card style={ containerStyle } id={produto.id}>
          <Card.Img variant="top" style={ imgStyle } src={produto.imagemUrl} />
          <Card.Body style={bodyStyle}>
            <Card.Title><h4>{produto.nome}</h4></Card.Title>
            <Card.Text>
                {produto.categoria.nome}
            </Card.Text>
            <Card.Subtitle style={ subTitle }><span><b>R$ {produto.valorUnitario}</b></span></Card.Subtitle>
          </Card.Body>
          <div style={{padding:"1rem"}}>

            <Bto  onClick={add(produto)} variant="primary">Comprar</Bto>
          </div>
        </Card>
    </>
  )
}

export default Produto;