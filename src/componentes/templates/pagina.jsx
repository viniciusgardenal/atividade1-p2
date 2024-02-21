import Cabecalho from "./cabecalho";
import Menu from "./menu";


export default function Pagina(props) {
    return (
        <div className="margin">
            <Cabecalho texto="Descubra Seminovos"/>
            <Menu/>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
};