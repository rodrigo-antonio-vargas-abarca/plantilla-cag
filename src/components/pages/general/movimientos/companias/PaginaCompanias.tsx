import React from "react";
import {Col} from "reactstrap";
import Mensajes from "@utils/Mensajes";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {agregarCompania, editarCompania, eliminarCompania, limpiarCompania} from "@state/general/CompaniasSlice";
import CompaniaDto from "@model/general/CompaniaDto";
import {useFormik} from "formik";
import {esquemaValidacion} from "@/validation/general/ValidacionCompania";
import TablaCompanias from "@pageComponents/general/movimientos/companias/TablaCompanias";
import FormularioCompania from "@pageComponents/general/movimientos/companias/FormularioCompania";
import {CompaniaService} from "@/api/services/general/CompaniaService";
import {ContenedorPagina} from "@layouts/ContenedorPagina";
import {EventosPaginaProps} from "@data/props/Paginas";

const PaginaCompanias = () => {

    const dispatch = useAppDispatch();

    const editando = useAppSelector((state) => state.companias.seleccionada);
    const compania = useAppSelector((state) => state.companias.compania);

    // Acciones de la página
    const limpiarCompaniaSeleccionada = () => {
        try {
            dispatch(limpiarCompania());
            Mensajes.exito("Compañía limpiada correctamente");
        } catch (error) {
            Mensajes.error("Error inesperado al limpiar la compañía");
            console.log(error);
        }
    }

    const eliminarCompaniaSeleccionada = () => {
        try {
            if (compania?.id) {
                CompaniaService.eliminarCompania(compania.id).then(() => {
                    dispatch(eliminarCompania(compania.id));
                    Mensajes.exito("Compañía eliminada correctamente");
                }).catch((error) => {
                    Mensajes.error("Error inesperado al eliminar la compañía");
                    console.log(error);
                });
            } else {
                Mensajes.error("Ninguna compañía seleccionada para eliminar");
            }
        } catch (error) {
            Mensajes.error("Error al eliminar la compañía" + error);
            console.log(error);
        }
    }

    // Envío de formulario
    const guardarCompaniaSeleccionada = (compania: CompaniaDto) => {
        try {
            if (editando) {
                CompaniaService.modificarCompania(compania).then((response) => {
                    dispatch(editarCompania(response));
                    Mensajes.exito("Compañía modificada correctamente");
                }).catch((error) => {
                    Mensajes.error("Error inesperado al modificar la compañía");
                    console.log(error);
                });
            } else {
                CompaniaService.crearCompania(compania).then((response) => {
                    dispatch(agregarCompania(response));
                    Mensajes.exito("Compañía creada correctamente");
                }).catch((error) => {
                    Mensajes.error("Error inesperado al crear la compañía");
                    console.log(error);
                });
            }
        } catch (error) {
            Mensajes.error("Error al guardar la compañía" + error);
            console.log(error);
        }
    };

    // Formulario
    const formularioCompania = useFormik({
        initialValues: compania,
        validationSchema: esquemaValidacion,
        onSubmit: guardarCompaniaSeleccionada,
        validateOnChange: false
    });

    const enviarFormulario = () => {
        try {
            formularioCompania.submitForm();
        } catch (error) {
            Mensajes.error("Error al guardar la compañía" + error);
            console.log(error);
        }
    }

    const accionesPagina: EventosPaginaProps = {
        limpiar: limpiarCompaniaSeleccionada,
        guardar: enviarFormulario,
        eliminar: eliminarCompaniaSeleccionada
    }

    return (
        <ContenedorPagina titulo={"Compañías"} eventos={accionesPagina}>
            <Col>
                <TablaCompanias/>
            </Col>
            <Col lg={3}>
                <FormularioCompania formulario={formularioCompania}/>
            </Col>
        </ContenedorPagina>
    );
};

export default PaginaCompanias;