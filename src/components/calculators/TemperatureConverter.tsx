'use client';

import { useState } from 'react';

export default function TemperatureConverter() {
    const [value, setValue] = useState<string>('25');
    const [fromUnit, setFromUnit] = useState<'C' | 'F' | 'K'>('C');

    const convert = (val: number, from: 'C' | 'F' | 'K') => {
        let celsius: number;

        // Önce Celsius'a çevir
        switch (from) {
            case 'C':
                celsius = val;
                break;
            case 'F':
                celsius = (val - 32) * 5 / 9;
                break;
            case 'K':
                celsius = val - 273.15;
                break;
        }

        return {
            celsius,
            fahrenheit: celsius * 9 / 5 + 32,
            kelvin: celsius + 273.15
        };
    };

    const numValue = parseFloat(value) || 0;
    const results = convert(numValue, fromUnit);

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🌡️</span>
                <div>
                    <h1 className="calc-widget-title">Sıcaklık Çevirici</h1>
                    <p className="calc-widget-subtitle">Celsius, Fahrenheit, Kelvin dönüşümü</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Kaynak Birim</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {(['C', 'F', 'K'] as const).map((unit) => (
                        <button
                            key={unit}
                            onClick={() => setFromUnit(unit)}
                            className="btn"
                            style={{
                                flex: 1,
                                background: fromUnit === unit ? 'var(--primary-600)' : 'var(--surface)',
                                border: '1px solid ' + (fromUnit === unit ? 'var(--primary-600)' : 'var(--glass-border)'),
                                color: fromUnit === unit ? 'white' : 'var(--text-secondary)'
                            }}
                        >
                            {unit === 'C' ? '°C' : unit === 'F' ? '°F' : 'K'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                    Sıcaklık ({fromUnit === 'C' ? 'Celsius' : fromUnit === 'F' ? 'Fahrenheit' : 'Kelvin'})
                </label>
                <input
                    type="number"
                    className="form-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    step="any"
                />
            </div>

            <div className="result-box">
                <p className="result-label">Dönüşüm Sonuçları</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Celsius</p>
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: fromUnit === 'C' ? 'var(--primary-400)' : 'var(--text-primary)'
                        }}>
                            {results.celsius.toFixed(2)}°C
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fahrenheit</p>
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: fromUnit === 'F' ? 'var(--primary-400)' : 'var(--text-primary)'
                        }}>
                            {results.fahrenheit.toFixed(2)}°F
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Kelvin</p>
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: fromUnit === 'K' ? 'var(--primary-400)' : 'var(--text-primary)'
                        }}>
                            {results.kelvin.toFixed(2)}K
                        </p>
                    </div>
                </div>
            </div>

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>Önemli Sıcaklık Noktaları</h3>
                <div style={{ marginTop: 'var(--space-3)' }}>
                    <div className="result-row">
                        <span className="result-row-label">Su donma noktası</span>
                        <span className="result-row-value">0°C = 32°F = 273.15K</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Su kaynama noktası</span>
                        <span className="result-row-value">100°C = 212°F = 373.15K</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Vücut sıcaklığı</span>
                        <span className="result-row-value">37°C = 98.6°F = 310.15K</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Mutlak sıfır</span>
                        <span className="result-row-value">-273.15°C = -459.67°F = 0K</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
