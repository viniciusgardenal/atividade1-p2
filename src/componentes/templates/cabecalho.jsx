import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return (
        <Alert variant="light" className="text-center bg-danger color-white"><h1><img src="/assets/car.svg"/>{props.texto}</h1></Alert>
    );
}