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
            pt={{ base: 6, lg: 0 }}
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

            <Flex gap={12} align="center" flexDirection={{ base: "column", lg: "row" }} >
                <Transition type="left" velocity="slow">
                    <Stack flex="1" alignItems="start" gap={6}>
                        <Heading
                            as="h1"
                            fontFamily="Bricolage Grotesque"
                            color="primary.500"
                            fontSize={{ base: "28px", md: "40px", lg: "5xl" }}
                            fontWeight={800}
                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                            letterSpacing="0px"
                            textAlign={'center'}
                        >
                            Cómo trabajamos juntos
                        </Heading>

                        <List.Root gap={6} zIndex={2}>
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
                    id="ddd"
                    flex={1}
                    w={'100%'}
                    zIndex={2}
                    alignItems={'end'}
                >
                    <Transition type="rigth" velocity="slow">
                        <Image
                            src="/home/proces.png"
                            alt="Foto derecha"
                        />
                    </Transition>
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
            py={3}
            borderRadius="48px"
            gap="16px"
            display="flex"
            alignItems="flex-start"
            _hover={{
                bg: '#b223cf13'
            }}
            px={4}
            cursor={'pointer'}
        >
            <Box
                w={{ base: "50px", lg: "80px" }}
                h={{ base: "50px", lg: "80px" }}
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
            <Box maxW="420px" w="100%" gap="8px">
                <Text
                    as="h3"
                    fontWeight={800}
                    fontFamily="inter"
                    color="#3F3F3F"
                    mb={1}
                    fontSize={{ base: "18px", lg: "26px" }}
                    lineHeight={{ base: "24px", lg: "32px" }}
                    letterSpacing="0px"
                >
                    {title}
                </Text>
                <Text
                    color="#717171"
                    fontSize="14px"
                    fontWeight={400}
                    fontFamily="inter"
                >
                    {description}
                </Text>
            </Box>
        </ListItem>
    )
}
