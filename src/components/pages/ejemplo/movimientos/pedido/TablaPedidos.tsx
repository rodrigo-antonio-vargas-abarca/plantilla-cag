import React, {useEffect} from 'react';
import {TablaProps} from "@data/props/Tablas";
import {TamanoTabla} from "@data/constants/Tamanos";
import Tabla from "@commonComponents/tablas/Tabla";
import {setListaPedidos, seleccionarPedido} from "@state/ejemplo/PedidosSlice";
import Mensajes from "@utils/Mensajes";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {PedidoService} from "@/api/services/ejemplo/PedidoService";
import PedidoDto from "@model/ejemplo/PedidoDto";
import Boton from "@commonComponents/botones/Boton";
import {Iconos} from "@data/constants/Iconos";

interface TablaPedidosProps {

}

const tablaProps: TablaProps = {
    titulo: "Lista de pedidos",
    subtitulo: "Lista de pedidos obtenida desde la base de datos",
    encabezados: [
        {etiqueta: "Código", ancho: 15},
        {etiqueta: "Total", ancho: 15},
        {etiqueta: "Cliente", ancho: 15},
        {etiqueta: "Descuento", ancho: 15},
        {etiqueta: "Total productos", ancho: 15},
        {etiqueta: "Cantidad total", ancho: 15},
    ],
    cantidadElementos: 10,
    tamano: TamanoTabla.PEQUENA,
    hover: false
}

function TablaPedidos({}: TablaPedidosProps) {

    const dispatch = useAppDispatch();
    const pedidos = useAppSelector((state) => state.pedidos.pedidos);

    useEffect(() => {

        const getPedidos = async () => {
            try {
                const pedidos = await PedidoService.getPedidos();
                dispatch(setListaPedidos(pedidos));
            } catch (error) {
                Mensajes.error("Error al obtener las compañías" + error);
                console.log(error);
            }
        };

        getPedidos();

    }, []);

    const handleSeleccionar = (id: number) => {
        try {
            dispatch(seleccionarPedido(id));
        } catch (e) {
            Mensajes.error("Error al seleccionar el pedido");
        }
    }

    return (
        <Tabla configuraciones={tablaProps} datos={pedidos}>
            {pedidos.map((pedido: PedidoDto) => (
                <tr key={pedido.id}>
                    <td>{pedido.id}</td>
                    <td>{pedido.total}</td>
                    <td>{pedido.userId}</td>
                    <td>{pedido.discountedTotal}</td>
                    <td>{pedido.totalProducts}</td>
                    <td>{pedido.totalQuantity}</td>
                    <td><Boton onClick={() => handleSeleccionar(pedido.id)} icono={Iconos.SELECCIONAR}/></td>
                </tr>
            ))}
        </Tabla>
    );
}

export default TablaPedidos;