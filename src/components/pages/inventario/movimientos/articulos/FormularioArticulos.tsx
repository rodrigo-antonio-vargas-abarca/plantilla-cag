import React, {useEffect} from "react";
import {Col, Form, Row} from "reactstrap";
import {FormularioProps} from "@data/props/Formulario";
import {useAppSelector} from "@hooks/common/State";
import CommonCard from "@commonComponents/CommonCard";
import InputFormik from "@commonComponents/formularios/formik/InputFormik";
import TextAreaFormik from "@commonComponents/formularios/formik/TextAreaFormik";
import SelectFormik from "@commonComponents/formularios/formik/SelectFormik";
import {OpcionSelectProps} from "@data/props/Inputs";

interface FormularioArticuloProps {
    formulario: any;
}

const FormularioArticulos = ({formulario}: FormularioArticuloProps) => {

    const articulo = useAppSelector((state) => state.articulos.articulo);
    const editando = useAppSelector((state) => state.articulos.seleccionado);

    const propiedadesFormulario: FormularioProps = {
        titulo: editando ? "Editar artículo" : "Nuevo artículo",
        subtitulo: [
            {
                text: editando
                    ? "Modifique los campos para editar el artículo"
                    : "Llene los campos para agregar un artículo",
            },
        ],
    }

    useEffect(() => {
        formulario.setValues(articulo);
    }, [articulo]);

    const opciones: OpcionSelectProps[] = [
        {
            valor: "1",
            etiqueta: "Opcion 1"
        },
        {
            valor: "2",
            etiqueta: "Opcion 2"
        }
    ];

    return (
        <CommonCard titulo={propiedadesFormulario.titulo} subtitulo={propiedadesFormulario.subtitulo}>
            <Form onSubmit={formulario.handleSubmit}>

                {/* Input 'nombre' */}
                <Row className="mb-3">
                    <Col>
                        <InputFormik formulario={formulario} clave="title" placeholder="Nombre"/>
                    </Col>
                </Row>

                {/* Input 'descripcion' */}
                <Row className="mb-3">
                    <Col>
                        <TextAreaFormik
                            formulario={formulario}
                            clave={"description"}
                            rows={8}
                        />
                    </Col>
                </Row>

                {/* Input 'precio' */}
                <Row className="mb-3">
                    <Col>
                        <InputFormik formulario={formulario} clave={"price"} type={"number"}/>
                    </Col>
                </Row>

                {/* Input 'select' */}
                <Row className="mb-3">
                    <Col>
                        <SelectFormik formulario={formulario} placeholder={"Seleccionar"} clave={"price"}
                                      opciones={opciones}/>
                    </Col>
                </Row>

            </Form>
        </CommonCard>
    );
};

export default FormularioArticulos;