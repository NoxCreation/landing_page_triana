'use server';

import { queryDb2 } from '@/lib/db2';
import { headers } from 'next/headers';

export async function trackPageView(data: {
    url: string;
    referrer?: string;
    sessionId: string;
    utmSource?: string | null;
    utmMedium?: string | null;
    utmCampaign?: string | null;
}) {
    try {
        const headersList = await headers();
        const ip = headersList.get('x-forwarded-for') || headersList.get('cf-connecting-ip') || 'unknown';
        const userAgent = headersList.get('user-agent') || '';

        // Extraer país de IP (opcional, puedes integrar API externa)
        // Por ahora se deja null
        const country = null;

        const sql = `
            INSERT INTO page_views (id, ip, country, url, "sessionId", "userAgent", referrer, "createdAt")
            VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, NOW())
        `;

        await queryDb2(sql, [ip, country, data.url, data.sessionId, userAgent, data.referrer || '']);

        // Opcional: guardar UTM en otra tabla si quieres métricas específicas
        // O puedes agregar columnas utm_source, etc. a page_views.

    } catch (error) {
        console.error('Error guardando page view:', error);
        // No lanzar error para no afectar la experiencia del usuario
    }
}