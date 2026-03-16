"use client"

import { Button, Flex, RadioGroup, Icon, Text } from "@chakra-ui/react"
import { FaBriefcase, FaUtensils, FaStore, FaCalendarAlt } from "react-icons/fa"

export default function CategorySelector() {
    return (
        <RadioGroup.Root defaultValue="all">
            <Flex
                border="2px solid"
                borderColor="#A0A0A0"
                rounded="full"
                w="fit-content"
                bg="white"
                gap={2}
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

                    <Text
                        color="white"
                        fontWeight="600"
                    >
                        Todos
                    </Text>

                </RadioGroup.Item>

                <RadioGroup.Item value="entre">
                    <RadioGroup.ItemHiddenInput />
                    <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                        <Icon
                            as={FaBriefcase}
                            color="#A0A0A0"
                        />
                        <Text
                            fontWeight="600"
                            color="#A0A0A0"
                        >
                            Emprendedores
                        </Text>
                    </Flex>
                </RadioGroup.Item>

                <RadioGroup.Item value="rest">
                    <RadioGroup.ItemHiddenInput />
                    <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                        <Icon
                            as={FaUtensils}
                            color="#A0A0A0"
                        />
                        <Text
                            fontWeight="600"
                            color="#A0A0A0"
                        >
                            Restaurantes
                        </Text>
                    </Flex>
                </RadioGroup.Item>

                <RadioGroup.Item value="digital">
                    <RadioGroup.ItemHiddenInput />
                    <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                        <Icon
                            as={FaStore}
                            color="#A0A0A0"
                        />
                        <Text
                            fontWeight="600"
                            color="#A0A0A0"
                        >
                            Negocios Digitales
                        </Text>
                    </Flex>
                </RadioGroup.Item>

                <RadioGroup.Item value="legal">
                    <RadioGroup.ItemHiddenInput />
                    <Flex align="center" gap={2} px={5} py={3} cursor="pointer">
                        <Icon
                            as={FaCalendarAlt}
                            color="#A0A0A0"
                        />
                        <Text
                            fontWeight="600"
                            color="#A0A0A0"
                        >
                            Procesos legales
                        </Text>
                    </Flex>
                </RadioGroup.Item>

            </Flex>
        </RadioGroup.Root >
    )
}