import {MenuItem} from "@data/props/Layout";

export const MenuList: MenuItem[] | undefined = [
    {
        title: "General",
        lanClass: "lan-8",
        menucontent: "General",
        Items: [
            {
                title: "Ejemplo",
                id: 1,
                icon: "ecommerce",
                type: "sub",
                active: false,
                children: [
                    {
                        title: "Movimientos",
                        type: "sub",
                        children: [
                            {path: "/ejemplo/pedidos", title: "Pedidos", type: "link"},
                        ]
                    }
                ],
            },
            {
                title: "Inventario",
                id: 6,
                icon: "ecommerce",
                type: "sub",
                active: false,
                children: [
                    {
                        title: "Movimientos",
                        type: "sub",
                        children: [
                            {path: "/inventario/articulos", title: "Artículos", type: "link"},
                            {path: "/modulo1/movimiento2", title: "Movimiento 2", type: "link"},
                        ],
                    },
                    {
                        title: "Parámetros",
                        type: "sub",
                        children: [
                            {path: "/modulo1/parametro1", title: "Parámetro 1", type: "link"},
                        ],
                    },
                    {
                        title: "Reportes",
                        type: "sub",
                        children: [
                            {path: "/modulo1/reportes/reporte1", title: "Reporte 1", type: "link"},
                        ],
                    }
                ],
            },
            {
                title: "General",
                id: 6,
                icon: "ecommerce",
                type: "sub",
                active: false,
                children: [
                    {
                        title: "Movimientos",
                        type: "sub",
                        children: [
                            {path: "/general/companias", title: "Compañías", type: "link"},
                            {path: "/modulo2/movimiento2", title: "Movimiento 2", type: "link"},
                        ],
                    },
                    {
                        title: "Parámetros",
                        type: "sub",
                        children: [
                            {path: "/modulo2/parametro1", title: "Parámetro 1", type: "link"},
                        ],
                    },
                    {
                        title: "Reportes",
                        type: "sub",
                        children: [
                            {path: "/modulo2/reportes/reporte1", title: "Reporte 1", type: "link"},
                        ],
                    }
                ],
            },
        ]
    },
];

