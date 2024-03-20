import React from 'react';
import {Button} from 'reactstrap';
import {TamanoBoton} from "@data/constants/Tamanos";
import Colores from "@data/constants/Colores";
import Icono from "@commonComponents/Icono";
import {tipoIconos} from "@data/constants/Iconos";

interface BotonIconoProps {
    color?: Colores;
    tamano?: TamanoBoton;
    icono?: tipoIconos;
    texto?: string;
    relleno?: boolean;
    onClick: () => void;
}

const Boton = ({color = Colores.PRIMARIO, tamano= TamanoBoton.REGULAR, icono, relleno = true, texto, onClick} : BotonIconoProps) => {
    return (
        <Button outline={!relleno} className={`btn mx-2`} color={color} size={tamano} onClick={onClick} tabIndex={-1}>
            {texto && <span className="ml-2">{texto}</span>}
            {icono && <Icono icono={icono}></Icono>}
        </Button>
    );
};

export default Boton;
