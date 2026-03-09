import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";

const testimonials = [
    {
        name: "María González",
        role: "Dueña de cafetería",
        text: "Desde que trabajé con 3ana Marqueting, mis redes sociales стали más profesionales y mis ventas aumentaron un 45% en solo un mes.",
    },
    {
        name: "Carlos Ramírez",
        role: "Emprendedor",
        text: "El equipo me ayudó a crear mi marca desde cero. La asesoría fue clara, efectiva y siempre enfocada en resultados concretos.",
    },
    {
        name: "Ana Martínez",
        role: "Restaurante 'La Casa'",
        text: "Gracias a su estrategia digital, mi restaurante ahora tiene presencia online sólida y estamos llegando a clientes que no conocíamos.",
    },
];

export default function Testimonials() {
    return (
        <Box w="100%" bg="#FDF2F8" py={16} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center" mb={12}>
                    <Heading as="h2" color="gray.600" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="700" mb={4}>
                        Lo que dicen nuestros clientes
                    </Heading>
                    <Text fontSize="md" color="gray.900">
                        Testimonios de clientes que hablan por nuestro trabajo
                    </Text>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    mb={10}
                >
                    {testimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            bg="white"
                            borderTopLeftRadius="3xl"
                            borderTopRightRadius="3xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="3xl"
                            p={6}
                            boxShadow="sm"
                            border="1px solid"
                            borderColor="gray.100"
                        >
                            <Box gap={3} mb={4}>
                                <Text color="gray.600" fontSize="sm" fontStyle="italic">
                                    {testimonial.text}
                                </Text>
                            </Box>
                            <Flex align="flex-start">
                                <Box
                                    w="40px"
                                    h="40px"
                                    borderRadius="full"
                                    bg="brand.500"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexShrink={0}
                                >
                                </Box>
                                <Box px="2">
                                    <Text fontWeight="700" color="gray.800">
                                        {testimonial.name}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        {testimonial.role}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Grid>

                <Flex justify="center" gap={4}>
                    <Box
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        border="2px solid"
                        borderColor="brand.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        _hover={{ bg: "#8B5CF6", border: "none" }}
                        transition="all 0.2s"
                    >
                        <Text color="brand.500" fontWeight="bold" _hover={{ color: "white" }}>
                            ←
                        </Text>
                    </Box>
                    <Box
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        border="2px solid"
                        borderColor="brand.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        bg="brand.500"
                        _hover={{ bg: "#7C3AED", border: "none" }}
                        transition="all 0.2s"
                    >
                        <Text color="white" fontWeight="bold">
                            →
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
