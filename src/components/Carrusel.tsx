"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Box, ConditionalValue, Flex, IconButton } from "@chakra-ui/react";
import { ReactNode, useCallback } from "react";

export default function Carousel({ children, displayButtons }: { children: ReactNode, displayButtons?: ConditionalValue<any> }) {
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
            <Box /* overflow="hidden" */ ref={emblaRef}>
                <Flex gap={4}>
                    {children}
                </Flex>
            </Box>

            <Flex justify="center" mt={8} gap={4} display={displayButtons}>
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