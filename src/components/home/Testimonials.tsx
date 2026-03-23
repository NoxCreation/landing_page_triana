import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { testimonials } from "@/constants/home/testimonials";
import TestimonialCard from "../cards/CardTestimonies";

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
                        fontFamily="Bricolage Grotesque"
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
                        <TestimonialCard
                            key={index}
                            text={testimonial.text}
                            name={testimonial.name}
                            role={testimonial.role}
                            image="/home/Hero.png"
                        />
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
