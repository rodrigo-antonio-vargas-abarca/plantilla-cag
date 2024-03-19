import React from 'react';
import {EventosPaginaProps} from "@data/props/Paginas";
import {ContenedorPagina} from "@layouts/ContenedorPagina";
import FormularioPedidos from "@pageComponents/ejemplo/movimientos/pedido/FormularioPedidos";
import Mensajes from "@utils/Mensajes";
import {useFormik} from "formik";
import esquemaValidacion from "@/validation/ejemplo/ValidacionPedido";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {seleccionarPedido, eliminarPedidoLista, agregarPedidoLista, setListaPedidos} from "@state/ejemplo/PedidosSlice";
import TablaDetallesPedido from "@pageComponents/ejemplo/movimientos/pedido/TablaDetallesPedido";
import TablaPedidos from "@pageComponents/ejemplo/movimientos/pedido/TablaPedidos";
import Alertas from "@utils/Alertas";

interface PaginaPedidoProps {

}

function PaginaPedido({}: PaginaPedidoProps) {

    const dispatch = useAppDispatch();
    const pedidoSeleccionado = useAppSelector((state) => state.pedidos.pedidoSeleccionado);
    const isEditando = useAppSelector((state) => state.pedidos.isSeleccionado);
    const isBuscando = useAppSelector((state) => state.pedidos.isBuscando);

    const enviarFormularioPedido = (values: any) => {
        try {
            if (isEditando) {
                // TODO: Implementar llamado al service para actualizar el pedido
                dispatch(setListaPedidos(values));
                Mensajes.exito("Pedido modificado");
            } else {
                // TODO: Implementar llamado al service para agregar el pedido
                dispatch(agregarPedidoLista(values));
                Mensajes.exito("Pedido agregado");
            }
        } catch (e) {
            console.log(e);
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
            Alertas.advertencia("Eliminar pedido", "¿Está seguro que desea eliminar el pedido?").then((result) => {
                if (result.isConfirmed) {
                    // TODO: Implementar llamado al service para eliminar el pedido
                    dispatch(eliminarPedidoLista(pedidoSeleccionado.id));
                    Mensajes.exito("Pedido eliminado");
                }
            })
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
            {!isBuscando ?
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