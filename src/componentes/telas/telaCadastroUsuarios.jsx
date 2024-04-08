import Pagina from "../templates/pagina";
import FormUsuarios from "../formularios/formularioUsuarios";
import TabelaUsuarios from "../tabelas/TabelaUsuarios";
import React, { useState, useEffect } from 'react';
import urlBaseUsuarios from '../../utilitarios/urlBaseUsuarios';
export default function TelaCadastroUsuarios(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({});
    const [modoEdicao, setModoEdicao] = useState(false);

    useEffect(() => {
        fetch(urlBaseUsuarios,{method: "GET"})
        .then(resposta => resposta.json())
        .then(usuarios => setListaDeUsuarios)
    }, [])
    
    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h1>Lista de Usuários</h1>
                    <TabelaUsuarios listaDeUsuarios={listaDeUsuarios} 
                    setExibirTabela={setExibirTabela}
                    setListaDeUsuarios={setListaDeUsuarios}
                    setUsuarioSelecionado={setUsuarioSelecionado}
                    setModoEdicao={setModoEdicao}/>
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
                    setListaDeUsuarios={setListaDeUsuarios}
                    usuarioSelecionado={usuarioSelecionado}
                    setModoEdicao={setModoEdicao}
                    modoEdicao={modoEdicao}/>
                </Pagina>
            </div>
        )
    }
}