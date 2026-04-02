'use client'

import { Box, Flex, List, ListItem, Text, Heading, Image, Icon, Stack } from "@chakra-ui/react";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import * as FeatherIcons from "react-icons/fi";
import { ContainerLanding } from "@/components/container";

export default function HowWeWork({
    content
}: {
    content: ContentType
}) {
    return (
        <ContainerLanding bg="white">
            <Flex align="center" flexDirection={{ base: "column", lg: "row" }} gap={{ base: 8, lg: 0 }}>
                <Transition type="left" velocity="slow">
                    <Box flex="1" alignItems="start">
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

                <Stack
                    flex={1}
                    w={'100%'}
                    alignItems={'end'}
                >
                    <Transition type="rigth" velocity="slow">
                        <Image
                            src="/home/proces.webp"
                            alt="Foto derecha"
                            maxW="420px"
                            w="100%"
                            borderRadius="2xl"
                            bottom="0"
                            zIndex="1"
                        />
                    </Transition>
                </Stack>

            </Flex>
        </ContainerLanding>
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
                        alignItems="center"
                        justifyContent="center"
                        color="primary.500"
                        boxShadow="0px 10px 20px rgba(178,35,207,0.24)"
                    >
                        <Icon
                            as={IconComponent}
                            boxSize={6}
                            color="terciary.500"
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
