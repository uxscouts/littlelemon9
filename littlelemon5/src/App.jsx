import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout.jsx';
import Navigation from './components/Navigation'; 
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <>
    <Navigation/>
      <Layout>
      </Layout>
    </>
  );
}



export default App;

