"use client";
import Header from "@layouts/Header/Header";
import {SideBar} from "@layouts/SideBar/SideBar";
import Footer from "@layouts/Footer/Footer";
import {ToastContainer} from "react-toastify";
import TapTop from "@layouts/TapTop";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {setDarkMode, setToggleSidebar} from "@state/common/layout/LayoutSlice";
import {setLayout} from "@state/common/layout/ThemeCustomizerSlice";
import {Container} from "reactstrap";
import Mensajes from "@utils/Mensajes";

export default function RootLayout({children}: { children: React.ReactNode }) {

    const {layout} = useAppSelector((state) => state.themeCustomizer);
    const dispatch = useAppDispatch();

    const compactSidebar = () => {
        let windowWidth = window.innerWidth;
        if (layout === "compact-wrapper") {
            if (windowWidth < 1200) {
                dispatch(setToggleSidebar(true));
            } else {
                dispatch(setToggleSidebar(false));
            }
        } else if (layout === "horizontal-wrapper") {
            if (windowWidth < 992) {
                dispatch(setToggleSidebar(true));
                dispatch(setLayout("compact-wrapper"));
            } else {
                dispatch(setToggleSidebar(false));
                dispatch(setLayout(localStorage.getItem("layout")));
            }
        }
    };

    const handleDarkMode = () => {

        let prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        dispatch(setDarkMode(prefersDarkMode));

    }

    useEffect(() => {
        compactSidebar();
        window.addEventListener("resize", () => {
            compactSidebar();
        });
        handleDarkMode();
    }, [layout]);

    return (
        <>
            <div className={`page-wrapper ${layout}`} id="pageWrapper">
                <Header/>
                <div className="page-body-wrapper">
                    <SideBar/>
                    <div className="page-body">
                        <Container fluid>
                            {children}
                        </Container>
                    </div>
                    <Footer/>
                </div>
            </div>
            <ToastContainer/>
            <TapTop/>
        </>
    );
}