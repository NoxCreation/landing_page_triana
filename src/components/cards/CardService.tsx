import { Box, Heading, Flex, Grid, Icon, Stack, Button, Text } from "@chakra-ui/react"
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Link from "next/link";

type Props = {
    title: string;
    tiquets: Array<{
        label: string;
        variant: 'primary' | 'outline',
        value: string
    }>;
    require?: string;
    requirements?: Array<string>;
    includes?: Array<string>;
    notIncludes?: Array<string>;
    payment: {
        label?: string;
        price: string,
        frequency?: 'mes' | 'por sesión' | 'pago único'
    }
    href: string
}

export const CardService = ({
    title,
    tiquets,
    require,
    requirements,
    includes,
    notIncludes,
    payment,
    href
}: Props) => {

    return (
        <Link href={href}>
            <Box
                bg="white"
                borderTopLeftRadius="3xl"
                borderTopRightRadius="3xl"
                borderBottomLeftRadius="0"
                borderBottomRightRadius="3xl"

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
                            fontSize="20px"
                            fontFamily="inter"
                            lineHeight="32px"
                            letterSpacing="0px"
                            fontWeight="800"
                            mb={2}
                        >
                            {title}
                        </Heading>
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(2, auto)" }}
                            gap={2}
                            mb={5}
                            justifyContent={{ base: "center", md: "start" }}
                        >
                            {tiquets.map((tag) => (
                                <Text
                                    key={tag.value}
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
                        {require && (
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
                                {require}
                            </Text>
                        )}

                        {requirements && requirements.length > 0 && (
                            <Box as="ul" listStyleType="none" pl={0} mb={4}>
                                {requirements.map((require, i) => (
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

                        {includes && <Text
                            fontSize="18px"
                            fontFamily="inter"
                            fontWeight={600}
                            color="#3F3F3F"
                            lineHeight="22px"
                            letterSpacing="0px"
                            mt={4}
                            mb={2}
                        >
                            Incluye:
                        </Text>}

                        {includes && includes.length > 0 && (
                            <Box as="ul" listStyleType="none" pl={0} mb={4}>
                                {includes.map((include, i) => (
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

                        {notIncludes && notIncludes.length > 0 && (
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
                                    No Incluye:
                                </Text>
                                <Box as="ul" listStyleType="none" pl={0} mb={4}>
                                    {notIncludes.map((notinclude, i) => (
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
                        {payment && <Text
                            as="h3"
                            fontSize="20px"
                            color="gray.600"
                            fontWeight={800}
                            fontFamily="inter"
                            lineHeight="32px"
                            letterSpacing="0px"
                            mb={1}
                        >
                            {payment.label}
                        </Text>}
                        <Stack>
                            <Text
                                as="h2"
                                fontSize="36px"
                                fontWeight="800"
                                color="black"
                                lineHeight="40px"
                                letterSpacing="0px"
                            >
                                {payment.price}
                            </Text>

                            {payment.frequency && (
                                <Text
                                    as="span"
                                    fontSize="20px"
                                    color="gray.600"
                                    fontWeight={800}
                                    fontFamily="inter"
                                    lineHeight="32px"
                                    letterSpacing="0px"
                                >
                                    {payment.frequency}
                                </Text>
                            )}
                        </Stack>
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
                            bg: "#5A0F6E",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(109, 40, 217, 0.3)",
                        }}
                        _active={{
                            transform: "scale(0.98)",
                        }}
                    >
                        Ver servicio
                    </Button>
                </Box>
            </Box>
        </Link>
    )
}