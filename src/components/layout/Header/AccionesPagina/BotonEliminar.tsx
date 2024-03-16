import {VoidRef} from "@data/tags";
import Link from "next/link";
import {useAccionesPagina, useEstadoAccionesPagina} from "@hooks/common/AccionesPagina";
import {Iconos} from "@data/constants/Iconos";
import Icono from "@commonComponents/Icono";

export const BotonEliminar = () => {

    const {eventoEliminar} = useAccionesPagina();
    const {isEliminarActivo} = useEstadoAccionesPagina();

    if (!isEliminarActivo) {
        return <div />;
    }

    return (
        <li>
            <Link className='text-dark' onClick={eventoEliminar} href={VoidRef}>
                <Icono icono={Iconos.ELIMINAR}/>
            </Link>
        </li>
    );
};
