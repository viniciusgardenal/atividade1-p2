import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Produtos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}