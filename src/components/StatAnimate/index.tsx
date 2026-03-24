'use client'

import { Stack, Text } from "@chakra-ui/react"
import AnimatedStat from "../home/NumberAnimate"

export const StatAnimate = ({
    value,
    label
}: {
    value: number,
    label: string
}) => (
    <Stack gap={0} alignItems={'center'}>
        <AnimatedStat
            suffix="+"
            value={value}
            fontFamily="Bricolage Grotesque"
            fontWeight="800"
            fontSize="36px"
            lineHeight="40px"
            letterSpacing="0%"
            color="primary.500"
            margin={0}
            h={"40px"}
        />
        <Text
            color="#3F3F3F"
            w="150.69px"
            mt={2}
            fontFamily="Inter"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            letterSpacing="0px"
        >{label}</Text>
    </Stack>
)