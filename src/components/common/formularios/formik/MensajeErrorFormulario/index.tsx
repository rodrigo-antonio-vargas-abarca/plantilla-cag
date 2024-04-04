import {ErrorMessage, FormikProps, useFormikContext} from "formik";
import React from "react";

interface MensajeErrorFormikProps {
    clave: string;
    muestraError?: boolean;
}

export const MensajeErrorFormulario = ({clave, muestraError = true}: MensajeErrorFormikProps) => {

    const formulario: FormikProps<any> = useFormikContext();

    const tieneErrores = muestraError && formulario.touched[clave] && formulario.errors[clave];

    /*const input = document.querySelector(`[name=${clave}], select[name=${clave}], textarea[name=${clave}]`);

    if (input) {
        if (tieneErrores) {
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    }*/

    return (
        <>
            {tieneErrores &&
                <ErrorMessage name={clave} component="div" className="input-label-error"/>
            }
        </>
    );
};
