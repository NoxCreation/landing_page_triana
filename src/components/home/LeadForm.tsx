"use client"

import { Box, Flex, Grid, Heading, Text, Input, Textarea, Field } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'
import { useState } from "react";

export default function LeadForm() {

    const [phone, setPhone] = useState<string>()

    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center">
                    <Heading
                        as="h1"
                        color="#3F3F3F"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight="800"
                        fontFamily="Bricolage Grotesque"
                        lineHeight={{ base: "1.3", md: "70px" }}
                        letterSpacing="0px"
                        mb={4}
                    >
                        ¿Listo para transformar tu negocio?
                    </Heading>
                    <Text
                        fontSize="18px"
                        color="#717171"
                        lineHeight="22px"
                        letterSpacing="0px"
                        fontWeight={400}
                    >
                        Completa el formulario y recibe una respuesta personalizada en menos de 24 horas
                    </Text>
                </Box>

                <Box
                    p={{ base: 6, md: 10 }}
                    maxW="900px"
                    mx="auto"
                >
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
                                Número de teléfono*
                            </Field.Label>
                            <Box
                                w="full"
                                position="relative"
                                border="1px solid"
                                borderColor="#E5E7EB"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                bg="white"
                                h="50px"
                                overflow="hidden"
                                _focusWithin={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                css={{
                                    '& .PhoneInput': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        padding: '0 16px',
                                        gap: '10px',
                                    },
                                    '& .PhoneInputInput': {
                                        border: 'none !important',
                                        outline: 'none !important',
                                        background: 'transparent !important',
                                        backgroundColor: 'transparent !important',
                                        flex: 1,
                                        height: '100%',
                                        fontSize: '16px',
                                        padding: '0 !important',
                                        margin: '0 !important',
                                        boxShadow: 'none !important',
                                    },
                                    '& .PhoneInputCountry': {
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                    },

                                    '& .PhoneInputCountryFlag': {
                                        width: '20px',
                                        height: '14px',
                                        borderRadius: '2px',
                                        overflow: 'hidden',
                                    },
                                    '& .PhoneInputCountrySelectArrow': {
                                        display: 'none !important',
                                    },
                                    '& .PhoneInputCountrySelect': {
                                        border: 'none !important',
                                        outline: 'none !important',
                                        background: 'transparent !important',
                                        backgroundColor: 'transparent !important',
                                    },
                                }}
                            >
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={setPhone}
                                    defaultCountry="US"
                                    flags={flags}
                                />
                            </Box>
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
                                Tipo de Negocio*
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
                        <Field.Root>
                            <Field.Label
                                fontWeight="600"
                                fontFamily="inter"
                                fontSize="18px"
                                lineHeight="22px"
                                letterSpacing="0px"
                                color="#3F3F3F"
                            >
                                Servicios de interés*
                            </Field.Label>
                            <Box
                                as="select"
                                border="1px solid"
                                borderColor="#E5E7EB"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl" _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                h="50px"
                                bg="transparent"
                                cursor="pointer"
                                w="100%"
                                p="3"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="asesoria">Asesoría estratégica</option>
                                <option value="redes">Gestión de redes sociales</option>
                                <option value="contenido">Creación de contenido</option>
                                <option value="tienda">Tienda en línea</option>
                                <option value="otro">Otro</option>
                            </Box>
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
                            Descipción de tu negocio*
                        </Text>
                        <Textarea
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

                    <Box mb={6}>
                        <Text fontWeight="600"
                            fontFamily="inter"
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="0px"
                            color="#3F3F3F"
                        >
                            ¿En qué podemos ayudarte?
                        </Text>
                        <Textarea
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

                    <Flex>
                        <ButtonUi
                            icon={<WhatsAppIcon />}
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
                                Enviar propuesta por WhatsApp
                            </Text>
                        </ButtonUi>
                    </Flex>
                </Box>
            </Box>
        </Box >
    );
}
