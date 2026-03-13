import { Box, Flex, Grid, Heading, Text, Button, Separator, Icon } from "@chakra-ui/react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { services } from "@/constants/home/services";

export default function Service() {
    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center" mb={10}>
                    <Heading
                        as="h1"
                        color="gray.600"
                        fontFamily="Bricolage Grotesque"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight={800}
                        lineHeight="70px"
                        letterSpacing="0px"
                        mb={4}>
                        Servicios más solicitados
                    </Heading>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    mb={10}
                >
                    {services.map((service, index) => (
                        <Box
                            key={index}
                            bg="white"
                            borderTopLeftRadius="3xl"
                            borderTopRightRadius="3xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="3xl"
                            boxShadow="md"
                            border="2px solid"
                            borderColor="gray.100"
                            overflow="hidden"
                        >
                            <Box p={6}>
                                <Heading
                                    p={"2"}
                                    as="h3"
                                    fontFamily="inter"
                                    color="#3F3F3F"
                                    fontSize="24px"
                                    lineHeight="32px"
                                    letterSpacing="0px"
                                    fontWeight={800}
                                    mb={2}>
                                    {service.title}
                                </Heading>
                                <Separator mx="-10" borderColor={"gray.300"} />

                                <Text
                                    fontFamily="inter"
                                    fontWeight={600}
                                    color="#3F3F3F"
                                    fontSize="18px"
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                    pt={5}
                                    pb={3}
                                >
                                    {service.yes}
                                </Text>

                                <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                    {service.include.map((include, i) => (
                                        <Flex key={i} align="center" mb={2}>
                                            <Icon
                                                w={"10"}
                                                as={TaskAltIcon}
                                                color="terciary.500"
                                                flexShrink={0}
                                            />
                                            <Text
                                                fontSize="14px"
                                                fontFamily="inter"
                                                fontWeight={400}
                                                color="#717171"
                                                lineHeight="20px"
                                                letterSpacing="0px"
                                            >
                                                {include}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Box>

                                <Text
                                    fontFamily="inter"
                                    fontWeight={600}
                                    color="#3F3F3F"
                                    fontSize="18px"
                                    lineHeight="22px"
                                    letterSpacing="0px"
                                    pb={3}
                                >
                                    {service.no}
                                </Text>

                                <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                    {service.notInclude?.map((notinclude, i) => (
                                        <Flex key={i} align="center" mb={2}>
                                            <Icon
                                                w={"10"}
                                                as={TaskAltIcon}
                                                color="terciary.500"
                                                flexShrink={0}
                                            />
                                            <Text
                                                fontSize="14px"
                                                fontFamily="inter"
                                                fontWeight={400}
                                                color="#717171"
                                                lineHeight="20px"
                                                letterSpacing="0px">
                                                {notinclude}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Box>

                                <Box
                                    bg="#F5F3FF"
                                    borderRadius="3xl"
                                    p={8}
                                    mb={6}
                                    textAlign="center"
                                >
                                    <Text
                                        fontSize="18px"
                                        fontFamily="inter"
                                        fontWeight={400}
                                        lineHeight="22px"
                                        letterSpacing="0px"
                                        color="#717171"
                                        mb={1}
                                    >
                                        {service.before}
                                    </Text>
                                    <Text
                                        fontSize="34px"
                                        fontWeight="800"
                                        color="black"
                                    >
                                        {service.price}{service.frequency ? (
                                            <Text
                                                as="span"
                                                fontWeight="400"
                                                fontSize="sm"
                                                color="gray.600">
                                                {service.frequency}
                                            </Text>
                                        ) : (
                                            <Text
                                                fontWeight="400"
                                                fontSize="sm"
                                                color="gray.600">
                                                {service.payment}
                                            </Text>
                                        )}
                                    </Text>
                                </Box>

                                <Button
                                    w="100%"
                                    bg="brand.500"
                                    color="white"
                                    rounded={"4xl"}
                                    _hover={{
                                        bg: "#7C3AED"
                                    }}
                                    fontWeight="600"
                                >
                                    Ver servicio
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Grid>

                <Flex direction={"column"} align={"center"}>
                    <Text
                        color="brand.500"
                        fontWeight="600"
                        cursor="pointer"
                        _hover={{ textDecor: "underline" }}
                    >
                        Ver todos los servicios
                    </Text>
                    <Box
                        h="3px"
                        bg="brand.500"
                        w="20%"
                        borderRadius="full"
                    />
                </Flex>
            </Box>
        </Box>
    );
}
