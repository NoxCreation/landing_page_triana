'use client'

import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import { WhatsApp } from '@mui/icons-material';
import { useRouter } from "next/navigation";
import { FaArrowUp, FaBrain, FaBullhorn, FaChartLine, FaChartPie, FaCogs, FaGlobe, FaHandshake, FaLightbulb, FaMegaport, FaRocket, FaSearch, FaUsers } from "react-icons/fa";
/* import { DotPattern } from "@/components/DotPattern"; */
import { OrbitingCircles } from "@/components/OrbitingCircle";
import { SparklesText } from "@/components/Sparkle";
import { StatAnimate } from "@/components/StatAnimate";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import { ContainerLanding } from "@/components/container";

export default function Hero({
    content
}: {
    content: ContentType
}) {
    const router = useRouter()
    return (
        <Stack position={'relative'} bg="gray.50">
            {/* <Stack
                position={"absolute"}
                top={0}
                left={0}
                w={'100vw'}
                h={'100vh'}
                zIndex={1}
            >
                <DotPattern
                    width={20}
                    height={20}
                    cx={2}
                    cy={2}
                    cr={1.5}
                    color="gray.400"
                    opacity={0.2}
                />
            </Stack> */}

            <ContainerLanding zIndex={2}>
                <Flex
                    gap={{ base: 6, md: 20 }}
                    flexDirection={{ base: "column-reverse", lg: "row" }} align={"center"}>

                    {/* Izquierda - Títulos, descripción, botones y estadísticas */}
                    <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                        <Flex
                            direction="column"
                            gap="8px"
                        >
                            <Transition type="top" velocity="slow">
                                <Flex justifyContent={{ base: "center", md: "flex-start" }}>
                                    <SparklesText sparklesCount={5}>
                                        <Heading
                                            as="h1"
                                            color="primary.500"
                                            fontFamily="Bricolage Grotesque"
                                            fontWeight="extrabold"
                                            fontSize={{ base: "34px", md: "40px", lg: "54px" }}
                                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                                        >
                                            {content.home.main_title}
                                        </Heading>
                                    </SparklesText>

                                    <Image
                                        src="/home/Vector.ico"
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
                                >{content.home.main_subtitle}</Heading>
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
                                    {content.home.main_label}
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
                                        router.push(`https://api.whatsapp.com/send/?phone=${content.contact.contact.phone}&text=Hola+estoy+interesado+en+sus+servicios.&type=phone_number&app_absent=0`)
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
                                    >{content.home.btn_cta_to_schedule}</Text>
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
                                    onClick={() => {
                                        router.push(`/service`)
                                    }}
                                >
                                    <Text
                                        fontFamily="Inter"
                                        fontWeight="semibold"
                                        fontSize={{ base: "14px", md: '18px' }}
                                        lineHeight="22px"
                                        letterSpacing="0"
                                        textAlign="center"
                                    >{content.home.btn_cta_my_work}</Text>
                                </ButtonUi>
                            </Flex>
                        </Transition>
                        <Transition type="top" velocity="slow" index={1}>
                            <Flex maxW="576px" w="100%" h={{ base: "auto", lg: "96px" }} bg="transparent" pt={{ base: 10, lg: 20 }} align="center" gap={8} flexWrap={{ base: "wrap", lg: "nowrap" }} justify={{ base: "center", lg: "flex-start" }}>

                                <StatAnimate
                                    value={content.home.stats.driven_businesses}
                                    label="Negocios Impulsados"
                                />

                                <StatAnimate
                                    value={content.home.stats.years_of_experience}
                                    label="Años de Experiencia"
                                />

                                <StatAnimate
                                    value={content.home.stats.satisfied_customers}
                                    label="Clientes Satisfechos"
                                />

                            </Flex>
                        </Transition>
                    </Box>

                    {/* Derecha - Imagen con órbitas y iconos */}
                    <Box
                        flex={1}
                        borderRadius="99px"
                        px={{ base: "0", md: '90px' }}
                        zIndex={2}
                        position={'relative'}
                        overflow={'hidden'}

                    >
                        <Stack position="absolute"
                            top={'calc((100% / 2) - 200px )'}
                            left={'calc((100% / 2) - 200px )'}
                            alignItems="center" justifyContent="center">
                            <Box position="relative" width="400px" height="400px" mx="auto" >
                                {/* --- ÓRBITA EXTERNA (Grande, lenta, sentido horario) --- */}
                                <OrbitingCircles
                                    radius={200}
                                    duration={25}
                                    speed={1}
                                    reverse={false}
                                    path={true}
                                    iconSize={50}
                                >
                                    {/* Iconos de estrategia, marketing y datos */}
                                    <Icon as={FaChartLine} boxSize={7} color="purple.500" />
                                    <Icon as={FaBullhorn} boxSize={7} color="blue.500" />
                                    <Icon as={FaLightbulb} boxSize={7} color="yellow.500" />
                                    <Icon as={FaUsers} boxSize={7} color="green.500" />
                                    <Icon as={FaSearch} boxSize={7} color="red.400" />
                                    <Icon as={FaHandshake} boxSize={7} color="orange.500" />
                                    <Icon as={FaGlobe} boxSize={7} color="teal.500" />
                                    <Icon as={FaMegaport} boxSize={7} color="pink.500" />
                                </OrbitingCircles>

                                {/* --- ÓRBITA INTERNA (Pequeña, rápida, sentido antihorario) --- */}
                                <OrbitingCircles
                                    radius={140}
                                    duration={12}
                                    speed={1}
                                    reverse={true}
                                    path={true}
                                    iconSize={45}
                                    position={"absolute"}
                                    top={0}
                                >
                                    {/* Iconos de innovación, crecimiento y soluciones */}
                                    <Icon as={FaRocket} boxSize={6} color="orange.500" />
                                    <Icon as={FaArrowUp} boxSize={6} color="green.600" />
                                    <Icon as={FaBrain} boxSize={6} color="purple.600" />
                                    <Icon as={FaCogs} boxSize={6} color="gray.600" />
                                    <Icon as={FaChartPie} boxSize={6} color="blue.600" />
                                    <Icon as={FaChartLine} boxSize={6} color="red.500" />
                                </OrbitingCircles>

                            </Box>
                        </Stack>

                        <Transition type="rigth" velocity="slow" index={1}>
                            <Stack zIndex={5} >
                                <Image
                                    zIndex={5}
                                    src="/home/Hero.webp"
                                    alt="mujer sonriente"
                                    w="100%"
                                    h="100%"
                                    borderRadius="full"
                                    objectFit="cover"
                                />
                            </Stack>
                        </Transition>
                    </Box>
                </Flex >
            </ContainerLanding>
        </Stack>
    )
}