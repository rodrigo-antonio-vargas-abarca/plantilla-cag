import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const opciones = {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

class Mensajes {

    static exito(message: string) {
        toast.success(message, opciones);
    }

    static error(message: string) {
        toast.error(message, opciones);
    }

    static advertencia(message: string) {
        toast.warning(message, opciones);
    }

    static informacion(message: string) {
        toast.info(message, opciones);
    }

}

export default Mensajes;