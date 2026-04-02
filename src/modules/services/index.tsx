import { Stack } from "@chakra-ui/react";
import ServiceSection from "./components/ServiceSection";
import Clarifications from "./components/Clarifications";
import { ContentType } from "@/types/ContentType";

export default function ServiceIndex({
    content
}: {
    content: ContentType
}) {
    return (
        <Stack gap={0}>
            <ServiceSection content={content} />
            <Clarifications content={content} />
        </Stack>
    )
}