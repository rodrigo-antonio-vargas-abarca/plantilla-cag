import Link from "next/link";
import React from "react";
import {Breadcrumb, BreadcrumbItem, Col, Row} from "reactstrap";
import SVG from "../SVG";
import {usePathname} from "next/navigation";
import {EncabezadoPaginaProps} from "@data/props/Paginas";

const EncabezadoPagina = ({titulo}: EncabezadoPaginaProps) => {

    const pathname = usePathname();

    const path = pathname.split('/').filter(part => part !== '');

    return (
        <div className="page-title">
            <Row>
                <Col>
                    <h3>{titulo}</h3>
                </Col>
                <Col className={'d-flex justify-content-end'}>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link href={`/inicio`}>
                                <SVG iconId="stroke-home"/>
                            </Link>
                        </BreadcrumbItem>
                        {path.map((part, index) => (
                            <BreadcrumbItem key={index} active={index === path.length - 1}>
                                <span>{part}</span>
                            </BreadcrumbItem>
                        ))}
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    );
};

export default EncabezadoPagina;