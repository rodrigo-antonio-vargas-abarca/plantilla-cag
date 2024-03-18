import ApiBase, {OpcionesApi} from "@api/common/ApiBase";
import PedidoDto from "@model/ejemplo/PedidoDto";

const opciones: OpcionesApi = {
    baseURL: 'https://dummyjson.com/',
    contentType: 'application/json'

}

export default class PedidoApi extends ApiBase {

    private static instance: PedidoApi | null = null;

    private constructor(opciones: any) {
        super(opciones);
    }

    public static getInstance(): PedidoApi {
        if (!PedidoApi.instance) {
            PedidoApi.instance = new PedidoApi(opciones);
        }
        return PedidoApi.instance;
    }

    static async getPedidos() {
        return await this.getInstance().get(`/carts`);
    }

    static async getPedido(id: string) {
        return await this.getInstance().get(`/cart/${id}`);
    }

    static async postPedido(pedido: PedidoDto) {
        return await this.getInstance().post(`/carts/add`, pedido);
    }

    static async putPedido(pedido: PedidoDto) {
        return await this.getInstance().put(`/carts/${pedido.id}`, pedido);
    }

    static async deletePedido(id: number) {
        return await this.getInstance().delete(`/carts/${id}`);
    }

}