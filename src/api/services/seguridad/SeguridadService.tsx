import seguridadApi from '@api/seguridad/SeguridadApi';

export const login = async (credentials: any) => {
    try {

        const response = await seguridadApi.get('/login');

        return response.data;

    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await seguridadApi.post('/logout');
        return response.data;
    } catch (error) {
        throw error;
    }
};