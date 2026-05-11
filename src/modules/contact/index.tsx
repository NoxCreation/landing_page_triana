'use client';

import {
    Grid,
    GridItem,
    VStack,
    HStack,
    Heading,
    Text,
    Input,
    Textarea,
    Button,
    Icon,
    Link as ChakraLink,
    Image,
    Field,
    useBreakpointValue,
    Stack,
    Box,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaLinkedin,
    FaTiktok,
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';
import NextLink from 'next/link';
import { DotPattern } from '@/components/DotPattern';
import { ContainerLanding } from '@/components/container';
import { Transition } from '@/components/Transition';
import { SparklesText } from '@/components/Sparkle';
import { ContentType } from "@/types/ContentType";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

export default function ContactSection({
    content
}: {
    content: ContentType
}) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
        alert('Mensaje enviado correctamente. Te contactaremos pronto.');
    };

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Stack
            position={'relative'}
            bg="linear-gradient(to bottom, #FFFFFF, #DDDCD9)"
            overflow="hidden"
        >
            <Image
                zIndex={1}
                src="/visual_support.png"
                position="absolute"
                bottom={0}
                left={{ base: "-250px", md: "0", lg: "0" }}
                minW={{ base: "calc(100vw + 400px)", md: "calc(100% - 400px)", lg: "calc(100vw / 2 )" }}
            />

            <ContainerLanding zIndex={2}>
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                    gap={{ base: 12, md: 16 }}
                    alignItems="center"
                    py={12}
                >
                    {/* Columna izquierda: Formulario + info contacto */}
                    <Transition type="left" velocity="slow" index={1}>
                        <GridItem order={{ base: 2, md: 1 }}>
                            <VStack align="stretch" gap={6}>
                                <SparklesText sparklesCount={5}>
                                    <Heading
                                        as="h2"
                                        color="primary.500"
                                        fontFamily="Bricolage Grotesque"
                                        fontWeight="extrabold"
                                        fontSize={{ base: "28px", md: "35px", lg: "45px" }}
                                    >
                                        {content.contact.main_title}
                                    </Heading>
                                </SparklesText>
                                <Text fontSize="lg" color="gray.600">
                                    {content.contact.main_subtitle}
                                </Text>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <VStack gap={4} align="stretch">
                                        {/* Campo Nombre */}
                                        <Field.Root invalid={!!errors.name}>
                                            <Field.Label>Nombre completo</Field.Label>
                                            <Input
                                                px={2}
                                                border="1px solid #b8b8b8"
                                                bg="#FFFFFF"
                                                color="#717171"
                                                placeholder='Nombre'
                                                {...register('name', { required: 'El nombre es obligatorio' })}
                                                borderTopLeftRadius="2xl"
                                                borderTopRightRadius="2xl"
                                                borderBottomLeftRadius="0"
                                                borderBottomRightRadius="2xl"
                                            />
                                            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                                        </Field.Root>

                                        {/* Campo Email */}
                                        <Field.Root invalid={!!errors.email}>
                                            <Field.Label>Correo electrónico</Field.Label>
                                            <Input
                                                px={2}
                                                border="1px solid #b8b8b8"
                                                bg="#FFFFFF"
                                                color="#717171"
                                                placeholder='ejemplo@meil.com'
                                                type="email"
                                                {...register('email', {
                                                    required: 'El correo es obligatorio',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: 'Correo inválido',
                                                    },
                                                })}
                                                borderTopLeftRadius="2xl"
                                                borderTopRightRadius="2xl"
                                                borderBottomLeftRadius="0"
                                                borderBottomRightRadius="2xl"
                                            />
                                            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                        </Field.Root>

                                        {/* Campo Mensaje */}
                                        <Field.Root invalid={!!errors.message}>
                                            <Field.Label>Mensaje</Field.Label>
                                            <Textarea
                                                px={2}
                                                py={2}
                                                border="1px solid #b8b8b8"
                                                bg="#FFFFFF"
                                                color="#717171"
                                                placeholder='Dejanos un mensaje'
                                                rows={5}
                                                {...register('message', { required: 'El mensaje es obligatorio' })}
                                                borderTopLeftRadius="2xl"
                                                borderTopRightRadius="2xl"
                                                borderBottomLeftRadius="0"
                                                borderBottomRightRadius="2xl"
                                            />
                                            <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                                        </Field.Root>

                                        <Button
                                            type="submit"
                                            bg="primary.500"
                                            color="white"
                                            size="lg"
                                            loading={isSubmitting}
                                            _hover={{ bg: 'primary.600', transform: 'translateY(-2px)' }}
                                            transition="all 0.2s"
                                        >
                                            Enviar mensaje
                                        </Button>
                                    </VStack>
                                </form>

                                {/* <Divider /> */}

                                {/* Información de contacto */}
                                <VStack align="stretch" gap={4}>
                                    <HStack gap={3}>
                                        <Icon as={FaMapMarkerAlt} color="primary.500" boxSize={5} />
                                        <Text color="gray.700">{content.contact.contact.address}</Text>
                                    </HStack>
                                    <HStack gap={3}>
                                        <Icon as={FaPhoneAlt} color="primary.500" boxSize={5} />
                                        <Text color="gray.700">{content.contact.contact.phone}</Text>
                                    </HStack>
                                    <HStack gap={3}>
                                        <Icon as={FaEnvelope} color="primary.500" boxSize={5} />
                                        <Text color="gray.700">{content.contact.contact.email}</Text>
                                    </HStack>
                                    <HStack gap={3}>
                                        <Icon as={FaClock} color="primary.500" boxSize={5} />
                                        <Text color="gray.700">{content.contact.contact.hours}</Text>
                                    </HStack>
                                </VStack>

                                {/* Redes sociales */}
                                <VStack align="stretch" gap={3}>
                                    <Text fontWeight="bold" color="gray.800">
                                        Síguenos en redes
                                    </Text>
                                    <HStack gap={2}>
                                        {(content.contact.social.linkedln && content.contact.social.linkedln != "") && <ChakraLink asChild>
                                            <NextLink href={content.contact.social.linkedln} target="_blank">
                                                <Box
                                                    bg={'#F6F1FF'}
                                                    w={'40px'}
                                                    h={'40px'}
                                                    alignContent={'center'}
                                                    textAlign={'center'}
                                                    borderRadius={'full'}
                                                >
                                                    <Icon as={FaLinkedin} boxSize={5} color="#B223CF87" _hover={{ color: 'primary.500' }} />
                                                </Box>
                                            </NextLink>
                                        </ChakraLink>}
                                        {(content.contact.social.tiktok && content.contact.social.linkedln != "") && <ChakraLink asChild>
                                            <NextLink href={content.contact.social.tiktok} target="_blank">
                                                <Box
                                                    bg={'#F6F1FF'}
                                                    w={'40px'}
                                                    h={'40px'}
                                                    alignContent={'center'}
                                                    textAlign={'center'}
                                                    borderRadius={'full'}
                                                >
                                                    <Icon as={FaTiktok} boxSize={5} color="#B223CF87" _hover={{ color: 'primary.500' }} />
                                                </Box>
                                            </NextLink>
                                        </ChakraLink>}
                                        {(content.contact.social.facebook && content.contact.social.linkedln != "") && <ChakraLink asChild>
                                            <NextLink href={content.contact.social.facebook} target="_blank">
                                                <Box
                                                    bg={'#F6F1FF'}
                                                    w={'40px'}
                                                    h={'40px'}
                                                    alignContent={'center'}
                                                    textAlign={'center'}
                                                    borderRadius={'full'}
                                                >
                                                    <Icon as={FaFacebook} boxSize={5} color="#B223CF87" _hover={{ color: 'primary.500' }} />
                                                </Box>
                                            </NextLink>
                                        </ChakraLink>}
                                        {(content.contact.social.instagram && content.contact.social.linkedln != "") && <ChakraLink asChild>
                                            <NextLink href={content.contact.social.instagram} target="_blank">
                                                <Box
                                                    bg={'#F6F1FF'}
                                                    w={'40px'}
                                                    h={'40px'}
                                                    alignContent={'center'}
                                                    textAlign={'center'}
                                                    borderRadius={'full'}
                                                >
                                                    <Icon as={FaInstagram} boxSize={5} color="#B223CF87" _hover={{ color: 'primary.500' }} />
                                                </Box>
                                            </NextLink>
                                        </ChakraLink>}
                                        {(content.contact.social.youtube && content.contact.social.linkedln != "") && <ChakraLink asChild>
                                            <NextLink href={content.contact.social.youtube} target="_blank">
                                                <Box
                                                    bg={'#F6F1FF'}
                                                    w={'40px'}
                                                    h={'40px'}
                                                    alignContent={'center'}
                                                    textAlign={'center'}
                                                    borderRadius={'full'}
                                                >
                                                    <Icon as={FaYoutube} boxSize={5} color="#B223CF87" _hover={{ color: 'primary.500' }} />
                                                </Box>
                                            </NextLink>
                                        </ChakraLink>}
                                    </HStack>
                                </VStack>
                            </VStack>
                        </GridItem>
                    </Transition>

                    {/* Columna derecha: Imagen */}
                    <GridItem order={{ base: 1, md: 2 }}>
                        <Transition type="rigth" velocity="slow" index={1}>
                            <Image
                                as="img"
                                src="/home/contact.png"
                                alt="Asesora de marketing (Leyanis Triana) centada al lado de una silla"
                                minW={'120%'}
                                w="100%"
                            />
                        </Transition>
                    </GridItem>
                </Grid>
            </ContainerLanding>
        </Stack>

    );
}