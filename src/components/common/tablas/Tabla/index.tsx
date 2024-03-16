import React, {useState} from 'react';
import {Card, CardBody, CardHeader, Table} from 'reactstrap';
import Encabezado from "@commonComponents/tablas/common/EncabezadoTabla";
import Paginador from "@commonComponents/tablas/common/PaginadorTabla";
import {TablaProps} from "@data/props/Tablas";


interface TablaComunProps {
    configuraciones: TablaProps;
    children: React.ReactNode;
    datos: any[];
}

const Tabla = ({configuraciones, datos = [], children} : TablaComunProps) => {

    const [paginaActual, setPaginaActual] = useState(1);

    const paginasTotales = Math.ceil(datos.length / configuraciones.cantidadElementos);

    const cambiarPagina = (pageNumber: number) => {
        setPaginaActual(pageNumber);
    };

    return (
        <Card>
            {configuraciones.titulo && (
                <CardHeader>
                    <h4>{configuraciones.titulo}</h4>
                    {configuraciones.subtitulo && (
                        <p className="f-m-light mt-1">
                            <span>{configuraciones.subtitulo}</span>
                        </p>
                    )}
                </CardHeader>
            )}
            <CardBody>
                <div className="table table-responsive-lg">
                    <Table className={'table table-responsive'} size={configuraciones.tamano} hover={configuraciones.hover}>
                        <Encabezado encabezados={configuraciones.encabezados}/>
                        <tbody>
                        {React.Children.toArray(children).slice(
                            (paginaActual - 1) * configuraciones.cantidadElementos,
                            paginaActual * configuraciones.cantidadElementos
                        )}
                        </tbody>
                    </Table>
                </div>
                <div className='container-fluid mt-3'>
                    <Paginador
                        paginaActual={paginaActual}
                        paginasTotales={paginasTotales}
                        handlePageClick={cambiarPagina}
                    />
                </div>

            </CardBody>

        </Card>
    );
};

export default Tabla;
