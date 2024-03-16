import {Col} from "reactstrap";
import {ProfileSection} from "./ProfileSection";
import {ResponsiveSearch} from "./ResponsiveSearch";
import {BotonLimpiar} from "@layouts/Header/AccionesPagina/BotonLimpiar";
import {BotonGuardar} from "@layouts/Header/AccionesPagina/BotonGuardar";
import {BotonEliminar} from "@layouts/Header/AccionesPagina/BotonEliminar";

export const Profile = () => {
    return (
        <Col xl="7" lg="8" md="7" xs="8" className="nav-right pull-right right-header p-0 ms-auto">
            <ul className="nav-menus">
                <ResponsiveSearch/>
                <BotonLimpiar/>
                <BotonGuardar/>
                <BotonEliminar/>
                <ProfileSection/>
            </ul>
        </Col>
    );
};
