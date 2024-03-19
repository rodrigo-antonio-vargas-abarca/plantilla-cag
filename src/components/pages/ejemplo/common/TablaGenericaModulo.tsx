import React from 'react';
import {TablaProps} from "@data/props/Tablas";
import {TamanoTabla} from "@data/constants/Tamanos";
import Tabla from "@commonComponents/tablas/Tabla";

interface TablaGenericaProps {

}

const propiedadesTabla: TablaProps = {
    titulo: "Título de la tabla",
    encabezados: [
        {etiqueta: "ID", ancho: 5},
        {etiqueta: "Nombre", ancho: 20},
        {etiqueta: "Precio", ancho: 10},
        {etiqueta: "Cantidad", ancho: 10},
        {etiqueta: "Total", ancho: 10},
        {etiqueta: "% Descuento", ancho: 10},
        {etiqueta: "Descuento", ancho: 10},
        {etiqueta: "Acciones", ancho: 10}
    ],
    cantidadElementos: 10,
    tamano: TamanoTabla.PEQUENA,
    hover: true
}

function TablaGenericaModulo({} : TablaGenericaProps) {

    const datosTabla : any[] = [];

    return (
        <Tabla datos={datosTabla} configuraciones={propiedadesTabla}>
            <div>Contenido de la tabla</div>
        </Tabla>
    );
}

export default TablaGenericaModulo;