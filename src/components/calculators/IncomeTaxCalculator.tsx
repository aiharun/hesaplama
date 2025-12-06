'use client';

import { useState, useEffect } from 'react';

interface TaxBracket {
    limit: number;
    rate: number;
}

interface FinancialData {
    year: number;
    month: string;
    minWageGross: number;
    minWageNet: number;
    taxBrackets: TaxBracket[];
    taxBracketsWage: TaxBracket[];
}

// Varsayılan 2025 vergi dilimleri
const defaultTaxBrackets: TaxBracket[] = [
    { limit: 158000, rate: 15 },
    { limit: 330000, rate: 20 },
    { limit: 800000, rate: 27 },
    { limit: 4300000, rate: 35 },
    { limit: Infinity, rate: 40 },
];

const defaultTaxBracketsWage: TaxBracket[] = [
    { limit: 158000, rate: 15 },
    { limit: 330000, rate: 20 },
    { limit: 1200000, rate: 27 },
    { limit: 4300000, rate: 35 },
    { limit: Infinity, rate: 40 },
];

export default function IncomeTaxCalculator() {
    const [income, setIncome] = useState<string>('250000');
    const [incomeType, setIncomeType] = useState<'wage' | 'other'>('wage');
    const [financialData, setFinancialData] = useState<FinancialData | null>(null);
    const [taxBrackets, setTaxBrackets] = useState<TaxBracket[]>(defaultTaxBracketsWage);
    const [taxBracketsWage, setTaxBracketsWage] = useState<TaxBracket[]>(defaultTaxBracketsWage);
    const [taxBracketsOther, setTaxBracketsOther] = useState<TaxBracket[]>(defaultTaxBrackets);
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState<{
        tax: number;
        netIncome: number;
        effectiveRate: number;
        breakdown: { bracket: string; tax: number }[]
    } | null>(null);

    useEffect(() => {
        const fetchFinancialData = async () => {
            try {
                const response = await fetch('/api/financial-data');
                if (response.ok) {
                    const data = await response.json();
                    setFinancialData(data.data);

                    // Infinity değerini düzelt
                    const fixBrackets = (brackets: TaxBracket[]) =>
                        brackets.map((b: TaxBracket, i: number, arr: TaxBracket[]) => ({
                            ...b,
                            limit: i === arr.length - 1 ? Infinity : b.limit
                        }));

                    const wageBrackets = fixBrackets(data.taxBracketsWage || data.data.taxBracketsWage);
                    const otherBrackets = fixBrackets(data.taxBrackets || data.data.taxBrackets);

                    setTaxBracketsWage(wageBrackets);
                    setTaxBracketsOther(otherBrackets);
                    setTaxBrackets(wageBrackets); // Varsayılan olarak ücret gelirleri
                }
            } catch (error) {
                console.error('Finansal veri hatası:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFinancialData();
    }, []);

    // Gelir türü değiştiğinde dilimleri güncelle
    useEffect(() => {
        setTaxBrackets(incomeType === 'wage' ? taxBracketsWage : taxBracketsOther);
    }, [incomeType, taxBracketsWage, taxBracketsOther]);

    const calculate = () => {
        const grossIncome = parseFloat(income);
        let remainingIncome = grossIncome;
        let totalTax = 0;
        let previousLimit = 0;
        const breakdown: { bracket: string; tax: number }[] = [];

        for (const bracket of taxBrackets) {
            if (remainingIncome <= 0) break;

            const bracketSize = bracket.limit - previousLimit;
            const taxableAmount = Math.min(remainingIncome, bracketSize);
            const bracketTax = taxableAmount * (bracket.rate / 100);

            if (taxableAmount > 0) {
                breakdown.push({
                    bracket: `%${bracket.rate} (${previousLimit.toLocaleString('tr-TR')} - ${bracket.limit === Infinity ? '∞' : bracket.limit.toLocaleString('tr-TR')} ₺)`,
                    tax: bracketTax
                });
            }

            totalTax += bracketTax;
            remainingIncome -= taxableAmount;
            previousLimit = bracket.limit;
        }

        const netIncome = grossIncome - totalTax;
        const effectiveRate = (totalTax / grossIncome) * 100;

        setResult({ tax: totalTax, netIncome, effectiveRate, breakdown });
    };

    const currentBrackets = taxBrackets;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">📋</span>
                <div>
                    <h1 className="calc-widget-title">Gelir Vergisi Hesaplama</h1>
                    <p className="calc-widget-subtitle">
                        {financialData ? `${financialData.year} ${financialData.month} verileri` : 'Yükleniyor...'}
                    </p>
                </div>
            </div>

            {!isLoading && financialData && (
                <div style={{
                    padding: 'var(--space-2) var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid var(--success)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.75rem',
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                }}>
                    <span>✓</span>
                    <span>
                        {financialData.year} yılı güncel vergi dilimleri kullanılıyor
                    </span>
                </div>
            )}

            <div className="form-group">
                <label className="form-label">Gelir Türü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setIncomeType('wage')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: incomeType === 'wage' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (incomeType === 'wage' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: incomeType === 'wage' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        💼 Ücret Geliri
                    </button>
                    <button
                        onClick={() => setIncomeType('other')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: incomeType === 'other' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (incomeType === 'other' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: incomeType === 'other' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        🏢 Diğer Gelirler
                    </button>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 'var(--space-2)' }}>
                    {incomeType === 'wage'
                        ? 'Maaş, ücret ve benzeri gelirler için (800K-1.2M arası %27)'
                        : 'Serbest meslek, kira, ticari kazanç vb. (330K-800K arası %27)'}
                </p>
            </div>

            <div className="form-group">
                <label className="form-label">Yıllık Brüt Gelir (₺)</label>
                <input
                    type="number"
                    className="form-input"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="Brüt gelir tutarı"
                    min="0"
                />
            </div>

            <div className="info-card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
                <h4 style={{ fontSize: '0.875rem', marginBottom: 'var(--space-2)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    📊 {financialData?.year || 2025} Gelir Vergisi Dilimleri
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        ({incomeType === 'wage' ? 'Ücret' : 'Diğer'})
                    </span>
                </h4>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {currentBrackets.map((bracket, index) => {
                        const prevLimit = index === 0 ? 0 : currentBrackets[index - 1].limit;
                        return (
                            <div key={index} style={{ padding: '2px 0' }}>
                                <span style={{ color: 'var(--text-muted)' }}>
                                    {prevLimit.toLocaleString('tr-TR')} - {bracket.limit === Infinity ? '∞' : bracket.limit.toLocaleString('tr-TR')} ₺:
                                </span>
                                <span style={{ color: 'var(--primary-400)', fontWeight: 600, marginLeft: '8px' }}>
                                    %{bracket.rate}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg" disabled={isLoading}>
                {isLoading ? 'Yükleniyor...' : 'Hesapla'}
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Toplam Gelir Vergisi</p>
                    <p className="result-value">
                        ₺{result.tax.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Brüt Gelir</span>
                            <span className="result-row-value">
                                ₺{parseFloat(income).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Net Gelir (Vergi Sonrası)</span>
                            <span className="result-row-value" style={{ color: 'var(--success)' }}>
                                ₺{result.netIncome.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Efektif Vergi Oranı</span>
                            <span className="result-row-value">
                                %{result.effectiveRate.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {result.breakdown.length > 0 && (
                        <div style={{ marginTop: 'var(--space-4)' }}>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
                                📈 Dilim Detayı:
                            </p>
                            {result.breakdown.map((item, index) => (
                                <div key={index} className="result-row">
                                    <span className="result-row-label" style={{ fontSize: '0.75rem' }}>{item.bracket}</span>
                                    <span className="result-row-value">
                                        ₺{item.tax.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>⚠️ Önemli Bilgi</h3>
                <p style={{ marginTop: 'var(--space-2)', fontSize: '0.8125rem' }}>
                    Bu hesaplama yalnızca gelir vergisi dilimlerini gösterir. Gerçek maaş bordrosunda
                    SGK primi (%14), işsizlik sigortası (%1) ve damga vergisi gibi ek kesintiler de bulunur.
                    Kesin hesaplamalar için mali müşavirinize danışın.
                </p>
            </div>
        </div>
    );
}
