import Pagina from "../templates/pagina";
import FormLogin from "../formularios/formularioLogin";
export default function TelaCadastroUsuarios(props) {
    return (
        <div>
            <Pagina>
                <h2 className="title-form mt-4"><span className="h2">Bem-vindo.</span></h2>
                <FormLogin/>
            </Pagina>
        </div>
    )
}