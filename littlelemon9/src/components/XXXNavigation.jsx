import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



/*
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
*/

import Homepage from './layout/Homepage.jsx';
import AboutUsMod from './layout/AboutUsMod.jsx';
import Reservation from './layout/Reservation.jsx';
import BookingPage from './layout/BookingPage.jsx';
import HomeOrder from './layout/HomeOrder.jsx';


import LemonLogo from '../assets/images/LemonLogo.png';


/*
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'react-bootstrap';
*/

const Home = () => <Homepage/>;
const About = () => <AboutUsMod/>;
const ReservationMod = () => <Reservation/>;
const HomeOrderMod = () => <HomeOrder/>;
const Login = () => <h2>Login</h2>;

/*
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
*/


const Navigation = () => {
  return (
    <>
      <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Link class="nav-link navbar-brand" to="/">
            <img src={LemonLogo} width="250" alt="Little Lemon Logo" />
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link class="nav-link" to="/">Home</Link>
              <Link class="nav-link" to="/about">About Us</Link>
              <Link class="nav-link" to="/reservation">Reservation</Link>
              <Link class="nav-link" to="/homeorder">Home Order</Link>
          </Nav>
          <Nav className="mr">
              <Link class="nav-link text-end" to="/login">
                <Button variant="warning">Login</Button>
              </Link>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<ReservationMod />} />
          <Route path="/homeorder" element={<HomeOrderMod />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navigation;
