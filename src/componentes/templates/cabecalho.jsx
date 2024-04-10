import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return (
        <Alert variant="light" className="text-center bg-success color-white margin">
            <div className="margin">
                <h1 className="margin">
                    {props.texto}
                </h1>
            </div>

        </Alert>

    );
}