'use client'

import { Transition } from "@/components/Transition";
import { Box, Heading, Text, VStack, Grid, GridItem, Button, Image, List } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export default function Need() {
    return (
        <Box bg="terciary.500" py={{ base: 16, md: 24 }} px={{ base: 4, md: 8 }} position={"relative"} overflow={"hidden"}>

            {/* Círculo grande */}
            <Box
                position="absolute"
                bottom="-430px"
                left="-400px"
                w="1200px"
                h="1200px"
                background="linear-gradient(to right, #611161, #E63CFF)"
                borderRadius="50%"
                opacity={0.4}
                zIndex={0}
                filter="brightness(0.6)"
                display={{ base: "none", md: "block" }}
            />

            {/* Círculo pequeño */}
            <Box
                position="absolute"
                bottom="-400px"
                left="20px"
                w="700px"
                h="700px"
                background="linear-gradient(to right, #7B1FA2, #F062FF)"
                borderRadius="50%"
                opacity={0.5}
                zIndex={0}
                filter="brightness(0.7)"
                display={{ base: "none", md: "block" }}
            />

            <Grid
                maxW="1200px"
                mx="auto"
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={{ base: 12, md: 16 }}
                alignItems="center"

            >
                {/* Columna izquierda: Imagen */}
                <GridItem order={{ base: 2, md: 1 }} zIndex={2}>
                    <Transition type="left" velocity="slow" index={1}>
                        <Image
                            src="/home/women.png"
                            alt="Asesora de marketing con teléfono"
                            objectFit="contain"
                            maxH="500px"
                            w="full"
                        />
                    </Transition>
                </GridItem>

                {/* Columna derecha: Contenido informativo */}
                <GridItem order={{ base: 1, md: 2 }} zIndex={2}>
                    <Transition type="rigth" velocity="slow" index={1}>
                        <VStack align="flex-start" gap={6} color="white">
                            <Heading
                                as="h2"
                                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                                fontWeight="extrabold"
                                fontFamily="Bricolage Grotesque"
                                lineHeight="1.2"
                            >
                                Estrategias que conectan con tus clientes
                            </Heading>

                            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9} fontFamily="Bricolage Grotesque">
                                En 3ana Marketing & Consulting no solo creamos campañas, construimos
                                relaciones duraderas. Nuestro enfoque combina análisis de datos,
                                creatividad y tecnología para potenciar tu marca.
                            </Text>

                            <List.Root gap={3} fontSize={{ base: "sm", md: "md" }}>
                                <List.Item display="flex" alignItems="center">
                                    <List.Indicator as={FaCheckCircle} color="secondary.500" boxSize={5} mr={2} />
                                    Análisis de mercado a tu medida
                                </List.Item>
                                <List.Item display="flex" alignItems="center">
                                    <List.Indicator as={FaCheckCircle} color="secondary.500" boxSize={5} mr={2} />
                                    Estrategias omnicanal con resultados medibles
                                </List.Item>
                                <List.Item display="flex" alignItems="center">
                                    <List.Indicator as={FaCheckCircle} color="secondary.500" boxSize={5} mr={2} />
                                    Consultoría personalizada para cada etapa de tu negocio
                                </List.Item>
                            </List.Root>

                            <Button
                                bg="white"
                                fontSize={"16px"}
                                color={"primary.500"}
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                p={4}
                                px={8}
                                _hover={{ bg: "secondary.500", color: "white", transform: "translateY(-2px)" }}
                                transition="all 0.2s"
                            >
                                Solicita una consultoría gratuita
                            </Button>
                        </VStack>
                    </Transition>
                </GridItem>
            </Grid>
        </Box>
    );
}