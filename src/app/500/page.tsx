'use client'

import { DotPattern } from "@/components/DotPattern"
import { SparklesText } from "@/components/Sparkle"
import { Transition } from "@/components/Transition"
import { Heading, Stack, Text } from "@chakra-ui/react"

export default function Error500() {
    return (

        <Stack h={'100vh'} alignItems={'center'} justifyContent={'center'}>

            <Stack
                position={"absolute"}
                top={0}
                left={0}
                w={'100vw'}
                h={'100vh'}
                zIndex={0}
            >
                <DotPattern
                    width={20}
                    height={20}
                    cx={2}
                    cy={2}
                    cr={1.5}
                    color="gray.400"
                    opacity={0.2}
                />
            </Stack>

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