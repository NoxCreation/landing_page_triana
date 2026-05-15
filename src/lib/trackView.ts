'use server';

import { queryDb2 } from '@/lib/db2';
import { headers } from 'next/headers';

// Función auxiliar para obtener país desde IP
async function getCountryFromIp(ip: string): Promise<string | null> {
    if (!ip || ip === 'unknown' || ip === '::1' || ip === '127.0.0.1') {
        return null; // IP local o inválida
    }

    try {
        // Usamos ip-api.com (gratuito, rápido, sin clave)
        const response = await fetch(`http://ip-api.com/json/${ip}?fields=countryCode&lang=es`, {
            // Timeout de 2 segundos para no bloquear el registro
            signal: AbortSignal.timeout(2000),
        });

        if (!response.ok) return null;

        const data = await response.json();
        return data.countryCode || null; // Ej: "US", "ES", "MX"
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
        // Si hay múltiples IPs (por proxies), tomar la primera
        if (ip && ip.includes(',')) ip = ip.split(',')[0].trim();

        const userAgent = headersList.get('user-agent') || '';

        // Obtener país desde la IP (llamada externa)
        const country = await getCountryFromIp(ip);

        const sql = `
            INSERT INTO page_views (id, ip, country, url, "sessionId", "userAgent", referrer, "createdAt")
            VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, NOW())
        `;

        await queryDb2(sql, [ip, country, data.url, data.sessionId, userAgent, data.referrer || '']);

        // Si quieres guardar UTM, modifica la tabla agregando columnas y extiende el INSERT
        // O crea otra tabla page_views_utm relacionada.

    } catch (error) {
        console.error('Error guardando page view:', error);
        // No lanzar error para no afectar la experiencia del usuario
    }
}