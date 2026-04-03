import {
    Box,
    Image,
    Text,
    Heading,
    HStack,
    Icon,
    BoxProps,
} from "@chakra-ui/react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Link from "next/link";

type CardBlogProps = {
    image: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    href?: string;
} & BoxProps;

export default function CardBlog({
    image,
    title,
    excerpt,
    author,
    date,
    href = "#",
    ...props
}: CardBlogProps) {
    return (
        <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
            <Box
                bg="white"
                border="2px solid"
                borderColor={'gray.100'}
                overflow="hidden"
                borderTopLeftRadius="3xl"
                borderTopRightRadius="3xl"
                borderBottomLeftRadius="0"
                borderBottomRightRadius="3xl"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 250px rgba(0, 0, 0, 0.1)",
                }}
                {...props}
            >
                <Image
                    src={image}
                    alt={title}
                    objectFit="cover"
                    w="100%"
                    h="180px"
                />

                <Box p={4}>
                    <HStack
                        gap={2}
                        fontSize="14px"
                        fontWeight={400}
                        lineHeight="20px"
                        color={'gray.400'}
                    >
                        <Text>{author}</Text>
                        <Icon as={CalendarTodayIcon} fontSize="xs" />
                        <Text>{date}</Text>
                    </HStack>

                    <Heading
                        as="h3"
                        fontSize="20px"
                        fontWeight={800}
                        fontFamily="Inter"
                        lineHeight="32px"
                        mt={1}
                        mb={2}
                        color={'gray.600'}
                    >
                        {title}
                    </Heading>

                    <Text
                        color={'gray.600'}
                        fontSize="14px"
                        fontWeight={400}
                        lineHeight="22px"
                        mb={3}
                    >
                        {excerpt}
                    </Text>

                    {/* <HStack
                        gap={1}
                        color="#949494"
                        fontSize="14px"
                        fontWeight={400}
                        lineHeight="20px"
                    >
                        <Text>Leer más</Text>
                        <ArrowForwardIcon />
                    </HStack> */}
                </Box>
            </Box>
        </Link>
    );
}