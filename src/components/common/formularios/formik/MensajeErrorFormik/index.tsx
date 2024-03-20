interface MensajeErrorFormikProps {
    formulario: any;
    clave: string;
    muestraError?: boolean;
}

export const MensajeErrorFormik = ({formulario, clave, muestraError = true}: MensajeErrorFormikProps) => {

    const tieneErrores = muestraError && formulario.touched[clave] && formulario.errors[clave];

    const input = document.querySelector(`[name=${clave}], select[name=${clave}], textarea[name=${clave}]`);

    if(input) {
        if (tieneErrores) {
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    }

    return (
        <div>
            {tieneErrores && <div className={"input-label-error"}>{formulario.errors[clave]}</div>}
        </div>
    );
};
