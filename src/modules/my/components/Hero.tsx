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
        <Stack
            position="relative"
            bgImage={{ base: "url('/my/bg-my.png')", lg: "url('/my/my-bg.png')" }}
            bgSize={{ base: "contain", lg: "cover" }}
            backgroundPosition="center 80%"
            bgRepeat="no-repeat"
            pt={{ base: 6, lg: 0 }}
            pb={{ base: "420px", lg: 0 }}
            minH={{ base: "100vh", lg: "auto" }}
            overflow="hidden"
            alignItems="flex-start"
        >
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
            {/* Vista desktop */}
            {/* Círculo grande */}
            <Box
                position="absolute"
                left="-238px"
                w="921px"
                h="883px"
                borderRadius="50%"
                border="3px solid rgba(97, 17, 97, 0.08)"
                zIndex={0}
                display={{ base: "none", lg: "block" }}
            />

            {/* Círculo pequeño */}
            <Box
                position="absolute"
                top="256px"
                left="-131px"
                w="612px"
                h="587px"
                borderRadius="50%"
                border="3px solid rgba(97, 17, 97, 0.3)"
                opacity={0.35}
                zIndex={0}
                display={{ base: "none", lg: "block" }}
            />

            <ContainerLanding>
                <Box as="section" position="relative" textAlign="left" maxW="500px" >

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