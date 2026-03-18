type Step = {
    id: number;
    title: string;
    that: string;
    items: string[];
    important: string;
    itemsI: string[];
    we: string;
    data: string[];
};

export const steps: Step[] = [
    {
        id: 1,
        title: "1. Diagnóstico (30 minutos gratis)",
        that: "¿Qué hacemos?",
        items: [
            "Analizamos tu situación actual",
            "Identificamos fortalezas y oportunidades",
            "Definimos objetivos claros y realistas",
        ],
        important: "Entregable:",
        itemsI: [
            "Informe inicial con recomendaciones básicas"
        ],
        we: "Duración:",
        data: [
            "30 minutos por video llamada o presencial "
        ]
    },
    {
        id: 2,
        title: "2. Planificación Estratégica",
        that: "¿Qué hacemos?",
        items: [
            "Creamos un plan personalizado",
            "Definimos acciones específicas",
            "Establecemos cronograma realista",
            "Determinamos métricas de éxito",
        ],
        important: "Entregable",
        itemsI: [
            "Documento de estrategia completo"
        ],
        we: "Herramientas:",
        data: [
            "Cheklists",
            "Templates",
            "Sistema de seguimiento"
        ]
    },
    {
        id: 3,
        title: "3. Implementación Paso a Paso",
        that: "¿Qué hacemos?",
        items: [
            "Te guiamos en cada acción",
            "Resolvemos de dudas en tiempo real",
            "Aseguramos ejecución correcta",
            "Hacemos ajustes necesarios"
        ],
        important: "Modalidades:",
        itemsI: [
            "Chat diario",
            "Check-ins semanales",
            "Reuniones según necesidadad"
        ],
        we: "Soporte:",
        data: [
            "Disponible vía WhatsApp, audios o llamadas",
        ]
    },
    {
        id: 4,
        title: "4. Seguimiento y Optimización",
        that: "¿Qué hacemos?",
        items: [
            "Revisamos métricas semanalmente",
            "Analizamos resultados",
            "Prevenimos problemas futuros",
            "Optimizamos según desempeño"
        ],
        important: "Reporte:",
        itemsI: [
            "Informes periódicos de progreso"
        ],
        we: "Flexibilidad:",
        data: [
            "Nos adaptamos a cambios del mercado"
        ]
    },
    {
        id: 5,
        title: "5. Escalación y Automatización",
        that: "¿Qué hacemos?",
        items: [
            "Identificamos oportunidades de crecimiento",
            "Implementamos sistemas de automatización",
            "Preparamos para expansión",
            "Transferimos conocimiento"
        ],
        important: "Resultado:",
        itemsI: [
            "Negocio escalable y autosuficiente"
        ],
        we: "Seguimiento:",
        data: [
            "Soporte continuo según necesidad"
        ]
    }
];