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
import HomeOrder from './layout/HomeOrder.jsx';


import LemonLogo from '../assets/images/LemonLogo.png';


/*
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'react-bootstrap';
*/


// 1. Create simple components for the different pages
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

{/*
        <div class="container-auto">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="nav-link navbar-brand" to="/">
              <img src={LemonLogo} width="250" alt="Little Lemon Logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/reservation">
                    Reservation
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/homeorder">
                    Home Order
                  </Link>
                </li>
              </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link to="/login">
                    <button type="button" class="btn btn-warning">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
*/}

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Link class="nav-link navbar-brand" to="/">
            <img src={LemonLogo} width="250" alt="Little Lemon Logo" />
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {/*  
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/about">About Us</Nav.Link>
            <Nav.Link to="/reservation">Reservation</Nav.Link>
            <Nav.Link to="/homeorder">Home Order</Nav.Link>
            <Nav.Link to="/login">Login</Nav.Link> */}
              <Link class="nav-link" to="/">Home</Link>
              <Link class="nav-link" to="/about">About Us</Link>
              <Link class="nav-link" to="/reservation">Reservation</Link>
              <Link class="nav-link" to="/homeorder">Home Order</Link>
              {/*
              <Link class="nav-link text-end" to="/login">
                <Button variant="warning">Login</Button>
              </Link>*/}
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
