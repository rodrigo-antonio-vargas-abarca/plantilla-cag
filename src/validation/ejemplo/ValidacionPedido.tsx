import * as Yup from "yup";
import PedidoDto from "@model/ejemplo/PedidoDto";

export const validacionPedido = Yup.object<PedidoDto>({
    id: Yup.number().required('Campo requerido').min(1, 'El id debe ser mayor a 0'),
    products: Yup.array().required('Campo requerido').min(1, 'Debe haber al menos un producto'),
    total: Yup.number().required('Campo requerido',).min(1, 'El total debe ser mayor a 1'),
    discountedTotal: Yup.number().required('Campo requerido'),
    userId: Yup.number().required('Campo requerido').min(1, 'Se debe definir el usuario'),
    totalProducts: Yup.number().required('Campo requerido').min(1, 'Debe haber al menos un producto'),
    totalQuantity: Yup.number().required('Campo requerido').min(1, 'Debe haber al menos un producto'),
});

export default validacionPedido;