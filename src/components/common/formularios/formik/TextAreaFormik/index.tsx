import React, {TextareaHTMLAttributes} from 'react';
import {MensajeErrorFormik} from "@commonComponents/formularios/formik/MensajeErrorFormik";

interface TextareaFormikProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    formulario: any;
    clave: string;
    etiqueta?: string;
    placeholder?: string;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
}

const TextareaFormik = ({formulario, clave, etiqueta,placeholder, onChange, onBlur, ...rest}: TextareaFormikProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        formulario.handleChange(e);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        formulario.handleBlur(e);
        if (onBlur) {
            onBlur(e.target.value);
        }
    }

    return (
        <div>
            {etiqueta && <label>{etiqueta}</label>}
            <textarea
                {...rest}
                className={"form-control"}
                name={clave}
                placeholder={placeholder ? placeholder : clave}
                onChange={handleChange}
                onBlur={handleBlur}
                value={formulario.values[clave]}
            />
            <MensajeErrorFormik formulario={formulario} clave={clave}/>
        </div>
    );
};

export default TextareaFormik;