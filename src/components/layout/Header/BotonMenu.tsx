import { ImagePath, Loading, SearchRiho } from "../../../data/tags";
import { useAppDispatch, useAppSelector } from "@hooks/common/State";
import { handleResponsiveToggle, scrollToLeft } from "@state/common/layout/LayoutSlice";
import Link from "next/link";
import React from "react";
import Icono from "@commonComponents/Icono";
import {Iconos} from "@data/constants/Iconos";

export const BotonMenu = () => {

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="header-logo-wrapper col-auto p-0">
        <div className="toggle-sidebar" onClick={() => dispatch(handleResponsiveToggle())}>
          <Icono icono={Iconos.MENU}/>
        </div>
        <div className="logo-wrapper">
          <Link href={`/inicio`}>
            <img className="img-fluid for-light" src={`${ImagePath}/logo/logo_dark.png`} alt="logo-light"/>
            <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo-dark"/>
          </Link>
        </div>
      </div>
    </>
  );
};
