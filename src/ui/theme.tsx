import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    500: { value: "#780f7f" },
                },
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

export default system