import SVG from "@commonComponents/SVG";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {handlePined, handleResponsiveToggle} from "@state/common/layout/LayoutSlice";
import {MenuListType, SidebarItemTypes} from "@data/props/Layout";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
import Icono from "@commonComponents/Icono";
import {Iconos} from "@data/constants/Iconos";

const Menulist: React.FC<MenuListType> = ({menu, setActiveMenu, activeMenu, level, className}) => {
    const {pinedMenu} = useAppSelector((state) => state.layout);
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const {sidebarIconType} = useAppSelector((state) => state.themeCustomizer);

    const ActiveNavLinkUrl = (path?: string, active?: boolean) => {
        return pathname === path ? (active ? active : true) : "";
    };

    const shouldSetActive = ({item}: SidebarItemTypes) => {
        var returnValue = false;
        if (item?.path?.split(`/`)[1] === pathname.split(`/`)[1]) {
            returnValue = true;
        }
        if (!returnValue && item?.children) {
            item?.children.every((subItem) => {
                returnValue = shouldSetActive({item: subItem});
                return !returnValue;
            });
        }
        return returnValue;
    };

    useEffect(() => {
        menu?.forEach((item: any) => {
            let gotValue = shouldSetActive({item});
            if (gotValue) {
                let temp = [...activeMenu];
                temp[level] = item.title;
                setActiveMenu(temp);
            }
        });
    }, [pathname]);

    return (
        <>
            {menu?.map((item, index) => (
                <li key={index}
                    className={`${level === 0 ? "sidebar-list" : ""} ${pinedMenu.includes(item.title || "") ? "pined" : ""}  ${(item.children ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "active" : ""} `}>
                    {level === 0 &&
                        <i className="fa fa-thumb-tack" onClick={() => dispatch(handlePined(item.title))}></i>}
                    <Link
                        className={`${!className && level !== 2 ? "sidebar-link sidebar-title" : ""}  ${(item.children ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "active" : ""}`}
                        href={item?.path ? `${item?.path}` : ""}
                        onClick={() => {
                            const temp = activeMenu;
                            temp[level] = item.title !== temp[level] && item.title;
                            setActiveMenu([...temp]);
                            if (item?.path) {
                                dispatch(handleResponsiveToggle())
                            }
                        }}>
                        {item.icon && (<Icono icono={Iconos.ESTRELLA /*TODO: Cambiar*/}/>)}
                        <span className={item.lanClass && item.lanClass}>{item.title}</span>
                        {item.children && (
                            <div className="according-menu">
                                <i className="fa fa-angle-right"/>
                            </div>
                        )}
                    </Link>
                    {item.children && (
                        <ul className={`sidebar-submenu ${level !== 0 ? "nav-sub-childmenu submenu-content" : ""}`}>
                            <Menulist menu={item.children} activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                                      level={level + 1} className="sidebar-submenu"/>
                        </ul>
                    )}
                </li>
            ))}
        </>
    );
};

export default Menulist;
