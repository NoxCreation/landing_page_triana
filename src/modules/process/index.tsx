import Cases from "./components/Cases";
import Hero from "./components/Hero";
import ProcessSteps from "./components/ProcessSteps";
import ToolsUsed from "./components/ToolsUsed";

export default function ProcessIndex() {
    return (
        <>
            <Hero />
            <ProcessSteps />
            <ToolsUsed />
            <Cases />
        </>
    )
}