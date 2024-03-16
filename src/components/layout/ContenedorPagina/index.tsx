import {ContenedorPaginaProps} from "@data/props/Paginas";
import {useAsignarAccionesPagina} from "@hooks/common/AccionesPagina";
import EncabezadoPagina from "@commonComponents/EncabezadoPagina";
import React, {useEffect} from "react";
import {Row} from "reactstrap";

export const ContenedorPagina = ({titulo, eventos, children}: ContenedorPaginaProps) => {

    const {setEventoLimpiarPagina, setEventoGuardarPagina, setEventoEliminarPagina} = useAsignarAccionesPagina();

    useEffect(() => {

        if (eventos) {

            const {limpiar, guardar, eliminar} = eventos;

            if (limpiar) {
                setEventoLimpiarPagina(limpiar);
            }

            if (guardar) {
                setEventoGuardarPagina(guardar);
            }

            if (eliminar) {
                setEventoEliminarPagina(eliminar);
            }

        }

    }, []);

    return (
        <>
            <EncabezadoPagina titulo={titulo}/>
            <Row>
                {children}
            </Row>
        </>
    );
};
