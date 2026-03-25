"use client"
import { Box, Grid, Heading, Text, Flex, Separator, Icon } from "@chakra-ui/react";
import { cases } from "@/constants/process/Cases";
import { Transition } from "../Transition";

export default function Cases() {
    return (
        <Box w="100%" bg="#F3A0FF0D" py={16} px={4}>
            <Box maxW="1440px" mx="auto" textAlign="center">
                <Flex m={"auto"} maxW="1100px" gap="8px" textAlign="center" mb={12} direction="column" px={4}>
                    <Transition type="top" velocity="slow">
                        <Heading
                            textAlign="center"
                            fontWeight="800"
                            fontSize={{ base: "28px", md: "40px", lg: "64px" }}
                            fontFamily="Bricolage Grotesque"
                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                            letterSpacing="0%"
                            color="#3F3F3F">
                            Algunos Casos de Éxito
                        </Heading>
                    </Transition>

                    <Transition type="top" velocity="slow">
                        <Text
                            textAlign="center"
                            fontFamily="Inter"
                            fontWeight="400"
                            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                            lineHeight="22px"
                            letterSpacing="0px"
                            color="#717171">
                            Demostramos que es posible crecer y obtener resultados favorables
                            a través de nuestros servicios
                        </Text>
                    </Transition>
                </Flex>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
                    maxW="1120px"
                    m="auto"
                >
                    {cases.map((s, index) => (
                        <Transition key={s.id} type="bootom" velocity="slow" index={index}>
                            <Box
                                bg="white"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                border="2px solid"
                                borderColor="#E5E7EB"
                                overflow="hidden"
                                p={6}
                                textAlign="left"
                            >
                                <Heading
                                    as="h3"
                                    fontFamily="inter"
                                    fontSize="24px"
                                    fontWeight="800"
                                    lineHeight="32px"
                                    letterSpacing="0px"
                                    mb={3}
                                    color="#3F3F3F"
                                >
                                    {s.title}
                                </Heading>

                                <Separator mx="-10" borderColor={"gray.300"} />

                                <Box
                                    p={0}
                                    my={4}
                                >
                                    <Text
                                        fontFamily="inter"
                                        fontWeight={600}
                                        color="#3F3F3F"
                                        fontSize="18px"
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        pt={5}
                                        pb={3}
                                    >
                                        {s.that}
                                    </Text>

                                    <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                        {s.items.map((items, i) => (
                                            <Flex key={i} align="center" mb={2}>
                                                <Icon
                                                    w={"10"}
                                                    as={s.iconNo}
                                                    color={s.colorNo}
                                                    flexShrink={0}
                                                />
                                                <Text
                                                    fontSize="14px"
                                                    fontFamily="inter"
                                                    fontWeight={400}
                                                    color="#717171"
                                                    lineHeight="20px"
                                                    letterSpacing="0px"
                                                >
                                                    {items}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </Box>

                                    <Text
                                        fontFamily="inter"
                                        fontWeight={600}
                                        color="#3F3F3F"
                                        fontSize="18px"
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        pt={5}
                                        pb={3}
                                    >
                                        {s.important}
                                    </Text>

                                    <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                        {s.itemsI.map((itemsI, i) => (
                                            <Flex key={i} align="center" mb={2}>
                                                <Icon
                                                    w={"10"}
                                                    as={s.iconOk}
                                                    color={s.colorOk}
                                                    flexShrink={0}
                                                />
                                                <Text
                                                    fontSize="14px"
                                                    fontFamily="inter"
                                                    fontWeight={400}
                                                    color="#717171"
                                                    lineHeight="20px"
                                                    letterSpacing="0px"
                                                >
                                                    {itemsI}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Transition>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
