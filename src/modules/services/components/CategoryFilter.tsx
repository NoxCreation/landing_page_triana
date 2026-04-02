"use client";
import { Flex, Grid, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Transition } from "@/components/Transition";

interface CategorySelectorProps {
    tabs: Array<string>;
    onChange?: (value: string) => void;
    defaultValue?: string;
}

export default function CategorySelector({
    tabs,
    onChange, defaultValue = "Todos"
}: CategorySelectorProps) {
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
                        {tabs.map((tab, index) => (
                            <Tabs.Trigger value={tab} {...triggerStyles} px={5} py={3} key={index}>
                                <Text fontWeight="600">{tab}</Text>
                            </Tabs.Trigger>
                        ))}
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
                    {tabs.map((tab, index) => (
                        <Tabs.Trigger
                            key={index}
                            value={tab}
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
                            <Text fontWeight="600" fontSize="sm">{tab}</Text>
                        </Tabs.Trigger>
                    ))}
                    
                </Grid>
            </Transition>
        </Tabs.Root>
    );
}