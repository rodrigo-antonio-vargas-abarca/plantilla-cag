import {TablaProps} from "@data/props/Tablas";
import {TamanoTabla} from "@data/constants/Tamanos";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {useEffect} from "react";
import Mensajes from "@utils/Mensajes";
import {actualizarLista, seleccionarCompania} from "@state/general/CompaniasSlice";
import {CompaniaService} from "@/api/services/general/CompaniaService";
import CompaniaDto from "@model/general/CompaniaDto";
import Tabla from "@commonComponents/tablas/Tabla";

const configuracionesTabla: TablaProps = {
    titulo: "Lista de compañías",
    subtitulo: "Lista de compañías obtenida desde la base de datos",
    encabezados: [
        {etiqueta: "ID", ancho: 10},
        {etiqueta: "Código", ancho: 20},
        {etiqueta: "Descripción", ancho: 45},
        {etiqueta: "Principal", ancho: 25},
    ],
    cantidadElementos: 10,
    tamano: TamanoTabla.PEQUENA,
    hover: true
}

const TablaCompanias = () => {

    const dispatch = useAppDispatch();
    const companias = useAppSelector((state) => state.companias.lista);

    useEffect(() => {

        const getCompanias = async () => {
            try {
                const companias = await CompaniaService.getCompanias();
                dispatch(actualizarLista(companias));
            } catch (error) {
                Mensajes.error("Error al obtener las compañías" + error);
                console.log(error);
            }
        };

        getCompanias();

    }, []);

    const handleSeleccionarCompania = async (id: number) => {
        try {
            dispatch(seleccionarCompania(id));
        } catch (error) {
            Mensajes.error("Error al seleccionar la compañía" + error);
            console.log(error);
        }
    }

    return (
        <Tabla configuraciones={configuracionesTabla} datos={companias}>
            {companias.map((compania: CompaniaDto) => (
                <tr key={compania.id} onClick={() => handleSeleccionarCompania(compania.id)}>
                    <td>{compania.id}</td>
                    <td>{compania.codigo}</td>
                    <td>{compania.descripcion}</td>
                    <td>{compania.esPrincipal}</td>
                </tr>
            ))}
        </Tabla>
    )
}

export default TablaCompanias;