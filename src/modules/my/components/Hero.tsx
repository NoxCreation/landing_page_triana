"use client"

import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { ElementType } from "react";
import { FaTiktok } from "react-icons/fa";
import { DotPattern } from "@/components/DotPattern";
import { SparklesText } from "@/components/Sparkle";
import { Transition } from "@/components/Transition";

export default function Hero() {
    return (
        <Box as="section" position="relative" bg="#F3A0FF0D" >
            <Stack
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
            </Stack>

            <Flex
                direction={{ base: "column", lg: "row" }}
                gap={12}
                px={{ base: "24px", lg: "160px" }}
                py={{ base: 24, md: 16, lg: "80px" }}
                alignItems={"center"}
                alignContent={'center'}
                minH={"100vh"}
            >
                <Box flex={1} textAlign={{ base: "center", lg: "left" }}>
                    <Stack
                        w="100%"
                        gap={6}
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
                                CEO & Estrategia de Marketing
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
                                        Leyanis Triana Cevila
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
                                Con más de 3 años de experiencia transformando marcas y construyendo
                                estrategias digitales innovadoras, María lidera nuestra agencia con una
                                visión clara: conectar empresas con sus audiencias de manera autentica
                                y memorable
                            </Text>
                        </Transition>
                    </Stack>
                    <Transition type="bootom" velocity="slow">
                        <Flex flexDir={{ base: 'column', md: 'row' }} gap={4}>
                            <ButtonSocial
                                icon={LinkedInIcon}
                                label="LinkedIn"
                            />
                            <ButtonSocial
                                icon={FaTiktok}
                                label="TikTok"
                            />
                            <ButtonSocial
                                icon={EmailIcon}
                                label="Contacto"
                            />
                        </Flex>
                    </Transition>
                </Box>
                <Transition type="rigth" velocity="slow">
                    <Box
                        flex={1}
                        w={{ base: "300px", lg: "540px" }}
                        h={{ base: "350px", md: "380px" }}
                        borderRadius="140px"
                        background="radial-gradient(circle at center, #FFFFFF 0%, #F9D0FF 100%)"
                        position="relative"
                        mx={{ base: "auto", lg: "0" }}
                    >
                        <Image
                            src="/my/heroMy.webp"
                            alt="Foto derecha"

                            h="105%"
                            objectFit="cover"
                            objectPosition={{ base: "center top", md: "center top", lg: "center" }}
                            /* borderRadius="99px" */
                            position="absolute"
                            bottom="0"
                            left="0"
                            zIndex="1"
                        />
                        {/* <Image
                            src="/home/VectorCh.png"
                            position="absolute"
                            top="56"
                            right="-1"
                            zIndex="2"
                            display={{ base: "none", md: "block" }}
                        /> */}
                    </Box>
                </Transition>
            </Flex>
        </Box>
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