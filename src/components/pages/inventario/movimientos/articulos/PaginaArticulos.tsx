import React from "react";
import {Col} from "reactstrap";
import TablaArticulos from "@pageComponents/inventario/movimientos/articulos/TablaArticulos";
import FormularioArticulos from "@pageComponents/inventario/movimientos/articulos/FormularioArticulos";
import Mensajes from "@utils/Mensajes";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {agregarArticulo, editarArticulo, eliminarArticulo, limpiarArticulo} from "@state/inventario/ArticulosSlice";
import ArticuloDto from "@model/inventario/ArticuloDto";
import {useFormik} from "formik";
import {esquemaValidacion} from "@/validation/inventario/ValidacionArticulo";
import {ContenedorPagina} from "@layouts/ContenedorPagina";
import {EventosPaginaProps} from "@data/props/Paginas";

const PaginaArticulos = () => {

    // Se requiere dispatch para ejecutar las acciones que modifican el estado
    const dispatch = useAppDispatch();

    // Obtener el estado del artículo seleccionado y el artículo seleccionado del Store
    const isEditando = useAppSelector((state) => state.articulos.seleccionado);
    const articuloSeleccionado = useAppSelector((state) => state.articulos.articulo);

    // Acciones de la página
    const limpiarArticuloSeleccionado = () => {
        try {
            dispatch(limpiarArticulo());
        } catch (error) {
            Mensajes.error("Error inesperado al limpiar el artículo");
        }
    }

    const eliminarArticuloSeleccionado = () => {
        try {
            // TODO: Llamado a service para eliminar el artículo

            // Actualizar el estado
            dispatch(eliminarArticulo(articuloSeleccionado.id));

            Mensajes.exito("Artículo eliminado correctamente");

        } catch (error) {
            Mensajes.error("Error al eliminar el artículo" + error);
        }

    }

    const guardarArticuloSeleccionado = (articulo: ArticuloDto) => {
        if (isEditando) {
            // TODO: Llamado a service para editar el artículo

            // Actualizar el estado
            dispatch(editarArticulo(articulo));
        } else {
            // TODO: Llamado a service para agregar el artículo

            // Actualizar el estado
            dispatch(agregarArticulo(articulo));
        }
        Mensajes.exito("Artículo " + (isEditando ? "modificado" : "creado") + " correctamente");
    };

    const enviarFormularioArticulo = () => {
        try {
            // TODO: Lógica antes del envío del formulario
            formularioArticulo.submitForm();
        } catch (error) {
            Mensajes.error("Error al guardar el artículo" + error);
            console.log(error);
        }
    }

    // Formulario del artículo
    const formularioArticulo = useFormik({
        initialValues: articuloSeleccionado,
        validationSchema: esquemaValidacion,
        onSubmit: guardarArticuloSeleccionado,
        validateOnChange: false
    });

    const eventosPagina: EventosPaginaProps = {
        limpiar: limpiarArticuloSeleccionado,
        guardar: enviarFormularioArticulo,
        eliminar: eliminarArticuloSeleccionado
    }

    return (
        <ContenedorPagina titulo={"Artículos"} eventos={eventosPagina}>
            <Col>
                <TablaArticulos/>
            </Col>
            <Col lg={3}>
                <FormularioArticulos formulario={formularioArticulo}/>
            </Col>
        </ContenedorPagina>
    );
};

export default PaginaArticulos;