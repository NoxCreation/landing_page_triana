import { Box, Flex, Grid, Heading, Text, Button, Icon } from "@chakra-ui/react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const services = [
    {
        title: "Acompañamiento Semanal",
        subtitle: "Guía constante de emprendedores que ya comenzaron",
        price: "Desde $800",
        frequency: "/semana",
        features: [
            "Check-in semanal",
            "Consultas limitadas vía WhatsApp",
            "Correcciones estratégicas"
        ],
    },
    {
        title: "Asesoría + Activacion Digital",
        subtitle: "Estrategia real y visualidad para tu restaurante",
        price: "Desde $300",
        features: [
            "Estrategia + Creación de redes",
            "Colaboración con creadores de contenido",
            "5 videos profesionales"
        ],
    },
    {
        title: "Consultoría Express de 1:1",
        subtitle: "Claridad rápida y decisiones inmedidas",
        price: "Desde $50",
        frequency: "/sesión",
        features: [
            "30-60 minutos de sesión",
            "Diagnóstico rápido",
            "Documento personalizado incluido"
        ],
    },
];

export default function ServiceSection() {
    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center" mb={10}>
                    <Heading as="h2" color="brand.500" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="700" mb={4}>
                        Servicios de Marketing y Consultoría
                    </Heading>
                    <Text fontSize="md" color="gray.900">
                        Nos hacemos cargo desde que se abre el proyecto hasta que hacemos entrega de 
                        las llaves del local, además te ayudamos a crecer tu negocio desde lo digital
                    </Text>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    mb={10}
                >
                    {services.map((service, index) => (
                        <Box
                            key={index}
                            bg="white"
                            borderTopLeftRadius="3xl"
                            borderTopRightRadius="3xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="3xl"
                            boxShadow="md"
                            border="2px solid"
                            borderColor="gray.100"
                            overflow="hidden"
                        >
                            <Box p={6}>
                                <Heading p={"2"} as="h3" color="gray.600" fontSize="lg" fontWeight="700" mb={2}>
                                    {service.title}
                                </Heading>
                                <Box h="1px" bg="gray.300" mx="-10" />
                                <Text color="gray.600" p={"4"} mb={4} fontSize="sm">
                                    {service.subtitle}
                                </Text>

                                <Box
                                    bg="#F5F3FF"
                                    borderRadius="3xl"
                                    p={8}
                                    mb={6}
                                    textAlign="center"
                                >
                                    <Text fontSize="sm" color="gray.600" mb={1}>
                                        Desde
                                    </Text>
                                    <Text fontSize="4xl" fontWeight="700" color="black">
                                        {service.price.replace("Desde ", "")}<Text as="span" fontWeight="400" fontSize="sm" color="gray.600">
                                            {service.frequency}
                                        </Text>
                                    </Text>
                                </Box>

                                <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                    {service.features.map((feature, i) => (
                                        <Flex key={i} align="center" mb={2}>
                                            <Icon
                                                w={"10"}
                                                as={TaskAltIcon}
                                                color="brand.500"
                                                flexShrink={0}
                                            />
                                            <Text fontSize="xs" color="gray.400">
                                                {feature}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Box>

                                <Button
                                    w="100%"
                                    bg="brand.500"
                                    color="white"
                                    rounded={"4xl"}
                                    _hover={{
                                        bg: "#7C3AED"
                                    }}
                                    fontWeight="600"
                                >
                                    <Icon
                                        w={"10"}
                                        as={WhatsAppIcon}
                                        flexShrink={0}
                                    />
                                    Ver todos los servicios
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Grid>

                <Flex direction={"column"} align={"center"}>
                    <Text
                        color="brand.500"
                        fontWeight="600"
                        cursor="pointer"
                        _hover={{ textDecor: "underline" }}
                    >
                        Ver todos los servicios
                    </Text>
                    <Box
                        h="3px"
                        bg="brand.500"
                        w="20%"
                        borderRadius="full"
                    />
                </Flex>
            </Box>
        </Box>
    );
}
