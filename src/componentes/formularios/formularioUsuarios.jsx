import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import urlBaseUsuarios from '../utilitarios/config';

export default function FormUsuarios(props) {
    const [validado, setValidado] = useState(false);
    const [usuario, setUsuario] = useState(props.modoEdicao ? props.usuarioSelecionado : {
        cpf: '',
        nome: '',
        sobrenome: '',
        genero: '',
        dataNascimento: '',
        cep: '',
        cidade: '',
        estado: ''
    });
    
    async function enviarUsuarioBackend() {
        const resposta = await fetch(urlBaseUsuarios, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario),
        });
        const dados = await resposta.json();
        return dados;
    }

    async function alterarUsuarioBackend() {
        const resposta = await fetch(urlBaseUsuarios, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario),
        });
        const dados = await resposta.json();
        return dados;
    }

    function manipularMudanca(evento) {
        const componente = evento.currentTarget;
        setUsuario({ ...usuario, [componente.name]: componente.value });
    }
    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
    
        if (form.checkValidity() === false) {
          setValidado(true);
          return;
        }
    
        if (!props.modoEdicao) {
          enviarUsuarioBackend().then((dados) => {
            if (dados.status) {
              props.setListaDeUsuarios([...props.listaDeUsuarios, usuario]);
              props.setExibirTabela(true);
            }
            alert(dados.mensagem);
          })
          .catch((erro) => {
            alert('Não foi possível conectar ao Backend. Erro:' + erro.message);
          });
        } 
        else {
          alterarUsuarioBackend().then((dados) => {
            alert(dados.mensagem);
            if (dados.status) {
              const posicao = props.listaDeUsuarios.map(usuario => usuario.cpf).indexOf(props.usuarioSelecionado.cpf);
              let novaLista = [...props.listaDeUsuarios];
              novaLista[posicao] = usuario;
              props.setListaDeUsuarios(novaLista);
              props.setExibirTabela(true);
              
            }
          })
          .catch((erro) => {
            alert('Não foi possível conectar ao Backend. Erro:' + erro.message);
          });
        }
      }


    return (
        <Form className='container col-8' noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="">
                <Form.Group className='mt-4' as={Col} md="6">
                    <Form.Label>Primeiro Nome:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                        id='nome'
                        name='nome'
                        value={usuario.nome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6">
                    <Form.Label>Sobrenome:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                        id='sobrenome'
                        name='sobrenome'
                        value={usuario.sobrenome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4">
                    <Form.Label>Gênero:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Gênero"
                        id='genero'
                        name='genero'
                        value={usuario.genero}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="XXX.XXX.XXX-XX"
                        id='cpf'
                        name='cpf'
                        value={usuario.cpf}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4">
                    <Form.Label>Data de Nascimento:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        placeholder=""
                        id='dataNascimento'
                        name='dataNascimento'
                        value={usuario.dataNascimento}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4" >
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="CEP"
                        id='cep'
                        name='cep'
                        value={usuario.cep}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Cidade"
                        id='cidade'
                        name='cidade'
                        value={usuario.cidade}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="4">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Estado"
                        id='estado'
                        name='estado'
                        value={usuario.estado}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="email@email.com"
                        id='email'
                        name='email'
                        value={usuario.email}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6">
                    <Form.Label>Confirme seu e-mail:</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="email@email.com"
                        id='confirmeEmail'
                        name='confirmeEmail'
                        value={usuario.confirmeEmail}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="******"
                        id='senha'
                        name='senha'
                        value={usuario.senha}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-4' as={Col} md="6">
                    <Form.Label>Confirme sua senha:</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="******"
                        id='confirmeSenha'
                        name='confirmeSenha'
                        value={usuario.confirmeSenha}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Preencha a informação!</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <div className='d-flex mt-4 justify-content-around'>
                <Button className="btn-success" type="submit">{props.modoEdicao ? "Editar" : "Cadastrar"}</Button>
                <Button className='btn-danger' type="reset">Limpar</Button>
                <Button onClick={() => {
                    props.setModoEdicao(false);
                    props.setExibirTabela(true);
                }}>Voltar</Button>
            </div>

        </Form>


    );
}