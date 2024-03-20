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
    eventos?: EventosPaginaProps;
    triggerActualizaEventos? : any; // Objeto que determina cuando se renderizan los eventos
    children: React.ReactNode;
}