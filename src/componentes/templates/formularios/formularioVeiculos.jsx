
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
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
            <Row className="">
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Fabricante:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Audi"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Modelo:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="ABC"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Placa:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Placa"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Ano de Fabricação: </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ano"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Cor:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Cor"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Chassi:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="1BRAAAAAAA0100000"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Renavam:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="00000000000"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Quilometragem:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="00000000000"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>O Veículo é:</Form.Label>
                   {['radio'].map((type) => (
                    <div  className="">
                        <Form.Check
                            inline
                            label="Novo"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Usado"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                    </div>
                ))} 
                </Form.Group>
                
            </Row>
            <Row className="mb-3 mt-4">
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
                        Por favor, digite um CEP válido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <div className='d-flex justify-content-around'>
                <Button  type="submit">Cadastrar</Button>
                <Button className='btn-danger'  type="reset">Limpar</Button>
            </div>
            
        </Form>


    );
}