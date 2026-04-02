"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useCallback } from "react";
import TestimonialCard from "@/components/cards/CardTestimonies";
import { TestimoniesType } from "@/types/TestimoniesType";

export default function TestimonialsCarousel({ testimonials }: { testimonials: Array<TestimoniesType> }) {
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
                                name={testimonial.name}
                                role={testimonial.position}
                                text={testimonial.comment}
                                image={"/avatar.svg"}
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
                    _hover={{
                        bg: 'primary.500',
                        color: 'white'
                    }}
                >
                    ←
                </IconButton>

                <IconButton
                    aria-label="next"
                    onClick={scrollNext}
                    borderRadius="full"
                    bg="#E5E7EB"
                    cursor="pointer"
                    transition="all 0.2s"
                    fontWeight="extrabold"
                    color="black"
                    _hover={{
                        bg: 'primary.500',
                        color: 'white'
                    }}
                >
                    →
                </IconButton>
            </Flex>
        </>
    );
}