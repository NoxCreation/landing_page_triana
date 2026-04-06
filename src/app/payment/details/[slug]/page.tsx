import { getContent } from '@/lib/content';
import { PaymentDetailsIndex } from '@/modules/payment/PaymentDetailsIndex';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function PaymentDetails({ params }: { params: { slug: string } }) {
    const { slug } = await params
    let content = await getContent()
    if (!content) redirect("/500")

    const service = content.services.services.find(service => service.slug == slug)

    return (
        <PaymentDetailsIndex service={service}/>
    );
}