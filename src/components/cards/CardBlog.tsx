// components/CardBlog.tsx

import {
    Box,
    Image,
    Text,
    Heading,
    HStack,
    Icon,
    Link,
    BoxProps,
} from "@chakra-ui/react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <Box
            bg="white"
            border="2px solid"
            borderColor="#E5E7EB"
            overflow="hidden"
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
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
                    color="#949494"
                >
                    <Text>{author}</Text>
                    <Icon as={CalendarTodayIcon} fontSize="xs" />
                    <Text>{date}</Text>
                </HStack>

                <Heading
                    as="h3"
                    fontSize="24px"
                    fontWeight={800}
                    fontFamily="Inter"
                    lineHeight="32px"
                    mt={1}
                    mb={2}
                    color="#3F3F3F"
                >
                    {title}
                </Heading>

                <Text
                    color="#717171"
                    fontSize="18px"
                    fontWeight={400}
                    lineHeight="22px"
                    mb={3}
                >
                    {excerpt}
                </Text>

                <Link
                    href={href}
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="20px"
                    color="#949494"
                    display="inline-flex"
                    alignItems="center"
                    gap={1}
                >
                    Leer más
                    <ArrowForwardIcon />
                </Link>
            </Box>
        </Box>
    );
}