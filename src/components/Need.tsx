import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import GrassIcon from '@mui/icons-material/Grass';

const services = [
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

export default function Need() {
    return (
        <Box w="100%" bg="#FDF2F8" py={16} px={4}>
            <Box maxW="1000px" mx="auto">
                <Box textAlign="center" mb={10}>
                    <Heading as="h2" color="gray.600" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="700" mb={4}>
                        ¿Qué servicio necesitas?
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        Responda 3 preguntas y te recomendamos el servicio ideal
                    </Text>
                </Box>

                <Box
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="lg"
                    p={{ base: 6, md: 10 }}
                    mb={8}
                >
                    <Text
                        textAlign="center"
                        fontWeight="600"
                        fontSize={{ base: "md", md: "lg" }}
                        color="gray.700"
                        mb={8}
                    >
                        ¿En qué etapa está tu negocio?
                    </Text>

                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                        gap={4}
                    >
                        {services.map((service, index) => (
                            <Box
                                key={index}
                                p={5}
                                borderRadius="3xl"
                                border="2px solid"
                                borderColor={service.isActive ? "#fff" : "#E2E8F0"}
                                bg={service.isActive ? "#F5F3FF" : "white"}
                                cursor="pointer"
                                transition="all 0.2s"
                                _hover={{
                                    borderColor: "#8B5CF6",
                                    transform: "translateY(-2px)",
                                }}
                            >
                                <Flex direction="column" align="center" gap={3}>
                                    {service.icon && <service.icon style={{ color: service.isActive ? "#8B5CF6" : "#4A5568" }} />}
                                    <Text
                                        fontWeight="600"
                                        fontSize="sm"
                                        textAlign="center"
                                        color={service.isActive ? "#8B5CF6" : "gray.700"}
                                    >
                                        {service.title}
                                    </Text>
                                    <Text
                                        fontSize="xs"
                                        color="gray.300"
                                        textAlign="center"
                                    >
                                        {service.subtitle}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
