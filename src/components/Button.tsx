import { Button, ButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ButtonUiProps extends ButtonProps {
    text: string
    icon?: ReactNode
}

export default function ButtonUi({ text, icon, ...props }: ButtonUiProps) {
    return (
        <Button
            {...props}
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
            p={3}
        >
            {icon && icon}
            {text}
        </Button>
    )
}