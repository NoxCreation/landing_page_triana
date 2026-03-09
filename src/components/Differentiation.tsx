import { Box, Card, Flex, Grid, Heading, Text } from "@chakra-ui/react";

export default function Differentiation() {

    const dataCard = [
        {
            title: "Guía Estratégica",
            description: "No estás solo. Te acompaño en cada decición de tu negocio."
        }, {
            title: "Resultados Reales",
            description: "Nos enfocamos en movimiento y acción, no solo en teoría."
        }, {
            title: "Inversión Clara",
            description: "Precios transparentes. Solo pagas por lo que necesitas."
        }
    ]

    return (
        <Box w={"100%"} bg="gray.50" color="black">
            <Flex
                w="100%"
                py={3}
                align="center"
                justify="center"
                gap={3}
                color="white"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md" }}
                bg="linear-gradient(to right, #6D28D9, #8B5CF6 50%, #EC4899)"
            >
                <Box as="span" display="inline-flex" width="22px" height="22px" alignItems="center" justifyContent="center" mr={2} aria-label="bubble-left">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="6" width="12" height="12" rx="6" fill="white" />
                        <path d="M14 11 L18 9 L14 13 Z" fill="white" />
                    </svg>
                </Box>
                Crecimiento promedio de hasta un 45% con resultados en menos de 30 días, dejame ayudarte a crecer
                <Box as="span" display="inline-flex" width="22px" height="22px" alignItems="center" justifyContent="center" ml={2} aria-label="bubble-right" style={{ transform: 'scaleX(-1)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="6" width="12" height="12" rx="6" fill="white" />
                        <path d="M14 11 L18 9 L14 13 Z" fill="white" />
                    </svg>
                </Box>
            </Flex>

            <Box p={20}>
                <Box m={"auto"} maxW={"1000px"} textAlign="center" mb={12}>
                    <Heading fontSize={"4xl"} fontWeight="700" mb={4}>
                        ¿Por qué elegir 3ana Marqueting?
                    </Heading>

                    <Text fontSize="lg" color="gray.600">
                        Te adelantamos algunos de los servicios que podemos ofrecerte
                    </Text>
                </Box>
                <Box>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6" justifyItems="center">
                        {dataCard.map((data, index) => (
                            <Card.Root
                                key={index}
                                width="320px"
                                bg="white"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                            >
                                <Card.Body
                                    gap="2"
                                    textAlign="center"
                                    alignItems="center"
                                    color="black"
                                    p="8"
                                >
                                    <Card.Title mt="2">
                                        {data.title}
                                    </Card.Title>

                                    <Card.Description>
                                        {data.description}
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
