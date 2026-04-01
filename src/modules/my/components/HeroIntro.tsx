"use client"

import { Transition } from "@/components/Transition";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

export default function HeroIntro() {
    return (
        <Box w="100%" py={16} px={4} bg="#F3A0FF0D" minH={{ base: 'auto', md: '100vh' }} display={'flex'} alignItems={'center'}>
            <Box mx="auto">

                <Transition type="top" velocity="slow">
                    <Stack textAlign="center" gap={6}>
                        <HStack justify="start" gap={{ base: 0, md: 2 }}>
                            <Image src="/my/Vector-w2.svg" w={'20px'} />
                            <Image src="/my/Vector-w2.svg" w={'20px'} />
                        </HStack>
                        <Text
                            fontSize={{ base: "22px", md: "30px" }}
                            color="#3F3F3F"
                            maxW="926px"
                            fontWeight={500}
                            letterSpacing="-0.5px"
                            mx="auto"
                        >
                            Todo comenzó cuando abrí mi primer negocio y me di cuenta de lo
                            difícil que era navegar el mundo del emprendimiento solo. Los
                            errores costosos, la falta de claridad y la sensación de estar
                            perdido fueron mi motivación para crear Triana Marketing.
                        </Text>
                        <Box>
                            <Text
                                color="#A0A0A0"
                                fontWeight={500}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="-0.5px"
                                fontStyle="italic"
                            >
                                — Triana Apellido, CEO of 3ana
                            </Text>
                        </Box>
                        <HStack justify="end" gap={{ base: 0, md: 2 }}>
                            <Image src="/my/Vector-w.svg" w={'20px'} />
                            <Image src="/my/Vector-w.svg" w={'20px'} />
                        </HStack>
                    </Stack>
                </Transition>

                <Box textAlign="center" mt={8}>
                    <Transition type="top" velocity="slow">
                        <Heading
                            as="h2"
                            fontSize={{ base: "4xl", md: "36px" }}
                            fontWeight={800}
                            fontFamily="Bricolage Grotesque"
                            lineHeight="40px"
                            letterSpacing="0px"
                            color="#3F3F3F"
                            mb={4}
                        >
                            Y ahora...
                        </Heading>
                    </Transition>
                    <Transition type="left" velocity="slow">
                        <Text
                            fontSize={{ base: "18px", md: "18px" }}
                            color="#717171"
                            fontWeight={400}
                            letterSpacing="0px"
                            maxW="1120px"
                            mx="auto"
                        >
                            Despúes de años ayudando a negocios a crecer, desarrollé una metodología
                            única: estrategias + acción + acompañamiento. No creo en la teoria sin
                            práctica, ni en los planes que se queden en el papel
                        </Text>
                    </Transition>
                </Box>
            </Box>
        </Box>
    );
}
