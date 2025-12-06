import { NextResponse } from 'next/server';

// Güncel altın fiyatları - Manuel olarak güncelleyin
// Son güncelleme: Aralık 2025
const BASE_PRICES = {
    gram: 3150.00,
    ceyrek: 5150.00,
    yarim: 10300.00,
    tam: 20600.00,
    cumhuriyet: 21500.00,
    ata: 21800.00,
};

export const dynamic = 'force-dynamic';

export async function GET() {
    // Demo için ufak rastgele değişimler (Canlı piyasa simülasyonu)
    // Gerçek API bağlandığında bu kısım kaldırılabilir
    const fluctuation = () => (Math.random() - 0.5) * 0.50; // +/- 25 kuruş

    const prices = {
        gram: BASE_PRICES.gram + fluctuation(),
        ceyrek: BASE_PRICES.ceyrek + fluctuation(),
        yarim: BASE_PRICES.yarim + fluctuation(),
        tam: BASE_PRICES.tam + fluctuation(),
        cumhuriyet: BASE_PRICES.cumhuriyet + fluctuation(),
        ata: BASE_PRICES.ata + fluctuation(),
        lastUpdated: new Date().toLocaleTimeString('tr-TR'),
        isSimulated: true
    };

    return NextResponse.json(prices);
}
