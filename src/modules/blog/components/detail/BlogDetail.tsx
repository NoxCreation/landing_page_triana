"use client"

import { Box, Heading, Text, Image, Icon, Stack } from "@chakra-ui/react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Transition } from "@/components/Transition";
import { ArticleType } from "@/types/ArticleType";
import HtmlRenderer from "@/components/htmlRenderer";
import { ContainerLanding } from "@/components/container";

export default function BlogDetail({
    article
}: {
    article: ArticleType
}) {
    return (
        <ContainerLanding zIndex={2}>
            <Stack mt={12} gap={6}>

                {/* <Transition type="top" velocity="slow">
                    <Link
                        href="/blog"
                    >
                        <Text
                            color={'gray.600'}
                            fontWeight={600}
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="0px"
                        >
                            ← Volver a Blog
                        </Text>
                    </Link>
                </Transition> */}

                <Box h={'400px'} overflow={'hidden'}>
                    <Transition type="top" velocity="slow">
                        <Image
                            src={article.thumbnail}
                            alt="Nos expandimos a Instagram"
                            w="100%"
                            objectFit="cover"
                        />
                    </Transition>
                </Box>

                <Box>
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
                            {article.title}
                        </Heading>
                    </Transition>
                    <Transition type="left" velocity="slow">
                        <Text
                            fontWeight={400}
                            fontSize="14px"
                            color={'gray.400'}
                            justifyItems={'center'}
                        >
                            <Icon as={CalendarTodayIcon} /> {article.createdAt.toLocaleString()}
                        </Text>
                    </Transition>
                </Box>

                <Transition type="left" velocity="slow">
                    <Stack
                        color={'gray.600'}
                        fontWeight={400}
                        fontSize="18px"
                        lineHeight="22px"
                        letterSpacing="0px"
                        mb={4}
                    >
                        <HtmlRenderer>
                            {article.description}
                        </HtmlRenderer>
                    </Stack>
                </Transition>

            </Stack>
        </ContainerLanding>
    );
}
