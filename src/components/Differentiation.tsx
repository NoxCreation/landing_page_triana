import { Box, Button, Card, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { dataCard } from "@/constants/home/differentiation"

export default function Differentiation() {

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
                background="linear-gradient(to right, #611161, #E63CFF)"
                boxShadow="0px 0px 24px rgba(97, 17, 97, 0.24)"
            >
                <Box as="span" display="inline-flex" width="22px" height="22px" alignItems="center" justifyContent="center" mr={2} aria-label="bubble-left">
                    <Image src="/home/Vector-1.png" w="20px" h="20px"></Image>
                </Box>
                <Text
                    fontFamily="Bricolage Grotesque"
                    fontWeight="700"
                    fontSize="18px"
                    lineHeight="20px"
                    letterSpacing="0px"
                >
                    Crecimiento promedio de hasta un 45% con resultados en menos de 30 días,
                    dejame ayudarte a crecer
                </Text>
                <Box as="span" display="inline-flex" width="22px" height="22px" alignItems="center" justifyContent="center" ml={2} aria-label="bubble-right" style={{ transform: 'scaleX(-1)' }}>
                    <Image src="/home/Vector-2.png" w="20px" h="20px" transform="scaleX(-1)"></Image>
                </Box>
            </Flex>

            <Box p={20}>
                <Flex m={"auto"} w="1100px" gap="8px" textAlign="center" mb={12} direction="column">
                    <Heading
                        textAlign="center"
                        fontFamily="Bricolage Grotesque"
                        fontWeight="800"
                        fontSize="64px"
                        lineHeight="70px"
                        letterSpacing="0%"
                        color="#3F3F3F">
                        ¿Por qué elegir 3ana Marqueting?
                    </Heading>

                    <Text
                        textAlign="center"
                        fontFamily="Inter"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="22px"
                        letterSpacing="0px"
                        color="#717171">
                        Te adelantamos algunos de los servicios que podemos ofrecerte
                    </Text>
                </Flex>
                <Flex direction="column" alignItems="center" justify="center" gap={10}>
                    <Grid maxW="1120px" templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="24px" justifyItems="center">
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
                                    <Card.Title
                                        fontFamily="Inter"
                                        fontWeight="800"
                                        fontSize="24px"
                                        lineHeight="32px"
                                        letterSpacing="0%"
                                        textAlign="center"
                                        color="#3F3F3F">
                                        {data.title}
                                    </Card.Title>

                                    <Card.Description
                                        fontFamily="Inter"
                                        fontWeight="400"
                                        fontSize="18px"
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        textAlign="center"
                                        color="#717171">
                                        {data.description}
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
                        ))}
                    </Grid>
                    <Button
                        px="24px"
                        py="16px"
                        gap="8px"
                        borderRadius="99px"
                        border="1px solid"
                        borderColor="primary.500"
                        bg="primary.500"
                        color="#ffff"
                    >Comenzar ahora</Button>
                </Flex>
            </Box>
        </Box>
    )
}
