import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutCEOProps {
    title: string;
    description: string;
    image?: string;        // opcional, por defecto "/social.webp"
    url?: string;          // opcional, si no se usa toma la URL base del entorno
    type?: 'website' | 'article' | 'profile';
    children: ReactNode;
}

export default function LayoutCEO({
    title,
    description,
    image = '/social.webp',
    url,
    type = 'website',
    children,
}: LayoutCEOProps) {
    // Construir URL completa para la imagen y la página
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://3anamarketing.com';
    const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
    const fullPageUrl = url ? url : baseUrl;

    return (
        <>
            <Head>
                {/* Metadatos básicos */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content={type} />
                <meta property="og:url" content={fullPageUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={fullImageUrl} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={fullPageUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={fullImageUrl} />

                {/* Canonical URL (opcional) */}
                {url && <link rel="canonical" href={fullPageUrl} />}

                {/* Color */}
                <meta name="msapplication-TileColor" content={"#F3A0FF"} />
                <meta name="theme-color" content={"#F3A0FF"} />
            </Head>
            {children}
        </>
    );
}