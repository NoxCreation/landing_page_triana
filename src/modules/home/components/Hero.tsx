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

            <ContainerLanding zIndex={2} position={'relative'}>
                <Flex
                    gap={{ base: 6, md: 20 }}
                    flexDirection={{ base: "column-reverse", lg: "row" }} align={"center"} position={'initial'}>

                    {/* Izquierda - Títulos, descripción, botones y estadísticas */}
                    <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                        <Flex
                            direction="column"
                            gap="8px"
                        >
                            <Transition type="top" velocity="fast">
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
                            <Transition type="bootom" velocity="fast" index={1}>
                                <Heading
                                    as={"h2"}
                                    maxW={{base:"100vw", md: "40vw"}}
                                    w="100%"
                                    color="#3F3F3F"
                                    fontSize={{ base: "22px", md: "28px", lg: "32px" }}
                                    lineHeight={{ base: "28px", md: "34px", lg: "40px" }}
                                    letterSpacing={"0%"}
                                    fontWeight="extrabold"
                                    fontFamily="Bricolage Grotesque"
                                >{content.home.main_subtitle}</Heading>
                            </Transition>

                            <Transition type="left" velocity="fast" index={1}>
                                <Text
                                    maxW={{base:"100vw", md: "40vw"}}
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
                        <Transition type="bootom" velocity="fast" index={1}>
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
                        <Transition type="top" velocity="fast" index={1}>
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

                    {/* Derecha - Imagen con máscara (responsive) */}
                    <Box
                        display={{ base: 'block', md: 'none' }}
                        h={'400px'} //150
                    />
                    <Box
                        position={{ /* base: "relative", */ lg: "absolute" }}
                        top={{ lg: 0 }}
                        right={{ lg: 0 }}
                        w={{ base: "100%", lg: "120%" }}
                        h={{ base: "auto", lg: "100vh" }}
                        display="flex"
                        justifyContent="flex-end"
                        mt={{ /* base: 8, */ lg: 0 }}
                        id="a"
                    >
                        <Box
                            position="absolute"
                            top={0}
                            right={{ base: '60px', md: '0' }}
                            w="110%"
                            h="100%"
                            bgImage="url('/home/mask-color.webp')"
                            bgSize="contain"
                            bgRepeat="no-repeat"
                            bgPos="right top"
                            display={{ base: "none", lg: "block" }}
                        />

                        <Box
                            position="absolute"
                            top={0}
                            right={0}
                            w={{ base: "160%", md: "50%" }}
                            h={{ base: "540px", lg: "100vh" }}
                            style={{
                                backgroundImage: "url('/home/hero.webp')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                maskImage: "url('/home/mask-black.webp')",
                                WebkitMaskImage: "url('/home/mask-black.webp')",
                                maskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                                maskPosition: "right top",
                                WebkitMaskPosition: "right top",
                            }}
                        />

                    </Box>

                </Flex >
            </ContainerLanding>
        </Stack>
    )
}