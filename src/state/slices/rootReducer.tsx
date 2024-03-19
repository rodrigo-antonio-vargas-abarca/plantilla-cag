import {combineReducers} from 'redux';
import HeaderBookmarkSlice from "@state/common/layout/HeaderBookmarkSlice";
import LayoutSlice from "@state/common/layout/LayoutSlice";
import ThemeCustomizerSlice from "@state/common/layout/ThemeCustomizerSlice";
import LanguageSlice from "@state/common/layout/LanguageSlice";
import PedidosSlice from "@state/ejemplo/PedidosSlice";

const rootReducer = combineReducers({
    layout: LayoutSlice,
    headerBookMark: HeaderBookmarkSlice,
    themeCustomizer: ThemeCustomizerSlice,
    langSlice: LanguageSlice,
    pedidos: PedidosSlice
});

export default rootReducer;