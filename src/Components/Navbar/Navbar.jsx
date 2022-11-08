import { ShoppingCart } from '@material-ui/icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useCart} from '../cartContext'
import { IconButton, Badge } from '@material-ui/core';

function Navigation() {
  const cart = useCart()
  const itemsCount = Object.keys(cart.cart).length

  return (
    <header id="header">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/"> <img src="https://i.ibb.co/3k6NHZK/4u.png" alt="4You" width="65" height="35"/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Página Inicial</Nav.Link>
              <Nav.Link href="/quemsomos">Quem somos</Nav.Link>
              <Nav.Link href="/Admin">Admin</Nav.Link>
              {/* <Link to={`/quemsomos`}>Quem Somos</Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="/cart">
          <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={itemsCount > 0 && <span>{itemsCount}</span>} color="secondary">
                    <ShoppingCart />
                </Badge>
          </IconButton>
          </Nav.Link>
          {/* <Nav.Link href='/cart' >
            <button>
            Carrinho
            </button>
          {itemsCount > 0 && <span>({itemsCount})</span>}
          </Nav.Link> */}
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation