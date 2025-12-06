'use client';

import { useState } from 'react';

type Shape = 'square' | 'rectangle' | 'circle' | 'triangle' | 'trapezoid' | 'parallelogram';

export default function AreaCalculator() {
    const [shape, setShape] = useState<Shape>('rectangle');
    const [dimensions, setDimensions] = useState({
        a: '10',
        b: '5',
        h: '4',
        r: '5',
    });

    const updateDimension = (key: keyof typeof dimensions, value: string) => {
        setDimensions(prev => ({ ...prev, [key]: value }));
    };

    const calculateArea = (): number => {
        const a = parseFloat(dimensions.a) || 0;
        const b = parseFloat(dimensions.b) || 0;
        const h = parseFloat(dimensions.h) || 0;
        const r = parseFloat(dimensions.r) || 0;

        switch (shape) {
            case 'square':
                return a * a;
            case 'rectangle':
                return a * b;
            case 'circle':
                return Math.PI * r * r;
            case 'triangle':
                return (a * h) / 2;
            case 'trapezoid':
                return ((a + b) * h) / 2;
            case 'parallelogram':
                return a * h;
            default:
                return 0;
        }
    };

    const getFormula = (): string => {
        switch (shape) {
            case 'square':
                return 'A = a²';
            case 'rectangle':
                return 'A = a × b';
            case 'circle':
                return 'A = π × r²';
            case 'triangle':
                return 'A = (a × h) / 2';
            case 'trapezoid':
                return 'A = ((a + b) × h) / 2';
            case 'parallelogram':
                return 'A = a × h';
            default:
                return '';
        }
    };

    const area = calculateArea();

    const shapes: { id: Shape; name: string; icon: string }[] = [
        { id: 'square', name: 'Kare', icon: '⬜' },
        { id: 'rectangle', name: 'Dikdörtgen', icon: '▭' },
        { id: 'circle', name: 'Daire', icon: '⭕' },
        { id: 'triangle', name: 'Üçgen', icon: '△' },
        { id: 'trapezoid', name: 'Yamuk', icon: '⏢' },
        { id: 'parallelogram', name: 'Paralelkenar', icon: '▱' },
    ];

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">⬜</span>
                <div>
                    <h1 className="calc-widget-title">Alan Hesaplama</h1>
                    <p className="calc-widget-subtitle">Geometrik şekillerin alanı</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Şekil Seçin</label>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 'var(--space-2)'
                }}>
                    {shapes.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setShape(s.id)}
                            className="btn"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 'var(--space-1)',
                                padding: 'var(--space-3)',
                                background: shape === s.id ? 'var(--primary-600)' : 'var(--surface)',
                                border: '1px solid ' + (shape === s.id ? 'var(--primary-600)' : 'var(--glass-border)'),
                                color: shape === s.id ? 'white' : 'var(--text-secondary)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                            <span style={{ fontSize: '0.75rem' }}>{s.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Dinamik input alanları */}
            {(shape === 'square') && (
                <div className="form-group">
                    <label className="form-label">Kenar uzunluğu (a)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={dimensions.a}
                        onChange={(e) => updateDimension('a', e.target.value)}
                        min="0"
                        step="any"
                    />
                </div>
            )}

            {(shape === 'rectangle' || shape === 'trapezoid') && (
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">{shape === 'trapezoid' ? 'Üst kenar (a)' : 'Uzunluk (a)'}</label>
                        <input
                            type="number"
                            className="form-input"
                            value={dimensions.a}
                            onChange={(e) => updateDimension('a', e.target.value)}
                            min="0"
                            step="any"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">{shape === 'trapezoid' ? 'Alt kenar (b)' : 'Genişlik (b)'}</label>
                        <input
                            type="number"
                            className="form-input"
                            value={dimensions.b}
                            onChange={(e) => updateDimension('b', e.target.value)}
                            min="0"
                            step="any"
                        />
                    </div>
                </div>
            )}

            {shape === 'trapezoid' && (
                <div className="form-group">
                    <label className="form-label">Yükseklik (h)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={dimensions.h}
                        onChange={(e) => updateDimension('h', e.target.value)}
                        min="0"
                        step="any"
                    />
                </div>
            )}

            {shape === 'circle' && (
                <div className="form-group">
                    <label className="form-label">Yarıçap (r)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={dimensions.r}
                        onChange={(e) => updateDimension('r', e.target.value)}
                        min="0"
                        step="any"
                    />
                </div>
            )}

            {(shape === 'triangle' || shape === 'parallelogram') && (
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Taban (a)</label>
                        <input
                            type="number"
                            className="form-input"
                            value={dimensions.a}
                            onChange={(e) => updateDimension('a', e.target.value)}
                            min="0"
                            step="any"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Yükseklik (h)</label>
                        <input
                            type="number"
                            className="form-input"
                            value={dimensions.h}
                            onChange={(e) => updateDimension('h', e.target.value)}
                            min="0"
                            step="any"
                        />
                    </div>
                </div>
            )}

            <div className="result-box">
                <p className="result-label">Alan</p>
                <p className="result-value">
                    {area.toLocaleString('tr-TR', { maximumFractionDigits: 4 })} birim²
                </p>
                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">Formül</span>
                        <span className="result-row-value">{getFormula()}</span>
                    </div>
                    {shape === 'circle' && (
                        <div className="result-row">
                            <span className="result-row-label">Çevre</span>
                            <span className="result-row-value">
                                {(2 * Math.PI * (parseFloat(dimensions.r) || 0)).toFixed(4)} birim
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
