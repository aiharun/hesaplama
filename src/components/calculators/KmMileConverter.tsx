'use client';

import { useState } from 'react';

export default function KmMileConverter() {
    const [value, setValue] = useState<string>('100');
    const [mode, setMode] = useState<'km_to_mile' | 'mile_to_km'>('km_to_mile');

    const KM_TO_MILE = 0.621371;
    const MILE_TO_KM = 1.60934;

    const result = mode === 'km_to_mile'
        ? parseFloat(value) * KM_TO_MILE
        : parseFloat(value) * MILE_TO_KM;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🛣️</span>
                <div>
                    <h1 className="calc-widget-title">Kilometre - Mil Çevirici</h1>
                    <p className="calc-widget-subtitle">Mesafe birimlerini dönüştürün</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Dönüşüm Yönü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('km_to_mile')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'km_to_mile' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'km_to_mile' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'km_to_mile' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        Km → Mil
                    </button>
                    <button
                        onClick={() => setMode('mile_to_km')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'mile_to_km' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'mile_to_km' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'mile_to_km' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        Mil → Km
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                    {mode === 'km_to_mile' ? 'Kilometre' : 'Mil'}
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
                    {mode === 'km_to_mile' ? 'Mil Karşılığı' : 'Kilometre Karşılığı'}
                </p>
                <p className="result-value">
                    {isNaN(result) ? '0' : result.toFixed(4)} {mode === 'km_to_mile' ? 'mil' : 'km'}
                </p>
                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">Dönüşüm Oranı</span>
                        <span className="result-row-value">
                            1 km = 0.6214 mil | 1 mil = 1.6093 km
                        </span>
                    </div>
                </div>
            </div>

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>Hızlı Referans</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
                    <div className="result-row">
                        <span className="result-row-label">5 km</span>
                        <span className="result-row-value">3.11 mil</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">10 km</span>
                        <span className="result-row-value">6.21 mil</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">42.195 km</span>
                        <span className="result-row-value">26.22 mil (Maraton)</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">100 km</span>
                        <span className="result-row-value">62.14 mil</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
