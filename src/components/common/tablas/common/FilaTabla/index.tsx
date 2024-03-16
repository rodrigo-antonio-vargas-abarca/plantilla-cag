import React from 'react';

interface FilaTablaProps {
    indice: string;
    elemento: any;
    claves: string[];
}

const FilaTabla = ({indice, elemento, claves}: FilaTablaProps) => {
    return (
        <tr id={indice}>
            {claves.map((header, index) => (
                <td key={index}>{elemento[header]}</td>
            ))}
        </tr>
    );
};

export default FilaTabla;