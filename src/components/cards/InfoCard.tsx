import { BoxProps, Card } from "@chakra-ui/react";

type TestimonialCardProps = {
    title: string;
    description: string;
} & BoxProps;

export default function InfoCard({
    title,
    description,
    ...props
}: TestimonialCardProps) {
    return (
        <Card.Root
            bg="white"
            border="2px solid"
            borderColor="gray.100"
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
            { ...props }
        >
            <Card.Body
                gap="2"
                textAlign="center"
                alignItems="center"
                color="black"
                p="8"
            >
                <Card.Title
                    fontFamily="Inter"
                    fontWeight="800"
                    fontSize="24px"
                    lineHeight="32px"
                    letterSpacing="0%"
                    textAlign="center"
                    color="#3F3F3F">
                    {title}
                </Card.Title>

                <Card.Description
                    fontFamily="Inter"
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="22px"
                    letterSpacing="0px"
                    textAlign="center"
                    color="#717171">
                    {description}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}