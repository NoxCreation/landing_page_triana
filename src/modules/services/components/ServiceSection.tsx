"use client"

import { Box, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";
import CategorySelector from "./CategoryFilter";
import { useEffect, useState } from "react";
import { CardService } from "@/components/cards/CardService";
import { Transition } from "@/components/Transition";
import { ContentType } from "@/types/ContentType";
import { SparklesText } from "@/components/Sparkle";

export default function ServiceSection({
    content
}: {
    content: ContentType
}) {
    const [category, setCategory] = useState("Todos");
    const [servicesFil, setServicesFil] = useState([])

    const getTabs = () => {
        const labels = content.services.services
            .map(e => e.tiquet.map(a => a.label))
            .reduce((p, c) => [...p, ...c], []);

        return ["Todos", ...new Set(labels)];
    }

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    useEffect(() => {
        const filteredServices = content.services.services.filter(service => {
            if (category === "Todos") return true;

            return service.tiquet.some(t =>
                t.label.toLowerCase() === category.toLowerCase()
            );
        });
        setServicesFil(filteredServices)
    }, [category])

    return (
        <Box w="100%" bg="gray.50" py={28} px={4}>
            <Box maxW="1440px" mx="auto">
                <Box justifyItems="center" mb={10}>
                    <Transition type="top" velocity="slow">
                        <Flex w={'fit-content'}>
                            <SparklesText sparklesCount={15}>
                                <Heading
                                    as="h1"
                                    color="primary.500"
                                    fontWeight={800}
                                    fontFamily="Bricolage Grotesque"
                                    fontSize={{ base: "28px", md: "40px", lg: "54px" }}
                                    lineHeight={{ base: "36px", md: "50px", lg: "70px" }}
                                    letterSpacing="0px"
                                    w={'fit-content'}
                                    textAlign={'center'}
                                >
                                    {content.services.main_title}
                                </Heading>
                            </SparklesText>

                            <Image
                                src="/home/Vector.ico"
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
                            {content.services.main_subtitle}
                        </Text>
                    </Transition>
                </Box>

                <Box
                    m="auto"
                    w="fit-content"
                    pb={10}
                >
                    <CategorySelector tabs={getTabs()} onChange={handleCategoryChange} />
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
                                require={service.requireLabel}
                                requirements={service.requirement}
                                includes={service.include}
                                notIncludes={service.notInclude}
                                payment={{
                                    label: "",
                                    price: service.price,
                                    frequency: service.type
                                } as any}
                                href={`/payment/details/${service.slug}`}
                            />
                        </Transition>
                    ))}
                </Grid>
            </Box>
        </Box >
    );
}
