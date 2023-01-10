import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;








// import React from 'react'
// import { Link } from 'react-router-dom'
// // import styles from '../css/Navbar.module.css'

// const Navbar = () => {
//   return (
//     <div className='navbar'> 
//       <p style={{ color: "white" }}>Movies</p>
//         <Link to="/">Home</Link>
//         <Link to="/discover">Discover</Link>
//     </div>
    
//   )
// } 

// export default Navbar
// className={`row mt-5 display-flex justify-content-space-between ${styles.navbar}`}>