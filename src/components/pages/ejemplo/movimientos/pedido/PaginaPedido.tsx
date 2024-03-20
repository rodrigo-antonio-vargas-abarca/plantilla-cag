import React from 'react';
import {EventosPaginaProps} from "@data/props/Paginas";
import {ContenedorPagina} from "@layouts/ContenedorPagina";
import FormularioPedidos from "@pageComponents/ejemplo/movimientos/pedido/FormularioPedidos";
import Mensajes from "@utils/Mensajes";
import {useFormik} from "formik";
import esquemaValidacion from "@/validation/ejemplo/ValidacionPedido";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {
    seleccionarPedido,
    eliminarPedidoLista,
    agregarPedidoLista,
    setListaPedidos,
    editarPedidoLista
} from "@state/ejemplo/PedidosSlice";
import TablaDetallesPedido from "@pageComponents/ejemplo/movimientos/pedido/TablaDetallesPedido";
import TablaPedidos from "@pageComponents/ejemplo/movimientos/pedido/TablaPedidos";
import Alertas from "@utils/Alertas";
import {PedidoService} from "@/api/services/ejemplo/PedidoService";
import PedidoDto from "@model/ejemplo/PedidoDto";

interface PaginaPedidoProps {

}

function PaginaPedido({}: PaginaPedidoProps) {

    const dispatch = useAppDispatch();
    const pedidoSeleccionado = useAppSelector((state) => state.pedidos.pedidoSeleccionado);
    const isEditando = useAppSelector((state) => state.pedidos.isSeleccionado);
    const isBuscando = useAppSelector((state) => state.pedidos.isBuscando);

    const enviarFormularioPedido = (values: PedidoDto) => {
        try {
            if (isEditando) {
                PedidoService.editarPedido(values).then(() => {
                    dispatch(editarPedidoLista(values));
                    Mensajes.exito("Pedido editado");
                }).catch((error) => {
                    console.error("Error al editar el pedido", error);
                    Mensajes.error("Error al editar el pedido");
                });
            } else {
                PedidoService.agregarPedido(values).then(() => {
                    dispatch(agregarPedidoLista(values));
                    Mensajes.exito("Pedido agregado");
                }).catch((error) => {
                    console.error("Error al crear el pedido", error);
                    Mensajes.error("Error al crear el pedido");
                });
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
                    PedidoService.eliminarPedido(pedidoSeleccionado.id).then(() => {
                        dispatch(eliminarPedidoLista(pedidoSeleccionado.id));
                        Mensajes.exito(`Pedido ${pedidoSeleccionado.id} eliminado`);
                    }).catch((error) => {
                        console.error(`Error al eliminar el pedido ${pedidoSeleccionado.id}`, error);
                        Mensajes.error("Error al eliminar el pedido");
                    });
                }
            })
        } catch (e) {
            Mensajes.error("Error al eliminar el pedido");
        }
    }

    const limpiarPedidoSeleccionado = () => {
        try {
            dispatch(seleccionarPedido(null));
            formulario.resetForm();
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
        <ContenedorPagina titulo={`Pedidos`} eventos={eventos} triggerActualizaEventos={pedidoSeleccionado}>
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