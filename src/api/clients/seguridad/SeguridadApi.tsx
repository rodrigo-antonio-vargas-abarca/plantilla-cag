import axios from 'axios';

const seguridadApi = axios.create({
    baseURL: 'http://localhost:8080/test/api/security',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default seguridadApi;