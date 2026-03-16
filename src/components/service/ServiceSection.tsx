import { Box, Flex, Grid, Heading, Text, Button, Icon, Image } from "@chakra-ui/react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CategorySelector from "./CategoryFilter";
import { services } from "@/constants/service/cards";

export default function ServiceSection() {
    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Box maxW="1440px" mx="auto">
                <Box textAlign="center" mb={10}>
                    <Box position="relative" w="1174px" display="inline-block">
                        <Heading
                            as="h1"
                            color="primary.500"
                            fontWeight={800}
                            fontSize="54px"
                            lineHeight="70px"
                            letterSpacing="0px"
                        >
                            Servicios de Marketing y Consultoría
                        </Heading>

                        <Image
                            src="/home/Vector.png"
                            w="32px"
                            h="32px"
                            position="absolute"
                            top="3px"
                            right="50px"
                        />
                    </Box>
                    <Text
                        fontSize="18px"
                        lineHeight="22px"
                        letterSpacing="0px"
                        w="1000px"
                        m="auto"
                        color="#3F3F3F"
                        fontWeight={400}
                    >
                        Nos hacemos cargo desde que se abre el proyecto hasta que hacemos entrega de
                        las llaves del local, además te ayudamos a crecer tu negocio desde lo digital
                    </Text>
                </Box>

                <Box
                    m="auto"
                    w="fit-content"
                    pb={10}
                >
                    <CategorySelector />
                </Box>

                <Grid
                    w="1120px"
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    mb={10}
                    m="auto"
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
                            display="flex"
                            flexDirection="column"
                        >
                            <Box p={6} display="flex" flexDirection="column" flex={1}>
                                <Box>
                                    <Heading
                                        p={"2"}
                                        as="h3"
                                        color="#3F3F3F"
                                        fontSize="24px"
                                        fontFamily="inter"
                                        lineHeight="32px"
                                        letterSpacing="0px"
                                        fontWeight="800"
                                        mb={2}
                                    >
                                        {service.title}
                                    </Heading>
                                    <Grid
                                        templateColumns={{ base: "1fr", md: "repeat(2, auto)" }}
                                        gap={2}
                                        mb={5}
                                        justifyContent={{ base: "center", md: "start" }}
                                    >
                                        {service.tiquet.map((tag, i) => (
                                            <Text
                                                key={i}
                                                px={4}
                                                py={2}
                                                borderRadius="full"
                                                fontSize="14px"
                                                fontWeight="400"
                                                lineHeight="20px"
                                                letterSpacing="0px"
                                                bg={tag.variant === "primary" ? "terciary.500" : "#F5F3FF"}
                                                color={tag.variant === "primary" ? "white" : "primary.500"}
                                                border={tag.variant === "outline" ? "1px solid" : "none"}
                                                borderColor="primary.500"
                                                textAlign="center"
                                                whiteSpace="nowrap"
                                            >
                                                {tag.label}
                                            </Text>
                                        ))}
                                    </Grid>
                                    <Box h="1px" bg="gray.300" mx="-10" />
                                </Box>

                                <Box flex={1}>
                                    {service.require && (
                                        <Text
                                            fontSize="18px"
                                            fontFamily="inter"
                                            fontWeight={600}
                                            color="#3F3F3F"
                                            lineHeight="22px"
                                            letterSpacing="0px"
                                            mt={4}
                                            mb={2}
                                        >
                                            {service.require}
                                        </Text>
                                    )}

                                    {service.requirement && service.requirement.length > 0 && (
                                        <Box as="ul" listStyleType="none" pl={0} mb={4}>
                                            {service.requirement.map((require, i) => (
                                                <Flex key={i} align="center" mb={2}>
                                                    <Icon
                                                        w={"10"}
                                                        as={TripOriginIcon}
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
                                                        {require}
                                                    </Text>
                                                </Flex>
                                            ))}
                                        </Box>
                                    )}

                                    {service.yes && (
                                        <Text
                                            fontSize="18px"
                                            fontFamily="inter"
                                            fontWeight={600}
                                            color="#3F3F3F"
                                            lineHeight="22px"
                                            letterSpacing="0px"
                                            mt={4}
                                            mb={2}
                                        >
                                            {service.yes}
                                        </Text>
                                    )}

                                    {service.include && service.include.length > 0 && (
                                        <Box as="ul" listStyleType="none" pl={0} mb={4}>
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
                                    )}

                                    {service.no && service.notInclude && service.notInclude.length > 0 && (
                                        <>
                                            <Text
                                                fontSize="18px"
                                                fontFamily="inter"
                                                fontWeight={600}
                                                color="#3F3F3F"
                                                lineHeight="22px"
                                                letterSpacing="0px"
                                                mt={4}
                                                mb={2}
                                            >
                                                {service.no}
                                            </Text>
                                            <Box as="ul" listStyleType="none" pl={0} mb={4}>
                                                {service.notInclude.map((notinclude, i) => (
                                                    <Flex key={i} align="center" mb={2}>
                                                        <Icon
                                                            w="10"
                                                            as={HighlightOffIcon}
                                                            color="terciary.500"
                                                            flexShrink={0}
                                                        />
                                                        <Text
                                                            fontSize="14px"
                                                            fontFamily="inter"
                                                            fontWeight={400}
                                                            color="#717171"
                                                            lineHeight="20px"
                                                        >
                                                            {notinclude}
                                                        </Text>
                                                    </Flex>
                                                ))}
                                            </Box>
                                        </>
                                    )}
                                </Box>

                                <Box
                                    bg="#F5F3FF"
                                    borderRadius="3xl"
                                    p={8}
                                    mb={6}
                                    textAlign="center"
                                    mt="auto"
                                >
                                    <Text
                                        as="h3"
                                        fontSize="20px"
                                        color="gray.600"
                                        fontWeight={800}
                                        fontFamily="inter"
                                        lineHeight="32px"
                                        letterSpacing="0px"
                                        mb={1}
                                    >
                                        {service.before}
                                    </Text>
                                    <Text
                                        as="h2"
                                        fontSize="36px"
                                        fontWeight="800"
                                        color="black"
                                        lineHeight="40px"
                                        letterSpacing="0px"
                                    >
                                        {service.price}
                                        {service.frequency && (
                                            <Text
                                                as="span"
                                                fontSize="20px"
                                                color="gray.600"
                                                fontWeight={800}
                                                fontFamily="inter"
                                                lineHeight="32px"
                                                letterSpacing="0px"
                                            >
                                                {service.frequency}
                                            </Text>
                                        )}
                                        {service.payment && (
                                            <Text
                                                as="h3"
                                                fontSize="20px"
                                                color="gray.600"
                                                fontWeight={800}
                                                fontFamily="inter"
                                                lineHeight="32px"
                                                letterSpacing="0px"
                                            >
                                                {service.payment}
                                            </Text>
                                        )}
                                    </Text>
                                </Box>

                                <Button
                                    w="100%"
                                    bg="primary.500"
                                    color="white"
                                    rounded={"4xl"}
                                    fontSize="18px"
                                    lineHeight="22px"
                                    letterSpacing="0px"
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
            </Box>
        </Box>
    );
}
