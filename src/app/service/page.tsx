import Clarifications from "@/components/service/Clarifications";
import ServiceSection from "@/components/service/ServiceSection";
import { Stack } from "@chakra-ui/react";

export default function Service(){
    return(
        <Stack gap={0}>
            <ServiceSection />
            <Clarifications />
        </Stack>
    )
}