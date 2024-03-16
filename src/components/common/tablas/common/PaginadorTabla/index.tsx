import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

interface PaginadorProps {
    paginaActual: number;
    paginasTotales: number;
    handlePageClick: (page: number) => void;
}

const Paginador = ({paginaActual, paginasTotales, handlePageClick}: PaginadorProps) => {
    return (
        <Pagination className="pagination justify-content-end pagination-border-primary pagination-secondary">
            <PaginationItem disabled={paginaActual === 1}>
                <PaginationLink previous onClick={() => handlePageClick(paginaActual - 1)}/>
            </PaginationItem>

            {[...Array(paginasTotales)].map((_, index) => (
                <PaginationItem key={index} active={index + 1 === paginaActual}>
                    <PaginationLink onClick={() => handlePageClick(index + 1)}>
                        {index + 1}
                    </PaginationLink>
                </PaginationItem>
            ))}

            <PaginationItem disabled={paginaActual === paginasTotales}>
                <PaginationLink next onClick={() => handlePageClick(paginaActual + 1)}/>
            </PaginationItem>
        </Pagination>
    );
};

export default Paginador;