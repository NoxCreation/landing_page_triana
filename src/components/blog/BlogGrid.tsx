import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";
import { posts } from "@/constants/blog/cardBlog"
import CardBlog from "../cards/CardBlog";

export default function BlogGrid() {
    return (
        <Box w="100%" bg="gray.50" py={24} px={4}>
            <Box maxW="1440px" mx="auto">
                <Box maxW="1120px" m="auto">
                    <Box textAlign="center" mb={8}>
                        <Box position="relative" display="inline-block">
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

                            <Image
                                src="/home/Vector.png"
                                w="32px"
                                h="32px"
                                position="absolute"
                                top="3px"
                                right="-50px"
                            />
                        </Box>

                        <Text
                            color="#717171"
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
                    </Box>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                        {posts.map((p) => (
                            <CardBlog
                                key={p.id}
                                image={p.image}
                                title={p.title}
                                excerpt={p.excerpt}
                                author={p.author}
                                date={p.date}
                                href="#"
                            />
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
