import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Footer from './components/layout/Footer.jsx';

import Homepage from './components/layout/Homepage.jsx';
import AboutUsMod from './components/layout/AboutUsMod.jsx';
//import Reservation from './components/layout/Reservation.jsx';
import BookingPage from './components/layout/BookingPage.jsx';
import HomeOrder from './components/layout/HomeOrder.jsx';


import LemonLogo from './assets/images/LemonLogo.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

// this useState setter is for the testField01
const [testField01, setTestField01] = useState('Test Field Value');
const updateTestField01 = (somevalue) => {
    setTestField01(somevalue);
}

const Home = () => <Homepage/>;
const About = () => <AboutUsMod/>;
//const ReservationMod = () => <Reservation/>;
const BookingPageMod = () => <BookingPage testField01={testField01} onFieldChange={updateTestField01}/>;
const HomeOrderMod = () => <HomeOrder/>;
const Login = () => <h2>Login</h2>;



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
            {/*  <Link class="nav-link" to="/reservation">Reservation</Link> */}
              <Link class="nav-link" to="/Booking">Booking</Link>
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

    <div className="container">
      <p>Test Field 01: {testField01} </p>
    </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        {/*  <Route path="/reservation" element={<ReservationMod />} /> */}
          <Route path="/Booking" element={<BookingPageMod />} />
          <Route path="/homeorder" element={<HomeOrderMod />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer/> 
    </>
  );
};

export default App;


