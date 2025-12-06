'use client';

import { useState } from 'react';

export default function SquareMeterFeetConverter() {
    const [value, setValue] = useState<string>('100');
    const [mode, setMode] = useState<'m2_to_ft2' | 'ft2_to_m2'>('m2_to_ft2');

    const M2_TO_FT2 = 10.7639;
    const FT2_TO_M2 = 0.092903;

    const result = mode === 'm2_to_ft2'
        ? parseFloat(value) * M2_TO_FT2
        : parseFloat(value) * FT2_TO_M2;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🏠</span>
                <div>
                    <h1 className="calc-widget-title">Metrekare - Feet Kare Çevirici</h1>
                    <p className="calc-widget-subtitle">Alan birimlerini dönüştürün</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Dönüşüm Yönü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('m2_to_ft2')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'm2_to_ft2' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'm2_to_ft2' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'm2_to_ft2' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        m² → ft²
                    </button>
                    <button
                        onClick={() => setMode('ft2_to_m2')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'ft2_to_m2' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'ft2_to_m2' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'ft2_to_m2' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        ft² → m²
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                    {mode === 'm2_to_ft2' ? 'Metrekare (m²)' : 'Feet Kare (ft²)'}
                </label>
                <input
                    type="number"
                    className="form-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min="0"
                    step="any"
                />
            </div>

            <div className="result-box">
                <p className="result-label">
                    {mode === 'm2_to_ft2' ? 'Feet Kare Karşılığı' : 'Metrekare Karşılığı'}
                </p>
                <p className="result-value">
                    {isNaN(result) ? '0' : result.toFixed(2)} {mode === 'm2_to_ft2' ? 'ft²' : 'm²'}
                </p>
                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">Dönüşüm Oranı</span>
                        <span className="result-row-value">
                            1 m² = 10.764 ft² | 1 ft² = 0.093 m²
                        </span>
                    </div>
                </div>
            </div>

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>Emlak Referansları</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
                    <div className="result-row">
                        <span className="result-row-label">50 m²</span>
                        <span className="result-row-value">538 ft² (1+1)</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">80 m²</span>
                        <span className="result-row-value">861 ft² (2+1)</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">120 m²</span>
                        <span className="result-row-value">1,292 ft² (3+1)</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">150 m²</span>
                        <span className="result-row-value">1,615 ft² (4+1)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
