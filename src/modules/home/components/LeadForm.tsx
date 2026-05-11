"use client";

import { Box, Flex, Grid, Heading, Text, Input, Textarea, Field, Select, Portal, createListCollection } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css';
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    businessType: string;
    serviceInterest: string;
    description: string;
    helpNeeded: string;
};

export default function LeadForm({
    content
}: {
    content: ContentType
}) {

    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormValues>({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            businessType: "",
            serviceInterest: "",
            description: "",
            helpNeeded: "",
        }
    });

    const isValidPhone = (phone?: string) => {
        return phone && phone.length >= 8;
    };

    const onSubmit = async (data: FormValues) => {
        const {
            first_name,
            last_name,
            email,
            phone,
            businessType,
            serviceInterest,
            description,
            helpNeeded
        } = data

        // Construir mensaje bonito
        const message = `
🌟 *FORMULARIO WEB - TRIANA MARKETING* 🌟

👤 *Nombre:* ${first_name} ${last_name}
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
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${content.contact.contact.phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;

        // Abrir WhatsApp
        window.open(whatsappUrl, "_blank");

    };


    const serviceCollection = createListCollection({
        items: [
            ...content.services.services.map(e => ({ label: e.title, value: e.title })),
            { label: "Aun no lo sé bien", value: "Aun no lo sé bien" },
        ]
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

                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                        <Box p={{ base: 6, md: 10 }} maxW="900px" mx="auto">
                            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                                <Field.Root invalid={!!errors.first_name}>
                                    <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                        Nombre*
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
                                        {...register('first_name', { required: 'El campo es obligatorio' })}
                                    />
                                    <Field.ErrorText>{errors.first_name?.message}</Field.ErrorText>
                                </Field.Root>

                                <Field.Root invalid={!!errors.last_name}>
                                    <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                        Apellidos*
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
                                        {...register('last_name', { required: 'El campo es obligatorio' })}
                                    />
                                    <Field.ErrorText>{errors.last_name?.message}</Field.ErrorText>
                                </Field.Root>
                            </Grid>

                            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                                <Field.Root invalid={!!errors.email}>
                                    <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
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
                                        {...register('email', { required: 'El campo es obligatorio' })}
                                    />
                                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                </Field.Root>

                                <Field.Root invalid={!!errors.phone}>
                                    <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                        Teléfono*
                                    </Field.Label>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{ required: 'El teléfono es obligatorio' }}
                                        render={({ field }) => (
                                            <Box
                                                w="full"
                                                position="relative"
                                                border="1px solid"
                                                borderColor={errors.phone ? 'red.500 !important' : '#E5E7EB !important'}
                                                borderTopLeftRadius="3xl"
                                                borderTopRightRadius="3xl"
                                                borderBottomLeftRadius="0"
                                                borderBottomRightRadius="3xl"
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
                                                        gap: '6px'
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
                                                    },
                                                }}
                                            >
                                                <PhoneInput
                                                    placeholder="Número de teléfono"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    onBlur={field.onBlur}
                                                    defaultCountry="US"
                                                    flags={flags}
                                                />
                                            </Box>
                                        )}
                                    />
                                    <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                                </Field.Root>
                            </Grid>

                            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                                <Field.Root invalid={!!errors.businessType}>
                                    <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
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
                                        {...register('businessType', { required: 'El campo es obligatorio' })}
                                    />
                                    <Field.ErrorText>{errors.businessType?.message}</Field.ErrorText>
                                </Field.Root>
                                <Field.Root>
                                    <Field.Root invalid={!!errors.serviceInterest}>
                                        <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                            Servicios de interés*
                                        </Field.Label>
                                        <Select.Root
                                            collection={serviceCollection}
                                            {...register('serviceInterest', { required: 'El campo es obligatorio' })}
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
                                                        {serviceCollection.items.map((item, index) => (
                                                            <Select.Item item={item} key={`service-${index}-${item.value}`} p={2}>
                                                                {item.label}
                                                                <Select.ItemIndicator />
                                                            </Select.Item>
                                                        ))}
                                                    </Select.Content>
                                                </Select.Positioner>
                                            </Portal>
                                        </Select.Root>
                                        <Field.ErrorText>{errors.serviceInterest?.message}</Field.ErrorText>
                                    </Field.Root>
                                </Field.Root>
                            </Grid>

                            <Field.Root invalid={!!errors.description}>
                                <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                    Descripción de tu negocio*
                                </Field.Label>
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
                                    {...register('description', { required: 'El campo es obligatorio' })}
                                />
                                <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
                            </Field.Root>

                            <Field.Root invalid={!!errors.helpNeeded} mt={4}>
                                <Field.Label fontWeight="600" fontFamily="inter" fontSize="18px" lineHeight="22px" letterSpacing="0px" color="#3F3F3F">
                                    ¿En qué podemos ayudarte?
                                </Field.Label>
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
                                    {...register('helpNeeded', { required: 'El campo es obligatorio' })}
                                />
                                <Field.ErrorText>{errors.helpNeeded?.message}</Field.ErrorText>
                            </Field.Root>

                            <Flex mt={4}>
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
                                    type="submit"
                                >
                                    <Text>Enviar propuesta por WhatsApp</Text>
                                </ButtonUi>
                            </Flex>
                        </Box>
                    </form>

                </Box>
            </Box>
        </Transition>
    );
}