"use client"

import { Box, Heading, Text, Image, Icon, Stack, Flex } from "@chakra-ui/react";
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
            <Flex gap={8} py={14} flexDir={{base: 'column', md: 'row'}}>
                <Stack /* mt={{ base: 6, md: 12 }} */ gap={6} flex={1}>

                    <Box /* h={{ base: "initial", md: '400px' }} */ overflow={'hidden'}>
                        <Image
                            src={article.thumbnail}
                            alt="Nos expandimos a Instagram"
                            w="100%"
                            objectFit="cover"
                            borderRadius={'12px'}
                        />
                    </Box>

                    <Box>
                        <Heading
                            as="h1"
                            fontSize={{ base: "2xl", md: "26px" }}
                            fontWeight="800"
                            fontFamily="Bricolage Grotesque"
                            lineHeight="34px"
                            letterSpacing="0px"
                            color="primary.500"
                            mb={4}
                        >
                            {article.title}
                        </Heading>

                        <Text
                            fontWeight={400}
                            fontSize="14px"
                            color={'gray.400'}
                            justifyItems={'center'}
                        >
                            <Icon as={CalendarTodayIcon} /> {article.createdAt.toLocaleString()}
                        </Text>
                    </Box>

                </Stack>

                {/* <Transition type="left" velocity="slow"> */}
                <Stack
                    flex={2}
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
                {/* </Transition> */}
            </Flex>

        </ContainerLanding>
    );
}
