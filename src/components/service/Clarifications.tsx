import { Box, Heading, List } from "@chakra-ui/react";

export default function Clarifications() {
    return (
        <Box w="100%" bg="#FDF2FF" py={20} px={4}>
            <Box maxW="1440px" mx="auto" textAlign="center">
                <Heading
                    as="h2"
                    fontSize="64px"
                    mb={4}
                    lineHeight="70px"
                    letterSpacing="0px"
                    fontWeight={800}
                    color="primary.500"
                >
                    Aclaraciones Importantes
                </Heading>
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
            </Box>
        </Box>
    );
}
