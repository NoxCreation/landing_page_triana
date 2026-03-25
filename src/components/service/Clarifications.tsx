"use client"
import { Box, Heading, List } from "@chakra-ui/react";
import { Transition } from "../Transition";

export default function Clarifications() {
    return (
        <Box w="100%" bg="#FDF2FF" py={20} px={4}>
            <Box maxW="1440px" mx="auto" textAlign="center">
                <Transition type="top" velocity="slow">
                    <Heading
                        as="h2"
                        fontSize={{ base: "34px", lg: "64px" }}
                        mb={4}
                        lineHeight={{ base: "1.2", lg: "70px" }}
                        letterSpacing="0px"
                        fontWeight={800}
                        fontFamily="Bricolage Grotesque"
                        color="primary.500"
                    >
                        Aclaraciones Importantes
                    </Heading>
                </Transition>
                <Transition type="bootom" velocity="slow">
                    <Box
                        maxW="720px"
                        mx="auto"
                        textAlign="center"
                    >
                    <List.Root
                        gap={3}
                        listStyleType="disc"
                        textAlign="center"
                        mx="auto"
                        listStylePosition="inside"
                        css={{
                            "& li::marker": {
                                color: "var(--chakra-colors-primary-500)",
                            },
                        }}
                    >
                        <List.Item
                            fontWeight={400}
                            color="primary.500"
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="0px"
                        >
                            Todos los servicios pueden contratarse de forma individual o combinada
                        </List.Item>
                        <List.Item
                            fontWeight={400}
                            color="primary.500"
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="0px"
                        >
                            Los precios pueden ajustarse según alcance y complejidad
                        </List.Item>
                    </List.Root>
                    </Box>
                </Transition>
            </Box>
        </Box>
    );
}
