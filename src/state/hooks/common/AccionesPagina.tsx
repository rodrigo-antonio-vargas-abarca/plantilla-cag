import {useContext} from "react";
import {AccionesPaginaContext} from "@/state/providers/AccionesPaginaProvider";

export const useAccionesPagina = () => {

    const {eventoGuardar, eventoLimpiar, eventoEliminar, reiniciarEventos} = useContext(AccionesPaginaContext);

    return {eventoGuardar, eventoLimpiar, eventoEliminar, reiniciarEventos};

}

export const useAsignarAccionesPagina = () => {

    const {setEventoGuardarPagina, setEventoLimpiarPagina, setEventoEliminarPagina} = useContext(AccionesPaginaContext);

    return {setEventoGuardarPagina, setEventoLimpiarPagina, setEventoEliminarPagina};

}

export const useEstadoAccionesPagina = () => {

    const {isGuardarActivo, isLimpiarActivo, isEliminarActivo} = useContext(AccionesPaginaContext);

    return {isGuardarActivo, isLimpiarActivo, isEliminarActivo};

}

export default useAccionesPagina;


