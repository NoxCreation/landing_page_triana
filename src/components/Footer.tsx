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
import { ContentType } from "@/types/ContentType";
import { FaTiktok } from "react-icons/fa";

export default function Footer({
    content
}: {
    content: ContentType
}) {
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
                                {(content.contact.social.linkedln && content.contact.social.linkedln != "") && (
                                    <Link href={content.contact.social.linkedln} target="_blank">
                                        <Box
                                            rounded="full"
                                            bg="rgba(255, 255, 255, 0.1)"
                                            p="1"
                                            _hover={{
                                                bg: "rgba(255, 255, 255, 0.2)"
                                            }}
                                        >
                                            <LinkedInIcon />
                                        </Box>
                                    </Link>
                                )}
                                {(content.contact.social.tiktok && content.contact.social.tiktok != "") && (
                                    <Link href={content.contact.social.tiktok} target="_blank">
                                        <Box
                                            rounded="full"
                                            bg="rgba(255, 255, 255, 0.1)"
                                            p="2"
                                            _hover={{
                                                bg: "rgba(255, 255, 255, 0.2)"
                                            }}
                                        >
                                            <FaTiktok size={'16px'} />
                                        </Box>
                                    </Link>
                                )}
                                {(content.contact.social.facebook && content.contact.social.facebook != "") && (
                                    <Link href={content.contact.social.facebook} target="_blank">
                                        <Box
                                            rounded="full"
                                            bg="rgba(255, 255, 255, 0.1)"
                                            p="1"
                                            _hover={{
                                                bg: "rgba(255, 255, 255, 0.2)"
                                            }}
                                        >
                                            <FacebookIcon />
                                        </Box>
                                    </Link>
                                )}
                                {(content.contact.social.youtube && content.contact.social.youtube != "") && (
                                    <Link href={content.contact.social.youtube} target="_blank">
                                        <Box
                                            rounded="full"
                                            bg="rgba(255, 255, 255, 0.1)"
                                            p="1"
                                            _hover={{
                                                bg: "rgba(255, 255, 255, 0.2)"
                                            }}
                                        >
                                            <YouTubeIcon />
                                        </Box>
                                    </Link>
                                )}
                                {(content.contact.social.instagram && content.contact.social.instagram != "") && (
                                    <Link href={content.contact.social.instagram} target="_blank">
                                        <Box
                                            rounded="full"
                                            bg="rgba(255, 255, 255, 0.1)"
                                            p="1"
                                            _hover={{
                                                bg: "rgba(255, 255, 255, 0.2)"
                                            }}
                                        >
                                            <InstagramIcon />
                                        </Box>
                                    </Link>
                                )}
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
                                {content.services.services.slice(0, 4).map((service, index) => (
                                    <Link
                                        key={index}
                                        href={`/payment/details/${service.slug}`}
                                    >
                                        <Text
                                            fontSize="14px"
                                            fontWeight={400}
                                            lineHeight="20px"
                                            letterSpacing="0px"
                                        >
                                            {service.title}
                                        </Text>
                                    </Link>
                                ))}
                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    color={'pink.300'}
                                >
                                    +{content.services.services.length - 4} servicios
                                </Text>

                                {/* <Link
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
                                </Link> */}
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
                                href={`tel:${content.contact.contact.phone}`}
                                target="_blank"
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
                                        {content.contact.contact.phone}
                                    </Text>
                                </Flex>
                            </Link>

                            <Link
                                href={`mailto:${content.contact.contact.email}`}
                                target="_blank"
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
                                        {content.contact.contact.email}
                                    </Text>
                                </Flex>
                            </Link>

                            <Flex gap={2}>
                                <LocationOnIcon />
                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    fontFamily="inter"
                                >
                                    {content.contact.contact.address}
                                </Text>
                            </Flex>

                            <Flex gap={2}>
                                <WatchLaterIcon />
                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    fontFamily="inter"
                                >
                                    {content.contact.contact.hours}
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
                            © 2026 3ana Marketing & Consulting. Diseñado y creado por <a style={{ color: "#d781fc" }} href="https://noxcreation.dev/" target="_blank">NOX Creation</a>
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
