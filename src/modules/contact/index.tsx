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

type FormValues = {
    name: string;
    email: string;
    message: string;
};

export default function ContactSection() {
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
        <Stack position={'relative'} bg="white">
            <Stack
                position={"absolute"}
                top={0}
                left={0}
                w={'100vw'}
                h={'100%'}
                zIndex={1}
            >
                <DotPattern
                    width={20}
                    height={20}
                    cx={2}
                    cy={2}
                    cr={1.5}
                    color="gray.400"
                    opacity={0.2}
                />
            </Stack>

            <ContainerLanding zIndex={2}>
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                    gap={{ base: 12, md: 16 }}
                    alignItems="center"
                    py={10}
                >
                    {/* Columna izquierda: Formulario + info contacto */}
                    <Transition type="left" velocity="slow" index={1}>
                        <GridItem order={{ base: 2, md: 1 }}>
                            <VStack align="stretch" gap={6}>
                                <Heading
                                    as="h2"
                                    color="primary.500"
                                    fontFamily="Bricolage Grotesque"
                                    fontWeight="extrabold"
                                    fontSize={{ base: "28px", md: "35px", lg: "45px" }}
                                >
                                    Contáctanos
                                </Heading>
                                <Text fontSize="lg" color="gray.600">
                                    ¿Tienes un proyecto en mente? Cuéntanos tu idea y te ayudaremos a
                                    hacerla realidad.
                                </Text>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <VStack gap={4} align="stretch">
                                        {/* Campo Nombre */}
                                        <Field.Root invalid={!!errors.name} bg={'white'}>
                                            <Field.Label>Nombre completo</Field.Label>
                                            <Input
                                                px={2}
                                                {...register('name', { required: 'El nombre es obligatorio' })}
                                            />
                                            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                                        </Field.Root>

                                        {/* Campo Email */}
                                        <Field.Root invalid={!!errors.email} bg={'white'}>
                                            <Field.Label>Correo electrónico</Field.Label>
                                            <Input
                                                px={2}
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

                                        {/* Campo Mensaje */}
                                        <Field.Root invalid={!!errors.message} bg={'white'}>
                                            <Field.Label>Mensaje</Field.Label>
                                            <Textarea
                                                px={2} py={2}
                                                rows={5}
                                                {...register('message', { required: 'El mensaje es obligatorio' })}
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
                                        <Text color="gray.700">Calle Ejemplo 123, Ciudad, País</Text>
                                    </HStack>
                                    <HStack gap={3}>
                                        <Icon as={FaPhoneAlt} color="primary.500" boxSize={5} />
                                        <Text color="gray.700">+34 123 456 789</Text>
                                    </HStack>
                                    <HStack gap={3}>
                                        <Icon as={FaEnvelope} color="primary.500" boxSize={5} />
                                        <Text color="gray.700">hola@3anamarketing.com</Text>
                                    </HStack>
                                    <HStack gap={3}>
                                        <Icon as={FaClock} color="primary.500" boxSize={5} />
                                        <Text color="gray.700">Lun – Vie: 9:00 – 18:00</Text>
                                    </HStack>
                                </VStack>

                                {/* Redes sociales */}
                                <VStack align="stretch" gap={3}>
                                    <Text fontWeight="bold" color="gray.800">
                                        Síguenos en redes
                                    </Text>
                                    <HStack gap={4}>
                                        <ChakraLink asChild>
                                            <NextLink href="https://linkedin.com" target="_blank">
                                                <Icon as={FaLinkedin} boxSize={6} color="gray.600" _hover={{ color: 'primary.500' }} />
                                            </NextLink>
                                        </ChakraLink>
                                        <ChakraLink asChild>
                                            <NextLink href="https://tiktok.com" target="_blank">
                                                <Icon as={FaTiktok} boxSize={6} color="gray.600" _hover={{ color: 'primary.500' }} />
                                            </NextLink>
                                        </ChakraLink>
                                        <ChakraLink asChild>
                                            <NextLink href="https://facebook.com" target="_blank">
                                                <Icon as={FaFacebook} boxSize={6} color="gray.600" _hover={{ color: 'primary.500' }} />
                                            </NextLink>
                                        </ChakraLink>
                                        <ChakraLink asChild>
                                            <NextLink href="https://instagram.com" target="_blank">
                                                <Icon as={FaInstagram} boxSize={6} color="gray.600" _hover={{ color: 'primary.500' }} />
                                            </NextLink>
                                        </ChakraLink>
                                        <ChakraLink asChild>
                                            <NextLink href="https://youtube.com" target="_blank">
                                                <Icon as={FaYoutube} boxSize={6} color="gray.600" _hover={{ color: 'primary.500' }} />
                                            </NextLink>
                                        </ChakraLink>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </GridItem>
                    </Transition>

                    {/* Columna derecha: Imagen */}
                    <Transition type="rigth" velocity="slow" index={1}>
                        <GridItem order={{ base: 1, md: 2 }} display="flex" justifyContent="center">
                            <Image
                                as="img"
                                src="/home/3443ed1b0e9be149d5cb647a24b46034-xlarge.jpg"
                                alt="Asesora de marketing hablando por teléfono"
                                objectFit="contain"
                                maxH="600px"
                                w="full"
                                transform={isMobile ? 'scaleX(-1)' : 'none'}
                                borderRadius={'full'}
                            />
                        </GridItem>
                    </Transition>

                </Grid>
            </ContainerLanding>
        </Stack>

    );
}