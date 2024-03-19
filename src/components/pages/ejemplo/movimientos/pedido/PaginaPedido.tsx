import React from 'react';
import {EventosPaginaProps} from "@data/props/Paginas";
import {ContenedorPagina} from "@layouts/ContenedorPagina";
import FormularioPedidos from "@pageComponents/ejemplo/movimientos/pedido/FormularioPedidos";
import Mensajes from "@utils/Mensajes";
import {useFormik} from "formik";
import esquemaValidacion from "@/validation/ejemplo/ValidacionPedido";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {seleccionarPedido, eliminarPedido, agregarPedido, actualizarPedidos} from "@state/ejemplo/PedidosSlice";
import TablaDetallesPedido from "@pageComponents/ejemplo/movimientos/pedido/TablaDetallesPedido";
import TablaPedidos from "@pageComponents/ejemplo/movimientos/pedido/TablaPedidos";

interface PaginaPedidoProps {

}

function PaginaPedido({}: PaginaPedidoProps) {

    const dispatch = useAppDispatch();
    const pedidoSeleccionado = useAppSelector((state) => state.pedidos.pedidoSeleccionado);
    const editando = useAppSelector((state) => state.pedidos.isSeleccionado);
    const buscando = useAppSelector((state) => state.pedidos.isBuscando);

    const enviarFormularioPedido = (values: any) => {
        try {
            if (editando) {
                dispatch(actualizarPedidos(values));
                Mensajes.exito("Pedido actualizado");
            } else {
                dispatch(agregarPedido(values));
                Mensajes.exito("Pedido guardado");
            }
        } catch (e) {
            Mensajes.error("Error al guardar el pedido");
        }
    }

    const formulario = useFormik({
        initialValues: pedidoSeleccionado,
        onSubmit: enviarFormularioPedido,
        validationSchema: esquemaValidacion
    })

    const guardarPedidoSeleccionado = () => {
        try {
            formulario.submitForm();
        } catch (e) {
            Mensajes.error("Error al enviar el formulario de pedido");
        }
    }

    const eliminarPedidoSeleccionado = () => {
        try {
            dispatch(eliminarPedido(pedidoSeleccionado.id));
        } catch (e) {
            Mensajes.error("Error al eliminar el pedido");
        }
    }

    const limpiarPedidoSeleccionado = () => {
        try {
            dispatch(seleccionarPedido(null));
        } catch (e) {
            Mensajes.error("Error al limpiar el pedido");
        }
    }

    const eventos: EventosPaginaProps = {
        eliminar: eliminarPedidoSeleccionado,
        guardar: guardarPedidoSeleccionado,
        limpiar: limpiarPedidoSeleccionado
    }

    return (
        <ContenedorPagina titulo={"Pedidos"} eventos={eventos}>
            {!buscando ?
                <>
                    <FormularioPedidos formulario={formulario}/>
                    <TablaDetallesPedido/>
                </> :
                <TablaPedidos/>
            }
        </ContenedorPagina>
    );

}

export default PaginaPedido;