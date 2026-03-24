import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";
import { testimonials } from "@/constants/home/testimonials";
import TestimonialCard from "../cards/CardTestimonies";
import { Transition } from "../Transition";

export default function Testimonials() {
    return (
        <Box w="100%" bg="#FDF2F8" py={16} px={4}>
            <Box maxW="1440px" mx="auto">
                <Transition type="top" velocity="slow">
                    <Box textAlign="center" mb={12}>
                        <Heading
                            as="h1"
                            color="#3F3F3F"
                            fontSize={{ base: "3xl", md: "5xl" }}
                            fontWeight="800"
                            fontFamily="Bricolage Grotesque"
                            lineHeight={{ base: "1.3", md: "70px" }}
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
                </Transition>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    maxW="1120px"
                    m="auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <Transition type="rigth" velocity="slow" key={index} index={index*2}>
                            <TestimonialCard
                                text={testimonial.text}
                                name={testimonial.name}
                                role={testimonial.role}
                                image={testimonial.image}
                            />
                        </Transition>
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
