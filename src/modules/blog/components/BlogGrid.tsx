"use client"

import { Box, Grid, Image, Heading, Text, Stack } from "@chakra-ui/react";
import { Transition } from "@/components/Transition";
import { ContainerLanding } from "@/components/container";
import { PaginationMain } from "@/components/Pagination";
import { SparklesText } from "@/components/Sparkle";
import { ArticleType, PaginatedArticles } from "@/types/ArticleType";
import CardBlog from "@/components/cards/CardBlog";
import { useRouter } from "next/navigation";
import { BProgress } from "@bprogress/core";
import { useEffect } from "react";

export default function BlogGrid({
    content,
    pagination
}: {
    content: Array<ArticleType>
    pagination: PaginatedArticles
}) {
    const router = useRouter();

    const handlePageChange = async (page: number) => {
        const newPage = page + 1;
        BProgress.start();
        router.push(`/blog?page=${newPage}`);
        router.refresh();

    };

    useEffect(() => { BProgress.done(); }, [content])

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
                            fontFamily="Bricolage Grotesque"
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
                    {content.map((article, index) => (
                        <Transition key={index} type="bootom" velocity="slow" index={index}>
                            <CardBlog
                                image={article.thumbnail}
                                title={article.title}
                                excerpt={article.mini_description}
                                author={""}
                                date={article.createdAt.toLocaleString().split(",")[0]}
                                href={`/blog/detail/${article.slug}`}
                            />
                        </Transition>
                    ))}

                </Grid>

                <PaginationMain
                    count={pagination.total}
                    page={pagination.page - 1}
                    pageSize={pagination.limit}
                    onPageSelect={handlePageChange}
                />

            </Stack>
        </ContainerLanding>
    );
}
