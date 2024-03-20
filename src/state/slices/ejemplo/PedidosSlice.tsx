import PedidoDto, { crearPedido } from "@model/ejemplo/PedidoDto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

function inicializarPedido(state: EstadoPedidos, id: number = 0) {
    state.pedidoSeleccionado = crearPedido({ id });
    state.isSeleccionado = false;
    state.isBuscando = false;
}

const pedidosSlice = createSlice({
    name: 'pedidos',
    initialState,
    reducers: {
        setListaPedidos(state, action: PayloadAction<PedidoDto[]>) {
            state.pedidos = action.payload;
        },
        agregarPedidoLista(state, action: PayloadAction<PedidoDto>) {
            const nuevoPedido = { ...action.payload, id: state.pedidos.length + 1 };
            if (state.pedidos.length > 0) {
                state.pedidos = [nuevoPedido, ...state.pedidos];
            } else {
                state.pedidos = [nuevoPedido];
            }
            inicializarPedido(state);
        },
        editarPedidoLista(state, action: PayloadAction<PedidoDto>) {

            // Si tiene pedidos, entonces se actualiza el pedido, sino lo agrega
            if (state.pedidos.length > 0) {
                state.pedidos = state.pedidos.map(pedido =>
                    pedido.id === action.payload.id ? action.payload : pedido
                );
            } else {
                state.pedidos = [action.payload];
            }

            inicializarPedido(state);
        },
        eliminarPedidoLista(state, action: PayloadAction<number>) {
            state.pedidos = state.pedidos?.filter(pedido => pedido.id !== action.payload);
            inicializarPedido(state);
        },
        setPedido(state, action: PayloadAction<PedidoDto>) {
            state.pedidoSeleccionado = action.payload;
            state.isSeleccionado = true;
        },
        seleccionarPedido(state, action: PayloadAction<number | null>) {
            const id = action.payload;

            if (id === null) {
                inicializarPedido(state);
                return;
            }

            state.pedidoSeleccionado = state.pedidos.find(pedido => pedido.id === action.payload) || crearPedido();
            state.isSeleccionado = true;
            state.isBuscando = false;
        },
        crearPedidoNuevo(state, action: PayloadAction<number>) {
            inicializarPedido(state, action.payload);
            state.isBuscando = false;
            state.isSeleccionado = false;
        },
        buscarPedido(state, action: PayloadAction<string>) {
            state.pedidoSeleccionado = state.pedidos.find(pedido => pedido.id === parseInt(action.payload, 10)) || crearPedido();
            state.isSeleccionado = true;
        },
        cambiarBuscando(state) {
            state.isBuscando = !state.isBuscando;
        }
    },
});

export const {
    setListaPedidos,
    agregarPedidoLista,
    editarPedidoLista,
    eliminarPedidoLista,
    setPedido,
    seleccionarPedido,
    crearPedidoNuevo,
    buscarPedido,
    cambiarBuscando
} = pedidosSlice.actions;

export default pedidosSlice.reducer;