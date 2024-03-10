import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="/">Cadastramento</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/carros">Carros</Nav.Link>
            <Nav.Link href="/usuarios">Usuários</Nav.Link>
            <NavDropdown title="Filtros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">País</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Região
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sair para o marketplace
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Brand href="/login">Login</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}