import { NextResponse } from 'next/server';

// Güncel yakıt fiyatları - Manuel olarak güncelleyin
// Son güncelleme: Aralık 2024 - İstanbul
const FUEL_PRICES = {
    benzin: 48.29,
    dizel: 46.61,
    lpg: 18.98,
    lastUpdated: '2024-12-07',
    source: 'EPDK',
    city: 'İstanbul'
};

export async function GET() {
    return NextResponse.json({
        ...FUEL_PRICES,
        lastUpdated: FUEL_PRICES.lastUpdated,
        cached: true
    });
}
