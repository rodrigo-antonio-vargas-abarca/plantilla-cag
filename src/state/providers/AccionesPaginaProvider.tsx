import React, {createContext, useState, useEffect} from 'react';
import {usePathname} from "next/navigation";

export const AccionesPaginaContext = createContext({
    eventoGuardar: () => {},
    eventoLimpiar: () => {},
    eventoEliminar: () => {},
    setEventoGuardarPagina: (handleDynamicAction: () => void) => {},
    setEventoLimpiarPagina: (handleDynamicAction: () => void) => {},
    setEventoEliminarPagina: (handleDynamicAction: () => void) => {},
    reiniciarEventos: () => {},
    isGuardarActivo: false,
    isLimpiarActivo: false,
    isEliminarActivo: false
});

// @ts-ignore
export const AccionesPaginaProvider = ({children}) => {

    const [eventoGuardar, setEventoGuardar] = useState(() => () => {});
    const [eventoLimpiar, setEventoLimpiar] = useState(() => () => {});
    const [eventoEliminar, setEventoEliminar] = useState(() => () => {});

    const [isGuardarActivo, setIsGuardarActivo] = useState(false);
    const [isLimpiarActivo, setIsLimpiarActivo] = useState(false);
    const [isEliminarActivo, setIsEliminarActivo] = useState(false);

    const reiniciarEventos = () => {
        setEventoGuardarPagina(() => {});
        setEventoLimpiarPagina(() => {});
        setEventoEliminarPagina(() => {});
        setIsGuardarActivo(false);
        setIsLimpiarActivo(false);
        setIsEliminarActivo(false);
    }

    useEffect(() => {
        reiniciarEventos();
    }, [usePathname()]);

    const setEventoGuardarPagina = (action: () => void) => {
        setIsGuardarActivo(true);
        setEventoGuardar(() => action);
    };

    const setEventoLimpiarPagina = (action: () => void) => {
        setIsLimpiarActivo(true);
        setEventoLimpiar(() => action);
    };

    const setEventoEliminarPagina = (action: () => void) => {
        setIsEliminarActivo(true);
        setEventoEliminar(() => action);
    };

    return (
        <AccionesPaginaContext.Provider value={{
            eventoGuardar,
            eventoLimpiar,
            eventoEliminar,
            setEventoGuardarPagina,
            setEventoLimpiarPagina,
            setEventoEliminarPagina,
            reiniciarEventos,
            isGuardarActivo,
            isLimpiarActivo,
            isEliminarActivo
        }}>
            {children}
        </AccionesPaginaContext.Provider>
    );

};

