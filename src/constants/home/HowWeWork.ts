import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';

type Item = {
    id: number;
    title: string;
    description: string;
    icono: React.ElementType;
};

export const items: Item[] = [
    { id: 1, title: "Contacto", description: "Nos ponemos en contacto y evaluamos tu caso", icono: TouchAppIcon },
    { id: 2, title: "Diagnóstico", description: "Analizamos la situación para identificar oportunidades reales", icono: SearchIcon },
    { id: 3, title: "Plan personalizado", description: "Creamos una estrategia a medida", icono: AssignmentIcon },
    { id: 4, title: "Seguimiento", description: "Te acompaño paso a paso, optimizando resultados", icono: RocketLaunchIcon },
];