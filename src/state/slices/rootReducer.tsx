import {combineReducers} from 'redux';
import HeaderBookmarkSlice from "@state/common/layout/HeaderBookmarkSlice";
import LayoutSlice from "@state/common/layout/LayoutSlice";
import ThemeCustomizerSlice from "@state/common/layout/ThemeCustomizerSlice";
import LanguageSlice from "@state/common/layout/LanguageSlice";
import ArticulosSlice from "@state/inventario/ArticulosSlice";
import CompaniasSlice from "@state/general/CompaniasSlice";

const rootReducer = combineReducers({
    layout: LayoutSlice,
    headerBookMark: HeaderBookmarkSlice,
    themeCustomizer: ThemeCustomizerSlice,
    langSlice: LanguageSlice,
    articulos: ArticulosSlice,
    companias: CompaniasSlice,

});

export default rootReducer;