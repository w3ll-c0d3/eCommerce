import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../cartContext';

export const Produto = ({ produto}) => {
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
            <Card.Title>{produto.nome}</Card.Title>
            <Card.Text>
                {produto.descricao}
            </Card.Text>
            <Card.Subtitle style={ subTitle }>Valor R$<span> {produto.valorUnitario}</span></Card.Subtitle>
            <Button onClick={add(produto)} variant="primary">Buy</Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default Produto