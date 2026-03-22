import { Nav, Navbar, Container, Button } from 'react-bootstrap';
/*import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';*/
import LogoComponent  from './LemonLogo'; 



function HeaderNav() {
  return (
     <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><LogoComponent/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* Use me-auto for right alignment */}
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Reservation</Nav.Link>
            <Nav.Link href="#link">Home Order</Nav.Link>
            <Nav.Link href="#link"><Button variant="warning">Login</Button></Nav.Link>
            {/* Additional Nav items or Dropdowns can go here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;