'use client';

import { useState } from 'react';

export default function LoanCalculator() {
    const [principal, setPrincipal] = useState<string>('100000');
    const [rate, setRate] = useState<string>('3.5');
    const [term, setTerm] = useState<string>('12');
    const [result, setResult] = useState<{ monthly: number; totalInterest: number; total: number } | null>(null);

    const calculate = () => {
        const p = parseFloat(principal);
        const monthlyRate = parseFloat(rate) / 100;
        const n = parseFloat(term);

        // Aylık taksit formülü
        const monthly = (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
        const total = monthly * n;
        const totalInterest = total - p;

        setResult({ monthly, totalInterest, total });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🏦</span>
                <div>
                    <h1 className="calc-widget-title">Kredi Hesaplama</h1>
                    <p className="calc-widget-subtitle">Taksit ve ödeme planınızı hesaplayın</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Kredi Tutarı (₺)</label>
                <input
                    type="number"
                    className="form-input"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Kredi miktarı"
                    min="0"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Aylık Faiz Oranı (%)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="Faiz oranı"
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Vade (Ay)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Taksit sayısı"
                        min="1"
                        max="120"
                    />
                </div>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Aylık Taksit Tutarı</p>
                    <p className="result-value">
                        ₺{result.monthly.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Kredi Tutarı</span>
                            <span className="result-row-value">
                                ₺{parseFloat(principal).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Toplam Faiz</span>
                            <span className="result-row-value">
                                ₺{result.totalInterest.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Toplam Ödeme</span>
                            <span className="result-row-value">
                                ₺{result.total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
