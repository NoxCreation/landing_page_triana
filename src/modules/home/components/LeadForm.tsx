"use client";

import { Box, Flex, Grid, Heading, Text, Input, Textarea, Field, Select, Portal, createListCollection } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css';
import { useState } from "react";
import { Transition } from "@/components/Transition";

export default function LeadForm() {

    // Estados del formulario
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState<string | undefined>("");
    const [businessType, setBusinessType] = useState("");
    const [serviceInterest, setServiceInterest] = useState<string>("");
    const [description, setDescription] = useState("");
    const [helpNeeded, setHelpNeeded] = useState("");

    const isValidPhone = (phone?: string) => {
        return phone && phone.length >= 8;
    };

    const handleSubmit = () => {
        // Validaciones básicas
        if (!firstName.trim()) {
            /* toast({ title: "Campo requerido", description: "Por favor ingresa tu nombre.", status: "warning", duration: 3000, isClosable: true }); */
            return;
        }
        if (!lastName.trim()) {
            /* toast({ title: "Campo requerido", description: "Por favor ingresa tu apellido.", status: "warning", duration: 3000, isClosable: true }); */
            return;
        }
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            /* toast({ title: "Email inválido", description: "Ingresa un correo electrónico válido.", status: "warning", duration: 3000, isClosable: true }); */
            return;
        }
        if (!isValidPhone(phone)) {
            /* toast({ title: "Teléfono inválido", description: "Ingresa un número de teléfono válido con código de país.", status: "warning", duration: 3000, isClosable: true }); */
            return;
        }
        if (!businessType.trim()) {
            /* toast({ title: "Campo requerido", description: "Indica el tipo de negocio.", status: "warning", duration: 3000, isClosable: true }); */
            return;
        }
        if (!serviceInterest) {
            /* toast({ title: "Campo requerido", description: "Selecciona un servicio de interés.", status: "warning", duration: 3000, isClosable: true }); */
            return;
        }
        if (!description.trim()) {
            /* toast({ title: "Campo requerido", description: "Describe brevemente tu negocio.", status: "warning", duration: 3000, isClosable: true }); */
            return;
        }

        // Construir mensaje bonito
        const message = `
🌟 *NUEVO LEAD - TRIANA MARKETING* 🌟

👤 *Nombre:* ${firstName} ${lastName}
📧 *Email:* ${email}
📞 *Teléfono:* ${phone}
🏢 *Tipo de negocio:* ${businessType}
🎯 *Servicio de interés:* ${serviceInterest}

📝 *Descripción del negocio:*
${description}

💡 *¿En qué podemos ayudarte?*
${helpNeeded || "No especificado"}

---
*Enviado desde el formulario web*
    `.trim();

        // Codificar para URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;

        // Abrir WhatsApp
        window.open(whatsappUrl, "_blank");

        // Opcional: limpiar formulario o mostrar éxito
        /* toast({
            title: "¡Mensaje enviado!",
            description: "Serás redirigido a WhatsApp para enviar la propuesta.",
            status: "success",
            duration: 4000,
            isClosable: true,
        }); */
    };

    const serviceCollection = createListCollection({
        items: [
            { label: "Asesoría estratégica", value: "asesoria_estrategica" },
            { label: "Gestión de redes sociales", value: "gestion_redes" },
            { label: "Creación de contenido", value: "creacion_contenido" },
            { label: "Tienda en línea", value: "tienda_online" },
            { label: "Otro", value: "otro" },
        ],
    });

    return (
        <Transition type="top" velocity="slow">
            <Box w="100%" bg="gray.100" py={16} px={4}>
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

                    <Box p={{ base: 6, md: 10 }} maxW="900px" mx="auto">
                        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                            <Field.Root>
                                <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                    Nombre Completo*
                                </Field.Label>
                                <Input
                                    placeholder="Juan"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
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
                                <Field.Label visibility="hidden">Apellido*</Field.Label>
                                <Input
                                    placeholder="Pérez"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
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
                                <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                    Correo electrónico*
                                </Field.Label>
                                <Input
                                    type="email"
                                    placeholder="juan@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
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
                                    bg="transparent"
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
                                        placeholder="Número telefónico"
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
                                <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                    Tipo de Negocio*
                                </Field.Label>
                                <Input
                                    placeholder="Escribe tu tipo de negocio"
                                    value={businessType}
                                    onChange={(e) => setBusinessType(e.target.value)}
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
                                <Field.Root>
                                    <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                        Servicios de interés*
                                    </Field.Label>
                                    <Select.Root
                                        collection={serviceCollection}
                                        value={[serviceInterest]} // Select.Root espera array internamente
                                        onValueChange={(e) => setServiceInterest(e.value[0])} // Extrae el primer valor
                                    >
                                        <Select.HiddenSelect />
                                        <Select.Control
                                            border="1px solid"
                                            borderColor="#E5E7EB"
                                            borderTopLeftRadius="3xl"
                                            borderTopRightRadius="3xl"
                                            borderBottomLeftRadius="0"
                                            borderBottomRightRadius="3xl"
                                            _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                            h="50px"
                                            bg="transparent"
                                            cursor="pointer"
                                            w="100%"
                                            px={4}
                                            display="flex"
                                            alignItems="center"
                                        >
                                            <Select.Trigger border="none">
                                                <Select.ValueText placeholder="Selecciona una opción" />
                                            </Select.Trigger>
                                            <Select.IndicatorGroup>
                                                <Select.Indicator />
                                            </Select.IndicatorGroup>
                                        </Select.Control>
                                        <Portal>
                                            <Select.Positioner>
                                                <Select.Content>
                                                    {serviceCollection.items.map((item) => (
                                                        <Select.Item item={item} key={item.value}>
                                                            {item.label}
                                                            <Select.ItemIndicator />
                                                        </Select.Item>
                                                    ))}
                                                </Select.Content>
                                            </Select.Positioner>
                                        </Portal>
                                    </Select.Root>
                                </Field.Root>

                            </Field.Root>
                        </Grid>

                        <Box mb={6}>
                            <Text fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                Descripción de tu negocio*
                            </Text>
                            <Textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                            <Text fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                ¿En qué podemos ayudarte?
                            </Text>
                            <Textarea
                                value={helpNeeded}
                                onChange={(e) => setHelpNeeded(e.target.value)}
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
                                onClick={handleSubmit}
                            >
                                <Text>Enviar propuesta por WhatsApp</Text>
                            </ButtonUi>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Transition>
    );
}