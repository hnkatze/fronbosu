import { Badge, Button, Form, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';
import '../style/cartItem.css';

export function Nav({ cartCount, cartItems, setCartItems, setCartCount }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleClickOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
   
    const totalQuantity = updatedCartItems.reduce((total, item) => total + item.cantidad, 0);
    setCartCount(totalQuantity);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Bodega Suyapa</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="primary" onClick={handleClickOpenCart}>
            <Unicons.UilShoppingBag /> <Badge bg="secondary">{cartCount}</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </Container>
      </Navbar>
     {/* Carrito como un Modal */}
      <Modal show={isCartOpen} onHide={handleCloseCart} centered>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Mostrar el contenido del carrito aquí */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.nombre}</h4>
              <p>Precio: L.{item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <Unicons.UilX  size="28"  onClick={() => handleRemoveFromCart(item.id)}/>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          {/* Botones del footer del modal */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
