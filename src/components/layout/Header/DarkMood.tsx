import {useAppDispatch, useAppSelector} from "@hooks/common/State";
import {setDarkMode} from "@state/common/layout/LayoutSlice";
import {Moon} from "react-feather";

export const DarkMood = () => {
    const {darkMode} = useAppSelector((state) => state.layout);
    const dispatch = useAppDispatch();

    const handleDarkMode = () => {
        dispatch(setDarkMode(!darkMode));
    };

    return (
        <li onClick={handleDarkMode}>
            <div className={`mode ${darkMode ? "active" : ""}`} style={{display: "flex", justifyContent: "start"}}>
                <Moon className="moon"/>
                <span>{`${darkMode ? "Claro" : "Oscuro"}`}</span>
            </div>
        </li>
    );
};
