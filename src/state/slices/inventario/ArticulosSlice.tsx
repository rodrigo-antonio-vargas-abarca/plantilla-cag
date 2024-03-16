import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ArticuloDto, {crearArticulo} from "@model/inventario/ArticuloDto";

interface EstadoArticulo {
    lista: ArticuloDto[];
    articulo: ArticuloDto;
    seleccionado: boolean;
}

const initialState: EstadoArticulo = {
    lista: [],
    articulo: crearArticulo(),
    seleccionado: false
};

function inicializarArticulo(state: EstadoArticulo) {
    state.seleccionado = false;
    state.articulo = crearArticulo();
}

const articulosSlice = createSlice({
    name: 'articulos',
    initialState,
    reducers: {
        actualizarLista(state, action: PayloadAction<ArticuloDto[]>) {
            state.lista = action.payload;
            inicializarArticulo(state);
        },
        seleccionarArticulo(state, action: PayloadAction<number>) {
            state.articulo = state.lista.find(articulo => articulo.id === action.payload) || crearArticulo();
            state.seleccionado = true;
        },
        editarArticulo(state, action: PayloadAction<ArticuloDto>) {
            state.lista = state.lista.map(articulo =>
                articulo.id === action.payload.id ? action.payload : articulo
            );
            inicializarArticulo(state);
        },
        eliminarArticulo(state, action: PayloadAction<number>) {
            state.lista = state.lista.filter(articulo => articulo.id !== action.payload);
            inicializarArticulo(state);
        },
        agregarArticulo(state, action: PayloadAction<ArticuloDto>) {
            const nuevoArticulo = {...action.payload, id: state.lista.length + 1};
            state.articulo = nuevoArticulo;
            state.lista = [nuevoArticulo, ...state.lista];
            inicializarArticulo(state);
        },
        limpiarArticulo(state) {
            inicializarArticulo(state);
        }
    },
});

export const {
    actualizarLista,
    seleccionarArticulo,
    editarArticulo,
    eliminarArticulo,
    agregarArticulo,
    limpiarArticulo
} = articulosSlice.actions;

export default articulosSlice.reducer;
