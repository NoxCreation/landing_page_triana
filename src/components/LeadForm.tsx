"use client"

import { Box, Flex, Grid, Heading, Text, Input, Textarea, InputGroup } from "@chakra-ui/react";
import ButtonUi from "./Button";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const countryFlags: Record<string, string> = {
    "1": "🇺🇸",
    "52": "🇲🇽",
    "34": "🇪🇸",
    "44": "🇬🇧",
    "57": "🇨🇴",
    "54": "🇦🇷",
    "55": "🇧🇷",
    "51": "🇵🇪",
    "593": "🇪🇨",
    "505": "🇳🇮",
    "503": "🇸🇻",
    "502": "🇬🇹",
    "507": "🇵🇦",
    "506": "🇨🇷",
};

function getCountryCode(number: string): string {
    const cleaned = number.replace(/\D/g, "");
    if (cleaned.startsWith("1") && cleaned.length >= 1) return "1";
    if (cleaned.startsWith("52") && cleaned.length >= 2) return "52";
    if (cleaned.startsWith("34") && cleaned.length >= 2) return "34";
    if (cleaned.startsWith("44") && cleaned.length >= 2) return "44";
    if (cleaned.startsWith("57") && cleaned.length >= 2) return "57";
    if (cleaned.startsWith("54") && cleaned.length >= 2) return "54";
    if (cleaned.startsWith("55") && cleaned.length >= 2) return "55";
    if (cleaned.startsWith("51") && cleaned.length >= 2) return "51";
    if (cleaned.startsWith("593") && cleaned.length >= 3) return "593";
    if (cleaned.startsWith("505") && cleaned.length >= 3) return "505";
    if (cleaned.startsWith("503") && cleaned.length >= 3) return "503";
    if (cleaned.startsWith("502") && cleaned.length >= 3) return "502";
    if (cleaned.startsWith("507") && cleaned.length >= 3) return "507";
    if (cleaned.startsWith("506") && cleaned.length >= 3) return "506";
    return "1";
}

function getCountryPrefix(code: string): string {
    const prefixMap: Record<string, string> = {
        "1": "+1",
        "52": "+52",
        "34": "+34",
        "44": "+44",
        "57": "+57",
        "54": "+54",
        "55": "+55",
        "51": "+51",
        "593": "+593",
        "505": "+505",
        "503": "+503",
        "502": "+502",
        "507": "+507",
        "506": "+506",
    };
    return prefixMap[code] || "+1";
}

export default function LeadForm() {
    return (
        <Box w="100%" bg="gray.50" py={16} px={4}>
            <Box maxW="1200px" mx="auto">
                <Box textAlign="center">
                    <Heading as="h2" color="gray.600" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="700" mb={4}>
                        ¿Listo para transformar tu negocio?
                    </Heading>
                    <Text fontSize="md" color="gray.600">
                        Completa el formulario y recibe una respuesta personalizada en menos de 24 horas
                    </Text>
                </Box>

                <Box p={{ base: 6, md: 10 }} maxW="900px" mx="auto">
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                        <Box>
                            <Text fontWeight="600" mb={2} color="gray.700">Nombre*</Text>
                            <Input
                                placeholder="Juan"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                h="50px"
                                p="3"
                            />
                        </Box>
                        <Box>
                            <Text fontWeight="600" mb={2} color="gray.700">Apellido*</Text>
                            <Input
                                placeholder="Pérez"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                h="50px"
                                p="3"
                            />
                        </Box>
                    </Grid>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                        <Box>
                            <Text fontWeight="600" mb={2} color="gray.700">Correo electrónico*</Text>
                            <Input
                                type="email"
                                placeholder="juan@ejemplo.com"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                h="50px"
                                p="3"
                            />
                        </Box>

                        <Box>
                            <Text fontWeight="600" mb={2} color="gray.700">Número de teléfono*</Text>
                            <Box
                                position="relative"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                bg="white"
                                _focusWithin={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                            >
                                <Flex align="center" px={4}>
                                    <Box
                                        as="span"
                                        fontSize="xl"
                                        mr={1}
                                        id="country-flag"
                                    >
                                        🇺🇸
                                    </Box>
                                    <Box
                                        as="span"
                                        color="gray.500"
                                        fontWeight="600"
                                        mr={2}
                                        id="country-prefix"
                                    >
                                        +1
                                    </Box>
                                    <Input
                                        id="phone-input"
                                        type="tel"
                                        placeholder="555 555 555"
                                        border="none"
                                        _focus={{ boxShadow: "none" }}
                                        h="45px"
                                        p="3"
                                        onChange={(e) => {
                                            const input = e.target.value;
                                            const code = getCountryCode(input);
                                            const flag = countryFlags[code] || "🇺🇸";
                                            const prefix = getCountryPrefix(code);
                                            const flagEl = document.getElementById("country-flag");
                                            const prefixEl = document.getElementById("country-prefix");
                                            if (flagEl) flagEl.textContent = flag;
                                            if (prefixEl) prefixEl.textContent = prefix;
                                        }}
                                    />
                                </Flex>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                        <Box>
                            <Text fontWeight="600" mb={2} color="gray.700">Tipo de Negocio*</Text>
                            <Input
                                placeholder="Escribe tu tipo de negocio"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl"
                                _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                h="50px"
                                p="3"
                            />
                        </Box>
                        <Box>
                            <Text fontWeight="600" mb={2} color="gray.700">Servicios de interés*</Text>
                            <Box
                                as="select"
                                border="2px solid"
                                borderColor="gray.200"
                                borderTopLeftRadius="3xl"
                                borderTopRightRadius="3xl"
                                borderBottomLeftRadius="0"
                                borderBottomRightRadius="3xl" _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                                h="50px"
                                bg="white"
                                cursor="pointer"
                                w="100%"
                                p="3"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="asesoria">Asesoría estratégica</option>
                                <option value="redes">Gestión de redes sociales</option>
                                <option value="contenido">Creación de contenido</option>
                                <option value="tienda">Tienda en línea</option>
                                <option value="otro">Otro</option>
                            </Box>
                        </Box>
                    </Grid>

                    <Box mb={6}>
                        <Text fontWeight="600" mb={2} color="gray.700">Descipción de tu negocio*</Text>
                        <Textarea
                            border="2px solid"
                            borderColor="gray.200"
                            borderTopLeftRadius="3xl"
                            borderTopRightRadius="3xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="3xl"
                            _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                            rows={4}
                            p="3"
                            resize="none"
                        />
                    </Box>

                    <Box mb={6}>
                        <Text fontWeight="600" mb={2} color="gray.700">¿En qué podemos ayudarte?</Text>
                        <Textarea
                            border="2px solid"
                            borderColor="gray.200"
                            borderTopLeftRadius="3xl"
                            borderTopRightRadius="3xl"
                            borderBottomLeftRadius="0"
                            borderBottomRightRadius="3xl"
                            _focus={{ borderColor: "#8B5CF6", boxShadow: "0 0 0 1px #8B5CF6" }}
                            rows={4}
                            p="3"
                            resize="none"
                        />
                    </Box>

                    <Flex>
                        <ButtonUi
                            text="Enviar propuesta por WhatsApp"
                            icon={<WhatsAppIcon />}
                            color="white"
                            bg="brand.500"
                            ml="auto"
                        />
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}
