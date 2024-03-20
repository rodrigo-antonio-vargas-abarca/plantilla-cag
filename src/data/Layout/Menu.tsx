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
                    },
                    {
                        title: "Parámetros",
                        type: "sub",
                        children: [

                        ]
                    },
                    {
                        title: "Reportes",
                        type: "sub",
                        children: [

                        ]
                    }
                ],
            },
        ]
    },
];

