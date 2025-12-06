import { NextResponse } from 'next/server';

// Cache storage
let cachedRates: Record<string, number> | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 saat (milisaniye)

// Ücretsiz API - Frankfurter (ECB verileri)
const EXCHANGE_API_URL = 'https://api.frankfurter.app/latest';

// Alternatif: ExchangeRate-API (ücretsiz tier)
// const EXCHANGE_API_URL = 'https://open.er-api.com/v6/latest/TRY';

interface FrankfurterResponse {
    base: string;
    date: string;
    rates: Record<string, number>;
}

async function fetchExchangeRates(): Promise<Record<string, number>> {
    try {
        // TRY bazlı kurları al
        const response = await fetch(`${EXCHANGE_API_URL}?from=TRY`, {
            next: { revalidate: 3600 } // Next.js cache: 1 saat
        });

        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }

        const data: FrankfurterResponse = await response.json();

        // TRY'den diğer para birimlerine dönüşüm oranları
        // API TRY->USD gibi veriyor, biz USD->TRY istiyoruz, ters çeviriyoruz
        const rates: Record<string, number> = {
            TRY: 1,
        };

        for (const [currency, rate] of Object.entries(data.rates)) {
            // 1 TRY = X USD ise, 1 USD = 1/X TRY
            rates[currency] = 1 / rate;
        }

        return rates;
    } catch (error) {
        console.error('Exchange rate fetch error:', error);
        // Fallback değerler
        return {
            USD: 34.50,
            EUR: 36.80,
            GBP: 43.50,
            CHF: 39.20,
            JPY: 0.23,
            CAD: 25.50,
            AUD: 22.90,
            TRY: 1,
            SAR: 9.20,
            AED: 9.40,
        };
    }
}

export async function GET() {
    const now = Date.now();

    // Cache kontrolü
    if (cachedRates && (now - lastFetchTime) < CACHE_DURATION) {
        return NextResponse.json({
            rates: cachedRates,
            cached: true,
            lastUpdate: new Date(lastFetchTime).toISOString(),
            nextUpdate: new Date(lastFetchTime + CACHE_DURATION).toISOString(),
        });
    }

    // Yeni kurları çek
    const rates = await fetchExchangeRates();

    // Cache'e kaydet
    cachedRates = rates;
    lastFetchTime = now;

    return NextResponse.json({
        rates,
        cached: false,
        lastUpdate: new Date(now).toISOString(),
        nextUpdate: new Date(now + CACHE_DURATION).toISOString(),
    });
}
