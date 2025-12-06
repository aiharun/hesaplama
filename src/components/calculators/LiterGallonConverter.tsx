'use client';

import { useState } from 'react';

export default function LiterGallonConverter() {
    const [value, setValue] = useState<string>('50');
    const [mode, setMode] = useState<'l_to_gal' | 'gal_to_l'>('l_to_gal');
    const [gallonType, setGallonType] = useState<'us' | 'uk'>('us');

    const LITER_TO_US_GALLON = 0.264172;
    const LITER_TO_UK_GALLON = 0.219969;
    const US_GALLON_TO_LITER = 3.78541;
    const UK_GALLON_TO_LITER = 4.54609;

    const conversionRate = mode === 'l_to_gal'
        ? (gallonType === 'us' ? LITER_TO_US_GALLON : LITER_TO_UK_GALLON)
        : (gallonType === 'us' ? US_GALLON_TO_LITER : UK_GALLON_TO_LITER);

    const result = parseFloat(value) * conversionRate;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">⛽</span>
                <div>
                    <h1 className="calc-widget-title">Litre - Galon Çevirici</h1>
                    <p className="calc-widget-subtitle">Hacim birimlerini dönüştürün</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Dönüşüm Yönü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('l_to_gal')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'l_to_gal' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'l_to_gal' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'l_to_gal' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        Litre → Galon
                    </button>
                    <button
                        onClick={() => setMode('gal_to_l')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'gal_to_l' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'gal_to_l' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: mode === 'gal_to_l' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        Galon → Litre
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Galon Tipi</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setGallonType('us')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: gallonType === 'us' ? 'var(--accent-500)' : 'var(--surface)',
                            border: '1px solid ' + (gallonType === 'us' ? 'var(--accent-500)' : 'var(--glass-border)'),
                            color: gallonType === 'us' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        🇺🇸 US Galon
                    </button>
                    <button
                        onClick={() => setGallonType('uk')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: gallonType === 'uk' ? 'var(--accent-500)' : 'var(--surface)',
                            border: '1px solid ' + (gallonType === 'uk' ? 'var(--accent-500)' : 'var(--glass-border)'),
                            color: gallonType === 'uk' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        🇬🇧 UK Galon
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                    {mode === 'l_to_gal' ? 'Litre' : 'Galon'}
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
                    {mode === 'l_to_gal' ? `${gallonType === 'us' ? 'US' : 'UK'} Galon Karşılığı` : 'Litre Karşılığı'}
                </p>
                <p className="result-value">
                    {isNaN(result) ? '0' : result.toFixed(3)} {mode === 'l_to_gal' ? 'gal' : 'L'}
                </p>
                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">US Galon</span>
                        <span className="result-row-value">1 US gal = 3.785 L</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">UK Galon</span>
                        <span className="result-row-value">1 UK gal = 4.546 L</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
