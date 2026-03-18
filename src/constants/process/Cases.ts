import { ElementType } from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

type Case = {
    id: number;
    title: string;
    that: string;
    items: string[];
    important: string;
    itemsI: string[];
    iconOk: ElementType;
    iconNo: ElementType;
    colorOk: string;
    colorNo: string;
};

export const cases: Case[] = [
    {
        id: 1,
        title: "Servicio usado: Asesoría para Restaurantes",
        iconOk: TaskAltIcon,
        iconNo: HighlightOffIcon,
        colorNo: "#ED4C5C",
        colorOk: "#22C869",
        that: "Antes",
        items: [
            "Sin presencia en redes",
            "10 reservas semanales promedio",
            "Sin estrategia digital",
        ],
        important: "Después:",
        itemsI: [
            "+ 200 seguidores en Instagram",
            "50 reservas semanales",
            "6 videos profesionales creados"
        ]
    },
    {
        id: 2,
        title: "Servicio usado: Acompañamiento Mensual + Consultoría",
        iconOk: TaskAltIcon,
        iconNo: HighlightOffIcon,
        colorNo: "#ED4C5C",
        colorOk: "#22C869",
        that: "Antes",
        items: [
            "Negocio informal",
            "Sin estructura legal",
            "Clientes esporádicos"
        ],
        important: "Después",
        itemsI: [
            "LLC creada correctamente",
            "Estrategia de redes implementada",
            "Clientes recurrentes"
        ],
    }
];