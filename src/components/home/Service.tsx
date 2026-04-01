'use client'

import { Box, Grid, Heading, Text, Button } from "@chakra-ui/react";
import { CardService } from "../cards/CardService";
import { services } from "@/constants/service/cards";
import { Transition } from "../Transition";
import Link from "next/link";

export default function Service() {
    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Box maxW="1200px" mx="auto">
                <Transition type="top" velocity="slow">
                    <Box textAlign="center" mb={10}>
                        <Heading
                            as="h1"
                            color="gray.600"
                            fontFamily="Bricolage Grotesque"
                            fontSize={{ base: "3xl", md: "5xl" }}
                            fontWeight={800}
                            letterSpacing="0px"
                            mb={4}>
                            Servicios más solicitados
                        </Heading>
                    </Box>
                </Transition>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={6}
                    mb={10}
                >
                    {services.slice(0, 3).map((service, index) => (
                        <Transition type="left" velocity="slow" key={index} index={index * 2}>
                            <CardService
                                title={service.title}
                                tiquets={service.tiquet as any}
                                require={service.require}
                                requirements={service.requirement}
                                includes={service.include}
                                notIncludes={service.notInclude}
                                payment={{
                                    label: service.before,
                                    price: service.price,
                                    frequency: service.frequency
                                } as any}
                                href={"/service/detail"}
                            />
                        </Transition>
                    ))}
                </Grid>

                <Link
                    href="/service"
                >
                    <Box
                        color="primary.500"
                        bg="transparent"
                        w="246px"
                        h="54px"
                        borderBottom="1px solid"
                        borderTop="none"
                        borderRight="none"
                        borderLeft="none"
                        borderRadius="none"
                        borderColor="primary.500"
                        pt="16px"
                        pr="24px"
                        pb="16px"
                        pl="24px"
                        cursor="pointer"
                        mx="auto"
                        display="block"
                    >
                        <Text
                            fontWeight={600}
                            fontSize="18px"
                            lineHeight="22px"
                            letterSpacing="0px"
                        >
                            Ver todos los servicios
                        </Text>
                    </Box>
                </Link>
            </Box>
        </Box >
    );
}
