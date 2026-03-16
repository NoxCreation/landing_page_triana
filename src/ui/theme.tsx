import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    500: { value: "#780f7f" },
                },
                primary: {
                    500: { value: "#611161" }
                },
                secondary: {
                    500: { value: "#F3A0FF" }
                },
                terciary: {
                    500: { value: "#B223CF" }
                }
            },
            fonts: {
                heading: { value: "var(--font-bricolage)" },
                body: { value: "var(--font-inter)" },
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

export default system