type ExtraService = {
    title: string;
    price: number;
    items: string[];
    added?: boolean;
};

export const services: ExtraService[] = [
    {
        title: "Asesoría para empezar a vender",
        price: 50,
        items: [
            "Acompañamiento para subir tu primer producto",
            "Explicación básica del proceso de venta"
        ],
        added: true
    },
    {
        title: "Carga inicial de productos en la tienda",
        price: 25,
        items: ["Subida de los 2 primeros productos a la tienda TikTok Shop"]
    },
    {
        title: "Carga de productos adicionales en la tienda",
        price: 25,
        items: ["Subida de productos extra según requerimiento"]
    },
    {
        title: "Vinculación de TikTok Shop",
        price: 150,
        items: [
            "Vinculación de la tienda con tu cuenta de TikTok",
            "La tienda aparecerá visible en tu perfil de TikTok"
        ]
    }
];