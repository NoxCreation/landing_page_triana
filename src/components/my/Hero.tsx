"use client"
import { Box, Flex, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Transition } from "../Transition";

export default function Hero() {
    return (
        <Box as="section" position="relative" overflow="hidden" bg="#F3A0FF0D" >
            <Flex
                m={"auto"}
                maxWidth={"1440px"}
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 10, lg: 0 }} 
                px={{ base: 6, md: 10, lg: "160px" }}
                py={{ base: 24, md: 16, lg: "80px" }}
                align={"center"}
            >
                <Box flex={1} textAlign={{ base: "center", lg: "left" }} pr={3}>
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
                    <Flex
                        direction="column"
                        maxW="551px"
                        w="100%"
                        gap="30px"
                    >
                        <Transition type="top" velocity="slow">
                            <Box position="relative" maxW="541px" display="inline-block">
                                <Heading
                                    as="h1"
                                    maxW="501px"
                                    color="primary.500"
                                    fontWeight="800"
                                    fontSize={{ base: "28px", md: "40px", lg: "54px" }}
                                    fontFamily="Bricolage Grotesque"
                                    lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                                >
                                    Triana Apellido
                                </Heading>

                                <Image
                                    src="/home/Vector.png"
                                    w={{ base: "24px", lg: "32px" }}
                                    h={{ base: "24px", lg: "32px" }}
                                    position="absolute"
                                    top={{ base: "-5px", lg: "3px" }}
                                    right={{ base: "30px", lg: "-40px" }}
                                />
                            </Box>
                        </Transition>
                        <Transition type="left" velocity="slow">
                            <Text
                                maxW="551px"
                                w="100%"
                                fontFamily="inter"
                                fontWeight="400"
                                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
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
                    </Flex>
                    <Transition type="bootom" velocity="slow">
                        <HStack
                            gap={4}
                            justify="center"
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                            maxW="517px"
                            mx="auto"
                            pt="14"
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                w="fit-content"
                                h={{ base: "auto", lg: "54px" }}
                                bg="#F9D0FF"
                                borderRadius="30px"
                                py={{ base: 3, lg: "16px" }}
                                px="24px"
                                gap="8px"
                                color="terciary.500"
                            >
                                <Icon as={LinkedInIcon} />
                                <Text
                                    as="span"
                                    fontFamily="Inter"
                                    fontWeight="semibold"
                                    fontSize={{ base: "14px", lg: "18px" }}
                                    lineHeight="22px"
                                    letterSpacing="0"
                                    textAlign="center"
                                >Linkedln</Text>
                            </Box>
                            <Box
                                display="flex"
                                bg="#F9D0FF"
                                alignItems="center"
                                w="fit-content"
                                h={{ base: "auto", lg: "54px" }}
                                borderRadius="30px"
                                py={{ base: 3, lg: "16px" }}
                                px="24px"
                                gap="8px"
                                color="terciary.500"
                            >
                                <Image src="/my/ic_baseline-tiktok.svg" />
                                <Text
                                    as="span"
                                    fontFamily="Inter"
                                    fontWeight="semibold"
                                    fontSize={{ base: "14px", lg: "18px" }}
                                    lineHeight="22px"
                                    letterSpacing="0"
                                    textAlign="center"
                                >TikTok</Text>
                            </Box>
                            <Box
                                display="flex"
                                bg="#F9D0FF"
                                alignItems="center"
                                w="fit-content"
                                h={{ base: "auto", lg: "54px" }}
                                borderRadius="30px"
                                py={{ base: 3, lg: "16px" }}
                                px="24px"
                                gap="8px"
                                color="terciary.500"
                            >
                                <Icon as={EmailIcon} />
                                <Text
                                    as="span"
                                    fontFamily="Inter"
                                    fontWeight="semibold"
                                    fontSize={{ base: "14px", lg: "18px" }}
                                    lineHeight="22px"
                                    letterSpacing="0"
                                    textAlign="center"
                                >Contacto</Text>
                            </Box>
                        </HStack>
                    </Transition>
                </Box>
                <Transition type="rigth" velocity="slow">
                    <Box
                        maxW="479px"
                        w={{ base: "80%", md: "60%", lg: "479px" }}
                        h={{ base: "350px", md: "420px", lg: "500px" }}
                        borderRadius="99px"
                        background="radial-gradient(circle at center, #FFFFFF 0%, #F9D0FF 100%)"
                        position="relative"
                        overflow="hidden"
                        mx={{ base: "auto", lg: "0" }}
                    >
                        <Image
                            src="/my/heroMy.png"
                            alt="Foto derecha"
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            objectPosition={{ base: "center top", md: "center top", lg: "center" }}
                            borderRadius="99px"
                            position="absolute"
                            bottom="0"
                            left="0"
                            zIndex="1"
                        />
                        <Image
                            src="/home/VectorCh.png"
                            position="absolute"
                            top="56"
                            right="-1"
                            zIndex="2"
                            display={{ base: "none", md: "block" }}
                        />
                    </Box>
                </Transition>
            </Flex>
        </Box>
    )
}