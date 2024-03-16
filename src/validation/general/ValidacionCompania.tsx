import * as Yup from "yup";
import CompaniaDto from "@model/general/CompaniaDto";

export const esquemaValidacion = Yup.object<CompaniaDto>({
    codigo: Yup.string().required('Campo requerido'),
    descripcion: Yup.string().required('Campo requerido'),
});

export default esquemaValidacion;
