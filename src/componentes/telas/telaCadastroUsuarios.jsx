import Pagina from "../templates/pagina";
import FormUsuarios from "../formularios/formularioUsuarios";
export default function TelaCadastroUsuarios(props) {
    return (
        <div>
            <Pagina>
                <h2 className="title-form mt-4">
                    <span className="h2">
                        Cadastro de Usuários
                    </span>
                </h2>
                <FormUsuarios/>
            </Pagina>
        </div>
    )
}