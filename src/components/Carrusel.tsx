"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useCallback } from "react";
import TestimonialCard from "@/components/cards/CardTestimonies";

export default function TestimonialsCarousel({ testimonials }) {
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
        <>
            <Box overflow="hidden" ref={emblaRef}>
                <Flex>
                    {testimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            flex={{
                                base: "0 0 100%",
                                md: "0 0 50%",
                                lg: "0 0 33.33%",
                            }}
                            px={4}
                        >
                            <TestimonialCard
                                text={testimonial.text}
                                name={testimonial.name}
                                role={testimonial.role}
                                image={testimonial.image}
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>

            <Flex justify="center" mt={8} gap={4}>
                <IconButton
                    aria-label="prev"
                    onClick={scrollPrev}
                    borderRadius="full"
                    bg="#E5E7EB"
                    cursor="pointer"
                    transition="all 0.2s"
                    fontWeight="extrabold"
                    color="black"
                >
                    ←
                </IconButton>

                <IconButton
                    aria-label="next"
                    onClick={scrollNext}
                    borderRadius="full"
                    color="white"
                    cursor="pointer"
                    bg="primary.500"
                    transition="all 0.2s"
                    fontWeight="bold"
                >
                    →
                </IconButton>
            </Flex>
        </>
    );
}