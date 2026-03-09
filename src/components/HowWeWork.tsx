import { Box, Flex, List, ListItem, Text, Heading, Image } from "@chakra-ui/react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';

type Item = {
    id: number;
    title: string;
    description: string;
    icono: React.ElementType;
};

const items: Item[] = [
    { id: 1, title: "Contacto", description: "Nos ponemos en contacto y evaluamos tu caso", icono: TouchAppIcon },
    { id: 2, title: "Diagnóstico", description: "Analizamos la situación para identificar oportunidades reales", icono: SearchIcon },
    { id: 3, title: "Plan personalizado", description: "Creamos una estrategia a medida", icono: AssignmentIcon },
    { id: 4, title: "Seguimiento", description: "Te acompaño paso a paso, optimizando resultados", icono: RocketLaunchIcon },
];

export default function HowWeWork() {
    return (
        <Box bg={"gray.50"} py={16} px={4}>
            <Flex direction="column" align="center" maxW="1100px" mx="auto">
                <Heading textAlign="center" pb="16" color={"gray.600"} mb={4} fontSize={{ base: "3xl", md: "5xl" }} fontWeight={700}>
                    Cómo trabajamos juntos
                </Heading>

                <Box w="100%" display="flex" flexDirection={{ base: "column", md: "row" }} gap={10} alignItems="center">
                    <Box flex="1" minW={0} maxW="560px">
                        <List.Root gap={6}>
                            {items.map((it) => (
                                <ListItem key={it.id} display="flex" alignItems="flex-start" gap={4}>
                                    <Box
                                        w="48px"
                                        h="48px"
                                        borderRadius="full"
                                        border="2px solid"
                                        borderColor={"#7C3AED"}
                                        color="#7C3AED"
                                        display="grid"
                                        placeItems="center"
                                        fontWeight="bold"
                                        flexShrink={0}
                                    >
                                        {it.icono && <it.icono />}
                                    </Box>
                                    <Box>
                                        <Text fontWeight="700" color={"gray.600"} mb={1}>{it.title}</Text>
                                        <Text color="gray.600" fontSize="sm">{it.description}</Text>
                                    </Box>
                                </ListItem>
                            ))}
                        </List.Root>
                    </Box>

                    <Box flex="1" minW={0} textAlign="center">
                        <Image src="/sistR.webp" alt="Foto derecha" maxW="420px" w="100%" borderRadius="2xl" />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}
