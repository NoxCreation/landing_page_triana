'use client'

import { Box, Flex, List, ListItem, Text, Heading, Image, Icon, Stack } from "@chakra-ui/react";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import * as FeatherIcons from "react-icons/fi";
import { ContainerLanding } from "@/components/container";

export default function HowWeWork({
    content
}: {
    content: ContentType
}) {
    return (
        <ContainerLanding
            bg={"linear-gradient(to right, #EDEDED, #E3E0E0, #E7E5E6, #DFDBDA)"}
            pt={{ base: 14, lg: 0 }}
            pb={{ base: "0", lg: 0 }}
            overflow="hidden"
            position={'relative'}
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                w={'100%'}
                bg="linear-gradient(180deg, #fafafa, transparent)"
                h={'60px'}
            />

            <Image
                zIndex={1}
                src="/visual_support.png"
                position="absolute"
                bottom={0}
                left={{ base: "-250px", md: "0", lg: "0" }}
                minW={{ base: "calc(100vw + 400px)", md: "calc(100% - 400px)", lg: "calc(100vw / 2 )" }}
            />

            <Flex gap={2} align="center" flexDirection={{ base: "column", sm: 'column', lg: "row" }} h={'fit-content'}>
                <Transition type="left" velocity="slow">
                    <Stack flex="1" alignItems="start" gap={6}>
                        <Heading
                            as="h1"
                            fontFamily="Bricolage Grotesque"
                            color="primary.500"
                            fontSize={{ base: "24px", md: "40px", lg: "5xl" }}
                            fontWeight={800}
                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                            letterSpacing="0px"
                            textAlign={'center'}
                            w={'100%'}
                        >
                            Cómo trabajamos juntos
                        </Heading>

                        <List.Root gap={4} zIndex={2}>
                            {content.home.how_we_work.map((it, index) => (
                                <Point
                                    key={index}
                                    icon={it.icon}
                                    title={it.title}
                                    description={it.description}
                                />
                            ))}
                        </List.Root>
                    </Stack>
                </Transition>

                <Stack
                    flex={1}
                    w={'100%'}
                    zIndex={2}
                >
                    <Box h={'400px'}></Box>
                    <Image
                        src="/home/trianamobile.png"
                        alt="Triana mirando un mobil sonriendo"
                        maxH={{ base: "400px", sm: '400px', md: "400px", lg: "700px", "2xl": "800px" }}
                        position={'absolute'}
                        bottom={0}
                        right={{ base: 'calc((100vw / 2) - 40%)', sm: "calc((100vw / 2) - 34%)", md: 'calc((100vw / 2) - 20%)', lg: '14%' }}
                    />
                </Stack>

            </Flex>

            <Box
                position="absolute"
                bottom={0}
                left={0}
                w={'100%'}
                bg="linear-gradient(0deg, #F3A0FF0D, transparent)"
                h={'60px'}
            />
        </ContainerLanding>
    );
}

const Point = ({
    icon,
    title,
    description
}: {
    icon: string;
    title: string;
    description: string;
}) => {
    const IconComponent = icon && FeatherIcons[icon as keyof typeof FeatherIcons];
    return (
        <ListItem direction="row"
            w="100%"
            borderRadius="48px"
            gap="16px"
            display="flex"
            alignItems="center"
            _hover={{
                bg: '#b223cf13'
            }}
            px={4}
            cursor={'pointer'}
        >
            <Box
                w={{ base: "60px", lg: "70px" }}
                h={{ base: "60px", lg: "70px" }}
                p="3px"
                borderRadius="full"
                background="linear-gradient(to bottom, #E63CFF, #611161)"
                flexShrink={0}
            >
                {IconComponent && (
                    <Flex
                        w="100%"
                        h="100%"
                        bg="#FFFFFF"
                        borderRadius="full"
                        alignItems="center"
                        justifyContent="center"
                        color="primary.500"
                        boxShadow="0px 10px 20px rgba(178,35,207,0.24)"
                    >
                        <Icon
                            as={IconComponent}
                            boxSize={6}
                            color="terciary.500"
                        />
                    </Flex>
                )}
            </Box>
            <Stack maxW={{ base: "inherit", md: "420px" }} w="100%" gap="10px">
                <Text
                    as="h3"
                    fontWeight={800}
                    fontFamily="Bricolage Grotesque"
                    color="#3F3F3F"
                    fontSize={{ base: "18px", lg: "26px" }}
                    lineHeight={{ base: "4px", lg: "32px" }}
                    letterSpacing="0px"
                >
                    {title}
                </Text>
                <Text
                    color="#717171"
                    fontSize="14px"
                    fontWeight={4}
                    lineHeight={{ base: "14px", lg: "22px" }}
                    fontFamily="Bricolage Grotesque"
                >
                    {description}
                </Text>
            </Stack>
        </ListItem>
    )
}
