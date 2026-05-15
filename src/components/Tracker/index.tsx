'use client';

import { trackPageView } from '@/lib/trackView';
import { useEffect } from 'react';

export function Tracker() {
    useEffect(() => {
        const sessionId = localStorage.getItem('track_session_id') || crypto.randomUUID();
        localStorage.setItem('track_session_id', sessionId);

        trackPageView({
            url: window.location.pathname,
            referrer: document.referrer,
            sessionId,
            utmSource: new URLSearchParams(window.location.search).get('utm_source'),
            utmMedium: new URLSearchParams(window.location.search).get('utm_medium'),
            utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        });
    }, []);

    return null;
}