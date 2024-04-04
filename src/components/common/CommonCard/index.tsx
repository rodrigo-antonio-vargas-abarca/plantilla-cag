import Link from "next/link";
import React, {Fragment, useEffect, useState} from "react";
import {Button, Card, CardBody, CardHeader, Collapse} from "reactstrap";
import {SpanType} from "@data/props/Span";
import {Iconos} from "@data/constants/Iconos";
import Icono from "@commonComponents/Icono";
import Colores from "@data/constants/Colores";

interface CommonCardProps {
    titulo: string;
    subtitulo?: SpanType[];
    icono?: React.ReactNode;
    claseCard?: string;
    claseTitulo?: string;
    claseHeader?: string;
    nombreEnlace?: string;
    enlace?: string;
    collapse?: boolean;
    children?: React.ReactNode;
}

const CommonCard = ({titulo, subtitulo, icono, claseCard, claseTitulo, claseHeader, nombreEnlace, enlace, collapse = false, children}: CommonCardProps) => {

    const [abierto, setAbierto] = useState(true);
    const abrir = () => setAbierto((estadoAnterior) => !estadoAnterior);

    useEffect(() => {
        if (collapse) {
            setAbierto(false);
        }
    }, []);

    return (
        <Card className={claseCard ? claseCard : ""}>
            {(titulo) && <CardHeader className={claseHeader ? claseHeader : ""}>
                <div className="row">
                    <div className="col-11">
                        <h4 className={claseTitulo ? claseTitulo : ""}>{icono && icono}{titulo}</h4>
                        {nombreEnlace && <Link href={`/${enlace}`}>{nombreEnlace}</Link>}
                        {subtitulo && (
                            <p className="f-m-light mt-1">
                                {subtitulo.map((data, index) => (
                                    <Fragment key={index}>{data?.text} {data.code &&
                                        <code>{data.code}</code>} {data.mark &&
                                        <mark>{data.mark}</mark>}</Fragment>))}
                            </p>
                        )}
                    </div>
                    <div className="col-1">
                        {collapse && (
                            <div className="sales-chart-dropdown-select">
                                <div className="card-header-right-icon">
                                    <Button color={"transparent"} onClick={abrir}>
                                        <Icono icono={abierto ? Iconos.SUBIR : Iconos.BAJAR} color={Colores.PRIMARIO}/>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </CardHeader>}
            <CardBody className={abierto ? '' : 'd-none'}>
                <Collapse isOpen={abierto} styleclass="m-0 p-0">
                    {children}
                </Collapse>
            </CardBody>
        </Card>
    );
};

export default CommonCard;
