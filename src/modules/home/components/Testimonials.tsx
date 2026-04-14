'use client'

import { Box, Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import TestimonialCard from "@/components/cards/CardTestimonies";
import { ContainerLanding } from "@/components/container";
import Carousel from "@/components/Carrusel";

export default function Testimonials({
    content
}: {
    content: ContentType
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    return (
        <ContainerLanding >
            <Stack gap={12}>
                <Transition type="top" velocity="slow">
                    <Stack textAlign="center" gap={2}>
                        <Heading
                            as="h1"
                            color="#3F3F3F"
                            fontSize={{ base: "3xl", md: "5xl" }}
                            fontWeight="800"
                            fontFamily="Bricolage Grotesque"
                            lineHeight={{ base: "1.3", md: "70px" }}
                            letterSpacing="0px"
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
                    </Stack>
                </Transition>

                <Box>
                    <Transition type="rigth" velocity="slow" >
                        <Carousel>
                            {content.testimonies.testimonies.map((testimonial, index) => (
                                <Box
                                    key={index}
                                    flex={{
                                        base: "0 0 100%",
                                        md: "0 0 50%",
                                        lg: "0 0 33.33%",
                                    }}
                                    px={{ base: 0, md: 4 }}
                                >
                                    <TestimonialCard
                                        name={testimonial.name}
                                        role={testimonial.position}
                                        text={testimonial.comment}
                                        image={"/avatar.svg"}
                                    />
                                </Box>
                            ))}
                        </Carousel>
                    </Transition>
                </Box>
            </Stack>
        </ContainerLanding>
    );
}
