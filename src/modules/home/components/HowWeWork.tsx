'use client'

import { Box, Flex, List, ListItem, Text, Heading, Image, Icon } from "@chakra-ui/react";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import * as FeatherIcons from "react-icons/fi";

export default function HowWeWork({
    content
}: {
    content: ContentType
}) {
    return (
        <Flex py={{ base: 10, md: 12, lg: "80px" }} px={{ base: 4, md: 8, lg: "160px" }} align="center" h={"100vh"} justify="space-between" mx="auto" flexDirection={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 0 }}>
            <Transition type="left" velocity="slow">
                <Box flex="1" minW={0} alignItems="start">
                    <Heading
                        as="h1"
                        fontFamily="Bricolage Grotesque"
                        color="#3F3F3F"
                        mb={4}
                        fontSize={{ base: "28px", md: "40px", lg: "5xl" }}
                        fontWeight={800}
                        lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                        letterSpacing="0px"
                        textAlign={'center'}
                    >
                        Cómo trabajamos juntos
                    </Heading>

                    <List.Root gap={6}>
                        {content.home.how_we_work.map((it, index) => (
                            <Point
                                key={index}
                                icon={it.icon}
                                title={it.title}
                                description={it.description}
                            />
                        ))}
                    </List.Root>
                </Box>
            </Transition>

            <Transition type="rigth" velocity="slow">
                <Box
                    flex={1}
                    w={{ base: "100%", lg: "400px" }}
                    h={{ base: "400px", lg: "600px" }}
                    borderRadius="99px"
                    background="radial-gradient(circle at center, #FFFFFF 0%, #F9D0FF 100%)"
                    position="relative"
                    overflow="hidden"
                    mx={{ base: "auto", lg: "0" }}
                >
                    <Image
                        src="/home/proces.webp"
                        alt="Foto derecha"
                        maxW="420px"
                        w="100%"
                        left="-100px"
                        borderRadius="2xl"
                        position="absolute"
                        bottom="0"
                        transform="translateX(100px)"
                        zIndex="1"
                    />
                </Box>
            </Transition>

        </Flex>
    );
}

const Point = ({
    icon,
    title,
    description
}: {
    icon: string;
    title: string;
    description: string;
}) => {
    const IconComponent = icon && FeatherIcons[icon as keyof typeof FeatherIcons];
    return (
        <ListItem direction="row"
            w="100%"
            py={3}
            borderRadius="48px"
            gap="16px"
            display="flex"
            alignItems="flex-start"
            _hover={{
                bg: '#b223cf13'
            }}
            px={4}
            cursor={'pointer'}
        >
            <Box
                w={{ base: "50px", lg: "80px" }}
                h={{ base: "50px", lg: "80px" }}
                p="3px"
                borderRadius="full"
                background="linear-gradient(to bottom, #E63CFF, #611161)"
                flexShrink={0}
            >
                {IconComponent && (
                    <Flex
                        w="100%"
                        h="100%"
                        bg="#FFFFFF"
                        borderRadius="full"
                        align="center"
                        justify="center"
                        color="primary.500"
                        boxShadow="0px 10px 20px rgba(178,35,207,0.24)"
                    >
                        <Icon
                            as={IconComponent}
                            boxSize={10}
                            color="primary.500"
                            mb={2}
                        />
                    </Flex>
                )}
            </Box>
            <Box maxW="420px" w="100%" gap="8px">
                <Text
                    as="h3"
                    fontWeight={800}
                    fontFamily="inter"
                    color="#3F3F3F"
                    mb={1}
                    fontSize={{ base: "18px", lg: "26px" }}
                    lineHeight={{ base: "24px", lg: "32px" }}
                    letterSpacing="0px"
                >
                    {title}
                </Text>
                <Text
                    color="#717171"
                    fontSize="14px"
                    fontWeight={400}
                    fontFamily="inter"
                >
                    {description}
                </Text>
            </Box>
        </ListItem>
    )
}
