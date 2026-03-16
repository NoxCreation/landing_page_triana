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
    {
        id: 1,
        title: "1.Contacto",
        description: "Nos cuentas tu situación actual y agendamos una breve llamada de descubrimiento",
        icono: TouchAppIcon
    },
    {
        id: 2,
        title: "2.Diagnóstico",
        description: "Analizamos a fondo tu negocio para identificar optunidades reales de mejora",
        icono: SearchIcon
    },
    {
        id: 3,
        title: "3.Plan personalizado",
        description: "Creamos una estrategia a medida con pasos específicos",
        icono: AssignmentIcon
    },
    {
        id: 4,
        title: "4.Seguimiento",
        description: "Te acompaño paso a paso, optimizamos los resultados y feedback",
        icono: RocketLaunchIcon
    },
];