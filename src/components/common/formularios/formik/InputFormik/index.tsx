import React from 'react';
import {MensajeErrorFormik} from "@commonComponents/formularios/formik/MensajeErrorFormik";
import Boton from "@commonComponents/botones/Boton";
import {Iconos} from "@data/constants/Iconos";

interface InputFormikProps extends React.InputHTMLAttributes<HTMLInputElement> {
    formulario: any;
    clave: string;
    etiqueta?: string;
    placeholder?: string;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
    eventoBuscar?: () => void;
    muestraError?: boolean;
}

const InputFormik = ({
                         formulario,
                         clave,
                         etiqueta,
                         placeholder,
                         onChange,
                         onBlur,
                         eventoBuscar,
                         muestraError,
                         ...rest
                     }: InputFormikProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formulario.handleChange(e);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        formulario.handleBlur(e);
        if (onBlur) {
            onBlur(e.target.value);
        }
    }

    return (
        <div className={"mb-1"}>
            {etiqueta && <label className={"input-label"}>{etiqueta}</label>}
            <div className="input-group">
                <input
                    {...rest}
                    name={clave}
                    className={"form-control"}
                    placeholder={placeholder ? placeholder : clave}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formulario.values[clave]}
                />
                {eventoBuscar && <Boton icono={Iconos.BUSCAR} onClick={eventoBuscar} className={"input-action-btn"}/>}
            </div>
            <MensajeErrorFormik formulario={formulario} clave={clave} muestraError={muestraError}/>
        </div>
    );
};

export default InputFormik;