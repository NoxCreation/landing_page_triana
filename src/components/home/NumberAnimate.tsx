"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Text, TextProps } from "@chakra-ui/react";

type AnimatedStatProps = {
    value: number;
    suffix?: string;
    prefix?: string;
    delay?: number;
} & TextProps;

export default function AnimatedStat({
    value,
    suffix = "",
    prefix = "",
    delay = 200,
    ...textProps
}: AnimatedStatProps) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <Text
            fontVariantNumeric="tabular-nums"
            {...textProps}
        >
            {prefix}
            <NumberFlow value={displayValue} />
            {suffix}
        </Text>
    );
}