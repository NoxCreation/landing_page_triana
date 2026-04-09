"use client"

import { Box, Flex, Grid, Heading, Text, Input, Textarea, Field } from "@chakra-ui/react";
import ButtonUi from "@/components/Button";
import { Transition } from "@/components/Transition";
import { useForm } from "react-hook-form";
import { toaster, Toaster } from "@/ui/toaster";

type FormValues = {
    name: string;
    position: string;
    comment: string;
};

export default function FormTestimonies() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormValues>({
        defaultValues: {
            name: "",
            position: "",
            comment: "",
        }
    });

    const onSubmit = async (data: FormValues) => {
        console.log("Form data:", data);

        try {
            const res = await fetch("/api/testimonies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Backend error:", text);
                toaster.create({
                    title: "Error al enviar el testimonio. Por favor, intenta de nuevo más tarde.",
                    type: "error",
                    duration: 5000
                });
                return;
            }
            else {
                toaster.create({
                    title: "Testimonio enviado correctamente. Gracias por compartir tu experiencia. Su comentario será revisado y publicado en breve.",
                    type: "success",
                    duration: 5000
                });
            }
            reset();
        } catch (error) {
            console.error("Error al enviar el testimonio:", error);
            alert("Error al enviar el testimonio. Por favor, intenta de nuevo más tarde.");
            toaster.create({
                title: "Error al enviar el testimonio. Por favor, intenta de nuevo más tarde.",
                type: "error",
                duration: 5000
            });
        }
    }

    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Toaster />
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
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                        <Transition type="bootom" velocity="slow">
                            <Grid
                                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                                gap={4}
                                mb={4}
                            >
                                <Field.Root invalid={!!errors.name}>
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
                                        disabled={isSubmitting}
                                        {...register('name', { required: 'El campo es obligatorio' })}
                                    />
                                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                                </Field.Root>

                                <Field.Root invalid={!!errors.position}>
                                    <Field.Label
                                        fontWeight="600"
                                        fontFamily="inter"
                                        fontSize="18px"
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        color="#3F3F3F"
                                    >
                                        Posición/Nombre de su negocio
                                    </Field.Label>
                                    <Input
                                        placeholder="CEO La Tienda de Juan"
                                        border="1px solid"
                                        borderColor="#E5E7EB"
                                        borderTopLeftRadius="3xl"
                                        borderTopRightRadius="3xl"
                                        borderBottomLeftRadius="0"
                                        borderBottomRightRadius="3xl"
                                        h="50px"
                                        p="3"
                                        disabled={isSubmitting}
                                        {...register('position', { required: 'El campo es obligatorio' })}
                                    />
                                    <Field.ErrorText>{errors.position?.message}</Field.ErrorText>
                                </Field.Root>
                            </Grid>

                            <Field.Root invalid={!!errors.comment} mb={6}>
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
                                    rows={4}
                                    p="3"
                                    resize="none"
                                    disabled={isSubmitting}
                                    {...register('comment', { required: 'El campo es obligatorio' })}
                                />
                                <Field.ErrorText>{errors.comment?.message}</Field.ErrorText>
                            </Field.Root>
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
                                    disabled={isSubmitting}
                                    type="submit"
                                >
                                    <Text>
                                        Publicar testimonio
                                    </Text>
                                </ButtonUi>
                            </Transition>
                        </Flex>
                    </form>

                </Box>
            </Box>
        </Box>
    );
}
