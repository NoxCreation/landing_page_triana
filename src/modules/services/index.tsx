import { Stack } from "@chakra-ui/react";
import ServiceSection from "./components/ServiceSection";
import Clarifications from "./components/Clarifications";

export default function ServiceIndex(){
    return(
        <Stack gap={0}>
            <ServiceSection />
            <Clarifications />
        </Stack>
    )
}