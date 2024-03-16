import React from 'react';
import {EncabezadoTablaProps} from "@data/props/Tablas";

interface EncabezadoTablaComunProps {
    encabezados: EncabezadoTablaProps[];
}

const EncabezadoTabla = ({encabezados} : EncabezadoTablaComunProps) => {
    return (
        <thead >
        <tr className="d-none d-md-table-row">
            {encabezados.map((columna, index) => (
                <th key={columna.etiqueta} style={{width: `${columna.ancho}%`}}>{columna.etiqueta}</th>
            ))}
        </tr>
        </thead>
    );
};

export default EncabezadoTabla;