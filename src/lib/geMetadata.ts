// lib/metadata.ts
import { Metadata } from 'next';

export function geMetadata(): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://3anamarketing.com';
    const title = "3ana Marketing & Consulting";
    const description = "Agencia de marketing digital...";
    const image = "/social.webp";
    const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: baseUrl,
            type: 'website',
            images: [{ url: fullImageUrl }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [fullImageUrl],
        },
        themeColor: '#F3A0FF',
        other: {
            'msapplication-TileColor': '#F3A0FF',
        },
    };
}