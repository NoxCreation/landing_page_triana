import { Box, Flex, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TikTok from "/my/ic_baseline-tiktok.svg"
import EmailIcon from '@mui/icons-material/Email';

export default function Hero() {
    return (
        <Box as="section" position="relative" overflow="hidden" bg="#F3A0FF0D" >
            <Flex m={"auto"} maxWidth={"1440px"} h={"760px"} px={"160px"} py={"80px"} align={"center"}>
                <Box flex={1} textAlign={{ base: "center", md: "left" }}>
                    <Text
                        w="249px"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="14px"
                        fontWeight="400"
                        lineHeight="20px"
                        letterSpacing="0px"
                        bg="#F5F3FF"
                        color="primary.500"
                        border="1px solid"
                        borderColor="primary.500"
                        textAlign="center"
                        whiteSpace="nowrap"
                    >
                        CEO & Estrategia de Marketing
                    </Text>
                    <Flex
                        direction="column"
                        w="551px"
                        gap="30px"
                    >
                        <Box position="relative" w="541px" display="inline-block">
                            <Heading
                                as="h1"
                                w="501px"
                                h="70px"
                                color="primary.500"
                                fontWeight="800"
                                fontSize="54px"
                                fontFamily="Bricolage Grotesque"
                                lineHeight="70px"
                            >
                                Triana Apellido
                            </Heading>

                            <Image
                                src="/home/Vector.png"
                                w="32px"
                                h="32px"
                                position="absolute"
                                top="3px"
                                right="90px"
                            />
                        </Box>
                        <Text
                            w="551px"
                            h="66px"
                            fontFamily="inter"
                            fontWeight="400"
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="0px"
                            color="#717171"
                            mb={8}
                        >
                            Con más de 3 años de experiencia transformando marcas y construyendo
                            estrategias digitales innovadoras, María lidera nuestra agencia con una
                            visión clara: conectar empresas con sus audiencias de manera autentica
                            y memorable
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
                        <Box
                            display="flex"
                            alignItems="center"
                            w="fit-content"
                            h="54px"
                            bg="#F9D0FF"
                            borderRadius="30px"
                            py="16px"
                            px="24px"
                            gap="8px"
                            color="terciary.500"
                        >
                            <Icon as={LinkedInIcon} />
                            <Text
                                as="span"
                                fontFamily="Inter"
                                fontWeight="semibold"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0"
                                textAlign="center"
                            >Linkedln</Text>
                        </Box>
                        <Box
                            display="flex"
                            bg="#F9D0FF"
                            alignItems="center"
                            w="fit-content"
                            h="54px"
                            borderRadius="30px"
                            py="16px"
                            px="24px"
                            gap="8px"
                            color="terciary.500"
                        >
                            <Image src="/my/ic_baseline-tiktok.svg" />
                            <Text
                                as="span"
                                fontFamily="Inter"
                                fontWeight="semibold"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0"
                                textAlign="center"
                            >TikTok</Text>
                        </Box>
                        <Box
                            display="flex"
                            bg="#F9D0FF"
                            alignItems="center"
                            w="fit-content"
                            h="54px"
                            borderRadius="30px"
                            py="16px"
                            px="24px"
                            gap="8px"
                            color="terciary.500"
                        >
                            <Icon as={EmailIcon} />
                            <Text
                                as="span"
                                fontFamily="Inter"
                                fontWeight="semibold"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0"
                                textAlign="center"
                            >Contacto</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box
                    w="479px"
                    h="500px"
                    borderRadius="99px"
                    background="radial-gradient(circle at center, #FFFFFF 0%, #F9D0FF 100%)"
                    position="relative"
                    overflow="hidden"
                >
                    <Image
                        src="/my/heroMy.png"
                        alt="Foto derecha"
                        maxW="420px"
                        w="100%"
                        left="-100px"
                        borderRadius="2xl"
                        position="absolute"
                        bottom="0"
                        transform="translateX(100px)"
                        zIndex="1"
                    />
                    <Image
                        src="/home/VectorCh.png"
                        position="absolute"
                        top="56"
                        right="-1"
                        zIndex="2"
                    />
                </Box>
            </Flex>
        </Box>
    )
}