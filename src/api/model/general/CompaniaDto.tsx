export default interface CompaniaDto {
    id: number;
    codigo: string;
    descripcion: string;
    esPrincipal: number;
    version: number;
    unidades: any[];
}

export function crearCompania (
    {
        id = 0,
        codigo = '',
        descripcion = '',
        esPrincipal = 0,
        version = 0,
        unidades = []
    }: Partial<CompaniaDto> = {}): CompaniaDto {
    return {
        id,
        codigo,
        descripcion,
        esPrincipal,
        version,
        unidades,
    };
}