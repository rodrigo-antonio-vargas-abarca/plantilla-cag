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
}