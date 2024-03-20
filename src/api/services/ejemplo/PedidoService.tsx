import PedidoApi from "@api/ejemplo/PedidoApi";

export const PedidoService = {
    getPedidos: async () => {
        try {
            return await PedidoApi.getPedidos().then((response) => {
                return response.carts;
            });
        } catch (error) {
            throw error;
        }
    },
    getPedido: async (id: string) => {
        try {
            return await PedidoApi.getPedido(id).then((response) => {
                return response;
            });
        } catch (error) {
            throw error;
        }
    },
    agregarPedido: async (pedido: any) => {
        try {
            return await PedidoApi.postPedido(pedido).then((response) => {
                return response;
            });
        } catch (error) {
            throw error;
        }
    },
    editarPedido: async (pedido: any) => {
        try {
            return await PedidoApi.putPedido(pedido.id, {"products": pedido.products}).then((response) => {
                return response;
            });
        } catch (error) {
            throw error;
        }
    },
    eliminarPedido: async (id: number) => {
        try {
            return await PedidoApi.deletePedido(id).then((response) => {
                return response;
            });
        } catch (error) {
            throw error;
        }
    }
}