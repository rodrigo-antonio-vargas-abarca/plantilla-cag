import {Form, Input, InputGroup} from "reactstrap";
import SVG from "@commonComponents/SVG";
import {ChangeEvent, useEffect, useState} from "react";
import {MenuItem, SearchSuggestionItem} from "@data/props/Layout";
import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {setResponsiveSearch} from "@state/common/layout/LayoutSlice";
import {MenuList} from "@data/layout/Menu";
import ResponsiveSearchList from "./ResponsiveSearchList";
import Icono from "@commonComponents/Icono";
import {Iconos} from "@data/constants/Iconos";

export const BotonBusqueda = () => {
    const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
    const [searchedWord, setSearchedWord] = useState<string>("");
    const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);
    const {responsiveSearch} = useAppSelector((state) => state.layout);
    const dispatch = useAppDispatch();
    const toggleShow = () => dispatch(setResponsiveSearch());

    useEffect(() => {
        const suggestionArray: SearchSuggestionItem[] = [];
        const getAllLink = (item: MenuItem, icon: string | undefined) => {
            if (item.children) {
                item.children.forEach((ele) => {
                    getAllLink(ele, icon);
                });
            } else {
                suggestionArray.push({icon: icon, title: item.title, path: item.path || ""});
            }
        };
        MenuList?.forEach((item) => {
            item.Items?.forEach((child) => {
                getAllLink(child, child.icon);
            });
        });
        setArr(suggestionArray);
    }, []);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (!searchedWord) setSearchedWord("");
        setSearchedWord(e.target.value);
        let data = [...arr];
        let result = data.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchedArray(result);
    };

    return (
        <>
            <li className="d-block">
                <Form className="search-form mb-0">
                    <InputGroup>
            <span className="input-show">
              <div onClick={toggleShow}>
                <Icono icono={Iconos.BUSCAR}/>
              </div>
              <div id="searchInput" className={responsiveSearch ? "show" : ""}>
                <input type="search" placeholder="Buscar" value={searchedWord} onChange={(e) => handleSearch(e)}/>
              </div>
            </span>
                    </InputGroup>
                    <div
                        className={`Typeahead-menu header-menu custom-scrollbar ${searchedWord.length && responsiveSearch ? "is-open" : ""}`}>
                        <ResponsiveSearchList searchedArray={searchedArray} setSearchedWord={setSearchedWord}/>
                    </div>
                </Form>
            </li>
        </>
    );
};
