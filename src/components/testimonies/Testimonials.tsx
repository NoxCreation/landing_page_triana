import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { testimonials } from "@/constants/testimonies/testimonies"

export default function Testimonials() {
    return (
        <Box w="100%" bg="gray.50" py={20} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center" mb={12}>
                    <Box position="relative" w="1174px" display="inline-block">
                        <Heading
                            as="h1"
                            color="primary.500"
                            fontFamily="Bricolage Grotesque"
                            fontWeight="extrabold"
                            fontSize="64px"
                            lineHeight="70px"
                            letterSpacing="0px"
                        >
                            Lo que dicen nuestros clientes
                        </Heading>

                        <Image
                            src="/home/Vector.png"
                            w="32px"
                            h="32px"
                            position="absolute"
                            top="3px"
                            right="60px"
                        />
                    </Box>
                    <Text
                        fontWeight={400}
                        fontSize="18px"
                        color="#717171"
                        lineHeight="22px"
                        letterSpacing="0px"
                    >
                        Testimonios de clientes que hablan por nuestro trabajo
                    </Text>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    maxW="1120px"
                    m="auto"
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
                                    <Image
                                        w="40px"
                                        h="40px"
                                        src="/home/Hero.png"
                                        borderRadius="full"
                                    />
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
            </Box>
        </Box>
    );
}
