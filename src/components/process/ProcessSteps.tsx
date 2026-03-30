"use client"
import { Box, Grid, Heading, Text, Flex, Separator, Icon } from "@chakra-ui/react";
import { steps } from "@/constants/process/Steps";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { Transition } from "../Transition";

export default function ProcessSteps() {
    return (
        <Box w="100%" bg="#F3A0FF0D" py={16} px={4}>
            <Box maxW="1440px" mx="auto" textAlign="center">
                <Flex m={"auto"} maxW="1100px" textAlign="center" mb={12} direction="column" px={4}>
                    <Transition type="top" velocity="slow">
                        <Heading
                            textAlign="center"
                            fontFamily="Bricolage Grotesque"
                            fontWeight="800"
                            fontSize={{ base: "28px", md: "36px", lg: "40px" }}
                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                            letterSpacing="0%"
                            color="#3F3F3F">
                            Fases de Nuestro Trabajo
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
                            Nos hacemos cargo desde que se abre el proyecto hasta que hacemos entrega
                            de las llaves del local, además te ayudamos a crecer tu negocio desde lo
                            digital
                        </Text>
                    </Transition>
                </Flex>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    maxW="1120px"
                    m="auto"
                >
                    {steps.map((s, index) => (
                        <Transition key={s.id} type="bootom" velocity="slow" index={index}>
                            <Box
                                bg="white"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                border="2px solid"
                                borderColor="gray.100"
                                overflow="hidden"
                                display="flex"
                                flexDirection="column"
                            >
                                <Box p={6} display="flex" flexDirection="column" flex={1} textAlign={'start'}>
                                    <Heading
                                        p={"2"}
                                        as="h3"
                                        color="#3F3F3F"
                                        fontSize="20px"
                                        fontFamily="inter"
                                        lineHeight="32px"
                                        letterSpacing="0px"
                                        fontWeight="800"
                                        mb={2}
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
                                                        as={TaskAltIcon}
                                                        color="terciary.500"
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
                                                        as={TripOriginIcon}
                                                        color="terciary.500"
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
                                            {s.we}
                                        </Text>

                                        <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                            {s.data.map((data, i) => (
                                                <Flex key={i} align="center" mb={2}>
                                                    <Icon
                                                        w={"10"}
                                                        as={TripOriginIcon}
                                                        color="terciary.500"
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
                                                        {data}
                                                    </Text>
                                                </Flex>
                                            ))}
                                        </Box>
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
