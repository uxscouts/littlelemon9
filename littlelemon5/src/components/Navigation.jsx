import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './layout/Homepage.jsx';
import AboutUsMod from './layout/AboutUsMod.jsx';
import Reservation from './layout/Reservation.jsx';


// 1. Create simple components for the different pages
const Home = () => <Homepage/>;
const About = () => <AboutUsMod/>;
const ReservationMod = () => <Reservation/>;
const HomeOrder = () => <h2>Home Order</h2>;
const Login = () => <h2>Login</h2>;


const Navigation = () => {
  return (
    // 2. Wrap your application with the Router component
    <Router>
      <div className="App">
        {/* Navigation Bar using Link */}
        <nav>
          <ul>
            <li>
              {/* Use Link to navigate without page reloads */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/reservation">Reservation</Link>
            </li>
            <li>
                <Link to="/homeorder">Home Order</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>                         
          </ul>
        </nav>

        {/* 3. Define the routes using the Routes and Route components */}
        <Routes>
          {/* A Route maps a URL path to a specific component/element */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<ReservationMod />} />
          <Route path="/homeorder" element={<HomeOrder />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
