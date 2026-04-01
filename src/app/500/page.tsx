'use client'

import { SparklesText } from "@/components/Sparkle"
import { Transition } from "@/components/Transition"
import { Heading, Stack, Text } from "@chakra-ui/react"

export default function Error500() {
    return (

        <Stack h={'100vh'} alignItems={'center'} justifyContent={'center'}>
            <Transition type="top" velocity="fast">
                <SparklesText sparklesCount={10} fontSize={"200px"}>
                    <Heading fontSize={'200px'} lineHeight={1} color={'brand.500'}>
                        500
                    </Heading>
                </SparklesText>
            </Transition>

            <Transition type="bootom" velocity="fast">
                <Text color={'brand.500'} fontSize={'18px'}>
                    Ha ocurrido un problema en el servidor
                </Text>
            </Transition>

        </Stack>
    )
}