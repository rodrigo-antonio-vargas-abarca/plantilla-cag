import PedidoDto, {crearPedido} from "@model/ejemplo/PedidoDto";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface EstadoPedidos {
    pedidos: PedidoDto[];
    pedidoSeleccionado: PedidoDto;
    isSeleccionado: boolean;
    isBuscando: boolean;
}

const initialState: EstadoPedidos = {
    pedidos: [],
    pedidoSeleccionado: crearPedido(),
    isSeleccionado: false,
    isBuscando: false
};

function inicializarPedido(state: EstadoPedidos) {
    state.pedidoSeleccionado = crearPedido();
    state.isSeleccionado = false;
    state.isBuscando = false;
}

const pedidosSlice = createSlice({
    name: 'pedidos',
    initialState,
    reducers: {
        actualizarPedidos(state, action: PayloadAction<PedidoDto[]>) {
            state.pedidos = action.payload;
        },
        seleccionarPedido(state, action: PayloadAction<number | null>) {

            let id = action.payload;

            if (id === null) {
                inicializarPedido(state);
                return;
            }

            state.isSeleccionado = true;
            state.isBuscando = false;
            state.pedidoSeleccionado = state.pedidos.find(pedido => pedido.id === action.payload) || crearPedido();

        },
        asignarPedido(state, action: PayloadAction<PedidoDto>) {
            state.pedidoSeleccionado = action.payload;
            state.isSeleccionado = true;
        },
        agregarPedido(state, action: PayloadAction<PedidoDto>) {
            const nuevoPedido = {...action.payload, id: state.pedidos.length + 1};
            state.pedidos = [nuevoPedido, ...state.pedidos];
            inicializarPedido(state);
        },
        editarPedido(state, action: PayloadAction<PedidoDto>) {
            state.pedidos = state.pedidos.map(pedido =>
                pedido.id === action.payload.id ? action.payload : pedido
            );
            inicializarPedido(state);
        },
        eliminarPedido(state, action: PayloadAction<number>) {
            state.pedidos = state.pedidos.filter(pedido => pedido.id !== action.payload);
            inicializarPedido(state);
        },
        buscarPedido(state, action: PayloadAction<string>) {
            state.pedidoSeleccionado = state.pedidos.find(pedido => pedido.id === parseInt(action.payload)) || crearPedido();
        },
        toogleBuscando(state) {
            state.isBuscando = !state.isBuscando;
        }
    },
});

export const {
    actualizarPedidos,
    seleccionarPedido,
    asignarPedido,
    agregarPedido,
    editarPedido,
    eliminarPedido,
    buscarPedido,
    toogleBuscando
} = pedidosSlice.actions;

export default pedidosSlice.reducer;
