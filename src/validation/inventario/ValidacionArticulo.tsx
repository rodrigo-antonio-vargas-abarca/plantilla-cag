import * as Yup from "yup";
import ArticuloDto from "@model/inventario/ArticuloDto";

export const esquemaValidacion = Yup.object<ArticuloDto>({
    title: Yup.string().required('Campo requerido'),
    description: Yup.string().required('Campo requerido'),
    price: Yup.number().required('Campo requerido').positive('Debe ser mayor a 0'),
    discountPercentage: Yup.number().required('Campo requerido').positive('Debe ser mayor a 0'),
});

export default {
    esquema: esquemaValidacion
};


