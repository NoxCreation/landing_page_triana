import { Box, Button, Card, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { dataCard } from "@/constants/my/work"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Work() {

    return (
        <Box w={"100%"} color="black" bg="#F3A0FF0D">
            <Box p={20}>
                <Box m={"auto"} w="1100px" textAlign="center" mb={12}>
                    <Heading
                        textAlign="center"
                        fontFamily="Bricolage Grotesque"
                        fontWeight="800"
                        fontSize="64px"
                        lineHeight="70px"
                        letterSpacing="0%"
                        color="#3F3F3F">
                        Mi Filosofía de Trabajo
                    </Heading>
                </Box>
                <Flex direction="column" alignItems="center" justify="center" gap={10}>
                    <Grid maxW="1120px" templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="24px" justifyItems="center">
                        {dataCard.map((data, index) => (
                            <Card.Root
                                key={index}
                                h="190px"
                                w="330px"
                                borderRadius="48px"
                                border="2px solid"
                                borderColor="#E5E7EB"
                                gap="16px"
                                bg="white"
                                borderTopLeftRadius="4xl"
                                borderTopRightRadius="4xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="4xl"
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
                                        w="266px"
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
                    <Box textAlign="center" mt={8}>
                        <Heading
                            as="h2"
                            fontSize={{ base: "2xl", md: "36px" }}
                            fontWeight={800}
                            lineHeight="40px"
                            letterSpacing="0px"
                            color="#3F3F3F"
                            mb={4}
                        >
                            ¿Listo para trabajar juntos?
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
                            Cuéntame sobre tu proyecto y veamos cómo puedo ayudarte a alcanzar
                            tus objetivos.
                        </Text>
                    </Box>
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
                        <Icon as={WhatsAppIcon} />
                        Hablame de tu proyecto
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
