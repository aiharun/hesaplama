'use client';

import { useState } from 'react';

export default function CompoundInterest() {
    const [principal, setPrincipal] = useState<string>('10000');
    const [rate, setRate] = useState<string>('15');
    const [time, setTime] = useState<string>('5');
    const [compound, setCompound] = useState<string>('12');
    const [result, setResult] = useState<{ interest: number; total: number; details: { year: number; amount: number }[] } | null>(null);

    const calculate = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        const t = parseFloat(time);
        const n = parseFloat(compound);

        const total = p * Math.pow(1 + r / n, n * t);
        const interest = total - p;

        const details = [];
        for (let year = 1; year <= t; year++) {
            const yearAmount = p * Math.pow(1 + r / n, n * year);
            details.push({ year, amount: yearAmount });
        }

        setResult({ interest, total, details });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">📈</span>
                <div>
                    <h1 className="calc-widget-title">Bileşik Faiz Hesaplama</h1>
                    <p className="calc-widget-subtitle">Faizin faizi ile yatırım büyümesi</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Anapara (₺)</label>
                <input
                    type="number"
                    className="form-input"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Yatırım tutarı"
                    min="0"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Yıllık Faiz Oranı (%)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="Faiz oranı"
                        min="0"
                        max="100"
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Süre (Yıl)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="Vade"
                        min="1"
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Bileşik Faiz Periyodu</label>
                <select
                    className="form-select"
                    value={compound}
                    onChange={(e) => setCompound(e.target.value)}
                >
                    <option value="1">Yıllık</option>
                    <option value="2">6 Aylık</option>
                    <option value="4">3 Aylık</option>
                    <option value="12">Aylık</option>
                    <option value="365">Günlük</option>
                </select>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Toplam Faiz Getirisi</p>
                    <p className="result-value">
                        ₺{result.interest.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Anapara</span>
                            <span className="result-row-value">
                                ₺{parseFloat(principal).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Toplam Birikim</span>
                            <span className="result-row-value">
                                ₺{result.total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    </div>

                    {result.details.length > 0 && (
                        <div style={{ marginTop: 'var(--space-4)' }}>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
                                Yıllık Birikim Tablosu:
                            </p>
                            {result.details.map((detail) => (
                                <div key={detail.year} className="result-row">
                                    <span className="result-row-label">{detail.year}. Yıl</span>
                                    <span className="result-row-value">
                                        ₺{detail.amount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
