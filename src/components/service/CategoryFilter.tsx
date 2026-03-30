"use client";
import { Flex, Grid, Tabs, Icon, Text } from "@chakra-ui/react";
import { FaBriefcase, FaUtensils, FaStore, FaCalendarAlt } from "react-icons/fa";
import { Transition } from "../Transition"; // asegúrate de que la ruta sea correcta
import { useState } from "react";

interface CategorySelectorProps {
    onChange?: (value: string) => void;
    defaultValue?: string;
}

export default function CategorySelector({ onChange, defaultValue = "all" }: CategorySelectorProps) {
    const [selected, setSelected] = useState(defaultValue);

    const handleChange = (value: string) => {
        setSelected(value);
        onChange?.(value);
    };

    // Estilos base para los triggers (escritorio)
    const triggerStyles = {
        cursor: "pointer",
        transition: "all 0.2s",
        fontWeight: "600",
        rounded: "full",
        _selected: {
            bg: "brand.500",
            color: "white",
            boxShadow: "0px 10px 20px rgba(178, 35, 207, 0.24)",
            "& .chakra-icon": {
                color: "white",
            },
        },
    };

    return (
        <Tabs.Root value={selected} onValueChange={(e) => handleChange(e.value)} variant="plain">
            {/* Versión desktop: píldora */}
            <Transition type="top" velocity="slow">
                <Flex
                    display={{ base: "none", md: "flex" }}
                    border="1px solid"
                    borderColor={'gray.200'}
                    borderLeftWidth="0"
                    rounded="full"
                    w="fit-content"
                    bg="white"
                    gap={0}
                >
                    <Tabs.List display="flex" gap={0}>
                        <Tabs.Trigger value="all" {...triggerStyles} px={5} py={3}>
                            <Text fontWeight="600">Todos</Text>
                        </Tabs.Trigger>

                        <Tabs.Trigger value="emprendedores" {...triggerStyles} px={5} py={3}>
                            <Flex align="center" gap={2}>
                                <Icon as={FaBriefcase} color="#A0A0A0" />
                                <Text>Emprendedores</Text>
                            </Flex>
                        </Tabs.Trigger>

                        <Tabs.Trigger value="restaurantes" {...triggerStyles} px={5} py={3}>
                            <Flex align="center" gap={2}>
                                <Icon as={FaUtensils} color="#A0A0A0" />
                                <Text>Restaurantes</Text>
                            </Flex>
                        </Tabs.Trigger>

                        <Tabs.Trigger value="negociodigital" {...triggerStyles} px={5} py={3}>
                            <Flex align="center" gap={2}>
                                <Icon as={FaStore} color="#A0A0A0" />
                                <Text>Negocios Digitales</Text>
                            </Flex>
                        </Tabs.Trigger>

                        <Tabs.Trigger value="procesolegal" {...triggerStyles} px={5} py={3}>
                            <Flex align="center" gap={2}>
                                <Icon as={FaCalendarAlt} color="#A0A0A0" />
                                <Text>Procesos legales</Text>
                            </Flex>
                        </Tabs.Trigger>
                    </Tabs.List>
                </Flex>
            </Transition>

            {/* Versión móvil */}
            <Transition type="top" velocity="slow">
                <Grid
                    display={{ base: "grid", md: "none" }}
                    templateColumns="repeat(2, 1fr)"
                    gap={3}
                    maxW="100%"
                    mx="auto"
                    px={4}
                >
                    <Tabs.Trigger
                        value="all"
                        borderRadius="xl"
                        py={4}
                        px={4}
                        textAlign="center"
                        bg="white"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        fontWeight="600"
                        color="primary.500"
                        _selected={{
                            bg: "primary.500",
                            borderColor: "primary.500",
                            color: "white",
                            boxShadow: "0px 10px 20px rgba(178, 35, 207, 0.24)",
                            "& .chakra-icon": { color: "white" },
                        }}
                    >
                        <Text fontWeight="600" fontSize="sm">Todos</Text>
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="emprendedores"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                        fontWeight="600"
                        color="#A0A0A0"
                        _selected={{
                            bg: "primary.500",
                            borderColor: "primary.500",
                            color: "white",
                            boxShadow: "0px 10px 20px rgba(178, 35, 207, 0.24)",
                            "& .chakra-icon": { color: "white" },
                        }}
                    >
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaBriefcase} />
                            <Text fontSize="sm">Emprendedores</Text>
                        </Flex>
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="restaurantes"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                        fontWeight="600"
                        color="#A0A0A0"
                        _selected={{
                            bg: "primary.500",
                            borderColor: "primary.500",
                            color: "white",
                            boxShadow: "0px 10px 20px rgba(178, 35, 207, 0.24)",
                            "& .chakra-icon": { color: "white" },
                        }}
                    >
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaUtensils} />
                            <Text fontSize="sm">Restaurantes</Text>
                        </Flex>
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="negociodigital"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                        fontWeight="600"
                        color="#A0A0A0"
                        _selected={{
                            bg: "primary.500",
                            borderColor: "primary.500",
                            color: "white",
                            boxShadow: "0px 10px 20px rgba(178, 35, 207, 0.24)",
                            "& .chakra-icon": { color: "white" },
                        }}
                    >
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaStore} />
                            <Text fontSize="sm">Negocios Digitales</Text>
                        </Flex>
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="procesolegal"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                        fontWeight="600"
                        color="#A0A0A0"
                        _selected={{
                            bg: "primary.500",
                            borderColor: "primary.500",
                            color: "white",
                            boxShadow: "0px 10px 20px rgba(178, 35, 207, 0.24)",
                            "& .chakra-icon": { color: "white" },
                        }}
                    >
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaCalendarAlt} />
                            <Text fontSize="sm">Procesos legales</Text>
                        </Flex>
                    </Tabs.Trigger>
                </Grid>
            </Transition>
        </Tabs.Root>
    );
}