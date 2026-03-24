import { Box, Text, Flex, Image, BoxProps } from "@chakra-ui/react";

type TestimonialCardProps = {
    text: string;
    name: string;
    role: string;
    image: string;
} & BoxProps;

export default function TestimonialCard({
    text,
    name,
    role,
    image,
    ...props
}: TestimonialCardProps) {
    return (
        <Box
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
            border="2px solid"
            borderColor={'gray.100'}
            bg="white"
            py={{ base: 6, lg: "48px" }}
            px={{ base: 4, lg: "24px" }}
            w="100%"
            maxW="100%"
            overflow="hidden"
            {...props}
        >
            <Box mb={4}>
                <Text
                    color="#717171"
                    fontSize={{ base: "14px", lg: "18px" }}
                    fontWeight={400}
                    lineHeight={{ base: "20px", lg: "22px" }}
                    wordBreak="break-word"
                >
                    {text}
                </Text>
            </Box>

            <Flex align="flex-start" gap={3}>
                <Box
                    w={{ base: "32px", lg: "40px" }}
                    h={{ base: "32px", lg: "40px" }}
                    borderRadius="full"
                    overflow="hidden"
                    flexShrink={0}
                >
                    <Image
                        w="100%"
                        h="100%"
                        src={image}
                        objectFit="cover"
                    />
                </Box>

                <Box>
                    <Text
                        fontWeight={600}
                        color="#3F3F3F"
                        fontSize={{ base: "16px", lg: "18px" }}
                        lineHeight="22px"
                    >
                        {name}
                    </Text>

                    <Text
                        fontSize="14px"
                        color="#717171"
                        lineHeight="20px"
                    >
                        {role}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}