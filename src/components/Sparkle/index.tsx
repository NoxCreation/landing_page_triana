"use client";

import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sparkle {
    id: string;
    x: string;
    y: string;
    color: string;
    delay: number;
    scale: number;
    lifespan: number;
}

// Componente Sparkle individual: usa motion.svg directamente
const SparkleComponent = ({ x, y, color, delay, scale, id }: Sparkle) => {
    return (
        <motion.svg
            key={id}
            style={{
                position: "absolute",
                left: x,
                top: y,
                pointerEvents: "none",
                zIndex: 20,
                width: "21px",
                height: "21px",
            }}
            viewBox="0 0 21 21"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, scale, 0],
                rotate: [0, 120, 240],
            }}
            transition={{
                duration: 1.2,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <path
                d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
                fill={color}
            />
        </motion.svg>
    );
};

interface SparklesTextProps {
    children: React.ReactNode;
    sparklesCount?: number;
    colors?: {
        first: string;
        second: string;
    };
    fontSize?: string | string[];
    fontWeight?: string | string[];
}

export const SparklesText: React.FC<SparklesTextProps> = ({
    children,
    colors = { first: "#A07CFE", second: "#FE8FB5" },
    sparklesCount = 15,
    fontSize = "3rem",
    fontWeight = "bold",
}) => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const generateSparkle = (): Sparkle => {
            // Distribución sobre el texto (evita bordes)
            const x = `${Math.random() * 80 + 10}%`;
            const y = `${Math.random() * 80 + 10}%`;
            const color = Math.random() > 0.5 ? colors.first : colors.second;
            const delay = Math.random() * 2;
            const scale = Math.random() * 0.6 + 0.4; // entre 0.4 y 1.0
            const lifespan = Math.random() * 10 + 5;
            const id = `${Date.now()}-${Math.random()}`;
            return { id, x, y, color, delay, scale, lifespan };
        };

        const initializeSparkles = () => {
            const newSparkles = Array.from({ length: sparklesCount }, generateSparkle);
            setSparkles(newSparkles);
        };

        const updateSparkles = () => {
            setSparkles((currentSparkles) =>
                currentSparkles.map((sparkle) => {
                    if (sparkle.lifespan <= 0) {
                        return generateSparkle();
                    }
                    return { ...sparkle, lifespan: sparkle.lifespan - 0.1 };
                })
            );
        };

        initializeSparkles();
        const interval = setInterval(updateSparkles, 100);

        return () => clearInterval(interval);
    }, [colors.first, colors.second, sparklesCount]);

    return (
        <Box position="relative" display="inline-block">
            <Box
                as="span"
                position="relative"
                display="inline-block"
                fontSize={fontSize}
                fontWeight={fontWeight}
            >
                {/* Las chispas se posicionan absolutas respecto a este contenedor */}
                {sparkles.map((sparkle) => (
                    <SparkleComponent key={sparkle.id} {...sparkle} />
                ))}
                <Text as="span" display="inline">
                    {children}
                </Text>
            </Box>
        </Box>
    );
};