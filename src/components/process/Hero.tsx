import { Box, Button, Card, Flex, Grid, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { dataCard } from "@/constants/process/Methodology"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Hero() {

    return (
        <Box w={"100%"} bg="#F3A0FF0D" color="black">
            <Box p={20}>
                <Flex m={"auto"} w="1100px" gap="8px" textAlign="center" mb={12} direction="column">
                    <Box position="relative" w="650px" display="inline-block" m="auto">
                        <Heading
                            as="h1"
                            h="70px"
                            color="primary.500"
                            fontFamily="Bricolage Grotesque"
                            fontWeight="extrabold"
                            fontSize="54px"
                            lineHeight="70px"
                        >
                            Metodología Triana
                        </Heading>

                        <Image
                            src="/home/Vector.png"
                            w="32px"
                            h="32px"
                            position="absolute"
                            top="3px"
                            right="30px"
                        />
                    </Box>

                    <Text
                        textAlign="center"
                        fontFamily="Inter"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="22px"
                        letterSpacing="0px"
                        color="#717171">
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
