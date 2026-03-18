import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { services } from "@/constants/home/nedd"

export default function Need() {
    return (
        <Box w="100%" bg="#FDF2FF" py={16} px={4}>
            <Box maxW="1000px" mx="auto">
                <Box textAlign="center" mb={10}>
                    <Heading
                        as="h1"
                        color="#3F3F3F"
                        lineHeight={"70px"}
                        letterSpacing={"0%"}
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight="800"
                        fontFamily="Bricolage Grotesque">
                        ¿Qué servicio necesitas?
                    </Heading>
                    <Text
                        fontSize="18px"
                        fontFamily="inter"
                        fontWeight={400}
                        color="#717171"
                        letterSpacing="0px"
                        lineHeight="22px">
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
                        as="h3"
                        textAlign="center"
                        fontWeight="extrabold"
                        fontFamily="inter"
                        fontSize={{ base: "md", md: "lg" }}
                        color="#3F3F3F"
                        lineHeight="32px"
                        letterSpacing={"0"}
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
                                bg={service.isActive ? "#F9D0FF" : "white"}
                                cursor="pointer"
                                transition="all 0.2s"
                                _hover={{
                                    borderColor: "#8B5CF6",
                                    transform: "translateY(-2px)",
                                }}
                            >
                                <Flex direction="column" align="center" gap={3}>
                                    {service.icon && (
                                        <service.icon
                                            sx={{ color: service.isActive ? "#611161" : "#4A5568" }}
                                        />
                                    )}
                                    <Text
                                        fontWeight={400}
                                        fontSize="18px"
                                        textAlign="center"
                                        fontFamily="inter"
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        color={service.isActive ? "primary.500" : "gray.700"}
                                    >
                                        {service.title}
                                    </Text>
                                    <Text
                                        fontSize="14"
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                        fontFamily="inter"
                                        fontWeight={400}
                                        color={service.isActive ? "#803882" : "gray.300"}
                                        textAlign="center"
                                    >
                                        {service.subtitle}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}
                    </Grid>
                </Box>
                <Flex justify="center" gap={2} >
                    <Box w="40px" h="2px" bg="gray.400" background="primary.500" />
                    <Box w="40px" h="2px" bg="gray.400" background="#E5E7EB" />
                    <Box w="40px" h="2px" bg="gray.400" background="#E5E7EB" />
                </Flex>
            </Box>
        </Box>
    );
}
