import CompaniaApi from "@api/general/CompaniaApi";
import CompaniaDto from "@model/general/CompaniaDto";

export const CompaniaService = {
    getCompanias: async () => {
        try {
            return CompaniaApi.getCompanias().then((response) => {
                return response;
            });
        } catch (error) {
            throw error;
        }
    },
    getCompania: async (id: number) => {
        try {
            return await CompaniaApi.getCompania(id);
        } catch (error) {
            throw error;
        }
    },
    crearCompania: async (compania: CompaniaDto) => {
        try {
            return await CompaniaApi.postCompania(compania);
        } catch (error) {
            throw error;
        }
    },
    modificarCompania: async (compania: CompaniaDto) => {
        try {
            return await CompaniaApi.putCompania(compania);
        } catch (error) {
            throw error;
        }
    },
    eliminarCompania: async (id: number) => {
        try {
            return await CompaniaApi.deleteCompania(id);
        } catch (error) {
            throw error;
        }
    }
}