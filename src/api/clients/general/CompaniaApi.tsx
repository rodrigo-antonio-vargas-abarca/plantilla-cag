import ApiBase, {OpcionesApi} from "@api/common/ApiBase";
import CompaniaDto from "@model/general/CompaniaDto";

const opciones: OpcionesApi = {
    baseURL: 'http://localhost:8080/',
    contentType: 'application/json'
}

class CompaniaApi extends ApiBase {

    private static instance: CompaniaApi | null = null;

    private constructor(opciones: OpcionesApi) {
        super(opciones);
    }

    public static getInstance(): CompaniaApi {
        if (!CompaniaApi.instance) {
            CompaniaApi.instance = new CompaniaApi(opciones);
        }
        return CompaniaApi.instance;
    }

    static async getCompanias() {
        return await this.getInstance().get(`/companias`);
    }

    static async getCompania(id: number) {
        return await this.getInstance().get(`/companias/${id}`);
    }

    static async postCompania(compania: CompaniaDto) {
        return await this.getInstance().post(``, compania);
    }

    static async putCompania(compania: CompaniaDto) {
        return await this.getInstance().put(`/${compania.id}`, compania);
    }

    static async deleteCompania(id: number) {
        return await this.getInstance().delete(`/${id}`);
    }

}

export default CompaniaApi;