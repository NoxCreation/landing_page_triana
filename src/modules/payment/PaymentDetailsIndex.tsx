'use client';

import { ContainerLanding } from "@/components/container"
import { ServiceType } from "@/types/ServiceType"
import {
    Button, Field, Grid, Input, Stack, VStack, Text, Box, Heading,
    HStack, Icon, Separator, Checkbox, Link, Alert
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import { FiCheckCircle, FiShield, FiHelpCircle, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";
import { useState } from "react";
import { Transition } from "@/components/Transition";

type FormValues = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    terms: boolean;
};

export const PaymentDetailsIndex = ({ service }: { service: ServiceType }) => {
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            setSubmitError(null);
            console.log(data);

            const res = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: service.title,
                    price: Number(service.price),
                    serviceId: service.id,
                    ...data
                }),
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Backend error:", text);
                return;
            }

            const dataResponse = await res.json();

            console.log("URL de Stripe:", dataResponse.url);

            window.location.href = dataResponse.url;

        } catch (err) {
            setSubmitError("Error al procesar el pago. Inténtalo de nuevo.");
        }
    };

    return (
        <ContainerLanding>
            <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={10} w="100%" mt={12}>
                {/* Columna izquierda - Resumen del servicio */}
                <Transition type="left" velocity="slow">
                    <Stack position="relative">
                        <Link
                            as={NextLink}
                            href={`/service/detail/${service.slug}`}
                            mb={2}
                        >
                            <FiArrowLeft /> Volver a servicios
                        </Link>

                        <Stack gap={6} bg="white" p={6} borderRadius="2xl" border="1px solid" borderColor="gray.200">
                            <Heading as="h1" size="xl" color="primary.500" fontWeight="bold" lineHeight="1.2">
                                {service.title}
                            </Heading>

                            <Box>
                                <Text fontSize="4xl" fontWeight="extrabold" color="gray.800">
                                    ${service.price}
                                    <Text as="span" fontSize="lg" fontWeight="normal" color="gray.500" ml={1}>USD</Text>
                                </Text>
                                <Text fontSize="sm" color="gray.500" mt={1}>
                                    {service.type === "weekly" && "Pago semanal"}
                                    {service.type === "diary" && "Pago diario"}
                                    {service.type === "monthly" && "Pago mensual"}
                                    {service.type === "session" && "Por sesión"}
                                    {service.type === "single_payment" && "Pago único"}
                                </Text>
                            </Box>

                            <Separator />

                            <Stack>
                                <Heading as="h3" size="sm" color="gray.600" textTransform="uppercase">Descripción</Heading>
                                <Text color="gray.600" fontSize="sm">
                                    {service.description?.replace(/<[^>]*>/g, '').slice(0, 180)}
                                    {service.description && service.description.length > 180 && "..."}
                                </Text>
                            </Stack>

                            <Points items={service.include} label="Incluye" />

                            <Points items={service.notInclude} label="No Incluye" />

                            <Points items={service.requirement} label={service.requireLabel} />

                            <HStack gap={2} bg="gray.50" p={3} borderRadius="lg">
                                <Icon as={FiShield} color="primary.500" boxSize="20px" />
                                <Text fontSize="xs" color="gray.600">Pago 100% seguro. Tus datos están protegidos.</Text>
                            </HStack>
                        </Stack>
                    </Stack>
                </Transition>

                {/* Columna derecha - Formulario de pago */}
                <Transition type="rigth" velocity="slow">
                    <Stack>
                        <Text fontSize="xs" color="gray.700">
                            Complete sus datos para procesar su pago de forma segura. Una vez realizado el pago,
                            en 24-48 horas hábiles nos pondremos en contacto con usted.
                        </Text>

                        {submitError && (
                            <Alert.Root status="error" mt={4}>
                                <Alert.Indicator />
                                <Alert.Content>{submitError}</Alert.Content>
                            </Alert.Root>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                            <VStack gap={4} align="stretch" mt={4}>
                                <Field.Root invalid={!!errors.first_name} bg="white">
                                    <Field.Label>Nombre</Field.Label>
                                    <Input {...register('first_name', { required: 'El campo es obligatorio' })} />
                                    <Field.ErrorText>{errors.first_name?.message}</Field.ErrorText>
                                </Field.Root>

                                <Field.Root invalid={!!errors.last_name} bg="white">
                                    <Field.Label>Apellido</Field.Label>
                                    <Input {...register('last_name', { required: 'El campo es obligatorio' })} />
                                    <Field.ErrorText>{errors.last_name?.message}</Field.ErrorText>
                                </Field.Root>

                                <Field.Root invalid={!!errors.email} bg="white">
                                    <Field.Label>Correo electrónico</Field.Label>
                                    <Input
                                        type="email"
                                        {...register('email', {
                                            required: 'El correo es obligatorio',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Correo inválido',
                                            },
                                        })}
                                    />
                                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                </Field.Root>

                                <Field.Root invalid={!!errors.phone} bg="white">
                                    <Field.Label>Teléfono</Field.Label>
                                    <Input {...register('phone', { required: 'El campo es obligatorio' })} />
                                    <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                                </Field.Root>

                                {/* Checkbox de términos */}
                                <Checkbox.Root required>
                                    <Checkbox.HiddenInput {...register('terms', { required: true })} />
                                    <Checkbox.Control />
                                    <Checkbox.Label fontSize="xs" color="gray.500">
                                        Acepto los <Link as={NextLink} href="/terminos" color="primary.500">Términos y Condiciones</Link> y la{" "}
                                        <Link as={NextLink} href="/privacidad" color="primary.500">Política de Privacidad</Link>.
                                    </Checkbox.Label>
                                </Checkbox.Root>

                                {/* Total a pagar + botón */}
                                <HStack justify="space-between" mt={2}>
                                    <Text fontWeight="bold">Total a pagar:</Text>
                                    <Text fontSize="2xl" fontWeight="bold" color="primary.500">
                                        ${service.price} USD
                                    </Text>
                                </HStack>

                                <Button
                                    type="submit"
                                    bg="primary.500"
                                    color="white"
                                    size="lg"
                                    loading={isSubmitting}
                                    _hover={{ bg: 'primary.600', transform: 'translateY(-2px)' }}
                                    transition="all 0.2s"
                                >
                                    Realizar el Pago
                                </Button>

                                <HStack justify="center" mt={2}>
                                    <Icon as={FiHelpCircle} color="gray.400" />
                                    <Text fontSize="xs" color="gray.500">
                                        ¿Problemas para pagar?{" "}
                                        <Link as={NextLink} href="/contact" color="primary.500">
                                            Contáctanos
                                        </Link>
                                    </Text>
                                </HStack>
                            </VStack>
                        </form>
                    </Stack>
                </Transition>

            </Grid>
        </ContainerLanding>
    );
};

export const Points = ({
    items,
    label,
}: {
    items: Array<string>;
    label: string;
}) => {
    return (
        <>
            {items.length != 0 && (
                <Stack>
                    <Heading as="h3" size="sm" color="gray.600" textTransform="uppercase">{label}</Heading>
                    <VStack align="stretch" gap={2}>
                        {items.slice(0, 5).map((item, idx) => (
                            <HStack key={idx} gap={2}>
                                <Icon as={FiCheckCircle} color="green.500" boxSize="18px" />
                                <Text fontSize="sm" color="gray.700">{item}</Text>
                            </HStack>
                        ))}
                        {items.length > 5 && (
                            <Text fontSize="xs" color="gray.500" textAlign="right">
                                +{items.length - 5} más
                            </Text>
                        )}
                    </VStack>
                </Stack>
            )}
        </>
    );
};