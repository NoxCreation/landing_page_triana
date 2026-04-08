import { ContentType } from "@/types/ContentType";
import Hero from "./components/Hero";
import HeroIntro from "./components/HeroIntro";
import Work from "./components/Work";

export default function MyIndex({
    content
}: {
    content: ContentType
}) {

    return (
        <>
            <Hero content={content} />
            <HeroIntro content={content}/>
            <Work content={content}/>
        </>
    )
}