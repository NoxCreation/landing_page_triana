import { Tracker } from "@/components/Tracker";
import { getPrivacyPolicyContent } from "@/lib/content";
import { getMetadata } from "@/lib/getMetadata";
import PrivacyPolicyIndex from "@/modules/privacy-policy";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return getMetadata({
        title: "Política de Privacidad - Triana Marketing",
        description: "Política de privacidad de Triana Marketing. Conoce cómo protegemos tus datos personales y garantizamos tu privacidad en nuestros servicios de marketing digital.",
        keywords: [
            "Política de Privacidad",
            "Triana Marketing",
            "Protección de Datos",
            "Privacidad en Marketing Digital",
            "Seguridad de la Información",
            "Confidencialidad",
        ]
    })
}

export default async function Home() {
    let content = await getPrivacyPolicyContent()
    if (!content) redirect("/500")

    return (
        <>
            <Tracker />
            <PrivacyPolicyIndex content={content} />
        </>
    );
}