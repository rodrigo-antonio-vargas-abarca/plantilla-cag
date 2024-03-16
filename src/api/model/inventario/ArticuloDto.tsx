export default interface ArticuloDto {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const valoresDefecto: Partial<ArticuloDto> = {
    discountPercentage: 10,
    rating: 0.2,
    category: 'smartphones',
};

export function crearArticulo(
    {
        id = 0,
        title = '',
        description = '',
        price = 0,
        discountPercentage = 10,
        rating = 0.2,
        stock = 0,
        brand = '',
        category = 'smartphones',
        thumbnail = '',
        images = []
    }: Partial<ArticuloDto> = {}): ArticuloDto {
    return {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
        ...valoresDefecto
    };
}