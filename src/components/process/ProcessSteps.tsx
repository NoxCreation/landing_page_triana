import { Box, Grid, Heading, Text, Flex, Separator, Icon } from "@chakra-ui/react";
import { steps } from "@/constants/process/Steps";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

export default function ProcessSteps() {
    return (
        <Box w="100%" bg="#F3A0FF0D" py={16} px={4}>
            <Box maxW="1440px" mx="auto" textAlign="center">
                <Flex m={"auto"} w="1100px" gap="8px" textAlign="center" mb={12} direction="column">
                    <Heading
                        textAlign="center"
                        fontFamily="Bricolage Grotesque"
                        fontWeight="800"
                        fontSize="64px"
                        lineHeight="70px"
                        letterSpacing="0%"
                        color="#3F3F3F">
                        Fases de Nuestro Trabajo
                    </Heading>

                    <Text
                        textAlign="center"
                        fontFamily="Inter"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="22px"
                        letterSpacing="0px"
                        color="#717171">
                        Nos hacemos cargo desde que se abre el proyecto hasta que hacemos entrega
                        de las llaves del local, además te ayudamos a crecer tu negocio desde lo
                        digital
                    </Text>
                </Flex>

                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={6}
                    maxW="1120px"
                    m="auto"
                >
                    {steps.map((s) => (
                        <Box
                            key={s.id}
                            bg="white"
                            borderTopLeftRadius="3xl"
                            borderTopRightRadius="3xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="3xl"
                            border="2px solid"
                            borderColor="#E5E7EB"
                            overflow="hidden"
                            p={6}
                            textAlign="left"
                        >
                            <Heading
                                as="h3"
                                fontFamily="inter"
                                fontSize="24px"
                                fontWeight="800"
                                mb={3}
                                pl="28px"       
                                textIndent="-28px"
                                color="#3F3F3F"
                            >
                                {s.title}
                            </Heading>

                            <Separator mx="-10" borderColor={"gray.300"} />

                            <Box
                                p={0}
                                my={4}
                            >
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
                                    {s.that}
                                </Text>

                                <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                    {s.items.map((items, i) => (
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
                                                {items}
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
                                    pt={5}
                                    pb={3}
                                >
                                    {s.important}
                                </Text>

                                <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                    {s.itemsI.map((itemsI, i) => (
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
                                                {itemsI}
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
                                    pt={5}
                                    pb={3}
                                >
                                    {s.we}
                                </Text>

                                <Box as="ul" listStyleType="none" pl={0} mb={6}>
                                    {s.data.map((data, i) => (
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
                                                {data}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
