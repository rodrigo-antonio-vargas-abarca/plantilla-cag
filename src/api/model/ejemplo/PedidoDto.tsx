import ArticuloDto from "@model/inventario/ArticuloDto";
import DetallePedidoDto from "@model/ejemplo/DetallePedidoDto";

export default interface PedidoDto {
    id: number;
    products: DetallePedidoDto[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export function crearPedido(
    {
        id = 0,
        products = [{
            id: 1,
            title: "Detalle dummy",
            price: 50,
            quantity: 5,
            total: 250,
            discountPercentage: 0,
            discountedPrice: 0,
            thumbnail: "https://dummyimage.com/600x400/000/fff"
        }],
        total = 250,
        discountedTotal = 0,
        userId = 1,
        totalProducts = 5,
        totalQuantity = 1
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
