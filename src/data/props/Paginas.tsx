export interface EncabezadoPaginaProps {
    titulo: string;
}

export interface EventosPaginaProps {
    limpiar?: () => void;
    guardar?: () => void;
    eliminar?: () => void;
}

export interface ContenedorPaginaProps {
    titulo: string;
    eventos?: EventosPaginaProps
    children: React.ReactNode;
}