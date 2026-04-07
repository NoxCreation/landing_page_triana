'use client';

import {
    Box,
    Heading,
    Text,
    Stack,
    Separator,
    List,
    Badge,
    HStack,
    Icon,
} from '@chakra-ui/react';
import { FiCheckCircle, FiInfo } from 'react-icons/fi';
import Link from 'next/link';
import { ContainerLanding } from '@/components/container';
import { PaymentViewDataType } from '@/types/PaymentViewDataType';

interface PaymentSuccessIndexProps {
    data?: PaymentViewDataType;
    error?: string;
}

export const PaymentViewIndex = ({ data, error }: PaymentSuccessIndexProps) => {
    const {
        customerName,
        customerEmail,
        amountTotal,
        currency,
        paymentStatus,
        lineItems,
    } = data;

    const isPaid = paymentStatus === 'paid';

    if (error)
        return (
            <ContainerLanding zIndex={2}>
                <Box maxW="2xl" mx="auto" mt={8} mb={16} px={4}>
                    <Stack align="center" mb={8} gap={3}>
                        <Icon as={FiInfo} boxSize="50px" color="red.500" />
                        <Heading as="h1" size="xl" textAlign="center">
                            ❌ Error en el pago
                        </Heading>
                        <Text color="red.600" fontSize="lg">
                            {error}
                        </Text>
                    </Stack>
                    <Link href="/">
                        Volver al inicio
                    </Link>
                </Box>
            </ContainerLanding>
        );

    return (
        <ContainerLanding zIndex={2}>
            <Box maxW="2xl" mx="auto" mt={8} mb={16} px={4}>
                {/* Encabezado */}
                <Stack align="center" mb={8} gap={3}>
                    <Icon as={FiCheckCircle} boxSize="50px" color={isPaid ? "green.500" : "red.500"} />
                    <Heading as="h1" size="xl" textAlign="center">
                        {isPaid ? "¡Pago exitoso!" : "¡Pago fallido!"}
                    </Heading>
                    <Badge colorScheme={isPaid ? "green" : "red"} fontSize="md" px={3} py={1} borderRadius="full">
                        {paymentStatus.toUpperCase()}
                    </Badge>
                </Stack>

                {/* Detalles principales */}
                <Stack gap={6} bg="white" border={'1px solid'} borderColor={'gray.200'} borderRadius="lg" p={6}>

                    <HStack justify="space-between">
                        <Text fontWeight="bold">Cliente:</Text>
                        <Text>
                            {customerName} ({customerEmail})
                        </Text>
                    </HStack>

                    <HStack justify="space-between">
                        <Text fontWeight="bold">Total pagado:</Text>
                        <Text fontSize="xl" fontWeight="bold" color="primary.500">
                            {new Intl.NumberFormat('es-ES', {
                                style: 'currency',
                                currency,
                            }).format(amountTotal)}
                        </Text>
                    </HStack>

                    <Separator />

                    {/* Productos */}
                    <Stack gap={3}>
                        <Heading as="h3" size="md">
                            Productos adquiridos
                        </Heading>
                        <List.Root gap={3}>
                            {lineItems.map((item, idx) => (
                                <List.Item key={idx}>
                                    <HStack justify="space-between" wrap="wrap">
                                        <HStack>
                                            <Icon as={FiInfo} color="blue.500" />
                                            <Text fontWeight="medium">
                                                {item.description || 'Producto sin descripción'}
                                            </Text>
                                            <Text color="gray.600">x {item.quantity ?? 1}</Text>
                                        </HStack>
                                        <Text fontWeight="semibold">
                                            {new Intl.NumberFormat('es-ES', {
                                                style: 'currency',
                                                currency: item.currency,
                                            }).format(item.amountTotal)}
                                        </Text>
                                    </HStack>
                                </List.Item>
                            ))}
                        </List.Root>
                    </Stack>

                    <Separator />

                    {/* Botón de acción */}
                    <Link href="/">
                        Volver al inicio
                    </Link>
                </Stack>
            </Box>
        </ContainerLanding>
    );
};