import React from 'react';
import Boton from "@commonComponents/botones/Boton";
import {Iconos} from "@data/constants/Iconos";
import {Field} from "formik";
import {MensajeErrorFormulario} from "@commonComponents/formularios/formik/MensajeErrorFormulario";
import {InputProps} from "@data/props/Inputs";

interface InputFormularioProps extends InputProps {
    tipo?: string;
    muestraError?: boolean;
    muestraBotonLista?: boolean;
    onChange?: (value: any) => void;
    onBlur?: (value: any) => void;
}

const InputFormulario = ({
                             clave,
                             etiqueta,
                             textoAyuda,
                             tipo,
                             onChange,
                             onBlur,
                             eventoBuscar,
                             eventoListaAyuda,
                             muestraError,
                             muestraBotonLista = true,
                             ...rest
                         }: InputFormularioProps) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (eventoBuscar) {
            if (e.key === "Enter" || e.key === "Tab") {
                eventoBuscar();
            }
        }
        if (eventoListaAyuda) {
            if (e.key === "F9") {
                eventoListaAyuda();
            }
        }
    }

    return (
        <div className={"mb-1"}>
            {etiqueta && <label className={"input-label"}>{etiqueta}</label>}
            <div className="input-group">
                <Field
                    name={clave}
                    className={"form-control"}
                    placeholder={textoAyuda ? textoAyuda : (etiqueta ? etiqueta : clave)}
                    onKeyDown={handleKeyDown}
                    as={tipo ? tipo : "input"}
                    {...rest}
                />
                {eventoListaAyuda && muestraBotonLista && <Boton icono={Iconos.BUSCAR} onClick={eventoListaAyuda} className={"input-action-btn"}/>}
            </div>
            <MensajeErrorFormulario clave={clave} muestraError={muestraError}/>
        </div>
    );
};

export default InputFormulario;