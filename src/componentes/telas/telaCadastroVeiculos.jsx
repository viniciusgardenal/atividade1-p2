import Pagina from "../templates/pagina";
import FormVeiculos from "../formularios/formularioVeiculos";
export default function TelaCadastroVeiculos(props) {
    return (
        <div>
            <Pagina>
                <h2 className="title-form mt-4">
                    <span className="h2">Cadastro de Veículos</span>
                </h2>
                <FormVeiculos/>
            </Pagina>
        </div>
    )
}