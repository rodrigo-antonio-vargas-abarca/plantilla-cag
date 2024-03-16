import {VoidRef} from "@data/tags";
import Link from "next/link";
import {useAccionesPagina, useEstadoAccionesPagina} from "@hooks/common/AccionesPagina";
import {Iconos} from "@data/constants/Iconos";
import Icono from "@commonComponents/Icono";

export const BotonGuardar = () => {

    const {eventoGuardar} = useAccionesPagina();
    const {isGuardarActivo} = useEstadoAccionesPagina();

    if (!isGuardarActivo) {
        return <div />;
    }

    return (
        <li>
            <Link className='text-dark' onClick={eventoGuardar} href={VoidRef}>
                <Icono icono={Iconos.GUARDAR}/>
            </Link>
        </li>
    );
};
