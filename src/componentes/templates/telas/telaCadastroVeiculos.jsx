import Pagina from "../pagina";
import FormVeiculos from "../formularios/formularioVeiculos";
export default function TelaCadastroVeiculos(props) {
    return (
        <div>
            <Pagina>
                <h2 className="title-form mt-4">Cadastro de Veículos</h2>
                <FormVeiculos/>
            </Pagina>
        </div>
    )
}