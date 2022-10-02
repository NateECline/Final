import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from "react-bootstrap"
import { GamesList } from './GamesList';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { default as About } from './pages/About'
import { default as Home } from './pages/Home'
import { default as Astronomy } from './pages/Astronomy'










export default function MyNav() {
  
  
  return(
    <Router>
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Final Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/GamesList">Games</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Astronomy">Astronomy</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    
      <main>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/GamesList' element={<GamesList />}/>
          <Route path='/About' element={<About />}/> 
          <Route path='/Astronomy' element={<Astronomy />}/> 
        </Routes>
      </div>
      </main>
    </Router>

    
  );
}
