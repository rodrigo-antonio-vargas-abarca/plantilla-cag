import {Badge} from "reactstrap";
import {ColoresBadge} from "@data/constants/Colores";

interface PropiedadesEtiqueta {
    color?: ColoresBadge;
    texto: string;
}

export const Etiqueta = ({color, texto} : PropiedadesEtiqueta) => {
    return (
        <Badge className={'size'} color={color}>{texto}</Badge>
    );
}