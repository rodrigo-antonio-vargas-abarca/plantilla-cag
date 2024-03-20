import React from 'react';
import {useAppSelector} from "@hooks/common/State";
import {TablaProps} from "@data/props/Tablas";
import {TamanoTabla} from "@data/constants/Tamanos";
import Tabla from "@commonComponents/tablas/Tabla";
import DetallePedidoDto from "@model/ejemplo/DetallePedidoDto";
import Boton from "@commonComponents/botones/Boton";
import {Iconos} from "@data/constants/Iconos";
import Colores from "@data/constants/Colores";
import Alertas from "@utils/Alertas";
import Mensajes from "@utils/Mensajes";

interface ArticulosPedidoProps {

}

const configuracionesTabla: TablaProps = {
    titulo: "Detalles del pedido",
    encabezados: [
        {etiqueta: "ID", ancho: 5},
        {etiqueta: "Artículo", ancho: 20},
        {etiqueta: "Cantidad", ancho: 10},
        {etiqueta: "Precio", ancho: 10},
        {etiqueta: "% Descuento", ancho: 10},
        {etiqueta: "Descuento", ancho: 10},
        {etiqueta: "Total", ancho: 10},
        {etiqueta: "Acciones", ancho: 10}
    ],
    cantidadElementos: 10,
    tamano: TamanoTabla.PEQUENA,
    hover: true
}

function TablaDetallesPedido({}: ArticulosPedidoProps) {

    const detallesPedido = useAppSelector((state) => state.pedidos.pedidoSeleccionado.products);

    const editarDetalle = (id: number) => {
        Mensajes.informacion("Implementar evento para editar el detalle de pedido");
    }

    const eliminarDetalle = (id: number) => {
        Alertas.advertencia("Eliminar detalle", "Implementar evento para eliminar el detalle de pedido").then((result) => {
            if (result.isConfirmed) {
                Mensajes.informacion("Implementar evento para eliminar el detalle de pedido")
            }
        });
    }

    return (
        <Tabla datos={detallesPedido} configuraciones={configuracionesTabla}>
            {detallesPedido.map((detallePedido: DetallePedidoDto) => (
                <tr key={detallePedido.id}>
                    <td>{detallePedido.id}</td>
                    <td>{detallePedido.title}</td>
                    <td>{detallePedido.quantity}</td>
                    <td>{detallePedido.price}</td>
                    <td>{detallePedido.discountPercentage}</td>
                    <td>{detallePedido.discountedPrice}</td>
                    <td>{detallePedido.total}</td>
                    <td>
                        <Boton icono={Iconos.EDITAR} onClick={() => editarDetalle(detallePedido.id)}/>
                        <Boton icono={Iconos.ELIMINAR} color={Colores.PELIGRO}
                               onClick={() => eliminarDetalle(detallePedido.id)}/>
                    </td>
                </tr>
            ))}
        </Tabla>
    );
}

export default TablaDetallesPedido;