import Cabecalho from "./cabecalho";
import Menu from "./menu";


export default function Pagina(props) {
    return (
        <div>
            <Cabecalho texto="Sistema de Cadastro de Veículos"/>
            <Menu/>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
};