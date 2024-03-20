import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import FormularioFormik from "@commonComponents/formularios/formik/ContenedorFormik/FormularioFormik";
import {Col, Row} from "reactstrap";
import InputFormik from "@commonComponents/formularios/formik/InputFormik";
import {setPedido, crearPedidoNuevo, seleccionarPedido} from "@state/ejemplo/PedidosSlice";
import Mensajes from "@utils/Mensajes";
import {PedidoService} from "@/api/services/ejemplo/PedidoService";
import {cambiarBuscando} from "@state/ejemplo/PedidosSlice";

interface FormularioPedidoProps {
    formulario: any;
}

function FormularioPedidos({formulario = undefined}: FormularioPedidoProps) {

    const dispatch = useAppDispatch();

    const pedidoSeleccionado = useAppSelector((state) => state.pedidos.pedidoSeleccionado);
    const editando = useAppSelector((state) => state.pedidos.isSeleccionado);

    useEffect(() => {
        formulario.setValues(pedidoSeleccionado);
    }, [pedidoSeleccionado]);

    const buscarPedido = () => {
        try {
            PedidoService.getPedido(formulario.values.id).then((response) => {
                dispatch(setPedido(response))
            }).catch((error) => {
                dispatch(crearPedidoNuevo(formulario.values.id));
            })
        } catch (e) {
            Mensajes.error("Error al buscar el pedido");
        }
    }

    const mostrarBusquedaPedidos = () => {
        try {
            dispatch(cambiarBuscando());
        } catch (e) {
            Mensajes.error("Error al abrir la página de búsqueda");
        }
    }

    const buscarUsuario = () => {
        try {
            Mensajes.informacion("Implementar búsqueda de usuarios");
        } catch (e) {
            Mensajes.error("Error al buscar el usuario");
        }
    }

    const mostrarBusquedaUsuarios = () => {
        try {
            // dispatch(cambiarBuscando());
            Mensajes.informacion("Implementar búsqueda de usuarios");
        } catch (e) {
            Mensajes.error("Error al abrir la página de búsqueda");
        }
    }

    return (
        <FormularioFormik formulario={formulario} etiqueta={`pedido`} editando={editando}>
            <Row>
                <Col xs={4} sm={3} md={2} xl={1}>
                    <InputFormik formulario={formulario} clave={"id"} etiqueta={"Código"} placeholder={"Código"}
                                 type="number" onBlur={buscarPedido} eventoBuscar={mostrarBusquedaPedidos}/>
                </Col>
                <Col xs={4} sm={3} md={2} xl={1}>
                    <InputFormik formulario={formulario} clave={"userId"} etiqueta={"Cliente"} placeholder={"Cliente"}
                                 type="number" onBlur={buscarUsuario} eventoBuscar={mostrarBusquedaUsuarios}/>
                </Col>
                <Col xs={4} sm={3} md={2} xl={1}>
                    <InputFormik formulario={formulario} clave={"totalProducts"} etiqueta={"Detalles"}
                                 placeholder={"Líneas"} type="number"/>
                </Col>
                <Col xs={4} sm={3} md={2} xl={1}>
                    <InputFormik formulario={formulario} clave={"totalQuantity"} etiqueta={"Unidades"}
                                 placeholder={"Unidades"} type="number" muestraError={false}/>
                </Col>
                <Col xs={4} sm={3} md={2} xl={1}>
                    <InputFormik formulario={formulario} clave={"discountedTotal"} etiqueta={"Descuento"}
                                 placeholder={"Descuento total"} type="number"/>
                </Col>
                <Col xs={4} sm={3} md={2} xl={1}>
                    <InputFormik formulario={formulario} clave={"total"} etiqueta={"Total"} placeholder={"Total"}
                                 type="number"/>
                </Col>
            </Row>
        </FormularioFormik>
    );

}

export default FormularioPedidos;