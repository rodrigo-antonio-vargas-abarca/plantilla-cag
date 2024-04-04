import React, {SelectHTMLAttributes} from "react";

interface CommonProps {
    clave: string;
    etiqueta?: string;
    textoAyuda?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, CommonProps {
    eventoBuscar?: () => void;
    eventoListaAyuda?: () => void;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, CommonProps {
}

export interface OpcionSelectProps {
    etiqueta: string;
    valor: any;
}