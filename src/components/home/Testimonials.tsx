import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { testimonials } from "@/constants/home/testimonials";
import { Transition } from "../Transition";
import TestimonialsCarousel from "../Carrusel";

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

                <Box maxW="1120px" m="auto" >
                    <Transition type="rigth" velocity="slow" >
                        <TestimonialsCarousel
                            testimonials={testimonials}
                        />
                    </Transition>
                </Box>
            </Box>
        </Box>
    );
}
