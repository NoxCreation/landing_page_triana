'use client'

import { Box, Button, Card, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { dataCard } from "@/constants/home/differentiation"
import { Transition } from "@/components/Transition";
import InfoCard from "@/components/cards/InfoCard";

export default function Differentiation() {
    return (
        <Box w={"100%"} bg="gray.50" color="black" minH={"100vh"}>
            <Transition type="top" velocity="slow" index={1}>
                <Flex
                    w="100%"
                    py={3}
                    align="center"
                    justify="center"
                    gap={{ base: 1, md: 3 }}
                    color="white"
                    fontWeight="bold"
                    fontSize={{ base: "sm", md: "md" }}
                    background="linear-gradient(to right, #611161, #E63CFF)"
                    boxShadow="0px 0px 24px rgba(97, 17, 97, 0.24)"
                    px={2}
                >
                    <Box as="span" display={{ base: 'none', md: "inline-flex" }} width={{ base: "18px", lg: "22px" }} height={{ base: "18px", lg: "22px" }} alignItems="center" justifyContent="center" mr={{ base: 1, lg: 2 }} aria-label="bubble-left">
                        <Image src="/home/Vector-1.ico" w={{ base: "16px", lg: "20px" }} h={{ base: "16px", lg: "20px" }}></Image>
                    </Box>
                    <Text
                        fontFamily="Bricolage Grotesque"
                        fontWeight="700"
                        fontSize={{ base: "12px", md: "14px", lg: "18px" }}
                        lineHeight="20px"
                        letterSpacing="0px"
                        px={{ base: 1, md: 4 }}
                        textAlign={'center'}
                    >
                        Crecimiento promedio de hasta un 45% con resultados en menos de 30 días,
                        dejame ayudarte a crecer
                    </Text>
                    <Box as="span" display={{ base: 'none', md: "inline-flex" }} width={{ base: "18px", lg: "22px" }} height={{ base: "18px", lg: "22px" }} alignItems="center" justifyContent="center" ml={{ base: 1, lg: 2 }} aria-label="bubble-right" style={{ transform: 'scaleX(-1)' }}>
                        <Image src="/home/Vector-2.ico" w={{ base: "16px", lg: "20px" }} h={{ base: "16px", lg: "20px" }} transform="scaleX(-1)"></Image>
                    </Box>
                </Flex>
            </Transition>

            <Box p={{ base: 8, md: 12, lg: 20 }} alignItems="center" justifyContent="center" gap={{ base: 0, md: 10 }} display="flex" flexDirection="column">
                <Flex m={"auto"} maxW="1100px" w="100%" gap="8px" textAlign="center" mb={12} direction="column" px={4}>
                    <Transition type="bootom" velocity="slow" index={1}>
                        <Heading
                            textAlign="center"
                            fontFamily="Bricolage Grotesque"
                            fontWeight="800"
                            fontSize={{ base: "28px", md: "40px", lg: "64px" }}
                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                            letterSpacing="0%"
                            color="#3F3F3F">
                            ¿Por qué elegir 3ana Marqueting?
                        </Heading>

                        <Text
                            textAlign="center"
                            fontFamily="Inter"
                            fontWeight="400"
                            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                            lineHeight="22px"
                            letterSpacing="0px"
                            color="#717171">
                            Te adelantamos algunos de los servicios que podemos ofrecerte
                        </Text>
                    </Transition>
                </Flex>
                <Flex direction="column" alignItems="center" justify="center" gap={10}>
                    <Grid
                        maxW="1120px"
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap="24px"
                        justifyItems="center"
                    >
                        {dataCard.map((data, index) => (
                            <Transition type="left" velocity="slow" key={index} index={index * 2}>
                                <InfoCard
                                    title={data.title}
                                    description={data.description}
                                />
                            </Transition>
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
                        _hover={{
                            bg: "#5A0F6E",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                        }}
                        _active={{
                            transform: "scale(0.98)",
                        }}
                    >
                        Comenzar ahora
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
