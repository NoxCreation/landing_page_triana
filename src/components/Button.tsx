import { Button, ButtonProps } from "@chakra-ui/react"

interface ButtonUiProps extends ButtonProps {
  text: string
}

export default function ButtonUi({ text, ...props }: ButtonUiProps) {
    return (
        <Button
            {...props}
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="3xl"
            p={3}
        >
            {text}
        </Button>
    )
}