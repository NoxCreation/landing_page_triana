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
        <Stack align={'center'} bg="#F3A0FF0D" minH={{ base: 'initial', md: '100vh' }} justifyContent={'center'} py={6} {...props} pt={{ base: 20, md: 12 }}>
            <Container maxW={{ base: 'sm', md: '100%' }} px={{ base: 6, md: 40 }}>
                {children}
            </Container>
        </Stack>
    )
}