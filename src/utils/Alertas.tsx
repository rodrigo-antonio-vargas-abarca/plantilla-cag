import Swal from "sweetalert2";
import {TipoAlerta} from "@data/props/Alertas";
import Colores from "@data/constants/Colores";

const opciones = {
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    confirmButtonColor: '#056B01', // TODO: Cambiar por el color de la aplicación
    cancelButtonColor: '#d33',
    toast: true
}

export default class Alertas {

    static mostrar(titulo: string, mensaje: string, tipo: TipoAlerta) {
        return Swal.fire({
            title: titulo,
            text: mensaje,
            icon: tipo,
            ...opciones
        });
    }

    static exito(titulo: string, mensaje: string) {
        return this.mostrar(titulo, mensaje, TipoAlerta.EXITO);
    }

    static error(titulo: string, mensaje: string) {
        return this.mostrar(titulo, mensaje, TipoAlerta.ERROR);
    }

    static advertencia(titulo: string, mensaje: string) {
        return this.mostrar(titulo, mensaje, TipoAlerta.ADVERTENCIA);
    }

    static informacion(titulo: string, mensaje: string) {
        return this.mostrar(titulo, mensaje, TipoAlerta.INFORMACION);
    }

}