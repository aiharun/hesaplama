'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
    className?: string;
    style?: React.CSSProperties;
}

export default function AdBanner({
    slot,
    format = 'auto',
    className = '',
    style = {}
}: AdBannerProps) {
    const adRef = useRef<HTMLDivElement>(null);
    const isLoaded = useRef(false);

    useEffect(() => {
        if (!isLoaded.current && adRef.current) {
            try {
                // @ts-expect-error - adsbygoogle is defined by the Google Ads script
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                isLoaded.current = true;
            } catch (error) {
                console.error('AdSense error:', error);
            }
        }
    }, []);

    // Development mode - show placeholder
    if (process.env.NODE_ENV === 'development') {
        return (
            <div
                className={`ad-banner ${className}`}
                style={style}
            >
                <span>📢 Reklam Alanı (Slot: {slot})</span>
            </div>
        );
    }

    return (
        <div ref={adRef} className={className} style={style}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client="ca-pub-3627905544274845"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}

// Preset banner types
export function TopBanner() {
    return (
        <AdBanner
            slot="1234567890"
            format="horizontal"
            className="ad-banner"
        />
    );
}

export function MiddleBanner() {
    return (
        <AdBanner
            slot="2345678901"
            format="auto"
            className="ad-banner ad-banner-large"
        />
    );
}

export function SidebarAd() {
    return (
        <AdBanner
            slot="3456789012"
            format="rectangle"
            className="ad-banner ad-banner-side"
        />
    );
}

export function BottomBanner() {
    return (
        <AdBanner
            slot="4567890123"
            format="horizontal"
            className="ad-banner"
        />
    );
}
