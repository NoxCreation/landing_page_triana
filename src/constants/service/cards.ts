export const services = [
    {
        id: 1,
        title: "Asesoría Integral Semanal",
        tiquet: [
            { label: "Más popular", variant: "primary", value: "maspopular" },
            { label: "Emprendedores", variant: "outline", value: "emprendedores" }
        ],
        yes: "Incluye:",
        no: "No incluye:",
        before: "Desde",
        price: "$800",
        frequency: "/por semana",
        include: [
            "Acompañamiento desde cero",
            "Asesoría constante",
        ],
        notInclude: [
            "Manejo de redes",
            "Trámites legales"
        ]
    },
    {
        id: 2,
        title: "Asesoría para Restaurantes + Activación Digital",
        tiquet: [
            { label: "Más vendido", variant: "primary", value: "masvendido" },
            { label: "Restaurante", variant: "outline", value: "restaurantes" }
        ],
        yes: "Incluye:",
        price: "$300",
        frequency: "pago único",
        include: [
            "Estrategia del restaurante",
            "Activación digital inicial",
            "Paquete básico de creadores de contenido",
            "Recomendaciones personalizadas"
        ],
    },
    {
        id: 3,
        title: 'Consultoría "Start From Zero"',
        tiquet: [
            { label: "Emprendedores", variant: "outline", value: "emprendedores" },
            { label: "Negocio digital", variant: "outline", value: "negociodigital" }
        ],
        require: "Requisito obligatorio",
        requirement: [
            "Formulario previo para revisar su caso",
        ],
        yes: "Incluye:",
        price: "$50",
        frequency: "sesión",
        include: [
            "Sesión de 30 minutos 1:1",
            "Desde crear LLC hasta organizar tu idea",
            "Documento personalizado posterior"
        ],
    },
    {
        id: 4,
        title: "Acompañamiento mensual",
        tiquet: [
            { label: "Emprendedores", variant: "outline", value: "emprendedores" }
        ],
        yes: "Incluye:",
        no: "No incluye:",
        before: "Desde",
        price: "$120",
        frequency: "mes",
        include: [
            "Revisión de dudas semanales",
            "Correciones estratégicas",
            "Recomendaciones prácticas"
        ],
        notInclude: [
            "Manejo de redes",
            "Trámites legales"
        ]
    },
    {
        id: 5,
        title: "Consultoría estratégica 1:1",
        tiquet: [
            { label: "Emprendedores", variant: "outline", value: "emprendedores" },
            { label: "Negocio digital", variant: "outline", value: "negociodigital" }
        ],
        yes: "Incluye:",
        price: "$50",
        frequency: "por sesión",
        include: [
            "Diagnóstico rápido del negocio",
            "Recomendaciones claras y prácticas",
            "Sesión personalizada de 30min a 1 hora"
        ],
    },
    {
        id: 6,
        title: 'Configuración de Tiendas en TikTok Shop',
        tiquet: [
            { label: "Negocio digital", variant: "outline", value: "negociodigital" }
        ],
        require: "Requisito para EE.UU.:",
        requirement: [
            "Dirección válida en Estados Unidos ",
            "Documentos legales (licencia, SSN, etc.) ",
            "Cuenta personal o empresa (LLC) "
        ],
        yes: "Incluye:",
        price: "$250",
        frequency: "pago único",
        include: [
            "Creación completa de la tienda en TikTok Shop",
        ],
    },
    {
        id: 7,
        title: "Paquetes de promoción con Influercers",
        tiquet: [
            { label: "Emprendedores", variant: "outline", value: "emprendedores" },
            { label: "Restaurantes", variant: "outline", value: "restaurantes" }
        ],
        require: "Entregable",
        requirement: [
            "20 videos en total",
            "10 videos publicados por influencers",
            "10 video para tu negocio",
            "Contenido real y auténtico"
        ],
        price: "$400",
        frequency: "pago único",
    },
    {
        id: 8,
        title: "Asesoría para Restaurantes + Activación Digital",
        tiquet: [
            { label: "Emprendedores", variant: "outline", value: "emprendedores" },
            { label: "Restaurante", variant: "outline", value: "restaurantes" }
        ],
        yes: "Incluye:",
        price: "$75",
        frequency: "pago único",
        include: [
            "Revisión completa de la cuenta",
            "Optimización de la bio/descripción",
            "Guía para mejores fotos",
            "Optimización de contenido",
            "Recomendaciones personalizadas"
        ],
    },
    {
        id: 9,
        title: 'Consultoría "Start From Zero"',
        tiquet: [
            { label: "Emprendedores", variant: "outline", value: "emprendedores" },
            { label: "Restaurantes", variant: "outline", value: "restaurantes" },
            { label: "Negocio digital", variant: "outline", value: "negociodigital" }
        ],
        yes: "Incluye:",
        price: "$200",
        frequency: "sesión",
        include: [
            "Creación de perfiles en redes sociales",
            "De 5 a 10 publicaciones iniciales",
            "Diseño aliniado a la identidad de tu marca"
        ],
    },
    {
        id: 10,
        title: 'Paquete de Permisos y Apertura de Local',
        tiquet: [
            { label: "Proceso legal", variant: "outline", value: "procesolegal" }
        ],
        before: "Desde",
        yes: "Incluye:",
        price: "$1200",
        include: [
            "Evaluación general",
            "Recolección de documentos",
            "Planos requeridos",
            "Preparación y envío al condado",
            "Correciones si el condado rechaza",
            "Cierre del caso",
        ],
    }
];
