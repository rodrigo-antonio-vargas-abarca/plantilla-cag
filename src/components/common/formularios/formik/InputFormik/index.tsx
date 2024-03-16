import React from 'react';
import {MensajeErrorFormik} from "@commonComponents/formularios/formik/MensajeErrorFormik";

interface InputFormikProps extends React.InputHTMLAttributes<HTMLInputElement>{
    formulario: any;
    clave: string;
    placeholder?: string;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;

}

const InputFormik = ({formulario, clave, placeholder, onChange, onBlur, ...rest}: InputFormikProps) => {

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
        <div>
            <input
                {...rest}
                name={clave}
                className={"form-control"}
                placeholder={placeholder ? placeholder : clave}
                onChange={handleChange}
                onBlur={handleBlur}
                value={formulario.values[clave]}
            />
            <MensajeErrorFormik formulario={formulario} clave={clave}/>
        </div>
    );
};

export default InputFormik;