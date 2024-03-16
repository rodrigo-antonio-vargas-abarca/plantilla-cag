import CompaniaDto, {crearCompania} from "@model/general/CompaniaDto";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface EstadoCompania {
    lista: any[];
    compania: CompaniaDto;
    seleccionada: boolean;
    cargando: boolean;
}

const initialState: EstadoCompania = {
    lista: [],
    compania: crearCompania(),
    seleccionada: false,
    cargando: false
};

function inicializarCompania(state: EstadoCompania) {
    state.compania = crearCompania();
    state.seleccionada = false;
}

const companiasSlice = createSlice({
    name: 'companias',
    initialState,
    reducers: {
        actualizarLista(state, action: PayloadAction<CompaniaDto[]>) {
            state.lista = action.payload;
            inicializarCompania(state);
        },
        seleccionarCompania(state, action: PayloadAction<number>) {
            state.compania = state.lista.find(compania => compania.id === action.payload) || null;
            state.seleccionada = true;
        },
        editarCompania(state, action: PayloadAction<CompaniaDto>) {
            state.lista = state.lista.map(compania =>
                compania.id === action.payload.id ? action.payload : compania
            );
            inicializarCompania(state);
        },
        eliminarCompania(state, action: PayloadAction<number>) {
            state.lista = state.lista.filter(compania => compania.id !== action.payload);
            inicializarCompania(state);
        },
        agregarCompania(state, action: PayloadAction<CompaniaDto>) {
            const nuevaCompania = {...action.payload, id: state.lista.length + 1};
            state.compania = nuevaCompania;
            state.lista = [nuevaCompania, ...state.lista];
            inicializarCompania(state);
        },
        limpiarCompania(state) {
            inicializarCompania(state);
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.cargando = action.payload;
        }
    },
});

export const {
    actualizarLista,
    seleccionarCompania,
    editarCompania,
    eliminarCompania,
    agregarCompania,
    limpiarCompania,
    setLoading
} = companiasSlice.actions;

export default companiasSlice.reducer;