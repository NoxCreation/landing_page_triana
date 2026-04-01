"use client"
import { Transition } from "@/components/Transition";
import { Box, Grid, Heading, Text, Badge, VStack, HStack, Button, Separator, Icon } from "@chakra-ui/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import Link from "next/link";

export default function ServiceDetail() {
    return (
        <Box bg="gray.50" w="100%" pt={24} pb={16} px={4}>
            <Box maxW="1440px">
                <Box maxW="1120px" mx="auto">
                    <Transition type="top" velocity="slow">
                        <Link href="/service">
                            <Text
                                color="#A0A0A0"
                                fontWeight="600"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                ← Volver a Servicios
                            </Text>
                        </Link>
                    </Transition>
                </Box>
                <Grid
                    templateColumns={{ base: "1fr", md: "2fr 1fr" }}
                    gap={10}
                    mt={16}
                    maxW="1120px"
                    mx="auto"
                >
                    <Box>
                        <Transition type="top" velocity="slow">
                            <Heading
                                fontSize={{ base: "24px", lg: "36px" }}
                                lineHeight="40px"
                                fontWeight="800"
                                fontFamily="Bricolage Grotesque"
                                letterSpacing="0px"
                                color="primary.500"
                                mb={4}
                            >
                                Asesoramiento para la creación de Tienda en TikTok Shop
                            </Heading>
                        </Transition>

                        <Transition type="bootom" velocity="slow">
                            <HStack gap={3} mb={6}>
                                <Box
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                    bg="#F6F1FF"
                                    border="1px solid "
                                    borderColor="primary.500"
                                    color="purple.600"
                                >
                                    <Text
                                        color="primary.500"
                                        fontWeight={400}
                                        fontSize="14px"
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Emprendedores
                                    </Text>
                                </Box>

                                <Box
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                    bg="#F6F1FF"
                                    border="1px solid "
                                    borderColor="primary.500"
                                    color="purple.600"
                                >
                                    <Text
                                        color="primary.500"
                                        fontWeight={400}
                                        fontSize="14px"
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Negocio digital
                                    </Text>
                                </Box>
                            </HStack>
                        </Transition>

                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={6}
                            >
                                Este Servicio está enfocado en personas y marcas que quieren vender
                                productos físicos en TikTok Shop, solo en Estados Unidos.
                            </Text>
                        </Transition>

                        <Transition type="top" velocity="slow">
                            <Heading
                                color="primary.500"
                                fontFamily="inter"
                                fontSize="20px"
                                lineHeight="24px"
                                letterSpacing="-0.2px"
                                fontWeight="700"
                                mb={3}
                            >
                                A quienes va dirigido
                            </Heading>
                        </Transition>

                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="14px"
                                lineHeight="20px"
                                letterSpacing="0px"
                                mb={6}
                            >
                                Este Servicio NO es para restaurantes ni negocios de comida. Está
                                dirigido a la venta de productos físicos como ropa, zapatos,
                                accesorios u otros artículos permitidos por TikTok Shop.
                            </Text>
                        </Transition>

                        <Transition type="top" velocity="slow">
                            <Heading
                                color="primary.500"
                                fontFamily="inter"
                                fontSize="20px"
                                lineHeight="24px"
                                letterSpacing="-0.2px"
                                fontWeight="700"
                                mb={3}
                            >
                                Requisitos para EE.UU.
                            </Heading>
                        </Transition>

                        <Transition type="bootom" velocity="slow">
                            <VStack align="start" gap={3}>
                                {[
                                    "Dirección válida en Estados Unidos",
                                    "Documentos legales (licencia, SSN, etc.)",
                                    "Cuenta personal o empresa (LLC)"
                                ].map((item, i) => (
                                    <HStack key={i}>
                                        <Icon as={TripOriginIcon} color="terciary.500" />
                                        <Text
                                            color="#717171"
                                            fontWeight={400}
                                            fontSize="14px"
                                            lineHeight="20px"
                                            letterSpacing="0px"
                                        >
                                            {item}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Transition>
                    </Box>

                    <Transition type="rigth" velocity="slow">
                        <Box
                            bg="white"
                            borderTopLeftRadius="4xl"
                            borderTopRightRadius="4xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="4xl"
                            border="2px solid"
                            borderColor="#E5E7EB"
                            p={6}
                        >
                            <Heading
                                color="#3F3F3F"
                                textAlign="center"
                                fontSize="64px"
                                fontWeight={800}
                                lineHeight="70px"
                                letterSpacing="0px"
                                mb={1}
                            >
                                $250
                            </Heading>

                            <Text
                                textAlign="center"
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                pago único
                            </Text>

                            <Separator borderColor="#E5E7EB" borderWidth="1px" mx="-6" mb={4} />

                            <Text
                                fontWeight="600"
                                color="#3F3F3F"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={3}
                            >
                                Incluye:
                            </Text>

                            <VStack align="start" gap={3} mb={4}>
                                <HStack>
                                    <Icon as={CheckCircleIcon} color="terciary.500" />
                                    <Text
                                        color="#717171"
                                        fontWeight={400}
                                        fontSize="14px"
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Creación completa de la tienda TikTok Shop.
                                    </Text>
                                </HStack>

                                <HStack>
                                    <Icon as={CheckCircleIcon} color="terciary.500" />
                                    <Text
                                        color="#717171"
                                        fontWeight={400}
                                        fontSize="14px"
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        No importa si no tienes TikTok Shop, yo la creo desde cero
                                    </Text>
                                </HStack>
                            </VStack>

                            <Separator borderColor="#E5E7EB" borderWidth="1px" mx="-6" mb={4} />

                            <Text
                                fontWeight="600"
                                color="#3F3F3F"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                            >Asesoría para empezar a vender</Text>
                            <Text
                                fontWeight={700}
                                fontSize="20px"
                                lineHeight="24px"
                                letterSpacing="0px"
                                color="#3F3F3F"
                                mb={4}
                            >
                                $50
                                <Text
                                    as="span"
                                    color="#717171"
                                    fontWeight={400}
                                    fontSize="14px"
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    mb={4}
                                >
                                    {" "}se añade al precio del servicio
                                </Text>
                            </Text>

                            <Transition type="bootom" velocity="slow">
                                <VStack gap={3}>
                                    <Button
                                        variant="outline"
                                        bg="#ffff"
                                        borderRadius="full"
                                        borderColor="primary.500"
                                        color="primary.500"
                                        w="100%"
                                        _hover={{
                                            bg: "#F3E8FF",
                                            borderColor: "#6B21A8",
                                            color: "#6B21A8",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 8px 20px rgba(109, 40, 217, 0.15)",
                                        }}
                                    >
                                        Solicitar Cotización
                                    </Button>

                                    <Button
                                        bg="primary.500"
                                        color="white"
                                        borderRadius="full"
                                        w="100%"
                                        boxShadow="0px 10px 20px 0px rgba(178, 35, 207, 0.24)"
                                        _hover={{
                                            bg: "#5A0F6E",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                                        }}
                                        _active={{
                                            transform: "scale(0.98)",
                                        }}
                                    >
                                        Contratar Ahora
                                    </Button>
                                </VStack>
                            </Transition>
                        </Box>
                    </Transition>
                </Grid>
            </Box>
        </Box>
    );
}
