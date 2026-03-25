"use client"
import { Flex, Grid, RadioGroup, Icon, Text } from "@chakra-ui/react"
import { FaBriefcase, FaUtensils, FaStore, FaCalendarAlt } from "react-icons/fa"
import { Transition } from "../Transition"

export default function CategorySelector() {
    return (
        <RadioGroup.Root defaultValue="all">
            <Transition type="top" velocity="slow">
                {/* Desktop: pill shape */}
                <Flex
                    display={{ base: "none", md: "flex" }}
                    border="2px solid"
                    borderColor="#A0A0A0"
                    borderLeftWidth="0"
                    rounded="full"
                    w="fit-content"
                    bg="white"
                    gap={0}
                    mx="auto"
                    overflow="hidden"
                >
                    <RadioGroup.Item
                        value="all"
                        m="-2px"
                        px={6}
                        py={3}
                        rounded="full"
                        bg="primary.500"
                        boxShadow="0px 10px 20px rgba(178, 35, 207, 0.24)"
                    >
                        <RadioGroup.ItemHiddenInput />
                        <Text color="white" fontWeight="600">
                            Todos
                        </Text>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="entre">
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                            <Icon as={FaBriefcase} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0">
                                Emprendedores
                            </Text>
                        </Flex>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="rest">
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                            <Icon as={FaUtensils} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0">
                                Restaurantes
                            </Text>
                        </Flex>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="digital">
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                            <Icon as={FaStore} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0">
                                Negocios Digitales
                            </Text>
                        </Flex>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="legal">
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                            <Icon as={FaCalendarAlt} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0">
                                Procesos legales
                            </Text>
                        </Flex>
                    </RadioGroup.Item>
                </Flex>
            </Transition>

            {/* Mobile: grid of 2 columns */}
            <Transition type="top" velocity="slow">
                <Grid
                    display={{ base: "grid", md: "none" }}
                    templateColumns="repeat(2, 1fr)"
                    gap={3}
                    maxW="100%"
                    mx="auto"
                    px={4}
                >
                    <RadioGroup.Item
                        value="all"
                        borderRadius="xl"
                        bg="primary.500"
                        boxShadow="0px 10px 20px rgba(178, 35, 207, 0.24)"
                        py={4}
                        px={4}
                        textAlign="center"
                    >
                        <RadioGroup.ItemHiddenInput />
                        <Text color="white" fontWeight="600" fontSize="sm">
                            Todos
                        </Text>
                    </RadioGroup.Item>

                    <RadioGroup.Item
                        value="entre"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                    >
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaBriefcase} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0" fontSize="sm">
                                Emprendedores
                            </Text>
                        </Flex>
                    </RadioGroup.Item>

                    <RadioGroup.Item
                        value="rest"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                    >
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaUtensils} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0" fontSize="sm">
                                Restaurantes
                            </Text>
                        </Flex>
                    </RadioGroup.Item>

                    <RadioGroup.Item
                        value="digital"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                    >
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaStore} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0" fontSize="sm">
                                Negocios Digitales
                            </Text>
                        </Flex>
                    </RadioGroup.Item>

                    <RadioGroup.Item
                        value="legal"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="#A0A0A0"
                        bg="white"
                        py={4}
                        px={4}
                        textAlign="center"
                    >
                        <RadioGroup.ItemHiddenInput />
                        <Flex align="center" justify="center" gap={2}>
                            <Icon as={FaCalendarAlt} color="#A0A0A0" />
                            <Text fontWeight="600" color="#A0A0A0" fontSize="sm">
                                Procesos legales
                            </Text>
                        </Flex>
                    </RadioGroup.Item>
                </Grid>
            </Transition>
        </RadioGroup.Root >
    )
}
