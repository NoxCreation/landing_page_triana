"use client"

import { Box, Flex, RadioGroup, Radio, Icon, Text } from "@chakra-ui/react"
import { FaBriefcase, FaUtensils, FaStore, FaCalendarAlt } from "react-icons/fa"

export default function CategorySelector() {
    return (
        <RadioGroup defaultValue="all">
            <Flex
                border="2px solid"
                borderColor="purple.600"
                rounded="full"
                p="1"
                w="fit-content"
                bg="white"
                gap={2}
            >
                <Radio value="all" display="none" id="all" />
                <Box
                    as="label"
                    htmlFor="all"
                    px={6}
                    py={3}
                    rounded="full"
                    bg="purple.700"
                    color="white"
                    fontWeight="600"
                    cursor="pointer"
                >
                    Todos
                </Box>

                <Flex as="label" htmlFor="entre" align="center" gap={2} px={5} py={3} cursor="pointer">
                    <Radio value="entre" id="entre" display="none" />
                    <Icon as={FaBriefcase} />
                    <Text fontWeight="600">Emprendedores</Text>
                </Flex>

                <Flex as="label" htmlFor="rest" align="center" gap={2} px={5} py={3} cursor="pointer">
                    <Radio value="rest" id="rest" display="none" />
                    <Icon as={FaUtensils} />
                    <Text fontWeight="600">Restaurantes</Text>
                </Flex>

                <Flex as="label" htmlFor="digital" align="center" gap={2} px={5} py={3} cursor="pointer">
                    <Radio value="digital" id="digital" display="none" />
                    <Icon as={FaStore} />
                    <Text fontWeight="600">Negocios Digitales</Text>
                </Flex>

                <Flex as="label" htmlFor="legal" align="center" gap={2} px={5} py={3} cursor="pointer">
                    <Radio value="legal" id="legal" display="none" />
                    <Icon as={FaCalendarAlt} />
                    <Text fontWeight="600">Procesos legales</Text>
                </Flex>
            </Flex>
        </RadioGroup>
    )
}