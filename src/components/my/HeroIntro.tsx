import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

export default function HeroIntro() {
    return (
        <Box w="100%" py={16} px={4} bg="#F3A0FF0D">
            <Box maxW="1440px" mx="auto">
                <Box textAlign="center" position="relative" maxW="1004px" m="auto" mb={8}>
                    <HStack justify="start" gap={2} mt={2}>
                        <Image src="/my/Vector-w2.svg" />
                        <Image src="/my/Vector-w2.svg" />
                    </HStack>
                    <Text
                        fontSize={{ base: "md", md: "30px" }}
                        color="#3F3F3F"
                        maxW="926px"
                        fontWeight={500}
                        lineHeight="36px"
                        letterSpacing="-0.5px"
                        mx="auto"
                    >
                        Todo comenzó cuando abrí mi primer negocio y me di cuenta de lo
                    </Text>
                    <Text
                        fontSize={{ base: "md", md: "30px" }}
                        color="#3F3F3F"
                        maxW="900px"
                        fontWeight={500}
                        lineHeight="36px"
                        letterSpacing="-0.5px"
                        mx="auto"
                    >
                        difícil que era navegar el mundo del emprendimiento solo. Los
                    </Text>
                    <Text
                        fontSize={{ base: "md", md: "30px" }}
                        color="#3F3F3F"
                        maxW="880px"
                        fontWeight={500}
                        lineHeight="36px"
                        letterSpacing="-0.5px"
                        mx="auto"
                    >
                        errores costosos, la falta de claridad y la sensación de estar
                    </Text>
                    <Text
                        fontSize={{ base: "md", md: "30px" }}
                        color="#3F3F3F"
                        maxW="840px"
                        fontWeight={500}
                        lineHeight="36px"
                        letterSpacing="-0.5px"
                        mx="auto"
                    >
                        perdido fueron mi motivación para crear Triana Marketing.
                    </Text>
                    <Box mt={4}>
                        <Text
                            color="#A0A0A0"
                            fontWeight={500}
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="-0.5px"
                            fontStyle="italic"
                        >
                            — Triana Apellido, CEO of 3ana
                        </Text>

                        <HStack justify="end" gap={2} mt={2}>
                            <Image src="/my/Vector-w.svg" />
                            <Image src="/my/Vector-w.svg" />
                        </HStack>
                    </Box>
                </Box>

                <Box textAlign="center" mt={8}>
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "36px" }}
                        fontWeight={800}
                        fontFamily="Bricolage Grotesque"
                        lineHeight="40px"
                        letterSpacing="0px"
                        color="#3F3F3F"
                        mb={4}
                    >
                        Y ahora...
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "18px" }}
                        color="#717171"
                        fontWeight={400}
                        lineHeight="22px"
                        letterSpacing="0px"
                        maxW="1120px"
                        mx="auto"
                    >
                        Despúes de años ayudando a negocios a crecer, desarrollé una metodología
                        única: estrategias + acción + acompañamiento. No creo en la teoria sin
                        práctica, ni en los planes que se queden en el papel
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
