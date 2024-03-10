import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function FormLogin(props) {
    const [validado, setValidado] = useState(false);

    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        }
        else {
            setValidado(false);
        }
        setValidado(true);
    }

    return (


        <Form className='container col-md-5 card mt-4' noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="">
                
                <Form.Group className='mt-4' controlId="validationCustom02">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control
                        required
                        type="email"
                       
                        placeholder="email@email.com"
                        id='email'
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4'controlId="validationCustom02">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        required
                        type="password"
                      
                        placeholder="******"
                        id='senha'
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            
            <div className='d-flex mt-4 mb-4 justify-content-around'>
                <Button  type="submit">Entrar</Button>
            </div>
            
        </Form>


    );
}