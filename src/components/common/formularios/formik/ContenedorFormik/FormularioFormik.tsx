import React from 'react';
import CommonCard from "@commonComponents/CommonCard";
import {Form} from "reactstrap";

interface ContenedorFormikProps {
    formulario: any;
    etiqueta?: string;
    editando?: boolean;
    children?: React.ReactNode;
}

function FormularioFormik({formulario = undefined, etiqueta, editando, children}: ContenedorFormikProps) {

    const propiedadesFormulario = {
        titulo: editando ? `Editar ${etiqueta}` : `Nuevo ${etiqueta}`,
        subtitulo: [
            {
                text: editando
                    ? `Modifique los campos para editar el ${etiqueta}`
                    : `Llene los campos para agregar un ${etiqueta}`,
            },
        ],
    };

    return (
        <>
            <CommonCard titulo={propiedadesFormulario.titulo} subtitulo={propiedadesFormulario.subtitulo}>
                <Form onSubmit={formulario.handleSubmit}>
                    {children}
                </Form>
            </CommonCard>
        </>
    );
}

export default FormularioFormik;