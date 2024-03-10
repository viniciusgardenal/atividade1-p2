
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function FormUsuarios(props) {
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
                <Form.Group className='mt-4' as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Primeiro Nome:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Sobrenome:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Gênero:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Selecione: </option>
                        <option value="1">Feminino</option>
                        <option value="2">Masculino</option>
                        <option value="3">Outro</option>
                        
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="XXX.XXX.XXX-XX"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Data de Nascimento:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        placeholder=""
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="CEP"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Cidade"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Selecione: </option>
                        <option value="1">Acre</option>
                        <option value="2">Alagoas</option>
                        <option value="3">Amapá</option>
                        <option value="4">Amazonas</option>
                        <option value="5">Bahia</option>
                        <option value="6">Ceará</option>
                        <option value="7">Espiríto Santo</option>
                        <option value="8">Goiás</option>
                        <option value="9">Maranhão</option>
                        <option value="10">Mato Grosso</option>
                        <option value="11">Mato Grosso do Sul</option>
                        <option value="12">Minas Gerais</option>
                        <option value="13">Pará</option>
                        <option value="14">Paraíba</option>
                        <option value="15">Paraná</option>
                        <option value="16">Pernambuco</option>
                        <option value="17">Piauí</option>
                        <option value="18">Rio de Janeiro</option>
                        <option value="19">Rio Grande do Norte</option>
                        <option value="20">Rio Grande do Sul</option>
                        <option value="21">Rondônia</option>
                        <option value="22">Roraima</option>
                        <option value="23">Santa Catarina</option>
                        <option value="24">São Paulo</option>
                        <option value="25">Sergipe</option>
                        <option value="26">Tocantis</option>
                        <option value="27">Distrito Federal</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="email@email.com"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Confirme seu e-mail:</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="email@email.com"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="******"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Confirme sua senha:</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="******"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            
            <div className='d-flex mt-4 justify-content-around'>
                <Button  type="submit">Cadastrar</Button>
                <Button className='btn-danger'  type="reset">Limpar</Button>
            </div>
            
        </Form>


    );
}