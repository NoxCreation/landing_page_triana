'use client'

import { Transition } from "@/components/Transition";
import { Heading, Text, VStack, Grid, GridItem, Button, Image, List, Stack, Link, Icon, Box } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { ContentType } from "@/types/ContentType";
import { ContainerLanding } from "@/components/container";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Need({
    content
}: {
    content: ContentType
}) {
    return (
        <Stack
            position="relative"
            overflow={"hidden"}
            bg="linear-gradient(to right, #EDEDED, #E3E0E0, #E7E5E6, #DFDBDA)"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                w={'100%'}
                bg="linear-gradient(180deg, #ffffff, transparent)"
                h={'60px'}
            />
            <Image
                zIndex={1}
                src="/visual_support.png"
                position="absolute"
                bottom={0}
                left={{ base: "-250px", md: "0", lg: "0" }}
                minW={{ base: "calc(100vw + 400px)", md: "calc(100% - 400px)", lg: "calc(100% - 1000px)" }}
            />

            <ContainerLanding py={{ base: 0, md: 6 }} >
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={{ base: 12, md: 16 }}
                    alignItems="center"

                >
                    {/* Columna izquierda: Imagen */}
                    <GridItem order={{ base: 2, md: 1 }} zIndex={2} h="400px" >
                        <Image
                            src="/home/women.webp"
                            position={'absolute'}
                            alt="Asesora de marketing con teléfono"
                            objectFit="contain"
                            bottom={0}
                            left={0}
                            maxW={"calc(100vh - 100px)"}
                            w="full"
                        />
                    </GridItem>

                    {/* Columna derecha: Contenido informativo */}
                    <GridItem order={{ base: 1, md: 2 }} zIndex={2}>
                        <Transition type="rigth" velocity="slow" index={1}>
                            <VStack align="flex-start" gap={6} color="white">
                                <Heading
                                    as="h2"
                                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                    fontWeight="extrabold"
                                    fontFamily="Bricolage Grotesque"
                                    lineHeight="1.2"
                                    color="primary.500"
                                    textAlign={{ base: 'center', md: "start" }}
                                >
                                    {content.home.strategic_section.title}
                                </Heading>

                                <Text
                                    fontSize={{ base: "md", md: "lg" }}
                                    opacity={0.9} fontFamily="Bricolage Grotesque"
                                    color="#3F3F3F"

                                >
                                    {content.home.strategic_section.description}
                                </Text>

                                <List.Root gap={3} fontSize={{ base: "sm", md: "md" }}>
                                    {content.home.strategic_section.items.map((item, index) => (
                                        <List.Item
                                            display="flex"
                                            alignItems="center"
                                            key={index}
                                            color="#3F3F3F"
                                        >
                                            <List.Indicator
                                                as={FaCheckCircle}
                                                color="terciary.500"
                                                boxSize={5}
                                                mr={2}
                                            />
                                            {item.title}
                                        </List.Item>
                                    ))}
                                </List.Root>

                                <Link href={`https://wa.me/${content.contact.contact.phone}`} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        bg="primary.500"
                                        fontSize={"16px"}
                                        borderTopLeftRadius="3xl"
                                        borderTopRightRadius="3xl"
                                        borderBottomLeftRadius="0"
                                        borderBottomRightRadius="3xl"
                                        p={4}
                                        px={8}
                                        w={{ base: '100%', md: "fit-content" }}
                                        _hover={{ bg: "secondary.500", color: "white", transform: "translateY(-2px)" }}
                                        transition="all 0.2s"
                                    >
                                        <Icon
                                            as={WhatsAppIcon}
                                        />
                                        Solicita una consultoría gratuita
                                    </Button>
                                </Link>
                            </VStack>
                        </Transition>
                    </GridItem>
                </Grid>
            </ContainerLanding>

            <Box
                position="absolute"
                bottom={0}
                left={0}
                w={'100%'}
                bg="linear-gradient(0deg, #fafafa, transparent)"
                h={'60px'}
            />
        </Stack>
    );
}