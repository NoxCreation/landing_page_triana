import { BoxProps, Card, Icon, Circle } from "@chakra-ui/react";
import * as FeatherIcons from "react-icons/fi";
import { useMemo } from "react";

type InfoCardProps = {
    title: string;
    description: string;
    icon?: string;
} & BoxProps;

export default function InfoCard({
    title,
    description,
    icon,
    ...props
}: InfoCardProps) {
    const IconComponent = icon && FeatherIcons[icon as keyof typeof FeatherIcons];

    // Generar un color aleatorio (HSL) al montar el componente
    const randomColor = useMemo(() => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 70%, 60%)`;
    }, []);

    return (
        <Card.Root
            position="relative"
            bg="white"
            border="2px solid"
            borderColor="gray.100"
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
            overflow="visible"
            display="flex"
            flexDirection="column"
            {...props}
        >
            {IconComponent && (
                <Circle
                    position="absolute"
                    top="-25px"
                    left="50%"
                    transform="translateX(-50%)"
                    size="50px"
                    bg={randomColor}
                    color="white"
                    zIndex={1}
                >
                    <Icon as={IconComponent} boxSize={5} />
                </Circle>
            )}
            <Card.Body
                gap="2"
                textAlign="center"
                alignItems="center"
                color="black"
                p="8"
                pt={IconComponent ? "12" : "8"}
            >
                <Card.Title
                    fontFamily="Inter"
                    fontWeight="800"
                    fontSize="22px"
                    lineHeight="32px"
                    letterSpacing="0%"
                    textAlign="center"
                    color="#3F3F3F"
                >
                    {title}
                </Card.Title>
                <Card.Description
                    fontFamily="Inter"
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="22px"
                    letterSpacing="0px"
                    textAlign="center"
                    color="#717171"
                >
                    {description}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}