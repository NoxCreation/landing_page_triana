import { getContent } from "@/lib/content";
import MyIndex from "@/modules/my";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function My() {
    let content = await getContent()
    if (!content) redirect("/500")

    return (
        <MyIndex content={content} />
    )
}