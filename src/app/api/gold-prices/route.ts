import { NextResponse } from 'next/server';

// Güncel altın fiyatları - Manuel olarak güncelleyin
// Son güncelleme: Aralık 2025
const GOLD_PRICES = {
    gram: 3150,
    ceyrek: 5150,
    yarim: 10300,
    tam: 20600,
    cumhuriyet: 21500,
    ata: 21800,
    lastUpdated: '2025-12-07'
};

export async function GET() {
    return NextResponse.json(GOLD_PRICES);
}
