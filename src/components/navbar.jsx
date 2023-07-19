import { Badge, Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import * as Unicons from '@iconscout/react-unicons';


export function Nav({cartCount}) {

  const handleClickOpenCart = () => {
    // Lógica para abrir el carrito
    console.log('Carrito abierto');
  };

  return (
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
  );
}



