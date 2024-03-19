export default interface DetallePedidoDto {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
}

export function crearDetallePedido(
    {
        id = 0,
        title = '',
        price = 0,
        quantity = 0,
        total = 0,
        discountPercentage = 0,
        discountedPrice = 0,
        thumbnail = ''
    }: Partial<DetallePedidoDto> = {}): DetallePedidoDto {
    return {
        id,
        title,
        price,
        quantity,
        total,
        discountPercentage,
        discountedPrice,
        thumbnail
    };
}