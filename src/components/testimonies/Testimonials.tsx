"use client"
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import TestimonialCard from "../cards/CardTestimonies";
import { Transition } from "../Transition";
import { testimonials } from "@/constants/home/testimonials";

export default function Testimonials() {
    return (
        <Box w="100%" bg="gray.50" py={32} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center" mb={12}>
                    <Transition type="top" velocity="slow">
                        <Box position="relative" maxW="1174px" display="inline-block">
                            <Heading
                                as="h1"
                                color="primary.500"
                                fontFamily="Bricolage Grotesque"
                                fontWeight="extrabold"
                                fontSize={{ base: "40px", lg: "64px" }}
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
                                right={{ base: "5px", md: "-34px", lg: "-34px" }}
                            />
                        </Box>
                    </Transition>
                    <Transition type="left" velocity="slow">
                        <Text
                            fontWeight={400}
                            fontSize="18px"
                            color="#717171"
                            lineHeight="22px"
                            letterSpacing="0px"
                        >
                            Testimonios de clientes que hablan por nuestro trabajo
                        </Text>
                    </Transition>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    maxW="1120px"
                    m="auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <Transition key={index} type="bootom" velocity="slow" index={index}>
                            <TestimonialCard
                                text={testimonial.text}
                                name={testimonial.name}
                                role={testimonial.role}
                                image={testimonial.image}
                            />
                        </Transition>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
