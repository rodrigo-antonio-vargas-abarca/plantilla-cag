import {IconoProps, Iconos} from "@data/constants/Iconos";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Icono = (propiedades: IconoProps) => {
    return (
        <FontAwesomeIcon icon={propiedades.icono}
                         style={{
                             padding: 0,
                             marginLeft: 2,
                             marginRight: 2,
                             height: propiedades.tamano,
                             width: propiedades.tamano
                         }} className={`font-${propiedades.color}`}/>);
};

export default Icono;