import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import contextoUsuario from '../contextos/contextoUsuario';
import { NavbarBrand } from 'react-bootstrap';
import React from 'react';

export default function Menu(props) {
  const [usuario, setUsuario] = useContext(contextoUsuario);
  return (
      <Navbar>
        <Container>
          <Navbar.Collapse>
            <Nav className='me-auto'>
              <Navbar>Cadastramento</Navbar>
              <NavDropdown>
                <NavDropdown.Item ><Link className='text-decoration'to={"/carros"}>Carros</Link></NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item><Link className='text-decoration' to={"/usuarios"}>Usuários</Link></NavDropdown.Item>
              </NavDropdown>
              <Navbar>Usuario: {usuario.nome}</Navbar>
              <Nav.Link href='#' onClick={() => { setUsuario({ nome: '', logado: false }) }}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}