import { NextResponse } from 'next/server';

// 2025 Türkiye Gelir Vergisi Dilimleri (Aralık 2025)
// Kaynak: Gelir İdaresi Başkanlığı (gib.gov.tr)
const TAX_BRACKETS_2025 = [
    { limit: 158000, rate: 15 },
    { limit: 330000, rate: 20 },
    { limit: 800000, rate: 27 },  // Ücret dışı gelirler için
    { limit: 4300000, rate: 35 },
    { limit: Infinity, rate: 40 },
];

// Ücret gelirleri için farklı dilimler (2025)
const TAX_BRACKETS_2025_WAGE = [
    { limit: 158000, rate: 15 },
    { limit: 330000, rate: 20 },
    { limit: 1200000, rate: 27 }, // Ücret gelirleri için
    { limit: 4300000, rate: 35 },
    { limit: Infinity, rate: 40 },
];

// 2025 yılı finansal verileri
const FINANCIAL_DATA = {
    year: 2025,
    month: 'Aralık',

    // Asgari ücret (2025 - tahmini, resmi açıklama bekleniyor)
    minWageGross: 22104.00, // Brüt asgari ücret (tahmini)
    minWageNet: 17002.12, // Net asgari ücret (tahmini - 2024 sonundaki gibi)

    // SGK oranları
    sgkWorkerRate: 14, // İşçi SGK primi oranı (%)
    sgkEmployerRate: 20.5, // İşveren SGK primi oranı (%)
    unemploymentWorkerRate: 1, // İşsizlik sigortası işçi payı (%)
    unemploymentEmployerRate: 2, // İşsizlik sigortası işveren payı (%)
    stampTaxRate: 0.759, // Damga vergisi oranı (binde 7.59)

    // Vergi dilimleri
    taxBrackets: TAX_BRACKETS_2025,
    taxBracketsWage: TAX_BRACKETS_2025_WAGE,

    // Yeniden değerleme oranı (2024 için %43.93)
    revaluationRate: 43.93,

    lastUpdate: '2025-01-01',
    source: 'Gelir İdaresi Başkanlığı (GİB)',
};

export async function GET() {
    return NextResponse.json({
        data: FINANCIAL_DATA,
        taxBrackets: TAX_BRACKETS_2025,
        taxBracketsWage: TAX_BRACKETS_2025_WAGE,
        source: 'Türkiye Cumhuriyeti Hazine ve Maliye Bakanlığı',
        disclaimer: 'Bu veriler bilgi amaçlıdır. Resmi hesaplamalar için Gelir İdaresi Başkanlığı ile iletişime geçin.',
        lastUpdate: new Date().toISOString(),
    });
}
