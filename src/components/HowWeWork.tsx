import { Box, Flex, List, ListItem, Text, Heading, Image } from "@chakra-ui/react";
import { items } from "@/constants/home/HowWeWork";

export default function HowWeWork() {
    return (
        <Flex py="80px" px="160px" align="center" maxW="1440px" justify="space-between" mx="auto">
            <Box flex="1" minW={0} maxW="551px" alignItems="start">
                <Heading
                    as="h1"
                    fontFamily="Bricolage Grotesque"
                    color="#3F3F3F"
                    mb={4}
                    fontSize={{ base: "3xl", md: "5xl" }}
                    fontWeight={800}
                    lineHeight="70px"
                    letterSpacing="0px"
                >
                    Cómo trabajamos juntos
                </Heading>
                <List.Root gap={6}>
                    {items.map((it) => (
                        <ListItem direction="row"
                            w="550px"
                            h="80px"
                            borderRadius="48px"
                            gap="16px"
                            key={it.id}
                            display="flex"
                            alignItems="flex-start"
                        >
                            <Box
                                w="80px"
                                h="80px"
                                p="3px"
                                borderRadius="full"
                                background="linear-gradient(to bottom, #E63CFF, #611161)"
                            >
                                <Flex
                                    w="100%"
                                    h="100%"
                                    bg="#FFFFFF"
                                    borderRadius="full"
                                    align="center"
                                    justify="center"
                                    color="primary.500"
                                    boxShadow="0px 10px 20px rgba(178,35,207,0.24)"
                                >
                                    {it.icono && <it.icono />}
                                </Flex>
                            </Box>
                            <Box w="420px" gap="8px">
                                <Text
                                    as="h3"
                                    fontWeight={800}
                                    fontFamily="inter"
                                    color="#3F3F3F"
                                    mb={1}
                                    fontSize="26px"
                                    lineHeight="32px"
                                    letterSpacing="0px"
                                >
                                    {it.title}
                                </Text>
                                <Text
                                    color="#717171"
                                    fontSize="14px"
                                    fontWeight={400}
                                    fontFamily="inter"
                                >
                                    {it.description}
                                </Text>
                            </Box>
                        </ListItem>
                    ))}
                </List.Root>
            </Box>

            <Box
                w="400px"
                h="600px"
                borderRadius="99px"
                background="radial-gradient(circle at center, #FFFFFF 0%, #F9D0FF 100%)"
                position="relative"
                overflow="hidden"
            >
                <Image
                    src="/home/proces.png"
                    alt="Foto derecha"
                    maxW="420px"
                    w="100%"
                    left="-100px"
                    borderRadius="2xl"
                    position="absolute"
                    bottom="0"
                    transform="translateX(100px)"
                    zIndex="1"
                />
                <Image
                    src="/home/VectorCh.png"
                    position="absolute"
                    top="56"
                    right="10"
                    zIndex="2"
                />
            </Box>
        </Flex>
    );
}
