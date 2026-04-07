import { Metadata } from 'next';

export function getMetadata({
    title = "3ana Marketing & Consulting",
    description = "Agencia de marketing digital y consultoría especializada en estrategias de crecimiento para negocios. Impulsamos tu marca con soluciones innovadoras y resultados medibles.",
    image = "/social.webp",
    keywords = [] as string[],
}): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://3anamarketing.com';
    const _title = `3ana Marketing & Consulting | ${title}`;
    const _description = description ? description : "Agencia de marketing digital y consultoría especializada en estrategias de crecimiento para negocios. Impulsamos tu marca con soluciones innovadoras y resultados medibles.";
    const _image = image ? image : "/social.webp";
    const fullImageUrl = _image.startsWith('http') ? _image : `${baseUrl}${_image}`;

    return {
        title: _title,
        description: _description,
        keywords: keywords,
        openGraph: {
            title: _title,
            description: _description,
            url: baseUrl,
            type: 'website',
            images: [{ url: fullImageUrl }],
        },
        twitter: {
            card: 'summary_large_image',
            title: _title,
            description: _description,
            images: [fullImageUrl],
        },
        themeColor: '#F3A0FF',
        other: {
            'msapplication-TileColor': '#F3A0FF',
        },
    };
}