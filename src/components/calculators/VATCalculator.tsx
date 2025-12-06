'use client';

import { useState } from 'react';

export default function VATCalculator() {
    const [amount, setAmount] = useState<string>('1000');
    const [vatRate, setVatRate] = useState<string>('20');
    const [mode, setMode] = useState<'add' | 'remove'>('add');
    const [result, setResult] = useState<{ netAmount: number; vatAmount: number; totalAmount: number } | null>(null);

    const calculate = () => {
        const value = parseFloat(amount);
        const rate = parseFloat(vatRate) / 100;

        if (mode === 'add') {
            const vatAmount = value * rate;
            setResult({
                netAmount: value,
                vatAmount,
                totalAmount: value + vatAmount
            });
        } else {
            const netAmount = value / (1 + rate);
            const vatAmount = value - netAmount;
            setResult({
                netAmount,
                vatAmount,
                totalAmount: value
            });
        }
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🧾</span>
                <div>
                    <h1 className="calc-widget-title">KDV Hesaplama</h1>
                    <p className="calc-widget-subtitle">KDV ekle veya KDV ayır</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">İşlem Türü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('add')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'add' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'add' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'add' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        KDV Ekle
                    </button>
                    <button
                        onClick={() => setMode('remove')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'remove' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'remove' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'remove' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        KDV Ayır
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                    {mode === 'add' ? 'KDV Hariç Tutar (₺)' : 'KDV Dahil Tutar (₺)'}
                </label>
                <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Tutar girin"
                    min="0"
                />
            </div>

            <div className="form-group">
                <label className="form-label">KDV Oranı</label>
                <select
                    className="form-select"
                    value={vatRate}
                    onChange={(e) => setVatRate(e.target.value)}
                >
                    <option value="1">%1 (Temel gıda, basılı yayın)</option>
                    <option value="10">%10 (İlaç, gıda, eğitim)</option>
                    <option value="20">%20 (Genel oran)</option>
                </select>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">
                        {mode === 'add' ? 'KDV Dahil Tutar' : 'KDV Hariç Tutar'}
                    </p>
                    <p className="result-value">
                        ₺{(mode === 'add' ? result.totalAmount : result.netAmount).toLocaleString('tr-TR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">KDV Hariç</span>
                            <span className="result-row-value">
                                ₺{result.netAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">KDV Tutarı (%{vatRate})</span>
                            <span className="result-row-value">
                                ₺{result.vatAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">KDV Dahil</span>
                            <span className="result-row-value">
                                ₺{result.totalAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
