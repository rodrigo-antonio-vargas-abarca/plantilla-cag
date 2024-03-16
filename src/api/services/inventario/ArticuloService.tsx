import ArticuloApi from "@api/inventario/ArticuloApi";
import ArticuloDto from "@model/inventario/ArticuloDto";
import {toast} from "react-toastify";

const getArticulos = async () => {
    try {
        return ArticuloService.getArticulos();
    } catch (error) {
        toast.error("Error al obtener los artículos");
        throw error;
    }
}

export const ArticuloService = {
    getArticulos: async (): Promise<ArticuloDto[]>  => {
        try {
            return ArticuloApi.getArticulos().then((response) => {
                return response.products;
            });
        } catch (error) {
            throw error;
        }
    },
    getArticulo: async (id: number) => {
        try {
            return await ArticuloApi.getArticulo(id);
        } catch (error) {
            throw error;
        }
    },
    postArticulo: async (data: ArticuloDto) => {
        try {
            return await ArticuloApi.postArticulo(data);
        } catch (error) {
            throw error;
        }
    }
};