import {VoidRef} from "@data/tags";
import Link from "next/link";
import {useAccionesPagina, useEstadoAccionesPagina} from "@hooks/common/AccionesPagina";
import Icono from "@commonComponents/Icono";
import {Iconos} from "@data/constants/Iconos";

export const BotonLimpiar = () => {

    const {eventoLimpiar} = useAccionesPagina();
    const {isLimpiarActivo} = useEstadoAccionesPagina();

    if (!isLimpiarActivo) {
        return <div />;
    }

    return (
        <li className='maximize-btn'>
            <Link className='text-dark' onClick={eventoLimpiar} href={VoidRef}>
                <Icono icono={Iconos.LIMPIAR}/>
            </Link>
        </li>
    );

};
