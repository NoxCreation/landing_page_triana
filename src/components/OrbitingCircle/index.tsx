"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface OrbitingCirclesProps extends BoxProps {
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number;
}

export function OrbitingCircles({
    children,
    reverse = false,
    duration = 20,
    radius = 160,
    path = true,
    iconSize = 30,
    speed = 1,
    ...restProps
}: OrbitingCirclesProps) {
    const calculatedDuration = duration / speed;
    const childrenArray = React.Children.toArray(children);
    const total = childrenArray.length;
    const direction = reverse ? "reverse" : "normal";

    // ID único para keyframes
    const orbitKeyframesId = `orbit-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <Box position="relative" width="100%" height="100%" {...restProps}>
            <style>
                {`
          @keyframes ${orbitKeyframesId} {
            0% {
              transform: rotate(calc(var(--angle) + 0deg)) translateX(var(--radius)) rotate(0deg);
            }
            100% {
              transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(-360deg);
            }
          }
        `}
            </style>

            {/* Círculo trazado */}
            {path && (
                <Box
                    as="svg"
                    position="absolute"
                    inset={0}
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                >
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        stroke="rgba(0,0,0,0.15)"
                        strokeWidth="1"
                    />
                </Box>
            )}

            {/* Elementos orbitantes */}
            {childrenArray.map((child, index) => {
                const angle = (360 / total) * index;
                return (
                    <Box
                        key={index}
                        position="absolute"
                        top="50%"
                        left="50%"
                        width={`${iconSize}px`}
                        height={`${iconSize}px`}
                        marginLeft={`-${iconSize / 2}px`}
                        marginTop={`-${iconSize / 2}px`}
                        style={
                            {
                                "--angle": `${angle}deg`,
                                "--radius": `${radius}px`,
                            } as React.CSSProperties
                        }
                        css={{
                            animation: `${orbitKeyframesId} ${calculatedDuration}s linear infinite`,
                            animationDirection: direction,
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            height="100%"
                        >
                            {child}
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}