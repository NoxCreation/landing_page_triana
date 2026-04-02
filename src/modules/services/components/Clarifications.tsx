"use client"

import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import { Box, Heading } from "@chakra-ui/react";

export default function Clarifications({
    content
}: {
    content: ContentType
}) {
    return (
        <Box w="100%" bg="#FDF2FF" py={20} px={4}>
            <Box maxW="1440px" mx="auto" textAlign="center">
                <Transition type="top" velocity="slow">
                    <Heading
                        as="h2"
                        fontSize={{ base: "34px", lg: "64px" }}
                        mb={4}
                        lineHeight={{ base: "1.2", lg: "70px" }}
                        letterSpacing="0px"
                        fontWeight={800}
                        fontFamily="Bricolage Grotesque"
                        color="primary.500"
                    >
                        Aclaraciones Importantes
                    </Heading>
                </Transition>
                <Transition type="bootom" velocity="slow">
                    <Box
                        maxW="720px"
                        mx="auto"
                        textAlign="center"
                        fontWeight={400}
                        color="primary.500"
                        fontSize="18px"
                        lineHeight="22px"
                        letterSpacing="0px"
                    >
                        {content.services.important_clarification}
                    </Box>
                </Transition>
            </Box>
        </Box>
    );
}
