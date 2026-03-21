import { Box, Button, Card, Flex, Grid, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { dataCard } from "@/constants/process/Methodology"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Hero() {

    return (
        <Box w={"100%"} bg="#F3A0FF0D" color="black">
            <Box p={20}>
                <Flex m={"auto"} maxW="1100px" gap="8px" textAlign="center" mb={12} direction="column" px={4}>
                    <Box position="relative" maxW="650px" display="inline-block" m="auto">
                        <Heading
                            as="h1"
                            color="primary.500"
                            fontFamily="Bricolage Grotesque"
                            fontWeight="extrabold"
                            fontSize={{ base: "28px", md: "40px", lg: "54px" }}
                            lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                        >
                            Metodología Triana
                        </Heading>

                        <Image
                            src="/home/Vector.png"
                            w={{ base: "24px", lg: "32px" }}
                            h={{ base: "24px", lg: "32px" }}
                            position="absolute"
                            top={{ base: "-5px", lg: "3px" }}
                            right={{ base: "-10px", lg: "-40px" }}
                        />
                    </Box>

                    <Text
                        textAlign="center"
                        fontFamily="Inter"
                        fontWeight="400"
                        fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                        lineHeight="22px"
                        letterSpacing="0px"
                        color="#717171"
                        px={4}>
                        Creemos en el marketing práctico, medible y ajustable. No nos quedamos en
                        teoría; nos involucramos en tu proyecto para asegurar que cada paso se dé
                        correctamente
                    </Text>
                </Flex>
                <Flex direction="column" alignItems="center" justify="center" gap={10}>
                    <Grid maxW="1120px" templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="24px" justifyItems="center">
                        {dataCard.map((data, index) => (
                            <Card.Root
                                key={index}
                                bg="white"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                            >
                                <Card.Body
                                    gap="2"
                                    textAlign="center"
                                    alignItems="center"
                                    color="black"
                                    p="8"
                                >
                                    <Card.Title
                                        fontFamily="Inter"
                                        fontWeight="800"
                                        fontSize="24px"
                                        lineHeight="32px"
                                        letterSpacing="0%"
                                        textAlign="center"
                                        color="#3F3F3F">
                                        {data.title}
                                    </Card.Title>

                                    <Card.Description
                                        fontFamily="Inter"
                                        fontWeight="400"
                                        fontSize="18px"
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        textAlign="center"
                                        color="#717171">
                                        {data.description}
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
                        ))}
                    </Grid>
                    <Button
                        px="24px"
                        py="16px"
                        gap="8px"
                        borderRadius="99px"
                        bg="primary.500"
                        color="#ffff"
                        border="1px solid primary.500"
                        boxShadow="0px 10px 20px rgba(178, 35, 207, 0.24)"
                        _hover={{
                            bg: "#5A0F6E",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                        }}
                        _active={{
                            transform: "scale(0.98)",
                        }}
                    >
                        <Icon
                            as={WhatsAppIcon}
                        />
                        Comenzar ahora
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
