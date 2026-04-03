"use client"
import { Box, Grid, Image, Heading, Text, Stack } from "@chakra-ui/react";
import { posts } from "@/constants/blog/cardBlog"
import CardBlog from "@/components/cards/CardBlog";
import { Transition } from "@/components/Transition";
import { ContainerLanding } from "@/components/container";
import { PaginationMain } from "@/components/Pagination";
import { SparklesText } from "@/components/Sparkle";

export default function BlogGrid() {
    return (
        <ContainerLanding bg="gray.50">
            <Stack w="100%" py={12} gap={6}>

                <Stack textAlign="center" mb={8}>
                    <Transition type="top" velocity="slow">
                        <Box position="relative" display="inline-block">
                            <SparklesText sparklesCount={5}>
                                <Heading
                                    as="h1"
                                    color="primary.500"
                                    fontFamily="Bricolage Grotesque"
                                    fontWeight="extrabold"
                                    fontSize="54px"
                                    lineHeight="70px"
                                >
                                    Blog 3ana
                                </Heading>
                            </SparklesText>

                            <Image
                                src="/home/Vector.ico"
                                w="32px"
                                h="32px"
                                position="absolute"
                                top="3px"
                                right="-50px"
                            />
                        </Box>
                    </Transition>

                    <Transition type="left" velocity="slow">
                        <Text
                            color={'gray.400'}
                            fontWeight={400}
                            fontSize="18px"
                            fontFamily="inter"
                            lineHeight="22px"
                            letterSpacing="0px"
                        >
                            Mantente al día con las últimas tendencias, consejos y novedades del mundo del
                            marketing en redes sociales. En nuestro blog encontrarás estrategias, ideas
                            creativas y actualizaciones de plataforma para ayudar a tu marca a crecer y
                            conectar mejor con su audiencia. Un espacio pensado para inspirate y mantener
                            tu estrategia digital siempre un paso adelante
                        </Text>
                    </Transition>
                </Stack>

                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {posts.map((p, index) => (
                        <Transition key={p.id} type="bootom" velocity="slow" index={index}>
                            <CardBlog
                                image={p.image}
                                title={p.title}
                                excerpt={p.excerpt}
                                author={p.author}
                                date={p.date}
                                href="/blog/detail"
                            />
                        </Transition>
                    ))}
                </Grid>

                <PaginationMain
                    count={10}
                    page={0}
                    pageSize={5}
                />

            </Stack>
        </ContainerLanding>
    );
}
