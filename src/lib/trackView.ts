'use server';

import { queryDb2 } from '@/lib/db2';
import { headers } from 'next/headers';

// Función auxiliar para obtener país desde IP
async function getCountryFromIp(ip: string): Promise<{ code: string; name: string } | null> {
    if (!ip || ip === 'unknown' || ip === '::1' || ip === '127.0.0.1') {
        return null;
    }
    try {
        // Solicitamos countryCode y country
        const response = await fetch(`http://ip-api.com/json/${ip}?fields=countryCode,country&lang=es`, {
            signal: AbortSignal.timeout(2000),
        });
        if (!response.ok) return null;
        const data = await response.json();
        if (data.countryCode && data.country) {
            return { code: data.countryCode, name: data.country };
        }
        return null;
    } catch (error) {
        console.error(`Error obteniendo país para IP ${ip}:`, error);
        return null;
    }
}

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
        let ip = headersList.get('x-forwarded-for') || headersList.get('cf-connecting-ip') || 'unknown';
        if (ip && ip.includes(',')) ip = ip.split(',')[0].trim();

        const userAgent = headersList.get('user-agent') || '';

        const countryInfo = await getCountryFromIp(ip);
        const countryCode = countryInfo?.code || null;
        const countryName = countryInfo?.name || null;

        const sql = `
            INSERT INTO page_views (id, ip, country, "countryName", url, "sessionId", "userAgent", referrer, "createdAt")
            VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, NOW())
        `;

        await queryDb2(sql, [ip, countryCode, countryName, data.url, data.sessionId, userAgent, data.referrer || '']);

    } catch (error) {
        console.error('Error guardando page view:', error);
    }
}