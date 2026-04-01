import { BoxProps, Card, Icon } from "@chakra-ui/react";
import * as FeatherIcons from "react-icons/fi";

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
    // Obtener el componente del ícono si existe
    const IconComponent = icon && FeatherIcons[icon as keyof typeof FeatherIcons];

    return (
        <Card.Root
            bg="white"
            border="2px solid"
            borderColor="gray.100"
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
            {...props}
        >
            <Card.Body
                gap="2"
                textAlign="center"
                alignItems="center"
                color="black"
                p="8"
            >
                {IconComponent && (
                    <Icon
                        as={IconComponent}
                        boxSize={10}
                        color="primary.500"
                        mb={2}
                    />
                )}
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