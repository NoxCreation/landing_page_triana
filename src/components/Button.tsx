import { Button, ButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ButtonUiProps extends ButtonProps {
    children: ReactNode
    icon?: ReactNode
}

export default function ButtonUi({ children, icon, ...props }: ButtonUiProps) {
    return (
        <Button
            {...props}
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
            p={4}
            px={8}
        >
            {icon && icon}
            {children}
        </Button>
    )
}