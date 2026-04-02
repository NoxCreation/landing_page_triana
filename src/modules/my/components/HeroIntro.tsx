"use client"

import { ContainerLanding } from "@/components/container";
import HtmlRenderer from "@/components/htmlRenderer";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import { Box, HStack, Stack, Text, Image } from "@chakra-ui/react";

export default function HeroIntro({
    content
}: {
    content: ContentType
}) {

    return (
        <ContainerLanding>
            <Stack gap={16}>

                <Transition type="top" velocity="slow">
                    <Stack textAlign="center" gap={6}>
                        <HStack justify="start" gap={{ base: 0, md: 2 }}>
                            <Image src="/my/Vector-w2.svg" w={'20px'} />
                            <Image src="/my/Vector-w2.svg" w={'20px'} />
                        </HStack>
                        <Text
                            fontSize={{ base: "22px", md: "30px" }}
                            color="#3F3F3F"
                            fontWeight={500}
                            letterSpacing="-0.5px"
                            mx="auto"
                        >
                            {content.my.quote}
                        </Text>
                        <Box>
                            <Text
                                color="#A0A0A0"
                                fontWeight={500}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="-0.5px"
                                fontStyle="italic"
                            >
                                — {content.my.fullname}, CEO of 3ana
                            </Text>
                        </Box>
                        <HStack justify="end" gap={{ base: 0, md: 2 }}>
                            <Image src="/my/Vector-w.svg" w={'20px'} />
                            <Image src="/my/Vector-w.svg" w={'20px'} />
                        </HStack>
                    </Stack>
                </Transition>

                <Transition type="left" velocity="slow">
                    <Text
                        fontSize={{ base: "18px", md: "18px" }}
                        color="#717171"
                        fontWeight={400}
                        letterSpacing="0px"
                        mx="auto"
                        textAlign={'justify'}
                    >
                        <HtmlRenderer>
                            {content.my.full_description}
                        </HtmlRenderer>
                    </Text>
                </Transition>
            </Stack>
        </ContainerLanding>
    );
}
