import Pagina from "../templates/pagina";
import FormUsuarios from "../formularios/formularioUsuarios";
import TabelaUsuarios from "../tabelas/TabelaUsuarios";
import React, { useState } from 'react';
export default function TelaCadastroUsuarios(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h1>Lista de Usuários</h1>
                    <TabelaUsuarios listaDeUsuarios={[listaDeUsuarios]} setExibirTabela={setExibirTabela}/>
                </Pagina>
            </div>   
        )
    }     
    else {
        return (
            <div>
                <Pagina>
                    <h2 className="title-form mt-4">
                        <span className="h2">
                            Cadastro de Usuários
                        </span>
                    </h2>
                    <FormUsuarios 
                    setExibirTabela={setExibirTabela}
                    listaDeUsuarios={listaDeUsuarios}
                    setListaDeUsuarios={setListaDeUsuarios}/>
                </Pagina>
            </div>
        )
    }
}