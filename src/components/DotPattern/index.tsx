"use client";

import { Box } from "@chakra-ui/react";
import { useId } from "react";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    color?: string;
    opacity?: number;
}

export const DotPattern = ({
    width = 16,
    height = 16,
    x = 0,
    y = 0,
    cx = 1,
    cy = 1,
    cr = 1,
    color = "gray.400",
    opacity = 0.3,
    ...props
}: DotPatternProps) => {
    const patternId = useId();

    const fillColor = color.startsWith("#") || color.startsWith("rgb") || color.startsWith("var(")
        ? color
        : `var(--chakra-colors-${color.replace(/\./g, "-")})`;

    return (
        <Box
            as="svg"
            aria-hidden="true"
            position="absolute"
            inset={0}
            width="100%"
            height="100%"
            css={{
                pointerEvents: "none",
                "& .pattern-circle": {
                    fill: fillColor,
                    fillOpacity: opacity,
                },
            }}
            {...props as any}
        >
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <circle className="pattern-circle" cx={cx} cy={cy} r={cr} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
        </Box>
    );
};