import { Box, Grid, Heading, Text, VStack, HStack, Button, Separator, Icon } from "@chakra-ui/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from '@mui/icons-material/Check';
import { services } from "@/constants/service/extraService"

export default function ExtraServices() {
    return (
        <Box bg="gray.50" py={16} px={4}>
            <Box maxW="1120px" mx="auto">
                <Heading
                    color="primary.500"
                    fontWeight={800}
                    fontSize={{ base: "24px", lg: "36px" }}
                    fontFamily="Bricolage Grotesque"
                    lineHeight="40px"
                    letterSpacing="0px"
                    mb={2}
                >
                    Servicios adicionales (opcionales)
                </Heading>

                <Text
                    color="#717171"
                    fontWeight={400}
                    fontSize="18px"
                    lineHeight="22px"
                    letterSpacing="0px"
                    mb={10}
                >
                    Horario: De lunes a viernes, de 7:00 p. m. a 9:00 p. m. (horario de Houston).
                </Text>

                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    gap={6}
                >
                    {services.map((service, index) => (
                        <Box
                            key={index}
                            bg="white"
                            borderTopLeftRadius="4xl"
                            borderTopRightRadius="4xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="4xl"
                            border="2px solid"
                            borderColor="#E5E7EB"
                            overflow="hidden"
                            display="flex"
                            flexDirection="column"
                        >
                            <Box p={6}>
                                <Heading
                                    fontSize="24px"
                                    fontWeight="800"
                                    fontFamily="inter"
                                    color="#3F3F3F"
                                    lineHeight="32px"
                                    letterSpacing="0px"
                                >
                                    {service.title}
                                </Heading>
                            </Box>

                            <Separator borderColor="#E5E7EB" borderWidth="1px" />

                            <Box p={6}>
                                <Text
                                    color="#3F3F3F"
                                    fontWeight="600"
                                    fontSize="18px"
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                    mb={3}
                                >
                                    Incluye:
                                </Text>

                                <VStack align="start" gap={3}>
                                    {service.items.map((item, i) => (
                                        <HStack key={i} align="start">
                                            <Icon
                                                as={CheckCircleIcon}
                                                color="purple.500"
                                                mt="2px"
                                            />
                                            <Text
                                                color="#717171"
                                                fontSize="14px"
                                                fontWeight={400}
                                                lineHeight="20px"
                                                letterSpacing="0px"
                                            >
                                                {item}
                                            </Text>
                                        </HStack>
                                    ))}
                                </VStack>
                            </Box>

                            <Box px={6} pb={4} mt="auto" >
                                <Box
                                    bg="#F6F2FF"
                                    borderRadius="lg"
                                    py={3}
                                    textAlign="center"
                                    fontWeight="800"
                                    fontFamily="Bricolage Grotesque"
                                    fontSize="36px"
                                    letterSpacing="0px"
                                    color="#3F3F3F"
                                >
                                    ${service.price}
                                </Box>
                            </Box>

                            <Box px={6} pb={6}>
                                {service.added ? (
                                    <Button
                                        w="100%"
                                        variant="outline"
                                        borderRadius="full"
                                        borderColor="primary.500"
                                        bg="primary.500"
                                        color="#ffff"
                                    >
                                        <HStack gap={2}>
                                            <CheckIcon />
                                            <span>Servicio Añadido</span>
                                        </HStack>
                                    </Button>
                                ) : (
                                    <Button
                                        w="100%"
                                        variant="outline"
                                        borderRadius="full"
                                        borderColor="primary.500"
                                        color="primary.500"
                                        bg="#ffff"
                                    >
                                        <HStack gap={2}>
                                            <AddIcon />
                                            <span>Añadir Servicio</span>
                                        </HStack>
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}