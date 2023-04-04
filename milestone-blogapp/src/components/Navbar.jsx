import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "../styles/NavbarStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiOutlineUserAdd } from 'react-icons/ai';
function Header() {
 
  return (
    <Navbar>
      <Container fluid className='head'>
        <Navbar.Brand className='dash' href="#">DASHBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">NEW BLOG</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            
          </Nav>
        
            <Button className='icon' variant="outline-danger ">{<AiOutlineUserAdd/>}</Button>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;