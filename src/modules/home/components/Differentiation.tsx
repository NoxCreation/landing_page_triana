'use client'

import { Box, Button, Center, Flex, Grid, Heading, Image, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Transition } from "@/components/Transition";
import InfoCard from "@/components/cards/InfoCard";
import { FaArrowRight } from "react-icons/fa";
import { ContentType } from "@/types/ContentType";
import { ContainerLanding } from "@/components/container";
import Link from "next/link";
import Carousel from "@/components/Carrusel";

export default function Differentiation({
    content
}: {
    content: ContentType
}) {
    const animationVelocity = useBreakpointValue({ base: "fast", md: "slow" });

    return (
        <Stack gap={0} minH={{ base: 0, md: "100vh" }} position={'relative'}>
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

            <ContainerLanding bg="white" color="black" py={20}>
                <Box
                    as="section"
                    bg="white"
                >
                    <Stack gap={{ base: 10, md: 14 }}>
                        {/* Encabezado */}
                        <Transition type="bootom" velocity={animationVelocity as any} index={1}>
                            <VStack gap={0} textAlign="center">
                                <Heading
                                    as="h2"
                                    color="primary.500"
                                    fontFamily="Bricolage Grotesque"
                                    fontWeight="extrabold"
                                    fontSize={{ base: "28px", md: "40px", lg: "54px" }}
                                    lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                                >
                                    ¿Por qué elegir 3ana Marqueting?
                                </Heading>
                                <Text
                                    as="h3"
                                    fontFamily="Inter"
                                    fontWeight="400"
                                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                                    lineHeight="1.5"
                                    color="gray.400"
                                    maxW="600px"
                                    mx="auto"
                                >
                                    Te adelantamos algunos de los servicios que podemos ofrecerte
                                </Text>
                            </VStack>
                        </Transition>

                        <Box display={{ base: 'initial', md: 'none' }} >
                            <Transition
                                type="bootom"
                                velocity={animationVelocity as any}
                            >
                                <Carousel >
                                    {content.home.why_choose_me.map((card, index) => (
                                        <Box
                                            key={index}
                                            flex={{
                                                base: "0 0 100%",
                                                md: "0 0 50%",
                                                lg: "0 0 33.33%",
                                            }}
                                            px={{ base: 2, md: 4 }}
                                        >

                                            <InfoCard
                                                title={card.title}
                                                description={card.description}
                                                icon={card.icon}
                                            />
                                        </Box>
                                    ))}
                                </Carousel>
                            </Transition>
                        </Box>

                        <Box display={{ base: 'none', md: 'initial' }}>
                            <Grid
                                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
                                gap={{ base: 6, md: 8 }}
                            >
                                {content.home.why_choose_me.map((card, index) => (
                                    <Transition
                                        key={index}
                                        type="bootom"
                                        velocity={animationVelocity as any}
                                        index={index * 2}
                                    >
                                        <InfoCard
                                            title={card.title}
                                            description={card.description}
                                            icon={card.icon}
                                        />
                                    </Transition>
                                ))}
                            </Grid>
                        </Box>

                        {/* Botón CTA */}
                        {/* <Center>
                            <Link href={`/service`}>
                                <Button
                                    px="24px"
                                    py="16px"
                                    borderRadius="99px"
                                    bg="primary.500"
                                    color="white"
                                    _hover={{
                                        bg: "primary.600",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                                    }}
                                    _active={{
                                        transform: "scale(0.98)",
                                    }}
                                    transition="all 0.2s ease"
                                    aria-label="Comenzar ahora"
                                >
                                    <FaArrowRight />
                                    Comenzar ahora
                                </Button>
                            </Link>
                        </Center> */}
                    </Stack>
                </Box>
            </ContainerLanding>
        </Stack>
    )
}