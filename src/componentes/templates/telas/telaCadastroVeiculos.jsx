import Pagina from "../pagina";
import FormVeiculos from "../formularios/formularioVeiculos";
export default function TelaCadastroVeiculos(props) {
    return (
        <div>
            <Pagina>
                <h2>Tela de Cadastro de Veiculos</h2>
                <FormVeiculos/>
            </Pagina>
        </div>
    )
}