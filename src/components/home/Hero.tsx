import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";

export default function Hero() {
    return (
        <Box as="section" position="relative" overflow="hidden" bg="gray.50" >
            <Flex m={"auto"} maxWidth={"1440px"} h={"760px"} px={"160px"} py={"80px"} align={"center"}>
                <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                    <Flex
                        direction="column"
                        w="551px"
                        gap="30px"
                    >
                        <Flex>
                            <Heading
                                as="h1"
                                h="70px"
                                color="primary.500"
                                fontFamily="Bricolage Grotesque"
                                fontWeight="extrabold"
                                fontSize="54px"
                                lineHeight="70px"
                            >
                                Hola, somos 3ana
                            </Heading>

                            <Image
                                src="/home/Vector.png"
                                w="32px"
                                h="32px"
                            />
                        </Flex>
                        <Heading
                            as={"h2"}
                            w="545px"
                            h="22px"
                            color="#3F3F3F"
                            fontSize={"32px"}
                            lineHeight={"40px"}
                            letterSpacing={"0%"}
                            fontWeight="extrabold"
                            fontFamily="Bricolage Grotesque"
                        >Marketing que mueve negocios</Heading>
                        <Text
                            w="551px"
                            h="66px"
                            fontFamily="inter"
                            fontWeight="400"
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="0px"
                            color="#717171"
                        >
                            Ayudo a emprendedores y restaurantes a transformar sus ideas en negocios
                            exitosos con estrategias prácticas y acompañamiento constante
                        </Text>
                    </Flex>
                    <HStack
                        gap={4}
                        justify={{ base: "center", md: "flex-start" }}
                        direction={{ base: "column", sm: "row" }}
                        w="517px"
                        h="56px"
                        pt="14"
                    >
                        <ButtonUi
                            h="56px"
                            w="fit-content"
                            borderRadius="30px"
                            px="24px"
                            gap="16px"
                            bg="primary.500"
                            color="white"
                            boxShadow="0px 10px 20px rgba(178,35,207,0.24)"
                            size="lg"
                        >
                            <Text
                                fontFamily="Inter"
                                fontWeight="semibold"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0"
                                textAlign="center"
                                color="#FFFFFF"
                            >Agendar una Consulta</Text>
                        </ButtonUi>
                        <ButtonUi
                            w="fit-content"
                            h="54px"
                            borderRadius="30px"
                            bg="#ffff"
                            border="1px solid"
                            py="16px"
                            px="24px"
                            gap="8px"
                            borderColor="primary.500"
                            color="primary.500"
                            boxShadow="0px 10px 20px rgba(178, 35, 207, 0.24)"
                            size="lg"
                        >
                            <Text
                                fontFamily="Inter"
                                fontWeight="semibold"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0"
                                textAlign="center"
                            >Conoce mi Trabajo</Text>
                        </ButtonUi>
                    </HStack>
                    <Flex w="576px" h="96px" bg="transparent" pt={20} align="center" gap={8}>
                        <Box
                            w="142.69px"
                            h="64px"
                            bg="transparent">
                            <Box
                                w="185.49px"
                                h="40px"
                                bg="transparent"
                            >
                                <Text
                                    w="193.49px"
                                    h="40px"
                                    fontFamily="Bricolage Grotesque"
                                    fontWeight="800"
                                    fontSize="36px"
                                    lineHeight="40px"
                                    letterSpacing="0%"
                                    color="primary.500"
                                >
                                    150+
                                </Text>
                            </Box>
                            <Box
                                w="142.69px"
                                h="20px"
                                bg="transparent"
                            >
                                <Text
                                    color="#3F3F3F"
                                    w="150.69px"
                                    h="20px"
                                    fontFamily="Inter"
                                    fontWeight="400"
                                    fontSize="14px"
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >Negocios Impulsados</Text>
                            </Box>
                        </Box>
                        <Box
                            w="1px"
                            h="64px"
                            bg="#E5E7EB"
                        />
                        <Box
                            w="135.61px"
                            h="64px"
                            bg="transparent"
                        >
                            <Box
                                w="176.29px"
                                h="40px"
                                bg="transparent"
                            >
                                <Text
                                    w="184.29px"
                                    h="40px"
                                    fontFamily="Bricolage Grotesque"
                                    fontWeight="800"
                                    fontSize="36px"
                                    lineHeight="40px"
                                    letterSpacing="0%"
                                    color="primary.500"
                                >
                                    3+
                                </Text>
                            </Box>
                            <Box
                                w="135.61px"
                                h="20px"
                                bg="transparent"
                            >
                                <Text
                                    w="143.61px"
                                    h="20px"
                                    fontFamily="Inter"
                                    fontWeight="400"
                                    fontSize="14px"
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                    color="#3F3F3F"
                                >
                                    Años de Experiencia
                                </Text>
                            </Box>
                        </Box>
                        <Box
                            w="1px"
                            h="64px"
                            bg="#E5E7EB"
                        />
                        <Box
                            w="134.58px"
                            h="64px"
                            bg="transparent"
                        >
                            <Box
                                w="174.95px"
                                h="40px"
                                bg="transparent"
                            >
                                <Text
                                    w="182.95px"
                                    h="40px"
                                    fontFamily="Bricolage Grotesque"
                                    fontWeight="800"
                                    fontSize="36px"
                                    lineHeight="40px"
                                    letterSpacing="0%"
                                    color="primary.500"
                                >
                                    98%
                                </Text>
                            </Box>
                            <Box
                                w="134.58px"
                                h="20px"
                                bg="transparent"
                            ><Text
                                color="#3F3F3F"
                                w="142.58px"
                                h="20px"
                                fontFamily="Inter"
                                fontWeight="400"
                                fontSize="14px"
                                lineHeight="20px"
                                letterSpacing="0px"
                            >Clientes Satisfechos</Text></Box>
                        </Box>
                    </Flex>
                </Box>
                <Box
                    borderRadius="99px"
                    bgGradient="radial(#FFFFFF 0%, #F9D0FF 100%)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        src="/home/Hero.png"
                        alt="mujer sonriente"
                        w="100%"
                        h="100%"
                        borderRadius="99px"
                        objectFit="cover"
                    />
                </Box>
            </Flex>
        </Box>
    )
}