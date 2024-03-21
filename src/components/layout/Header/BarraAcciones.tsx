import {Col} from "reactstrap";
import {DropPerfil} from "./DropPerfil";
import {BotonBusqueda} from "./BotonBusqueda";
import {BotonLimpiar} from "@layouts/Header/AccionesPagina/BotonLimpiar";
import {BotonGuardar} from "@layouts/Header/AccionesPagina/BotonGuardar";
import {BotonEliminar} from "@layouts/Header/AccionesPagina/BotonEliminar";
import React from "react";

export const BarraAcciones = () => {
    return (
        <Col xl="7" lg="8" md="7" xs="8" className="nav-right pull-right right-header p-0 ms-auto">
            <ul className="nav-menus">
                <div/>
                <BotonLimpiar/>
                <BotonGuardar/>
                <BotonEliminar/>
                <BotonBusqueda/>
                <DropPerfil/>
            </ul>
        </Col>
    );
};
