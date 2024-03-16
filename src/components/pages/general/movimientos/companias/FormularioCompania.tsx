import {useAppSelector} from "@hooks/common/State";
import {FormularioProps} from "@data/props/Formulario";
import React, {useEffect} from "react";
import {Col, Form, Row} from "reactstrap";
import CommonCard from "@commonComponents/CommonCard";
import TextAreaFormik from "@commonComponents/formularios/formik/TextAreaFormik";
import InputFormik from "@commonComponents/formularios/formik/InputFormik";

interface propiedadesFormulario {
    formulario: any;
}

const FormularioCompania = ({formulario} : propiedadesFormulario) => {

    const compania = useAppSelector((state) => state.companias.compania);
    const editando = useAppSelector((state) => state.companias.seleccionada);

    const propiedadesFormulario: FormularioProps = {
        titulo: editando ? "Editar compañía" : "Nueva compañía",
        subtitulo: [
            {
                text: editando
                    ? "Modifique los campos para editar la compañía"
                    : "Llene los campos para agregar una compañía",
            },
        ],
    }

    useEffect(() => {
        formulario.setValues(compania);
    }, [compania]);

    return (
        <CommonCard titulo={propiedadesFormulario.titulo} subtitulo={propiedadesFormulario.subtitulo}>
            <Form onSubmit={formulario.handleSubmit}>
                {/* Input 'nombre' */}
                <Row className="mb-3">
                    <Col>
                        <InputFormik formulario={formulario} clave={"codigo"} placeholder={"Código"}/>
                    </Col>
                </Row>

                {/* Input 'descripcion' */}
                <Row className="mb-3">
                    <Col>
                        <TextAreaFormik formulario={formulario} clave={"descripcion"} placeholder={"Descripción"} rows={9}/>
                    </Col>
                </Row>

            </Form>
        </CommonCard>
    )

}

export default FormularioCompania;