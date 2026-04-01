"use client"
import { Box, Heading, Text, Image, Icon, Grid } from "@chakra-ui/react";
import { posts } from "@/constants/blog/detail/detailBlog";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Link from "next/link";
import CardBlog from "@/components/cards/CardBlog";
import { Transition } from "@/components/Transition";

export default function BlogDetail() {
    return (
        <Box w="100%" bg="gray.50" pt={24} pb={16} px={4}>
            <Box maxW="1440px" m="auto">
                <Box maxW="1120px" mx="auto">
                    <Transition type="top" velocity="slow">
                        <Link
                            href="/blog"
                        >
                            <Text
                                color="#A0A0A0"
                                fontWeight={600}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                            >
                                ← Volver a Blog
                            </Text>
                        </Link>
                    </Transition>
                    <Box mb={8} mt={16}>
                        <Transition type="top" velocity="slow">
                            <Image
                                src="/blog/blog-detail.webp"
                                alt="Nos expandimos a Instagram"
                                w="100%"
                                objectFit="cover"
                            />
                        </Transition>
                    </Box>
                    <Box mb={8}>
                        <Transition type="top" velocity="slow">
                            <Heading
                                as="h1"
                                fontSize={{ base: "2xl", md: "36px" }}
                                fontWeight="800"
                                fontFamily="Bricolage Grotesque"
                                lineHeight="40px"
                                letterSpacing="0px"
                                color="primary.500"
                                mb={4}
                            >
                                Nos expandimos a Instagram
                            </Heading>
                        </Transition>
                        <Transition type="left" velocity="slow">
                            <Text
                                fontWeight={400}
                                lineHeight="20px"
                                letterSpacing="0px"
                                fontSize="14px"
                                color="#949494"
                            >
                                Olivia Rye <Icon as={CalendarTodayIcon} /> 7 abr 2025
                            </Text>
                        </Transition>
                    </Box>

                    <Box>
                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                Estamos emocionados de anunciar que 3ana Marketing ahora tiene presencia en Instagram. Después de meses de planificación, finalmente podemos compartir nuestro trabajo con una audiencia aún más amplia en esta plataforma visual y dinámica.
                            </Text>
                        </Transition>
                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                Instagram se ha convertido en una herramienta esencial para cualquier negocio que quiera destacar. Desde contenido efímero hasta publicaciones evergreen, las posibilidades son infinitas. Nuestro equipo está listo para ayudarte a crear una estrategia que funcione para tu marca.
                            </Text>
                        </Transition>
                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                ¿Por qué Instagram? Porque es donde está tu audiencia. Millones de personas interactúan diariamente con marcas a través de fotos, videos y stories. No puedes permitirte no estar ahí.
                            </Text>
                        </Transition>

                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur placeat eius, praesentium ipsum totam soluta doloremque doloribus iure quo accusamus quis nam sed perferendis numquam autem sapiente! Magnam, laboriosam eos!
                            </Text>
                        </Transition>

                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel soluta dolore beatae sit, in debitis porro? Esse, cumque, assumenda minima sint modi alias, repellendus ipsa excepturi perferendis ducimus culpa.
                            </Text>
                        </Transition>

                        <Transition type="left" velocity="slow">
                            <Text
                                color="#717171"
                                fontWeight={400}
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                mb={4}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel soluta dolore beatae sit, in debitis porro? Esse, cumque, assumenda minima sint modi alias, repellendus ipsa excepturi perferendis ducimus culpa.
                            </Text>
                        </Transition>

                    </Box>
                    <Transition type="top" velocity="slow">
                        <Text
                            color="#3F3F3F"
                            fontWeight={800}
                            fontSize="36px"
                            fontFamily="Bricolage Grotesque"
                            lineHeight="40px"
                            letterSpacing="0px"
                            mt={16}
                            mb={8}
                        >
                            Artículos relacionados
                        </Text>
                    </Transition>
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap="30px"
                    >
                        {posts.map((p, index) => (
                            <Transition key={p.id} type="bootom" velocity="slow" index={index}>
                                <CardBlog
                                    image={p.image}
                                    title={p.title}
                                    excerpt={p.excerpt}
                                    author={p.author}
                                    date={p.date}
                                    href="#"
                                />
                            </Transition>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
