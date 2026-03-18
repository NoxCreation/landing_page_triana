import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { tools } from "@/constants/process/Tools";

export default function ToolsUsed() {
    return (
        <Box w="100%" bg="#FDF2FF" py={16} px={4}>
            <Box maxW="1440px" mx="auto">
                <Box textAlign="center" mb={10}>
                    <Heading
                        as="h2"
                        fontSize={{ base: "3xl", md: "64px" }}
                        fontWeight="800"
                        color="#3F3F3F"
                        lineHeight="70px"
                        letterSpacing="0px"
                        mb={4}
                    >
                        Herramientas que Utilizamos
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color="gray.600"
                        maxW="600px"
                        mx="auto"
                    >
                        Responda 3 preguntas y te recomendamos el servicio ideal
                    </Text>
                </Box>

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
                        <Box
                            key={index}
                            bg={tool.star ? "#F9D0FF" : "#ffff"}
                            borderRadius="4xl"
                            p={6}
                            border={tool.star ? "" : "2px solid"}
                            borderColor="gray.100"
                            maxW="450px"
                            textAlign="center"
                        >
                            <Heading
                                as="h3"
                                fontSize="24px"
                                lineHeight="32px"
                                letterSpacing="0px"
                                fontWeight="800"
                                color={tool.star ? "primary.500" : "#3F3F3F"}
                                mb={2}
                            >
                                {tool.title}
                            </Heading>
                            <Text
                                fontSize="18px"
                                fontWeight={400}
                                lineHeight="22px"
                                letterSpacing="0px"
                                color={tool.star ? "primary.500" : "#3F3F3F"}
                            >
                                {tool.description}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
