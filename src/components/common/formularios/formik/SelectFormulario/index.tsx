import React from 'react';
import {OpcionSelectProps, SelectProps} from "@data/props/Inputs";
import {Field, FormikProps, useFormikContext} from "formik";
import {MensajeErrorFormulario} from "@commonComponents/formularios/formik/MensajeErrorFormulario";

interface SelectFormikProps extends SelectProps {
    opciones: OpcionSelectProps[];
    muestraError?: boolean;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
}

const SelectFormulario = ({
                              clave,
                              etiqueta,
                              textoAyuda,
                              opciones,
                              onChange,
                              onBlur,
                              muestraError,
                              ...rest
                          }: SelectFormikProps) => {

    const formulario: FormikProps<any> = useFormikContext();

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
        <div className={"mb-1"}>
            {etiqueta && <label className={"input-label"}>{etiqueta}</label>}
            <Field as="select"
                   name={clave}
                   className={'form-control'}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   {...rest}
            >
                {textoAyuda && (
                    <option value="" disabled defaultValue={""}>
                        {textoAyuda}
                    </option>
                )}
                {opciones.map((option) => (
                    <option key={option.valor} value={option.valor}>
                        {option.etiqueta}
                    </option>
                ))}
            </Field>
            <MensajeErrorFormulario clave={clave} muestraError={muestraError}/>
        </div>
    );
};

export default SelectFormulario;