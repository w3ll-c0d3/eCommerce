import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../cartContext';

export const Produto = ({ produto}) => {
  const containerStyle = {
    maxWidth: '100%',
    minHeight: '100%',
  }

  const imgStyle = {
    maxWidth: '100%',
    minHeight: '100%'
  }

  const cart = useCart()
  const add = produto =>()=>{
    cart.addToCart(produto)
  }
  

  // const handleAddToCart = () => onAddToCart(produto.id, 1);



  return (
    <>
        <Card style={ containerStyle }>
          <Card.Img variant="top" style={ imgStyle } src={produto.image} />
          <Card.Body>
            <Card.Title>{produto.name}</Card.Title>
            <Card.Text>
                {produto.description}
            </Card.Text>
            <Button onClick={add(produto)} variant="primary">Buy</Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default Produto