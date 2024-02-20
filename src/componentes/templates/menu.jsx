import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu(props) {
    return (
        <Navbar  className="bg-body-secondary ">
            <Container>
                <Navbar className="bg-body-secondary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="./assets/sedan.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Cadastramento geral
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </Navbar>
    );
}