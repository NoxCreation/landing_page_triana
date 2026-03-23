"use client"

import { Box, Flex, Grid, Heading, Text, Link, Image } from "@chakra-ui/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export default function Footer() {
    return (
        <Box
            as="footer"
            overflow="hidden"
            bg="primary.500"
            color="white"
            py={12}
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
                maxW="1440px"
                mx="auto"
                position="relative"
                zIndex={1}
            >
                <Box maxW="1000px" mx="auto">
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                        gap={8}
                        mb={3}
                    >
                        <Box maxW="400px">
                            <Image src="/Home/LOGO_FOOTER.png" />
                            <Text
                                fontSize="18px"
                                fontWeight={400}
                                lineHeight="22px"
                                letterSpacing="0px"
                                mt="5"
                            >
                                No solo creamos la estrategia, te ayudamos a ponerla en movimiento.
                            </Text>
                            <Flex mt={5}>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    mx="2"
                                    p="1"
                                >
                                    <LinkedInIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    mx="2"
                                    p="1"
                                >
                                    <FacebookIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    mx="2"
                                    p="1"
                                >
                                    <YouTubeIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    bg="rgba(255, 255, 255, 0.1)"
                                    mx="2"
                                    p="1"
                                >
                                    <InstagramIcon />
                                </Box>
                            </Flex>
                        </Box>

                        <Box textAlign={{ base: "center", md: "left" }}>
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
                            <Flex direction="column" alignItems={{ base: "center", md: "flex-start" }} gap={2} maxW="261.5px" mx={{ base: "auto", md: "0" }}>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Acompañamiento mensual
                                </Link>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Asesoría para restaurantes
                                </Link>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Blog y recursos
                                </Link>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Tiktok Shop
                                </Link>
                            </Flex>
                        </Box>

                        <Box textAlign={{ base: "center", md: "left" }}>
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
                            <Flex direction="column" alignItems={{ base: "center", md: "flex-start" }} gap={2} maxW="261.5px" mx={{ base: "auto", md: "0" }}>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Proceso de trabajo
                                </Link>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Sobre mí
                                </Link>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Consultoría Express
                                </Link>
                                <Link
                                    href="#"
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >
                                    Testimonios
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
                            <Flex>
                                <PhoneInTalkIcon />
                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    fontFamily="inter"
                                >
                                    +1 (xxx) xxx - xxx
                                </Text>
                            </Flex>
                            <Flex>
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
                            <Flex>
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
                            <Flex>
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
                            fontSize="14px"
                            fontWeight={400}
                            lineHeight="20px"
                            letterSpacing="0px"
                            color="#FFFFFF"
                        >
                            © 2024 Nox Creations. All rights reserved
                        </Text>
                        <Flex gap={4}>
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
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
