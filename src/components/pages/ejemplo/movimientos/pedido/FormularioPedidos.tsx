import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import FormularioFormik from "@commonComponents/formularios/formik/ContenedorFormik/FormularioFormik";
import {Col, Row} from "reactstrap";
import InputFormik from "@commonComponents/formularios/formik/InputFormik";
import {asignarPedido, seleccionarPedido} from "@state/ejemplo/PedidosSlice";
import Mensajes from "@utils/Mensajes";
import {PedidoService} from "@/api/services/ejemplo/PedidoService";
import {toogleBuscando} from "@state/ejemplo/PedidosSlice";

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
                dispatch(asignarPedido(response))
            }).catch((error) => {
                dispatch(seleccionarPedido(null));
                Mensajes.informacion(`Pedido ${formulario.values.id} no encontrado`);
            })
        } catch (e) {
            console.error("Error al buscar el pedido");
        }
    }

    const toogleBuscar = () => {
        try {
            dispatch(toogleBuscando());
        } catch (e) {
            Mensajes.error("Error al abrir la página de búsqueda");
        }
    }

    return (
        <FormularioFormik formulario={formulario} etiqueta={"pedido"} editando={editando}>
            <Row>
                <Col>
                    <InputFormik formulario={formulario} onBlur={buscarPedido} onSearch={toogleBuscar}
                                 clave={"id"} etiqueta={"Código"} placeholder={"Código"} type="number"/>
                </Col>
                <Col>
                    <InputFormik formulario={formulario} clave={"total"} etiqueta={"Total"} placeholder={"Total"}/>
                </Col>
                <Col>
                    <InputFormik formulario={formulario} clave={"discountedTotal"} etiqueta={"Descuento"}
                                 placeholder={"Descuento total"}/>
                </Col>
                <Col>
                    <InputFormik formulario={formulario} clave={"userId"} etiqueta={"Cliente"} placeholder={"Cliente"}/>
                </Col>
                <Col>
                    <InputFormik formulario={formulario} clave={"totalProducts"} etiqueta={"Total productos"}
                                 placeholder={"Total productos"}/>
                </Col>
                <Col>
                    <InputFormik formulario={formulario} clave={"totalQuantity"} etiqueta={"Cantidad total"}
                                 placeholder={"Cantidad total"}/>
                </Col>
            </Row>
        </FormularioFormik>
    );

}

export default FormularioPedidos;