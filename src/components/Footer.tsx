"use client"

import { Box, Flex, Grid, Heading, Text, Link, Icon } from "@chakra-ui/react";
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
        <Box as="footer" bg="brand.500" color="white" py={12} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box maxW="1000px" mx="auto">
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                        gap={8}
                        mb={3}
                    >
                        <Box w="400px">
                            <Heading as="h3" fontSize="xl" fontWeight="700" mb={4}>
                                3ana Marqueting
                            </Heading>
                            <Text fontSize="sm" lineHeight="1.8">
                                No solo creamos la estrategia, te ayudamos a ponerla en movimiento.
                            </Text>
                            <Flex>
                                <Box
                                    rounded="full"
                                    border="1px solid"
                                    borderColor="gray.400"
                                    mx="2"
                                    p="1"
                                >
                                    <LinkedInIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    border="1px solid"
                                    borderColor="gray.400"
                                    mx="2"
                                    p="1"
                                >
                                    <FacebookIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    border="1px solid"
                                    borderColor="gray.400"
                                    mx="2"
                                    p="1"
                                >
                                    <YouTubeIcon />
                                </Box>
                                <Box
                                    rounded="full"
                                    border="1px solid"
                                    borderColor="gray.400"
                                    mx="2"
                                    p="1"
                                >
                                    <InstagramIcon />
                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Heading as="h4" fontSize="md" fontWeight="600" mb={4}>
                                Servicios
                            </Heading>
                            <Flex direction="column" gap={2}>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Asesoría estratégica
                                </Link>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Gestión de redes
                                </Link>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Creación de contenido
                                </Link>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Tiendas en línea
                                </Link>
                            </Flex>
                        </Box>

                        <Box>
                            <Heading as="h4" fontSize="md" fontWeight="600" mb={4}>
                                Empresa
                            </Heading>
                            <Flex direction="column" gap={2}>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Sobre nosotros
                                </Link>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Blog
                                </Link>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Contacto
                                </Link>
                                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                                    Trabaja con nosotros
                                </Link>
                            </Flex>
                        </Box>
                    </Grid>

                    <Box>
                        <Heading as="h4" fontSize="md" fontWeight="600" mb={4}>
                            Contacto
                        </Heading>
                        <Flex gap={"16"} pb={"6"}>
                            <Flex>
                                <PhoneInTalkIcon />
                                <Text fontSize="sm" color="gray.400">
                                    +1 (xxx) xxx - xxx
                                </Text>
                            </Flex>
                            <Flex>
                                <EmailIcon />
                                <Text fontSize="sm" color="gray.400">
                                    trianamarketing@mail.com
                                </Text>
                            </Flex>
                            <Flex>
                                <LocationOnIcon />
                                <Text fontSize="sm" color="gray.400">
                                    Houston, Tx
                                </Text>
                            </Flex>
                            <Flex>
                                <WatchLaterIcon />
                                <Text fontSize="sm" color="gray.400">
                                    Lunes a Viernes: 10:30 am - 5:00pm
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box borderTop="1px solid" borderColor="gray.700" pt={6} />
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="space-between"
                        align="center"
                        gap={4}
                    >
                        <Text fontSize="sm" color="gray.500">
                            © 2024 3ana Marqueting. Todos los derechos reservados.
                        </Text>
                        <Flex gap={4}>
                            <Link href="#" fontSize="sm" color="gray.500" _hover={{ color: "white" }}>
                                Política de Privacidad
                            </Link>
                            <Link href="#" fontSize="sm" color="gray.500" _hover={{ color: "white" }}>
                                Términos y Condiciones
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
