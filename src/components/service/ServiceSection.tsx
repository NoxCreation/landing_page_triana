"use client"
import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";
import CategorySelector from "./CategoryFilter";
import { services } from "@/constants/service/cards";
import { CardService } from "../cards/CardService";
import { Transition } from "../Transition";
import { useEffect, useState } from "react";

export default function ServiceSection() {

    const [category, setCategory] = useState("all");
    const [servicesFil, setServicesFil] = useState([])

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    useEffect(() => {
        const filteredServices = services.filter(service => {
            if (category === "all") return true;

            return service.tiquet.some(t =>
                t.value.toLowerCase() === category.toLowerCase()
            );
        });
        setServicesFil(filteredServices)
        console.log(category)
    }, [category])

    return (
        <Box w="100%" bg="gray.50" py={28} px={4}>
            <Box maxW="1440px" mx="auto">
                <Box justifyItems="center" mb={10}>
                    <Transition type="top" velocity="slow">
                        <Flex w={'fit-content'}>
                            <Heading
                                as="h1"
                                color="primary.500"
                                fontWeight={800}
                                fontFamily="Bricolage Grotesque"
                                fontSize={{ base: "28px", md: "40px", lg: "54px" }}
                                lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                                letterSpacing="0px"
                                w={'fit-content'}
                            >
                                Servicios de Marketing y Consultoría
                            </Heading>

                            <Image
                                src="/home/Vector.png"
                                w="32px"
                                h="32px"
                            />
                        </Flex>
                        <Text
                            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                            lineHeight="22px"
                            letterSpacing="0px"
                            maxW="1000px"
                            mx="auto"
                            px={4}
                            color="#3F3F3F"
                            fontWeight={400}
                            textAlign={'center'}
                        >
                            Nos hacemos cargo desde que se abre el proyecto hasta que hacemos entrega de
                            las llaves del local, además te ayudamos a crecer tu negocio desde lo digital
                        </Text>
                    </Transition>
                </Box>

                <Box
                    m="auto"
                    w="fit-content"
                    pb={10}
                >
                    <CategorySelector onChange={handleCategoryChange} />
                </Box>

                <Grid
                    maxW="1120px"
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={6}
                    mb={10}
                    mx="auto"
                    px={{ base: 4, md: 0 }}
                >
                    {servicesFil.map((service, index) => (
                        <Transition key={service.id} type="bootom" velocity="slow" index={index}>
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
            </Box>
        </Box >
    );
}
