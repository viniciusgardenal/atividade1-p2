import { Button, Table } from "react-bootstrap"
export default function TabelaUsuarios(props) {
    return (
        <div className="container col-8">
            <h2>Usuários</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Gênero</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>CEP</th>
                        <th>Cidade/Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaDeUsuarios?.map((usuario, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{usuario.nome}</td> 
                                    <td>{usuario.sobrenome}</td>
                                    <td>{usuario.genero}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>{usuario.dataNascimento}</td>
                                    <td>{usuario.cep}</td>
                                    <td>{usuario.cidade + "/" + usuario.estado}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button onClick={() => {
                    props.setExibirTabela(false);
                }}>Cadastrar novo Usuário</Button>
        </div>
    )
}