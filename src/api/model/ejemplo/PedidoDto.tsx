import ArticuloDto from "@model/inventario/ArticuloDto";

export default interface PedidoDto {
    id: number;
    products: ArticuloDto[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export function crearPedido(
    {
        id = 0,
        products = [],
        total = 0,
        discountedTotal = 0,
        userId = 0,
        totalProducts = 0,
        totalQuantity = 0
    }: Partial<PedidoDto> = {}): PedidoDto {
    return {
        id,
        products,
        total,
        discountedTotal,
        userId,
        totalProducts,
        totalQuantity
    };
}
