import React, {useEffect} from "react";
import {ArticuloService} from "@/api/services/inventario/ArticuloService";
import Mensajes from "@utils/Mensajes";
import ArticuloDto from "@model/inventario/ArticuloDto";
import {Iconos} from "@data/constants/Iconos";
import {TamanoTabla} from "@data/constants/Tamanos";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {actualizarLista, seleccionarArticulo} from "@state/inventario/ArticulosSlice";
import {TablaProps} from "@data/props/Tablas";
import Colores, {ColoresBadge} from "@data/constants/Colores";
import {Etiqueta} from "@commonComponents/Etiqueta";
import Icono from "@commonComponents/Icono";
import Tabla from "@commonComponents/tablas/Tabla";

const configuracionesTabla: TablaProps = {
    titulo: "Lista de artículos",
    subtitulo: "Lista de artículos obtenida desde la base de datos",
    encabezados: [
        {etiqueta: "ID", ancho: 5},
        {etiqueta: "Nombre", ancho: 15},
        {etiqueta: "Categoría", ancho: 10},
        {etiqueta: "Descripción", ancho: 55},
        {etiqueta: "Descuento", ancho: 5},
        {etiqueta: "Calificación", ancho: 5}
    ],
    cantidadElementos: 10,
    tamano: TamanoTabla.PEQUENA,
    hover: true
}

const TablaArticulos = () => {

    const dispatch = useAppDispatch();
    const articulos = useAppSelector((state) => state.articulos.lista);

    useEffect(() => {

        const getArticulos = async () => {
            try {

                const articulos = await ArticuloService.getArticulos();
                dispatch(actualizarLista(articulos));

            } catch (error) {
                Mensajes.error("Error al obtener los artículos" + error);
                console.log(error);
            }
        };

        getArticulos();

    }, []);

    const handleSeleccionarArticulo = async (id: number) => {
        try {
            dispatch(seleccionarArticulo(id));
        } catch (error) {
            Mensajes.error("Error al seleccionar el artículo");
            console.log(error);
        }
    }

    const getColorCategoria = (category: string): ColoresBadge => {
        switch (category) {
            case 'smartphones':
                return ColoresBadge.ESTADO1;
            case 'laptops':
                return ColoresBadge.ESTADO2;
            case 'fragrances':
                return ColoresBadge.ESTADO3;
            case 'home-decoration':
                return ColoresBadge.ESTADO4;
            default:
                return ColoresBadge.ESTADO5;
        }
    }


    return (
        <Tabla configuraciones={configuracionesTabla} datos={articulos}>

            {articulos.map((articulo: ArticuloDto, index: number) => (
                // <FilaTabla key={index} indice={index.toString()} elemento={elemento} claves={claves}/>
                <tr key={index} onClick={() => {handleSeleccionarArticulo(articulo.id)}}>
                    <td>{articulo.id}</td>
                    <td>{articulo.title}</td>
                    <td>
                        <Etiqueta texto={articulo.category} color={getColorCategoria(articulo.category)}/>
                    </td>
                    <td>{articulo.description}</td>
                    <td>{articulo.discountPercentage}</td>
                    <td>
                        {articulo.rating}
                        <Icono icono={Iconos.ESTRELLA} color={Colores.SECUNDARIO} tamano={"1.5em"}/>
                    </td>
                </tr>
            ))}

        </Tabla>
    )
}

export default TablaArticulos;