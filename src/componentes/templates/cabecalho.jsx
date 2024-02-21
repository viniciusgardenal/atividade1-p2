import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return (
        <Alert variant="light" className="text-center bg-success color-white margin">
            <div className="margin">
                <img className="px-5" src="https://shoppingdovalers.com.br/assets/comercial/icone9_comercial-site_vale.png" />
                <h1 className="margin">
                    {props.texto}
                </h1>
            </div>

        </Alert>

    );
}