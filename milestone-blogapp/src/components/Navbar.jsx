import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "../styles/NavbarStyle.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
function Header() {
 
  return (
    <Navbar>
      <Container fluid className='head'>
        <img className='img' src="https://pbs.twimg.com/profile_images/1549122078628093955/vmjCyuAq_400x400.jpg" width="100px" alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <NavLink className='dash nav-link' to="/">DASHBOARD</NavLink>
            <NavLink className="nav-link"  to="new-blog">NEW BLOG</NavLink>
            <NavLink className="nav-link" to="about">ABOUT</NavLink>
            
          </Nav>
        
     
        </Navbar.Collapse>
            <NavLink to="login" className='icon btn border-dark' variant="outline-danger ">{<AiOutlineUserAdd/>}</NavLink>
      </Container>
    </Navbar>
  );
}

export default Header;