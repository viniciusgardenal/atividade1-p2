import Pagina from "../templates/pagina";

import {useContext} from "react";
import { useState } from "react";
import contextoUsuario from "../contextos/contextoUsuario";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from "react";

export default function TelaCadastroLogin(props) {
    const [usuario, setUsuario] = useContext(contextoUsuario);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    function verificarCredenciais() {
        if (nome === 'admin' && senha === 'admin') {
            setUsuario({
                nome: '',
                logado: true
            });
        }
    }
    return (
        <div>
            <Pagina>
                <h2 className="title-form mt-4"><span className="h2">Bem-vindo.</span></h2>
                <Form className='container col-md-5 card mt-4' noValidate >
                    <Row>
                        <Form.Group className='mt-4' controlId="validationCustom02">
                            <Form.Label>Usuário:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                value={nome}
                                placeholder="nome de usuário"
                                id='nome'
                                onChange={(e) => setNome(e.target.value)}
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