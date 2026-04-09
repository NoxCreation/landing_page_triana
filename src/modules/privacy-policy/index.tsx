import { ContainerLanding } from "@/components/container";
import HtmlRenderer from "@/components/htmlRenderer";
import { Stack, Heading } from "@chakra-ui/react";

export default async function PrivacyPolicyIndex({
    content
}: {
    content: string
}) {

    return (
        <ContainerLanding>
            <Stack my={14}>
                <Heading as="h1" size="2xl" mb={2}>
                    Política de Privacidad
                </Heading>
                <HtmlRenderer>
                    {content}
                </HtmlRenderer>
            </Stack>
        </ContainerLanding>
    );
} 