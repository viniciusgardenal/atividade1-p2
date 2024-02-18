
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
export default function FormVeiculos(props) {
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


        <Form className='container col-8' noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="mb-3 mt-4">
                <Form.Select className='container mt-4'>
                    
                    <option>Marca:</option>
                    <option value="1">Citroën</option>
                    <option value="2">Chevrolet</option>
                    <option value="3">Fiat</option>
                    <option value="4">Honda</option>
                    <option value="5">Hyundai</option>
                    <option value="6">Nissan</option>
                    <option value="7">Peugeot</option>
                    <option value="8">Renault</option>
                    <option value="9">Toyota</option>
                    <option value="10">Volkswagen</option>
                </Form.Select>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="modelo"
                        defaultValue="C3"
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Placa:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Placa"
                        defaultValue="BEE 4R22"
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Ano de Fabricação: </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ano"
                        defaultValue="2023"
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Cor:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Cor"
                        defaultValue="Prata"
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4'  as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Chassi:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="1BRAAAAAAA0100000"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4'  as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Renavam:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="00000000000"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, digite uma cidade válida.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control type="text" placeholder="Estado" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, digite um estado válido.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control type="text" placeholder="00000-000" required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, digite cum CEP válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Cadastrar</Button>
        </Form>


    );
}