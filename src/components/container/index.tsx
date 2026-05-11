import { Stack, Container, StackProps } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
} & StackProps

export const ContainerLanding = ({
    children,
    ...props
}: Props) => {
    return (
        <Stack
            align={'center'}
            bg="#F3A0FF0D"
            minH={{ base: 'initial', md: '100vh' }}
            justifyContent={'center'}
            py={6}
            pt={{ base: 20, md: 12 }}
            width="100%"
            {...props}
        >
            <Container
                maxW={{
                    base: 'sm',   // hasta 480px
                    md: '100%',   // de 768px a 1279px: ancho completo
                    xl: '1280px'  // a partir de 1280px: fijo en 1280px
                }}
                px={{ base: 6, md: 40, xl: 0 }}
                mx="auto"        // fuerza centrado horizontal
                position={'initial'}
                /* bg='red' */
            >
                {children}
            </Container>
        </Stack>
    )
}