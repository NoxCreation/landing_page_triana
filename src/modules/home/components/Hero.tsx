'use client'

import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { StatAnimate } from "@/components/StatAnimate";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import { ContainerLanding } from "@/components/container";

export default function Hero({
    content
}: {
    content: ContentType
}) {
    return (
        <ContainerLanding
            id="hero"
            bg="linear-gradient(to right, #D7D5D8, #D7D5D8, #D9D4D0)"
            zIndex={2}
            position={'relative'}
        >
            <Flex alignItems={'center'} flexDirection={{ base: 'column', md: 'column', lg: 'row' }} gap={4}>

                {/* fotos izquierda */}
                <Stack flex={1} display={{ base: 'none', md: 'none', lg: 'block' }}>
                    <Image
                        zIndex={2}
                        src="/home/composition.webp"
                        position="absolute"
                        top={{ base: "-50px", md: "-100px", lg: "60px" }}
                        left={{ base: "-50px", md: "-100px", lg: "0" }}
                        w={{ base: "200px", md: "300px", lg: "480px", "2xl": "600px" }}
                    />

                    <Transition type="bootom" velocity="fast" index={1}>
                        <Image
                            zIndex={1}
                            src="/visual_support.png"
                            position="absolute"
                            bottom={0}
                            left={0}
                            w={{ base: "200px", md: "300px", lg: "calc(100% - 400px)" }}
                        />
                    </Transition>

                </Stack>

                {/* centro - Títulos, descripción, botones y estadísticas */}
                <Stack flex={2} textAlign={'center'} zIndex={3} pt={4}>

                    <Transition type="top" velocity="slow" index={1}>
                        <Text
                            color="#3F3F3F"
                            fontFamily="Bricolage Grotesque"
                            fontWeight="extrabold"
                            fontSize={{ base: "12px", md: "16px", lg: "16px", "2xl": "16px" }}
                        >
                            {content.home.main_subtitle}
                        </Text>
                    </Transition>

                    <Transition type="top" velocity="slow" index={1}>
                        <Heading
                            as="h1"
                            color="primary.500"
                            fontFamily="Bricolage Grotesque"
                            fontWeight="extrabold"
                            fontSize={{ base: "38px", md: "38px", lg: "80px", "2xl": "100px" }}
                            lineHeight={{ base: "36px", md: "50px", lg: "80px" }}
                        >
                            {content.home.main_title}
                        </Heading>
                    </Transition>

                    <Transition type="bootom" velocity="slow" index={1}>
                        <Stack
                            px={{ base: 4, md: 8, lg: 20 }}
                        >
                            <Text
                                as="h2"
                                fontFamily="Bricolage Grotesque"
                                color={'#717171'}
                                fontSize={{ base: "14px", md: "14px", lg: "14px", "2xl": "16px" }}
                                textAlign={"center"}
                            >
                                {content.home.main_label}
                            </Text>
                        </Stack>
                    </Transition>

                    <Transition type="bootom" velocity="slow" index={1}>
                        <Flex w="100%" align="center" gap={2} flexWrap={{ base: "wrap", lg: "nowrap" }} justify={"center"}>

                            <StatAnimate
                                value={content.home.stats.driven_businesses}
                                label="Negocios Impulsados"
                            />

                            <StatAnimate
                                value={content.home.stats.years_of_experience}
                                label="Años de Experiencia"
                            />

                            <StatAnimate
                                value={content.home.stats.satisfied_customers}
                                label="Clientes Satisfechos"
                            />

                        </Flex>
                    </Transition>

                </Stack>

                {/* Derecha - Imagen Grande */}
                <Stack zIndex={2} flex={1} display={{ base: 'block', md: 'block', lg: 'block' }} minH="400px" w={'100%'} position={{ base: 'relative', lg: 'inherit' }}>
                    <Image
                        src="/home/triana-home.webp"
                        position={"absolute"}
                        top={{ base: "0px", md: "-100px", lg: "90px" }}
                        right={{ base: "0px", md: "-100px", lg: "-20px" }}
                        w={{ base: "100%", md: "300px", lg: "520px", "2xl": "600px" }}
                    />
                </Stack>

                <Stack position={'absolute'} bottom={0} left={0} w={'100vw'} bg={'red'} display={{ base: "inherit", lg: 'none' }}>
                    <Image
                        zIndex={1}
                        src="/visual_support.png"
                        position="absolute"
                        bottom={0}
                        left={'-140px'}
                        minH={"600px"}
                        minW={'600px'}
                        objectFit={'fill'}
                    />
                </Stack>

            </Flex>
        </ContainerLanding>
    )
}