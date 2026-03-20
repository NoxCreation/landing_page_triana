import { Box, Grid, Image, Heading, Text, Link, Icon, HStack } from "@chakra-ui/react";
import { posts } from "@/constants/blog/cardBlog"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function BlogGrid() {
    return (
        <Box w="100%" bg="gray.50" py={12} px={4}>
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
                            <Box
                                key={p.id}
                                bg="white"
                                border="2px solid"
                                borderColor="#E5E7EB"
                                overflow="hidden"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                            >
                                <Image src={p.image} alt={p.title} objectFit="cover" w="100%" h="180px" />
                                <Box p={4}>
                                    <HStack
                                        gap={2}
                                        fontSize="14px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                        color="#949494"
                                    >
                                        <Text>{p.author}</Text>

                                        <Icon as={CalendarTodayIcon} fontSize="xs" />

                                        <Text>{p.date}</Text>
                                    </HStack>
                                    <Heading
                                        as="h3"
                                        fontSize="24px"
                                        fontWeight={800}
                                        fontFamily="inter"
                                        lineHeight="32px"
                                        letterSpacing="0px"
                                        mt={1}
                                        mb={2}
                                        color="#3F3F3F"
                                    >
                                        {p.title}
                                    </Heading>
                                    <Text
                                        color="#717171"
                                        fontSize="18px"
                                        fontWeight={400}
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        mb={3}
                                    >
                                        {p.excerpt}
                                    </Text>
                                    <Link
                                        href="#"
                                        fontSize="16px"
                                        fontWeight={400}
                                        lineHeight="20px"
                                        letterSpacing="0px"
                                        color="#949494"
                                        mt={4}
                                    >
                                        Leer más
                                        <Icon as={ArrowForwardIcon} />
                                    </Link>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
