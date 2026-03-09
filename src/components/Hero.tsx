import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import ButtonUi from "./Button";

export default function Hero() {
    return (
        <Box as="section" position="relative" overflow="hidden" bg="gray.50" >
            <Box
                position="absolute"
                bottom="30%"
                left="-1%"
                w="600px"
                h="300px"
                bg="purple.100"
                opacity={0.4}
                borderTopRadius="full"
            />
            <Box
                position="absolute"
                bottom="-30%"
                left="-1%"
                w="600px"
                h="550px"
                bg="purple.100"
                opacity={0.8}
                borderTopRadius="full"
            />
            <Flex m={"auto"} w={"1300px"} p={20} align={"center"}>
                <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                    <Heading
                        as="h1"
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        fontWeight="bold"
                        color="gray.800"
                        lineHeight="1.2"
                        mb={6}
                    >
                        <Text
                            as="span"
                            color={"#d222de"}
                        >Marketing</Text>{" "}
                        <Text
                            as="span"
                            color="brand.500"
                        >que transforma tu negocio</Text>
                    </Heading>
                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.600"
                        mb={8}
                        maxW="500px"
                        mx={{ base: "auto", md: 0 }}
                    >
                        Estrategias prácticas, acompañamiento y resultados medibles.
                    </Text>
                    <HStack
                        gap={4}
                        justify={{ base: "center", md: "flex-start" }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <ButtonUi
                            text="Ver Servicios"
                            bg="brand.500"
                            color="white"
                            size="lg"
                            px={8}
                            _hover={{ bg: "brand.600" }}
                        />
                        <ButtonUi
                            text="Consulta Gratis"
                            variant="outline"
                            borderColor="brand.500"
                            color="brand.500"
                            size="lg"
                            px={8}
                            _hover={{ bg: "purple.50" }}
                        />
                    </HStack>
                </Box>
                <Flex flex={1} align={"flex-end"} gap={4}>
                    <Image
                        src="/imgP.webp"
                        alt="Mujer trabajando"
                        maxW={{ base: "100%", md: "500px" }}
                        borderRadius="2xl"
                        boxShadow="xl"
                    />
                    <ButtonUi
                        text="Contáctame"
                        color={"white"}
                        bg={"#25D366"}
                    />
                </Flex>
            </Flex>
        </Box>
    )
}