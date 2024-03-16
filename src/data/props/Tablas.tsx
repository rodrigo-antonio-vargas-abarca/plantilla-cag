import {TamanoTabla} from "@data/constants/Tamanos";
import React from "react";

export interface EncabezadoTablaProps {
    etiqueta: string;
    ancho: number;
}

export interface TablaProps {
    titulo?: string;
    subtitulo?: string;
    encabezados: EncabezadoTablaProps[];
    cantidadElementos: number;
    tamano: TamanoTabla;
    datos?: any[];
    children?: React.ReactNode;
    hover?: boolean;
}