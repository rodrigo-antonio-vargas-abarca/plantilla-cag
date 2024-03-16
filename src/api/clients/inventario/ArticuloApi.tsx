import ApiBase, {OpcionesApi} from "@api/common/ApiBase";
import ArticuloDto from "@model/inventario/ArticuloDto";

const opciones: OpcionesApi = {
    baseURL: 'https://dummyjson.com/',
    contentType: 'application/json'
};

class ArticuloApi extends ApiBase {

    private static instance: ArticuloApi | null = null;

    private constructor(opciones: OpcionesApi) {
        super(opciones);
    }

    public static getInstance(): ArticuloApi {
        if (!ArticuloApi.instance) {
            ArticuloApi.instance = new ArticuloApi(opciones);
        }
        return ArticuloApi.instance;
    }

    static async getArticulo(id: number) {
        return await this.getInstance().get(`/products/${id}`);
    }

    static async getArticulos() {
        return await this.getInstance().get(`/products`);
    }

    static async postArticulo(data: ArticuloDto) {
        return await this.getInstance().post(`/products`, data);
    }

}

export default ArticuloApi;