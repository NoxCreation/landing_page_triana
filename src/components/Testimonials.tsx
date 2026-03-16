import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { testimonials } from "@/constants/home/testimonials";

export default function Testimonials() {
    return (
        <Box w="100%" bg="#FDF2F8" py={16} px={4}>
            <Box maxW="1440px" mx="auto">
                <Box textAlign="center" mb={12}>
                    <Heading
                        as="h1"
                        color="#3F3F3F"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight="800"
                        lineHeight="70px"
                        letterSpacing="0px"
                        mb={4}
                    >
                        Lo que dicen nuestros clientes
                    </Heading>
                    <Text
                        fontSize="18px"
                        fontWeight={400}
                        lineHeight="22px"
                        letterSpacing="0px"
                        color="#717171"
                    >
                        Testimonios de clientes que hablan por nuestro trabajo
                    </Text>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    m="auto"
                    w="1120px"
                >
                    {testimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            w="357px"
                            borderTopLeftRadius="3xl"
                            borderTopRightRadius="3xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="3xl"
                            border="2px solid"
                            bg="white"
                            py="48px"
                            px="24px"
                        >
                            <Box gap={3} mb={4}>
                                <Text
                                    color="#717171"
                                    fontSize="18px"
                                    fontWeight={400}
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                >
                                    {testimonial.text}
                                </Text>
                            </Box>
                            <Flex align="flex-start">
                                <Box
                                    w="40px"
                                    h="40px"
                                    borderRadius="full"
                                    bg="brand.500"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexShrink={0}
                                >
                                </Box>
                                <Box px="2">
                                    <Text
                                        fontWeight={600}
                                        color="#3F3F3F"
                                        fontSize="18px"
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                    >
                                        {testimonial.name}
                                    </Text>
                                    <Text
                                        fontSize="14px"
                                        color="#717171"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        {testimonial.role}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Grid>

                <Flex justify="center" gap={4} mt={8}>
                    <Box
                        w="40px"
                        h="40px"
                        bg="#E5E7EB"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        transition="all 0.2s"
                    >
                        <Text fontWeight="bold" color="black">
                            ←
                        </Text>
                    </Box>
                    <Box
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        bg="primary.500"
                        transition="all 0.2s"
                    >
                        <Text color="white" fontWeight="bold">
                            →
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
