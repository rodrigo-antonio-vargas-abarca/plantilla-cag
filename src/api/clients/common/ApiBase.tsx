import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

interface ApiResponse<T> {
    data: T;
}

export interface OpcionesApi {
    baseURL: string;
    contentType?: string;
}

interface ApiRequest {
    setAuthToken(token: string): void;
}

interface ApiGetRequest<T> extends ApiRequest {
    get(url: string): Promise<T>;
}

interface ApiPostRequest<T> extends ApiRequest {
    post(url: string, data: any): Promise<T>;
}

interface ApiPutRequest<T> extends ApiRequest {
    put(url: string, data: any): Promise<T>;
}

interface ApiDeleteRequest<T> extends ApiRequest {
    delete(url: string): Promise<T>;
}


export default abstract class ApiBase<T = any> implements ApiGetRequest<T>, ApiPostRequest<T>, ApiDeleteRequest<T>, ApiPutRequest<T> {

    private api: AxiosInstance;

    constructor(options: OpcionesApi) {
        const {baseURL, contentType = 'application/json'} = options;
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': contentType,
            },
        });
    }

    setAuthToken(token: string): void {
        this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    async get(url: string, params?: Record<string, any>): Promise<T> {
        try {
            // TODO: setAuthToken
            const response: AxiosResponse = await this.api.get(url, {params});
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post(url: string, data: any): Promise<T> {
        try {
            // TODO: setAuthToken
            const response: AxiosResponse = await this.api.post(url, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async put(url: string, data: any): Promise<T> {
        try {
            // TODO: setAuthToken
            const response: AxiosResponse = await this.api.put(url, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async delete(url: string): Promise<T> {
        try {
            // TODO: setAuthToken
            const response: AxiosResponse = await this.api.delete(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}