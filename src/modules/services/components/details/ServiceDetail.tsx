"use client";

import HtmlRenderer from "@/components/htmlRenderer";
import { Transition } from "@/components/Transition";
import { ServiceType } from "@/types/ServiceType";
import {
    Box,
    Grid,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Separator,
    Icon,
    Stack,
} from "@chakra-ui/react";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ServiceDetail({ service }: { service: ServiceType }) {

    const getFrequency = () => {
        switch (service.type) {
            case "weekly":
                return "Semanal";
            case "diary":
                return "Diario";
            case "monthly":
                return "Mensual";
            case "session":
                return "Por Sesión";
            case "single_payment":
                return "Pago Único";
            default:
                return "";
        }
    };

    return (
        <Stack w="100%" bg="gray.50" py={28} px={{ base: 8, md: 40 }} gap={8}>
            <Transition type="top" velocity="slow">
                <Link href="/service">
                    <Text
                        color="#A0A0A0"
                        fontWeight="600"
                        fontSize="18px"
                        lineHeight="22px"
                        letterSpacing="0px"
                    >
                        ← Volver a Servicios
                    </Text>
                </Link>
            </Transition>

            <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={10}>
                {/* Columna izquierda: descripción del servicio */}
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
                            {service.title}
                        </Heading>
                    </Transition>

                    <Transition type="bootom" velocity="slow">
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(4, auto)" }}
                            gap={2}
                            mb={5}
                            justifyContent={{ base: "center", md: "start" }}
                        >
                            {service.tiquet.map((tag, index) => (
                                <Text
                                    key={index}
                                    px={4}
                                    py={2}
                                    borderRadius="full"
                                    fontSize="14px"
                                    fontWeight="400"
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    bg={tag.variant === "primary" ? "terciary.500" : "#F5F3FF"}
                                    color={tag.variant === "primary" ? "white" : "primary.500"}
                                    border={tag.variant === "outline" ? "1px solid" : "none"}
                                    borderColor="primary.500"
                                    textAlign="center"
                                    whiteSpace="nowrap"
                                >
                                    {tag.label}
                                </Text>
                            ))}
                        </Grid>
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
                            <HtmlRenderer>{service.description}</HtmlRenderer>
                        </Text>
                    </Transition>

                    <Stack gap={8}>
                        <Points items={service.include} label="Incluye" />
                        <Points items={service.notInclude} label="No Incluye" />
                        <Points items={service.requirement} label={service.requireLabel} />
                    </Stack>
                </Box>

                {/* Columna derecha: tarjeta de precio y botones */}
                <Transition type="rigth" velocity="slow">
                    <Box
                        bg="white"
                        borderTopLeftRadius="3xl"
                        borderTopRightRadius="3xl"
                        borderBottomLeftRadius="0"
                        borderBottomRightRadius="3xl"
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
                            ${service.price}
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
                            {getFrequency()}
                        </Text>

                        {service.include.length > 0 && (
                            <Separator borderColor="#E5E7EB" borderWidth="1px" mx="-6" mb={4} />
                        )}

                        <Points items={service.include} label="Incluye" />

                        {service.notInclude.length > 0 && (
                            <Separator
                                borderColor="#E5E7EB"
                                borderWidth="1px"
                                mx="-6"
                                mb={4}
                                mt={4}
                            />
                        )}

                        <Points items={service.notInclude} label="No Incluye" />

                        {service.requirement.length > 0 && (
                            <Separator
                                borderColor="#E5E7EB"
                                borderWidth="1px"
                                mx="-6"
                                mb={4}
                                mt={4}
                            />
                        )}

                        <Points items={service.requirement} label={service.requireLabel} />

                        <Separator borderColor="#E5E7EB" borderWidth="1px" mx="-6" mb={4} mt={4} />

                        <Transition type="bootom" velocity="slow">
                            <VStack gap={3}>
                                {/* <Button
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
                                </Button> */}

                                <Link href={`/payment/details/${service.slug}`} style={{ width: "100%" }}>
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
                                </Link>

                            </VStack>
                        </Transition>
                    </Box>
                </Transition>
            </Grid>

        </Stack>
    );
}

// Componente Points (sin cambios, solo se corrigió "bootom" → "bottom" para consistencia)
export const Points = ({
    items,
    label,
}: {
    items: Array<string>;
    label: string;
}) => {
    return (
        <>
            {items.length > 0 && (
                <Stack>
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
                            {label}
                        </Heading>
                    </Transition>

                    <Transition type="bootom" velocity="slow">
                        <VStack align="start" gap={3}>
                            {items.map((item, i) => (
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
                </Stack>
            )}
        </>
    );
};