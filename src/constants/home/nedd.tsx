import GrassIcon from '@mui/icons-material/Grass';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import { Box } from '@chakra-ui/react';

export const services = [
    {
        title: "Estoy empezando desde cero",
        subtitle: "(Asesoría y permisos)",
        isActive: true,
        icon: GrassIcon
    },
    {
        title: "Ya empecé pero necesito crecer",
        subtitle: "(Asesoría y permisos)",
        isActive: false,
        icon: SpaIcon
    },
    {
        title: "Tengo un restaurante o cafetería",
        subtitle: "(Asesoría y ventas)",
        isActive: false,
        icon: RestaurantMenuIcon
    },
    {
        title: "Quiero vender productos online",
        subtitle: "(Seller Center / TikTok Shop)",
        isActive: false,
        icon: StorefrontIcon
    },
];

const ServiceIcon = ({ isActive }: { isActive: boolean }) => (
    <Box width="40px" height="40px" position="relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill={isActive ? "#8B5CF6" : "#E2E8F0"} />
            <path d="M20 12L20 28M12 20L28 20" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
    </Box>
);