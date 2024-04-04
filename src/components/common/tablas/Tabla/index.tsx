import React, {useState} from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Row,
    Table
} from 'reactstrap';
import Encabezado from "@commonComponents/tablas/common/EncabezadoTabla";
import Paginador from "@commonComponents/tablas/common/PaginadorTabla";
import {TablaProps} from "@data/props/Tablas";
import Boton from '../../botones/Boton';
import {Iconos} from "@data/constants/Iconos";

interface TablaComunProps {
    configuraciones: TablaProps;
    children?: React.ReactNode;
    datos: any[];
    getPaginaActual?: (paginaActual: number) => any;
    totalPaginas?: number;
    eventoBuscar?: () => void;
    eventoRegresar?: () => void;
    eventoAgregar?: () => void;
    eventoEliminar?: () => void;
}

const Tabla = ({
                   configuraciones,
                   datos = [],
                   children,
                   getPaginaActual,
                   totalPaginas,
                   eventoBuscar,
                   eventoRegresar,
                   eventoAgregar,
                   eventoEliminar
               }: TablaComunProps) => {

    const [paginaActual, setPaginaActual] = useState(1);
    const paginasTotales = Math.ceil(datos.length / configuraciones.cantidadRegistrosPagina);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const cambiarPagina = (pageNumber: number) => {
        setPaginaActual(pageNumber);
        if (getPaginaActual) {
            getPaginaActual(paginaActual);
        }
    };

    const handleBuscar = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (eventoBuscar && (e.key === "Enter" || e.key === "Tab")) {
            eventoBuscar();
        }
    }

    return (
        <Card>
            <CardHeader>
                <Row className='px-1 py-2 '>
                    <Col md={5} lg={6} xxl={8}>
                        <Col className=''>
                            <h4 className='mt-1'>{configuraciones.titulo && configuraciones.titulo !== "" ? configuraciones.titulo : "TODO: Asignar título"}</h4>
                            {configuraciones.subtitulo && (
                                <p className="f-m-light mt-1">
                                    <span>{configuraciones.subtitulo}</span>
                                </p>
                            )}
                        </Col>
                    </Col>
                    <Col md={7} lg={6} xxl={4} className={"d-flex justify-content-evenly px-2 pt-md-0"} align="end">
                        <Col xs={8} sm={9} lg={12} className={"pt-3 pt-md-0 d-lg-flex justify-content-end"}>
                            {eventoBuscar && (
                                <Col lg={7} xxl={8} className={"mx-lg-1"} align="end">
                                    <div className={"input-group"}>
                                        <Input placeholder={"Buscar..."} className={"form-control"}
                                               onKeyDown={handleBuscar}/>
                                        <Boton onClick={eventoBuscar} icono={Iconos.BUSCAR}
                                               className={"input-action-btn d-none d-lg-block"}/>
                                    </div>
                                </Col>
                            )}
                            {eventoRegresar && (
                                <div className={"d-none d-lg-block mx-2"}>
                                    <Boton icono={Iconos.ATRAS} onClick={eventoRegresar} className={"px-3 h-100"}/>
                                </div>
                            )}
                            {eventoAgregar && (
                                <div className={"d-none d-lg-block mx-2"}>
                                    <Boton icono={Iconos.AGREGAR} onClick={eventoAgregar} className={"px-3 h-100"}/>
                                </div>
                            )}
                            {eventoEliminar && (
                                <div className={"d-none d-lg-block mx-2"}>
                                    <Boton icono={Iconos.ELIMINAR} onClick={eventoEliminar}
                                           className={"px-3 h-100"}/>
                                </div>
                            )}
                        </Col>
                        <Col xs={4} sm={3} className={"d-block d-lg-none pt-3 pt-md-0"}>
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}
                                      className={"mx-2"}>
                                <DropdownToggle caret className={"py-1"} style={{backgroundColor: "red"}}>
                                    Acciones
                                </DropdownToggle>
                                <DropdownMenu>
                                    {eventoRegresar && <DropdownItem
                                        onClick={eventoRegresar}>Regresar</DropdownItem>}
                                    {eventoAgregar && <DropdownItem
                                        onClick={eventoAgregar}>Agregar</DropdownItem>}
                                    {eventoEliminar && <DropdownItem
                                        onClick={eventoEliminar}>Eliminar</DropdownItem>}
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <div className="table table-responsive-lg">
                    <Table className={'table table-responsive'} size={configuraciones.tamano}
                           hover={configuraciones.hover}>
                        <Encabezado encabezados={configuraciones.encabezados}/>
                        <tbody>
                        {React.Children.toArray(children).slice(
                            (paginaActual - 1) * configuraciones.cantidadRegistrosPagina,
                            paginaActual * configuraciones.cantidadRegistrosPagina
                        )}
                        </tbody>
                    </Table>
                </div>
                <div className='container-fluid mt-3'>
                    <Paginador
                        paginaActual={paginaActual}
                        paginasTotales={totalPaginas ? totalPaginas : paginasTotales}
                        handlePageClick={cambiarPagina}
                    />
                </div>

            </CardBody>

        </Card>
    );
};

export default Tabla;
