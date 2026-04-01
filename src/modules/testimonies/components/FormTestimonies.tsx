"use client"

import { Box, Flex, Grid, Heading, Text, Input, Textarea, Field } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import { Transition } from "@/components/Transition";

export default function FormTestimonies() {
    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Box maxW="1200px" mx="auto" px={{ base: 6, md: 10 }}>
                <Box textAlign="start" mb={12}>
                    <Transition type="top" velocity="slow">
                        <Heading
                            as="h2"
                            color="#3F3F3F"
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="800"
                            fontFamily="Bricolage Grotesque"
                            lineHeight="40px"
                            letterSpacing="0px"
                            mb={4}
                        >
                            ¿Hemos trabajado juntos? Deja tu experiencia
                        </Heading>
                    </Transition>
                    <Transition type="left" velocity="slow">
                        <Text
                            fontSize="18px"
                            color="#717171"
                            lineHeight="22px"
                            letterSpacing="0px"
                            fontWeight={400}
                        >
                            Completa el formulario y recibe una respuesta personalizada en menos de 24 horas.
                        </Text>
                    </Transition>
                </Box>

                <Box
                    maxW="1120px"
                    mx="auto"
                >
                    <Transition type="bootom" velocity="slow">
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                            gap={4}
                            mb={4}
                        >
                            <Field.Root>
                                <Field.Label
                                    fontWeight="600"
                                    fontFamily="inter"
                                    fontSize="18px"
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                    color="#3F3F3F"
                                >
                                    Nombre Completo*
                                </Field.Label>

                                <Input
                                    placeholder="Juan"
                                    border="1px solid"
                                    borderColor="#E5E7EB"
                                    borderTopLeftRadius="3xl"
                                    borderTopRightRadius="3xl"
                                    borderBottomLeftRadius="0"
                                    borderBottomRightRadius="3xl"
                                    h="50px"
                                    p="3"
                                />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label visibility="hidden">
                                    Apellido*
                                </Field.Label>

                                <Input
                                    placeholder="Pérez"
                                    border="1px solid"
                                    borderColor="#E5E7EB"
                                    borderTopLeftRadius="3xl"
                                    borderTopRightRadius="3xl"
                                    borderBottomLeftRadius="0"
                                    borderBottomRightRadius="3xl"
                                    h="50px"
                                    p="3"
                                />
                            </Field.Root>
                        </Grid>

                        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                            <Field.Root>
                                <Field.Label
                                    fontWeight="600"
                                    fontFamily="inter"
                                    fontSize="18px"
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                    color="#3F3F3F"
                                >
                                    Correo electrónico*
                                </Field.Label>
                                <Input
                                    type="email"
                                    placeholder="juan@ejemplo.com"
                                    border="1px solid"
                                    borderColor="#E5E7EB"
                                    borderTopLeftRadius="3xl"
                                    borderTopRightRadius="3xl"
                                    borderBottomLeftRadius="0"
                                    borderBottomRightRadius="3xl"
                                    _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                    h="50px"
                                    p="3"
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label
                                    fontWeight="600"
                                    fontFamily="inter"
                                    fontSize="18px"
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                    color="#3F3F3F"
                                >
                                    Servicio/Nombre de tu negocio
                                </Field.Label>
                                <Input
                                    placeholder="Escribe tu tipo de negocio"
                                    border="1px solid"
                                    borderColor="#E5E7EB"
                                    borderTopLeftRadius="3xl"
                                    borderTopRightRadius="3xl"
                                    borderBottomLeftRadius="0"
                                    borderBottomRightRadius="3xl"
                                    _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                    h="50px"
                                    p="3"
                                />
                            </Field.Root>
                        </Grid>

                        <Box mb={6}>
                            <Text fontWeight="600"
                                fontFamily="inter"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                color="#3F3F3F"
                            >
                                Mensaje
                            </Text>
                            <Textarea
                                placeholder="Déjanos un mensaje"
                                border="1px solid"
                                borderColor="#E5E7EB"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                rows={4}
                                p="3"
                                resize="none"
                            />
                        </Box>
                    </Transition>

                    <Flex>
                        <Transition type="bootom" velocity="slow">
                            <ButtonUi
                                color="white"
                                bg="primary.500"
                                ml="auto"
                                boxShadow="0px 10px 20px 0px rgba(178, 35, 207, 0.24)"
                                _hover={{
                                    bg: "#5A0F6E",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                                }}
                                _active={{
                                    transform: "scale(0.98)",
                                }}
                            >
                                <Text>
                                    Publicar testimonio
                                </Text>
                            </ButtonUi>
                        </Transition>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
