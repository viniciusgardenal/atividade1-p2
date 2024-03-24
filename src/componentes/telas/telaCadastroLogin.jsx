import Pagina from "../templates/pagina";
import FormLogin from "../formularios/formularioLogin";
import { useContext, useState } from "react";
import contextoUsuario from "../contextos/contextoUsuario.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function TelaCadastroLogin(props) {
    const [usuario, setUsuario] = useContext(contextoUsuario);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [validado, setValidado] = useState(false);
    function verificarCredenciais() {
        if (email === 'admin' && senha === 'admin') {
            setUsuario({
                email: 'email',
                logado: true
            });
        }
    }
    return (
        <div>
            <Pagina>
                <h2 className="title-form mt-4"><span className="h2">Bem-vindo.</span></h2>
                <Form className='container col-md-5 card mt-4' noValidate >
                    <Row className="">
                        <Form.Group className='mt-4' controlId="validationCustom02">
                            <Form.Label>E-mail:</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                value={email}
                                placeholder="email@email.com"
                                id='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-4' controlId="validationCustom02">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                value={senha}
                                placeholder="******"
                                id='senha'
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className='d-flex mt-4 mb-4 justify-content-around'>
                        <Button onClick={verificarCredenciais} type="submit">Entrar</Button>
                    </div>
                </Form>
            </Pagina>
        </div>
    )
}