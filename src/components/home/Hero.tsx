import { Box, Flex, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import AnimatedStat from "./NumberAnimate";
import { WhatsApp } from '@mui/icons-material';
import { Transition } from "../Transition";

export default function Hero() {
    return (
        <Box as="section" position="relative" overflow="hidden" bg="gray.50" pt={{ base: 16, md: 0 }} >
            <Flex m={"auto"} maxWidth={"full"} flexDirection={{ base: "column", lg: "row" }} h={"100vh"} px={{ base: 4, md: 8, lg: "160px" }} py={{ base: 8, md: 12, lg: "80px" }} align={"center"} gap={{ base: 8, lg: 0 }}>
                <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                    <Flex
                        direction="column"
                        maxW="551px"
                        w="100%"
                        gap="8px"
                    >
                        <Transition type="top" velocity="slow">
                            <Flex justifyContent={{ base: "center", md: "flex-start" }}>
                                <Heading
                                    as="h1"
                                    color="primary.500"
                                    fontFamily="Bricolage Grotesque"
                                    fontWeight="extrabold"
                                    fontSize={{ base: "28px", md: "40px", lg: "54px" }}
                                    lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                                >
                                    Hola, somos 3ana
                                </Heading>

                                <Image
                                    src="/home/Vector.png"
                                    w="32px"
                                    h="32px"
                                />
                            </Flex>
                        </Transition>
                        <Transition type="bootom" velocity="slow" index={1}>
                            <Heading
                                as={"h2"}
                                maxW="545px"
                                w="100%"
                                color="#3F3F3F"
                                fontSize={{ base: "22px", md: "28px", lg: "32px" }}
                                lineHeight={{ base: "28px", md: "34px", lg: "40px" }}
                                letterSpacing={"0%"}
                                fontWeight="extrabold"
                                fontFamily="Bricolage Grotesque"
                            >Marketing & Consultoría que mueve negocios</Heading>
                        </Transition>

                        <Transition type="left" velocity="slow" index={1}>
                            <Text
                                maxW="551px"
                                w="100%"
                                fontFamily="inter"
                                fontWeight="400"
                                fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                                lineHeight="22px"
                                letterSpacing="0px"
                                color="#717171"
                                py={4}
                            >
                                Ayudo a emprendedores y restaurantes a transformar sus ideas en negocios
                                exitosos con estrategias prácticas y acompañamiento constante
                            </Text>
                        </Transition>

                    </Flex>
                    <Transition type="bootom" velocity="slow" index={1}>
                        <Flex
                            gap={4}
                            maxW="517px"
                            w="100%"
                            pt={4}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <Link target="_blank" href={`https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_PHONE_CONTACT}&text=Hola+estoy+interesado+en+sus+servicios.&type=phone_number&app_absent=0`}>
                                <ButtonUi
                                    h="56px"
                                    flex={1}
                                    borderRadius="30px"
                                    px="24px"
                                    gap="8px"
                                    bg="primary.500"
                                    color="white"
                                    boxShadow="0px 10px 50px rgba(178,35,207,0.24)"
                                    size="lg"
                                    _hover={{
                                        bg: "#5A0F6E",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                                    }}
                                    _active={{
                                        transform: "scale(0.98)",
                                    }}
                                >
                                    <WhatsApp />
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
                            </Link>

                            <ButtonUi
                                flex={1}
                                h="54px"
                                borderRadius="30px"
                                bg="#ffff"
                                border="1px solid"
                                py="16px"
                                px="24px"
                                gap="8px"
                                borderColor="primary.500"
                                color="primary.500"
                                boxShadow="0px 10px 50px rgba(178, 35, 207, 0.15)"
                                size="lg"
                                _hover={{
                                    bg: "#F3E8FF",
                                    borderColor: "#6B21A8",
                                    color: "#6B21A8",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 8px 20px rgba(109, 40, 217, 0.15)",
                                }}
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
                        </Flex>
                    </Transition>
                    <Transition type="top" velocity="slow" index={1}>
                        <Flex maxW="576px" w="100%" h={{ base: "auto", lg: "96px" }} bg="transparent" pt={{ base: 10, lg: 20 }} align="center" gap={8} flexWrap={{ base: "wrap", lg: "nowrap" }} justify={{ base: "center", lg: "flex-start" }}>
                            <Box
                                w="142.69px"
                                h="64px"
                                bg="transparent">
                                <Box
                                    w="185.49px"
                                    h="40px"
                                    bg="transparent"
                                >
                                    <AnimatedStat
                                        suffix="+"
                                        value={150}
                                        w="193.49px"
                                        fontFamily="Bricolage Grotesque"
                                        fontWeight="800"
                                        fontSize="36px"
                                        lineHeight="40px"
                                        letterSpacing="0%"
                                        color="primary.500"
                                    />
                                </Box>
                                <Box
                                    w="142.69px"
                                    h="20px"
                                    bg="transparent"
                                >
                                    <Text
                                        color="#3F3F3F"
                                        w="150.69px"
                                        mt={2}
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
                                display={{ base: "none", md: "block" }}
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
                                    <AnimatedStat
                                        suffix="+"
                                        value={3}
                                        w="193.49px"
                                        fontFamily="Bricolage Grotesque"
                                        fontWeight="800"
                                        fontSize="36px"
                                        lineHeight="40px"
                                        letterSpacing="0%"
                                        color="primary.500"
                                    />
                                </Box>
                                <Box
                                    w="135.61px"
                                    h="20px"
                                    bg="transparent"
                                >
                                    <Text
                                        w="143.61px"
                                        mt={2}
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
                                display={{ base: "none", md: "block" }}
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
                                    <AnimatedStat
                                        suffix="%"
                                        value={98}
                                        w="193.49px"
                                        fontFamily="Bricolage Grotesque"
                                        fontWeight="800"
                                        fontSize="36px"
                                        lineHeight="40px"
                                        letterSpacing="0%"
                                        color="primary.500"
                                    />
                                </Box>
                                <Box
                                    w="134.58px"
                                    h="20px"
                                    bg="transparent"
                                ><Text
                                    color="#3F3F3F"
                                    w="142.58px"
                                    mt={2}
                                    fontFamily="Inter"
                                    fontWeight="400"
                                    fontSize="14px"
                                    lineHeight="20px"
                                    letterSpacing="0px"
                                >Clientes Satisfechos</Text></Box>
                            </Box>
                        </Flex>
                    </Transition>
                </Box>
                <Transition type="rigth" velocity="slow" index={1}>
                    <Box
                        borderRadius="99px"
                        bgGradient="radial(#FFFFFF 0%, #F9D0FF 100%)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        maxW={{ base: "300px", md: "480px", lg: "auto" }}
                        w={{ base: "100%", lg: "auto" }}
                        mx={{ base: "auto", lg: "0" }}
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
                </Transition>
            </Flex >
        </Box >
    )
}