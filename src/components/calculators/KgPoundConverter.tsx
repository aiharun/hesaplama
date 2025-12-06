'use client';

import { useState } from 'react';

export default function KgPoundConverter() {
    const [value, setValue] = useState<string>('70');
    const [mode, setMode] = useState<'kg_to_lb' | 'lb_to_kg'>('kg_to_lb');

    const KG_TO_LB = 2.20462;
    const LB_TO_KG = 0.453592;

    const result = mode === 'kg_to_lb'
        ? parseFloat(value) * KG_TO_LB
        : parseFloat(value) * LB_TO_KG;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🏋️</span>
                <div>
                    <h1 className="calc-widget-title">Kilogram - Pound Çevirici</h1>
                    <p className="calc-widget-subtitle">Ağırlık birimlerini dönüştürün</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Dönüşüm Yönü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('kg_to_lb')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'kg_to_lb' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'kg_to_lb' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'kg_to_lb' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        Kg → Pound
                    </button>
                    <button
                        onClick={() => setMode('lb_to_kg')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'lb_to_kg' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'lb_to_kg' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'lb_to_kg' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        Pound → Kg
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                    {mode === 'kg_to_lb' ? 'Kilogram' : 'Pound'}
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
                    {mode === 'kg_to_lb' ? 'Pound Karşılığı' : 'Kilogram Karşılığı'}
                </p>
                <p className="result-value">
                    {isNaN(result) ? '0' : result.toFixed(2)} {mode === 'kg_to_lb' ? 'lb' : 'kg'}
                </p>
                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">Dönüşüm Oranı</span>
                        <span className="result-row-value">
                            1 kg = 2.205 lb | 1 lb = 0.454 kg
                        </span>
                    </div>
                </div>
            </div>

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>Yaygın Dönüşümler</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
                    <div className="result-row">
                        <span className="result-row-label">50 kg</span>
                        <span className="result-row-value">110.2 lb</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">70 kg</span>
                        <span className="result-row-value">154.3 lb</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">100 lb</span>
                        <span className="result-row-value">45.4 kg</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">150 lb</span>
                        <span className="result-row-value">68.0 kg</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
