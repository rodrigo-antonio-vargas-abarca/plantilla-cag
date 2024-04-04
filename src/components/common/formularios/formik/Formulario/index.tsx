import React from 'react';
import CommonCard from "@commonComponents/CommonCard";
import {Form} from "reactstrap";
import {FormikProvider} from "formik";

interface ContenedorFormikProps {
    formulario: any;
    etiqueta?: string;
    editando?: boolean;
    children?: React.ReactNode;
}

function Formulario({formulario = undefined, etiqueta, editando, children}: ContenedorFormikProps) {

    const propiedadesFormulario = {
        titulo: etiqueta && etiqueta != "" ? (editando ? `Editar ${etiqueta}` : `Nuevo ${etiqueta}`) : "",
        subtitulo: [
            {
                text: etiqueta && etiqueta != "" ? editando
                    ? `Modifique los campos para editar el ${etiqueta}`
                    : `Llene los campos para agregar un ${etiqueta}` : "",
            },
        ],
    };

    return (
        <>
            <CommonCard titulo={propiedadesFormulario.titulo} subtitulo={propiedadesFormulario.subtitulo}>
                <FormikProvider value={formulario}>
                    <Form onSubmit={formulario?.handleSubmit}>
                        {children}
                    </Form>
                </FormikProvider>
            </CommonCard>
        </>
    );
}

export default Formulario;