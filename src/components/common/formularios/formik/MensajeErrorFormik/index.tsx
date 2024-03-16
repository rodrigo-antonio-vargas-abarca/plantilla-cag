interface MensajeErrorFormikProps {
    formulario: any;
    clave: string;
}

export const MensajeErrorFormik = ({formulario, clave}: MensajeErrorFormikProps) => {

    const tieneErrores = formulario.touched[clave] && formulario.errors[clave];

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
            {tieneErrores && <div>{formulario.errors[clave]}</div>}
        </div>
    );
};
