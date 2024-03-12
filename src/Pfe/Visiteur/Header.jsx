import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAut from '../route/useAut';

const NavbarApp = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">ParaOnline</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/products" className="nav-link">Products</NavLink> 
            <NavAuth />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const NavAuth = () => {
  const accesToken = useAut();
  if (accesToken === 'client') {
    return <>
      <NavLink to="/profil" className="nav-link">Profil</NavLink> </>
  }
  return (

    <>
      <NavLink to="/login" className="nav-link">Login</NavLink>
      <NavLink to="/singup" className="nav-link">SignUp</NavLink>
    </>)
}
export default NavbarApp;
