"use client"

import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Link from "next/link";

export default function Footer() {
    return (
        <Box
            as="footer"
            overflow="hidden"
            bg="primary.500"
            color="white"
            pt={12}
            pb={4}
            px={4}
            position="relative"
        >
            {/* Círculo grande */}
            <Box
                position="absolute"
                bottom="-430px"
                left="-200px"
                w="1200px"
                h="1200px"
                background="linear-gradient(to right, #611161, #E63CFF)"
                borderRadius="50%"
                opacity={0.4}
                zIndex={0}
                filter="brightness(0.6)"
                display={{ base: "none", md: "block" }}
            />

            {/* Círculo pequeño */}
            <Box
                position="absolute"
                bottom="-400px"
                left="20px"
                w="700px"
                h="700px"
                background="linear-gradient(to right, #7B1FA2, #F062FF)"
                borderRadius="50%"
                opacity={0.5}
                zIndex={0}
                filter="brightness(0.7)"
                display={{ base: "none", md: "block" }}
            />
            <Box
                maxW="100vw"
                position="relative"
                zIndex={1}
                px={{ base: "24px", lg: "160px" }}
            >
                <Box maxW="100vw" >
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap={8}
                        mb={3}
                    >
                        <Box maxW="400px">
                            <Image src="/home/LOGO_FOOTER.webp" />
                            <Text
                                fontSize="16px"
                                fontWeight={400}
                                lineHeight="22px"
                                letterSpacing="0px"
                                mt="5"
                            >
                                No solo creamos la estrategia, te ayudamos a ponerla en movimiento.
                            </Text>
                            <Flex mt={5} gap={2}>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    p="1"
                                >
                                    <LinkedInIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    p="1"
                                >
                                    <FacebookIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    p="1"
                                >
                                    <YouTubeIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    p="1"
                                >
                                    <InstagramIcon />
                                </Box>
                            </Flex>
                        </Box>

                        <Box textAlign={{ base: "left", md: "left" }}>
                            <Heading
                                color="#FFFFFF"
                                fontSize="18px"
                                fontFamily="inter"
                                lineHeight="22px"
                                letterSpacing="0px"
                                fontWeight="600"
                                mb={4}
                            >
                                Servicios
                            </Heading>
                            <Flex direction="column" alignItems={{ base: "left", md: "flex-start" }} gap={2} mx={{ base: "auto", md: "0" }}>
                                <Link
                                    href="#"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Acompañamiento mensual
                                    </Text>
                                </Link>
                                <Link
                                    href="#"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Asesoría para restaurantes
                                    </Text>
                                </Link>
                                <Link
                                    href="#"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Blog y recursos
                                    </Text>
                                </Link>
                                <Link
                                    href="#"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Tiktok Shop
                                    </Text>
                                </Link>
                            </Flex>
                        </Box>

                        <Box textAlign={{ base: "left", md: "left" }}>
                            <Heading
                                color="#FFFFFF"
                                fontSize="18px"
                                fontFamily="inter"
                                lineHeight="22px"
                                letterSpacing="0px"
                                fontWeight="600"
                                mb={4}
                            >
                                Enlaces rápidos
                            </Heading>
                            <Flex direction="column" alignItems={{ base: "left", md: "flex-start" }} gap={2} mx={{ base: "auto", md: "0" }}>
                                <Link
                                    href="/process"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Proceso de trabajo
                                    </Text>
                                </Link>
                                <Link
                                    href="/my"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Sobre mí
                                    </Text>
                                </Link>
                                <Link
                                    href="/service"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Consultoría Express
                                    </Text>
                                </Link>
                                <Link
                                    href="/testimonies"
                                >
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                    >
                                        Testimonios
                                    </Text>
                                </Link>
                            </Flex>
                        </Box>
                    </Grid>

                    <Box>
                        <Heading
                            as="h3"
                            fontSize="24px"
                            fontWeight="800"
                            lineHeight="32px"
                            letterSpacing="0px"
                            mb={4}
                        >
                            Contacto
                        </Heading>
                        <Flex flexWrap="wrap" gap={4} pb={"6"}>
                            <Link
                                href="#"
                            >
                                <Flex gap={2}>
                                    <PhoneInTalkIcon />
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                        fontFamily="inter"
                                    >
                                        {process.env.NEXT_PUBLIC_PHONE_CONTACT}
                                    </Text>
                                </Flex>
                            </Link>

                            <Link
                                href="#"
                            >
                                <Flex gap={2}>
                                    <EmailIcon />
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                        fontFamily="inter"
                                    >
                                        trianamarketing@mail.com
                                    </Text>
                                </Flex>
                            </Link>

                            <Link
                                href="#"
                            >
                                <Flex gap={2}>
                                    <LocationOnIcon />
                                    <Text
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                        fontFamily="inter"
                                    >
                                        Houston, Tx
                                    </Text>
                                </Flex>
                            </Link>

                            <Flex gap={2}>
                                <WatchLaterIcon />
                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    fontFamily="inter"
                                >
                                    Lunes a Viernes: 10:30 am - 5:00pm
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box borderTop="1px solid" borderColor="terciary.500" pt={6} />

                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="space-between"
                        align="center"
                        gap={4}
                    >
                        <Text
                            fontSize="12px"
                            fontWeight={400}
                            lineHeight="20px"
                            letterSpacing="0px"
                            color="pink.200"
                            w={"100%"}
                            textAlign={"center"}
                        >
                            © 2026 Triana Marketing & Consulting. Diseñado y creado por <a style={{ color: "#d781fc" }} href="https://noxcreation.dev/" target="_blank">NOX Creation</a>
                        </Text>
                        {/* <Flex gap={4}>
                            <Link
                                href="#"
                                fontSize="14px"
                                fontWeight={400}
                                lineHeight="20px"
                                letterSpacing="0px"
                                color="#FFFFFF"
                            >
                                Política de Privacidad
                            </Link>
                            <Link
                                href="#"
                                fontSize="14px"
                                fontWeight={400}
                                lineHeight="20px"
                                letterSpacing="0px"
                                color="#FFFFFF"
                            >
                                Términos y Condiciones
                            </Link>
                        </Flex> */}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
