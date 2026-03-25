import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import { WhatsApp } from '@mui/icons-material';
import { Transition } from "../Transition";
import { useRouter } from "next/navigation";
import { StatAnimate } from "../StatAnimate";

export default function Hero() {
    const router = useRouter()
    return (
        <Box as="section" position="relative" overflow="hidden" bg="gray.50" pt={{ base: 16, md: 0 }} >
            <Flex
                gap={20}
                flexDirection={{ base: "column", lg: "row" }} minH={"100vh"} px={{ base: "24px", lg: "160px" }} py={{ base: 8, md: 12 }} align={"center"}>
                <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                    <Flex
                        direction="column"
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
                                    w={{ base: "15px", md: '32px' }}
                                    h={{ base: "15px", md: '32px' }}
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
                            <ButtonUi
                                flex={{ base: 'none', md: 1 }}
                                borderRadius="30px"
                                h={{ base: "45px", md: "50px" }}
                                px="24px"
                                gap="8px"
                                bg="primary.500"
                                color="white"
                                boxShadow="0px 10px 50px rgba(178,35,207,0.24)"
                                _hover={{
                                    bg: "#5A0F6E",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                                }}
                                _active={{
                                    transform: "scale(0.98)",
                                }}
                                onClick={() => {
                                    router.push(`https://api.whatsapp.com/send/?phone=${process.env.NEXT_PUBLIC_PHONE_CONTACT}&text=Hola+estoy+interesado+en+sus+servicios.&type=phone_number&app_absent=0`)
                                }}
                            >
                                <WhatsApp />
                                <Text
                                    fontFamily="Inter"
                                    fontWeight="semibold"
                                    fontSize={{ base: "14px", md: '18px' }}
                                    lineHeight="22px"
                                    letterSpacing="0"
                                    textAlign="center"
                                    color="#FFFFFF"
                                >Agendar una Consulta</Text>
                            </ButtonUi>

                            <ButtonUi
                                flex={{ base: 'none', md: 1 }}
                                borderRadius="30px"
                                h={{ base: "45px", md: "50px" }}
                                px="24px"
                                bg="#ffff"
                                gap="8px"
                                border="1px solid"
                                borderColor="primary.500"
                                color="primary.500"
                                boxShadow="0px 10px 50px rgba(178, 35, 207, 0.15)"
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
                                    fontSize={{ base: "14px", md: '18px' }}
                                    lineHeight="22px"
                                    letterSpacing="0"
                                    textAlign="center"
                                >Conoce mi Trabajo</Text>
                            </ButtonUi>
                        </Flex>
                    </Transition>
                    <Transition type="top" velocity="slow" index={1}>
                        <Flex maxW="576px" w="100%" h={{ base: "auto", lg: "96px" }} bg="transparent" pt={{ base: 10, lg: 20 }} align="center" gap={8} flexWrap={{ base: "wrap", lg: "nowrap" }} justify={{ base: "center", lg: "flex-start" }}>

                            <StatAnimate
                                value={150}
                                label="Negocios Impulsados"
                            />

                            <StatAnimate
                                value={3}
                                label="Años de Experiencia"
                            />

                            <StatAnimate
                                value={98}
                                label="Clientes Satisfechos"
                            />

                        </Flex>
                    </Transition>
                </Box>

                <Box
                    flex={1}
                    borderRadius="99px"
                    px={{ base: "0", md: '90px' }}
                >
                    <Transition type="rigth" velocity="slow" index={1}>
                        <Image
                            src="/home/Hero.png"
                            alt="mujer sonriente"
                            w="100%"
                            h="100%"
                            borderRadius="99px"
                            objectFit="cover"
                        />
                    </Transition>
                </Box>
            </Flex >
        </Box >
    )
}