import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { testimonials } from "@/constants/testimonies/testimonies"
import TestimonialCard from "../cards/CardTestimonies";

export default function Testimonials() {
    return (
        <Box w="100%" bg="gray.50" py={20} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center" mb={12}>
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
                        <TestimonialCard
                            key={index}
                            text={testimonial.text}
                            name={testimonial.name}
                            role={testimonial.role}
                            image="/home/Hero.png"
                        />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
