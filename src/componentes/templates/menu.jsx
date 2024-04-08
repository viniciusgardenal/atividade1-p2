import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import contextoUsuario from '../contextos/contextoUsuario';
import { NavbarBrand } from 'react-bootstrap';
import React from 'react';

export default function Menu(props) {
  const [usuario, setUsuario] = useContext(contextoUsuario);
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand>
          <Link className='text-decoration' to={"/"}>Cadastramento</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavbarBrand>
              <Link className='text-decoration' to={"/carros"}>Carros</Link>
            </NavbarBrand>
            <NavbarBrand>
              <Link className='text-decoration' to={"/usuarios"}>Usuários</Link>
            </NavbarBrand> 
          </Nav>
          <Nav>
            <Navbar.Brand>Usuario: {usuario.nome}</Navbar.Brand>
            <Navbar.Brand href="#" onClick={() => { setUsuario({ nome: '', logado: false }) }}>Logout</Navbar.Brand>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}