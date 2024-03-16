import React, {SelectHTMLAttributes} from 'react';
import {MensajeErrorFormik} from '@commonComponents/formularios/formik/MensajeErrorFormik';
import {OpcionSelectProps} from "@data/props/Inputs";

interface SelectFormikProps extends SelectHTMLAttributes<HTMLSelectElement> {
    formulario: any;
    clave: string;
    opciones: OpcionSelectProps[];
    placeholder?: string;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
}

const SelectFormik = ({formulario, clave, opciones, placeholder, onChange, onBlur, ...rest}: SelectFormikProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        formulario.handleChange(e);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
        formulario.handleBlur(e);
        if (onBlur) {
            onBlur(e.target.value);
        }
    };

    return (
        <div>
            <select
                name={clave}
                value={formulario.values[clave]}
                className={'form-control'}
                onChange={handleChange}
                onBlur={handleBlur}
                {...rest}
            >
                {placeholder && (
                    <option value="" disabled defaultValue={""}>
                        {placeholder}
                    </option>
                )}
                {opciones.map((option) => (
                    <option key={option.valor} value={option.valor}>
                        {option.etiqueta}
                    </option>
                ))}
            </select>
            <MensajeErrorFormik formulario={formulario} clave={clave}/>
        </div>
    );
};

export default SelectFormik;