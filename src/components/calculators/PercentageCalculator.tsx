'use client';

import { useState } from 'react';

export default function PercentageCalculator() {
    const [mode, setMode] = useState<'find_percent' | 'percent_of' | 'percent_change'>('percent_of');
    const [value1, setValue1] = useState<string>('100');
    const [value2, setValue2] = useState<string>('25');

    const calculateResult = () => {
        const v1 = parseFloat(value1) || 0;
        const v2 = parseFloat(value2) || 0;

        switch (mode) {
            case 'percent_of':
                // v2% of v1
                return (v1 * v2) / 100;
            case 'find_percent':
                // v1 is what % of v2
                return v2 !== 0 ? (v1 / v2) * 100 : 0;
            case 'percent_change':
                // % change from v1 to v2
                return v1 !== 0 ? ((v2 - v1) / v1) * 100 : 0;
            default:
                return 0;
        }
    };

    const result = calculateResult();

    const getLabels = () => {
        switch (mode) {
            case 'percent_of':
                return { label1: 'Sayı', label2: 'Yüzde (%)', resultLabel: 'Sonuç' };
            case 'find_percent':
                return { label1: 'Değer', label2: 'Toplam', resultLabel: 'Yüzde Oranı' };
            case 'percent_change':
                return { label1: 'Eski Değer', label2: 'Yeni Değer', resultLabel: 'Değişim Oranı' };
        }
    };

    const labels = getLabels();

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">%</span>
                <div>
                    <h1 className="calc-widget-title">Yüzde Hesaplama</h1>
                    <p className="calc-widget-subtitle">Yüzdelik hesaplamalar</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Hesaplama Türü</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('percent_of')}
                        className="btn"
                        style={{
                            background: mode === 'percent_of' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'percent_of' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'percent_of' ? 'white' : 'var(--text-secondary)',
                            justifyContent: 'flex-start',
                            textAlign: 'left'
                        }}
                    >
                        Bir sayının yüzdesi (100&apos;ün %25&apos;i = ?)
                    </button>
                    <button
                        onClick={() => setMode('find_percent')}
                        className="btn"
                        style={{
                            background: mode === 'find_percent' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'find_percent' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'find_percent' ? 'white' : 'var(--text-secondary)',
                            justifyContent: 'flex-start',
                            textAlign: 'left'
                        }}
                    >
                        Yüzde oranı bulma (25, 100&apos;ün yüzde kaçı?)
                    </button>
                    <button
                        onClick={() => setMode('percent_change')}
                        className="btn"
                        style={{
                            background: mode === 'percent_change' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'percent_change' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'percent_change' ? 'white' : 'var(--text-secondary)',
                            justifyContent: 'flex-start',
                            textAlign: 'left'
                        }}
                    >
                        Yüzde değişimi (80&apos;den 100&apos;e = %?)
                    </button>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">{labels.label1}</label>
                    <input
                        type="number"
                        className="form-input"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                        step="any"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">{labels.label2}</label>
                    <input
                        type="number"
                        className="form-input"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                        step="any"
                    />
                </div>
            </div>

            <div className="result-box">
                <p className="result-label">{labels.resultLabel}</p>
                <p className="result-value">
                    {mode === 'percent_of'
                        ? result.toLocaleString('tr-TR', { maximumFractionDigits: 4 })
                        : `%${result.toFixed(2)}`
                    }
                </p>

                {mode === 'percent_change' && (
                    <p style={{
                        fontSize: '1rem',
                        color: result >= 0 ? 'var(--success)' : 'var(--error)',
                        marginTop: 'var(--space-2)'
                    }}>
                        {result >= 0 ? '📈 Artış' : '📉 Azalış'}
                    </p>
                )}

                <div className="result-secondary">
                    {mode === 'percent_of' && (
                        <div className="result-row">
                            <span className="result-row-label">Formül</span>
                            <span className="result-row-value">{value1} × {value2}% = {result.toFixed(2)}</span>
                        </div>
                    )}
                    {mode === 'find_percent' && (
                        <div className="result-row">
                            <span className="result-row-label">Formül</span>
                            <span className="result-row-value">({value1} / {value2}) × 100 = %{result.toFixed(2)}</span>
                        </div>
                    )}
                    {mode === 'percent_change' && (
                        <div className="result-row">
                            <span className="result-row-label">Fark</span>
                            <span className="result-row-value">
                                {(parseFloat(value2) - parseFloat(value1)).toLocaleString('tr-TR')}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
