"use client"

import { Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Transition } from "@/components/Transition";
import { ContainerLanding } from "@/components/container";

export default function Work() {
    
    return (
        <ContainerLanding minH={'fit-conten'} justifyItems={'center'} py={20} bg="#F3A0FF0D">
            <Stack w={"100%"} color="black" alignItems="center" gap={4}>
                <Transition type="top" velocity="slow">
                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "36px" }}
                        fontWeight={800}
                        fontFamily="Bricolage Grotesque"
                        lineHeight="40px"
                        letterSpacing="0px"
                        color="#3F3F3F"
                    >
                        ¿Listo para trabajar juntos?
                    </Heading>
                </Transition>
                <Transition type="left" velocity="slow">
                    <Text
                        fontSize={{ base: "md", md: "18px" }}
                        color="#717171"
                        fontWeight={400}
                        lineHeight="22px"
                        letterSpacing="0px"
                        mx="auto"
                    >
                        Cuéntame sobre tu proyecto y veamos cómo puedo ayudarte a alcanzar
                        tus objetivos.
                    </Text>
                </Transition>

                <Button
                    px="24px"
                    py="16px"
                    gap="8px"
                    w={'fit-content'}
                    borderRadius="99px"
                    bg="primary.500"
                    color="#ffff"
                    border="1px solid primary.500"
                    boxShadow="0px 10px 20px rgba(178, 35, 207, 0.24)"
                    _hover={{
                        bg: "#5A0F6E",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                    }}
                    _active={{
                        transform: "scale(0.98)",
                    }}
                >
                    <Icon as={WhatsAppIcon} />
                    Hablame de tu proyecto
                </Button>
            </Stack>
        </ContainerLanding>
    )
}
