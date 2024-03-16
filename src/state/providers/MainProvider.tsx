"use client";
import Store from "@/state/Store";
import React from "react";
import {Provider} from "react-redux";
import {AccionesPaginaProvider} from "@/state/providers/AccionesPaginaProvider";

const MainProvider = ({children}: { children: React.ReactNode }) => {
    return (
        <Provider store={Store}>
            <AccionesPaginaProvider>
                {children}
            </AccionesPaginaProvider>
        </Provider>
    );
};

export default MainProvider;
