import { NextResponse } from 'next/server';

const FALLBACK_PRICES = {
    gram: 5746.23,
    ceyrek: 9509.00,
    yarim: 19018.00,
    tam: 38036.00,
    cumhuriyet: 39238.00,
    ata: 39251.78,
};

export const dynamic = 'force-dynamic';

export async function GET() {
    let prices = { ...FALLBACK_PRICES };
    let source = 'Simülasyon';

    // API KEY varsa CollectAPI kullan
    const apiKey = process.env.COLLECT_API_KEY;

    if (apiKey) {
        try {
            const res = await fetch('https://api.collectapi.com/economy/goldPrice', {
                headers: {
                    'authorization': `apikey ${apiKey}`,
                    'content-type': 'application/json'
                },
                next: { revalidate: 10 }
            });

            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    const getPrice = (name: string) => {
                        const item = data.result.find((i: any) => i.name === name);
                        return item ? item.selling : null;
                    };

                    const newPrices = {
                        gram: getPrice('Gram Altın'),
                        ceyrek: getPrice('Çeyrek Altın'),
                        yarim: getPrice('Yarım Altın'),
                        tam: getPrice('Tam Altın'),
                        cumhuriyet: getPrice('Cumhuriyet Altını'),
                        ata: getPrice('Ata Altın')
                    };

                    // Bulunan fiyatları güncelle
                    if (newPrices.gram) prices.gram = newPrices.gram;
                    if (newPrices.ceyrek) prices.ceyrek = newPrices.ceyrek;
                    if (newPrices.yarim) prices.yarim = newPrices.yarim;
                    if (newPrices.tam) prices.tam = newPrices.tam;
                    if (newPrices.cumhuriyet) prices.cumhuriyet = newPrices.cumhuriyet;
                    if (newPrices.ata) prices.ata = newPrices.ata;

                    source = 'Canlı Veri (CollectAPI)';
                }
            }
        } catch (error) {
            console.error('API Error:', error);
        }
    } else {
        // Key yoksa simülasyon (Canlı hissi için ufak değişim)
        const fluctuation = () => (Math.random() - 0.5) * 2.0; // +/- 1 TL
        prices.gram += fluctuation();
        // Diğer fiyatları gram değişimine göre güncelle veya sabit bırak
        // Şimdilik sadece gramı oynatıyoruz, diğerleri sabit kalsın karışıklık olmasın
    }

    return NextResponse.json({
        ...prices,
        lastUpdated: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
        source
    });
}
