
import React from 'react'
import { Container, Button, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <>
      <Navbar bg="black"  variant="dark" >
  <Container fluid>
    <Navbar.Brand>
        <img
          alt=""
          src="https://media2.giphy.com/media/fAD9SMlNWp0k84Ra1G/giphy.gif"
          width="200"
          height="100"
        />{' '}
      
      </Navbar.Brand>
      
   
    <Nav
        className="me-auto my-2 my-lg-0"
      >
        <Nav.Link > <Link to="/" style={{textDecoration:"none", fontWeight:"400",fontSize:"20px",margin:"30px"}}>Home</Link></Nav.Link>
        <Nav.Link ><Link to="/about" style={{textDecoration:"none",fontWeight:"400",fontSize:"20px",margin:"30px"}}>About</Link></Nav.Link>
        <Nav.Link ><Link to="/games" style={{textDecoration:"none",fontWeight:"400",fontSize:"20px",margin:"30px"}}>Games</Link></Nav.Link>
        <Nav.Link ><Link to="/contact" style={{textDecoration:"none",fontWeight:"400",fontSize:"20px",margin:"30px"}}>Contact</Link></Nav.Link>
        <Nav.Link ><Link to="/add" style={{textDecoration:"none",fontWeight:"400",fontSize:"20px",margin:"30px"}}>Add New Game</Link></Nav.Link>
      </Nav> 
        
  </Container>
</Navbar>
      

</>
    </div>
  )
}

export default Header 