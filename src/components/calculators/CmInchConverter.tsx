'use client';

import { useState } from 'react';

export default function CmInchConverter() {
    const [value, setValue] = useState<string>('175');
    const [mode, setMode] = useState<'cm_to_inch' | 'inch_to_cm'>('cm_to_inch');

    const CM_TO_INCH = 0.393701;
    const INCH_TO_CM = 2.54;

    const result = mode === 'cm_to_inch'
        ? parseFloat(value) * CM_TO_INCH
        : parseFloat(value) * INCH_TO_CM;

    // Feet ve inch olarak gösterim
    const totalInches = mode === 'cm_to_inch' ? result : parseFloat(value);
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">📐</span>
                <div>
                    <h1 className="calc-widget-title">Santimetre - İnç Çevirici</h1>
                    <p className="calc-widget-subtitle">Uzunluk birimlerini dönüştürün</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Dönüşüm Yönü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('cm_to_inch')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'cm_to_inch' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'cm_to_inch' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'cm_to_inch' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        Cm → İnç
                    </button>
                    <button
                        onClick={() => setMode('inch_to_cm')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'inch_to_cm' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'inch_to_cm' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'inch_to_cm' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        İnç → Cm
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                    {mode === 'cm_to_inch' ? 'Santimetre' : 'İnç'}
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
                    {mode === 'cm_to_inch' ? 'İnç Karşılığı' : 'Santimetre Karşılığı'}
                </p>
                <p className="result-value">
                    {isNaN(result) ? '0' : result.toFixed(2)} {mode === 'cm_to_inch' ? 'inç' : 'cm'}
                </p>

                {mode === 'cm_to_inch' && (
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                        {feet} feet {inches.toFixed(1)} inç
                    </p>
                )}

                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">Dönüşüm Oranı</span>
                        <span className="result-row-value">
                            1 cm = 0.3937 inç | 1 inç = 2.54 cm
                        </span>
                    </div>
                </div>
            </div>

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>Boy Ölçüsü Referansı</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
                    <div className="result-row">
                        <span className="result-row-label">160 cm</span>
                        <span className="result-row-value">5&apos;3&quot;</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">170 cm</span>
                        <span className="result-row-value">5&apos;7&quot;</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">180 cm</span>
                        <span className="result-row-value">5&apos;11&quot;</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">190 cm</span>
                        <span className="result-row-value">6&apos;3&quot;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
