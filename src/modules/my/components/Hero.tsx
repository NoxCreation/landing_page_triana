"use client"

import { Box, Flex, Heading, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { ElementType } from "react";
import { FaTiktok } from "react-icons/fa";
import { DotPattern } from "@/components/DotPattern";
import { SparklesText } from "@/components/Sparkle";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import { ContainerLanding } from "@/components/container";

export default function Hero({
    content
}: {
    content: ContentType
}) {
    return (
        <Stack position={'relative'} bg="rgb(254, 251, 255)">
            {/* <Stack
                position={"absolute"}
                top={0}
                left={0}
                w={'100vw'}
                h={'100vh'}
                zIndex={0}
            >
                <DotPattern
                    width={20}
                    height={20}
                    cx={2}
                    cy={2}
                    cr={1.5}
                    color="gray.400"
                    opacity={0.2}
                />
            </Stack> */}
            <ContainerLanding>
                <Box as="section" position="relative" >

                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        gap={12}
                        alignItems={"center"}
                        alignContent={'center'}
                    >
                        <Box flex={1} textAlign={{ base: "center", lg: "left" }}>
                            <Stack
                                w="100%"
                                gap={6}
                                alignItems={{ base: "center", lg: "start" }}
                            >
                                <Transition type="top" velocity="slow">

                                    <Text
                                        maxW="249px"
                                        px={4}
                                        py={2}
                                        borderRadius="full"
                                        fontSize="14px"
                                        fontWeight="400"
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                        bg="#F5F3FF"
                                        color="primary.500"
                                        border="1px solid"
                                        borderColor="primary.500"
                                        textAlign="center"
                                        whiteSpace="nowrap"
                                    >
                                        {content.my.label}
                                    </Text>
                                </Transition>
                                <Transition type="top" velocity="slow">
                                    <Flex gap={2} justifyContent={{ base: "center", lg: "flex-start" }} alignItems="center">
                                        <SparklesText>
                                            <Heading
                                                as="h1"
                                                color="primary.500"
                                                fontWeight="800"
                                                fontSize={{ base: "28px", md: "40px", lg: "54px" }}
                                                fontFamily="Bricolage Grotesque"
                                                lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                                            >
                                                {content.my.fullname}
                                            </Heading>
                                        </SparklesText>

                                        <Image
                                            src="/home/Vector.ico"
                                            w={{ base: "24px", lg: "32px" }}
                                            h={{ base: "24px", lg: "32px" }}
                                        />
                                    </Flex>
                                </Transition>
                                <Transition type="left" velocity="slow">
                                    <Text
                                        w="100%"
                                        fontFamily="inter"
                                        fontWeight="400"
                                        fontSize={{ base: "18px", md: "16px", lg: "18px" }}
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        color="#717171"
                                        mb={8}
                                    >
                                        {content.my.mini_description}
                                    </Text>
                                </Transition>
                            </Stack>
                            <Transition type="bootom" velocity="slow">
                                <Flex flexDir={{ base: 'column', md: 'row' }} gap={4}>
                                    <Link target="_blank" href={content.my.contact.linkedln} flex={1}>
                                        <ButtonSocial
                                            icon={LinkedInIcon}
                                            label="LinkedIn"
                                        />
                                    </Link>

                                    <Link target="_blank" href={content.my.contact.tittok} flex={1}>
                                        <ButtonSocial
                                            icon={FaTiktok}
                                            label="TikTok"
                                        />
                                    </Link>

                                    <Link target="_blank" href={`mailto:${content.my.contact.email}`} flex={1}>
                                        <ButtonSocial
                                            icon={EmailIcon}
                                            label="Contacto"
                                        />
                                    </Link>

                                </Flex>
                            </Transition>
                        </Box>
                        <Transition type="rigth" velocity="slow">
                            <Flex
                                flex={1}
                                w={{ base: "300px", lg: "540px" }}
                                h={{ base: "350px", md: "300px" }}
                                borderRadius="80px"
                                background="radial-gradient(circle at center, #FFFFFF 0%, #F9D0FF 100%)"
                                position="relative"
                                align={'center'}
                                boxShadowColor={'red.50'}
                                boxShadow={'2px 2px 150px #f9d0ff'}
                                overflow={{ base: 'hidden', md: 'visible' }}
                            >
                                <Image
                                    src="/my/heroMy.webp"
                                    alt="Foto derecha"
                                    w={{ base: "auto", md: "100%" }}
                                    h={{ base: "130%", md: "auto" }}
                                    objectFit="cover"
                                    objectPosition={{ base: "center top", md: "center top", lg: "center" }}
                                    zIndex="1"
                                />
                            </Flex>
                        </Transition>
                    </Flex>
                </Box>
            </ContainerLanding>
        </Stack>

    )
}

const ButtonSocial = ({
    icon,
    label
}: {
    icon: ElementType,
    label: string
}) => (
    <Flex
        zIndex={4}
        alignItems={'center'}
        justifyContent={'center'}
        w="100%"
        h={{ base: "auto", lg: "48px" }}
        bg="#F9D0FF"
        borderRadius="30px"
        py={{ base: 3, lg: "16px" }}
        px="24px"
        gap="8px"
        color="terciary.500"
        cursor={'pointer'}
        _hover={{
            bg: "#f5c1fc"
        }}
    >
        <Icon as={icon} />
        <Text
            as="span"
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize={{ base: "14px", lg: "18px" }}
            lineHeight="22px"
            letterSpacing="0"
            textAlign="center"
        >{label}</Text>
    </Flex>
)