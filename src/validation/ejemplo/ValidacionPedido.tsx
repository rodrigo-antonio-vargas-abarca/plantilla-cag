import * as Yup from "yup";
import PedidoDto from "@model/ejemplo/PedidoDto";

export const validacionPedido = Yup.object<PedidoDto>({
    id: Yup.number().required('Campo requerido'),
    products: Yup.array().required('Campo requerido'),
    total: Yup.number().required('Campo requerido'),
    discountedTotal: Yup.number().required('Campo requerido'),
    userId: Yup.number().required('Campo requerido'),
    totalProducts: Yup.number().required('Campo requerido'),
    totalQuantity: Yup.number().required('Campo requerido'),
});

export default validacionPedido;