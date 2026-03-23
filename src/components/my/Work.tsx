import { Box, Button, Card, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { dataCard } from "@/constants/my/work"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InfoCard from "../cards/InfoCard";

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
                            <InfoCard
                                key={index}
                                title={data.title}
                                description={data.description}
                            />
                        ))}
                    </Grid>
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
                        _hover={{
                            bg: "#5A0F6E",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                        }}
                        _active={{
                            transform: "scale(0.98)",
                        }}
                    >
                        <Icon as={WhatsAppIcon} />
                        Hablame de tu proyecto
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
