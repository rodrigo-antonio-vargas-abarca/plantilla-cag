import {TamanoTabla} from "@data/constants/Tamanos";

export interface EncabezadoTablaProps {
    etiqueta: string;
    ancho: number;
}

export interface TablaProps {
    titulo?: string;
    subtitulo?: string;
    encabezados: EncabezadoTablaProps[];
    cantidadRegistrosPagina: number;
    tamano: TamanoTabla;
    hover?: boolean;
}