"use client"
import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { tools } from "@/constants/process/Tools";
import { Transition } from "../Transition";

export default function ToolsUsed() {
    return (
        <Box w="100%" bg="#FDF2FF" py={16} px={4}>
            <Box maxW="1440px" mx="auto">
                <Stack textAlign="center" mb={10}>
                    <Transition type="top" velocity="slow">
                        <Heading
                            as="h2"
                            fontSize={{ base: "28px", md: "36px", lg: "40px" }}
                            fontWeight="800"
                            fontFamily="Bricolage Grotesque"
                            color="#3F3F3F"
                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                            letterSpacing="0px"
                        >
                            Herramientas que Utilizamos
                        </Heading>
                    </Transition>
                    <Transition type="top" velocity="slow">
                        <Text
                            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                            color="gray.600"
                            maxW="600px"
                            mx="auto"
                            px={4}
                        >
                            Responda 3 preguntas y te recomendamos el servicio ideal
                        </Text>
                    </Transition>
                </Stack>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
                    p={10}
                    maxW="1120px"
                    mx="auto"
                    bg="#FFFFFF"
                    border="1px solid #E5E7EB"
                    borderRadius="4xl"
                >
                    {tools.map((tool, index) => (
                        <Transition key={index} type="bootom" velocity="slow" index={index}>
                            <Box
                                bg="#ffff"
                                borderRadius="4xl"
                                p={6}
                                border="2px solid"
                                borderColor="gray.50"
                                maxW="450px"
                                textAlign="center"
                                _hover={{
                                    borderColor: "#fff",
                                    bg: "#fdf2ff",
                                    transform: "translateY(-2px)",
                                    "& svg": {
                                        color: "primary.500",
                                    },
                                    "& p": {
                                        color: "primary.500",
                                    },
                                    "& h3": {
                                        color: "primary.500",
                                    }
                                }}
                            >
                                <Heading
                                    as="h3"
                                    fontSize="24px"
                                    lineHeight="32px"
                                    letterSpacing="0px"
                                    fontWeight="800"
                                    color="#3F3F3F"
                                    mb={2}
                                >
                                    {tool.title}
                                </Heading>
                                <Text
                                    fontSize="18px"
                                    fontWeight={400}
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                    color="#3F3F3F"
                                >
                                    {tool.description}
                                </Text>
                            </Box>
                        </Transition>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
