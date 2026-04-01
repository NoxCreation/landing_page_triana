'use client'

import { BoxProps, Card, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type TestimonialCardProps = {
    title: string;
    description: string;
    icon?: IconType;
} & BoxProps;

export default function InfoCard({
    title,
    description,
    icon: IconComponent,
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
            transition="all 0.2s ease"
            _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                borderColor: "primary.200",
            }}
            {...props}
        >
            <Card.Body
                gap="4"
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