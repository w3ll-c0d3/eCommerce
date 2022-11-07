import { ShoppingCart } from '@material-ui/icons';
import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cart } from '../../Pages/cart';
import {useCart} from '../cartContext'
import { IconButton, Badge } from '@material-ui/core';

function Navigation() {
  const cart = useCart()
  const itemsCount = Object.keys(cart.cart).length

  return (
    <header id="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Grupo 4</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Página Inicial</Nav.Link>
              <Nav.Link href="#link">Quem somos</Nav.Link>
              {/* <button>
              <svg href='#cart' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
              </svg>{itemsCount > 0 && <span>({itemsCount})</span>}
              </button> */}
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
          <IconButton aria-lable="Show cart items" color="inherit">
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