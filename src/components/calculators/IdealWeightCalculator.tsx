'use client';

import { useState } from 'react';

export default function IdealWeightCalculator() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [height, setHeight] = useState<string>('175');
    const [result, setResult] = useState<{ ideal: number; min: number; max: number; formulas: { name: string; value: number }[] } | null>(null);

    const calculate = () => {
        const h = parseFloat(height);
        const hInch = h / 2.54;
        const hM = h / 100;

        // Farklı formüller
        const formulas: { name: string; value: number }[] = [];

        // Devine Formula
        let devine: number;
        if (gender === 'male') {
            devine = 50 + 2.3 * (hInch - 60);
        } else {
            devine = 45.5 + 2.3 * (hInch - 60);
        }
        formulas.push({ name: 'Devine Formülü', value: devine });

        // Robinson Formula
        let robinson: number;
        if (gender === 'male') {
            robinson = 52 + 1.9 * (hInch - 60);
        } else {
            robinson = 49 + 1.7 * (hInch - 60);
        }
        formulas.push({ name: 'Robinson Formülü', value: robinson });

        // Miller Formula
        let miller: number;
        if (gender === 'male') {
            miller = 56.2 + 1.41 * (hInch - 60);
        } else {
            miller = 53.1 + 1.36 * (hInch - 60);
        }
        formulas.push({ name: 'Miller Formülü', value: miller });

        // Hamwi Formula
        let hamwi: number;
        if (gender === 'male') {
            hamwi = 48 + 2.7 * (hInch - 60);
        } else {
            hamwi = 45.5 + 2.2 * (hInch - 60);
        }
        formulas.push({ name: 'Hamwi Formülü', value: hamwi });

        // Average
        const ideal = formulas.reduce((sum, f) => sum + f.value, 0) / formulas.length;

        // Healthy BMI range (18.5 - 24.9)
        const min = 18.5 * hM * hM;
        const max = 24.9 * hM * hM;

        setResult({ ideal, min, max, formulas });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">⚖️</span>
                <div>
                    <h1 className="calc-widget-title">İdeal Kilo Hesaplama</h1>
                    <p className="calc-widget-subtitle">Boyunuza göre ideal kilonuzu öğrenin</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Cinsiyet</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setGender('male')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: gender === 'male' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (gender === 'male' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: gender === 'male' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        👨 Erkek
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: gender === 'female' ? 'var(--primary-600)' : 'var(--surface)',
                            border: '1px solid ' + (gender === 'female' ? 'var(--primary-600)' : 'var(--glass-border)'),
                            color: gender === 'female' ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        👩 Kadın
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Boy (cm)</label>
                <input
                    type="number"
                    className="form-input"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    min="100"
                    max="250"
                />
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">İdeal Kilo (Ortalama)</p>
                    <p className="result-value">
                        {result.ideal.toFixed(1)} kg
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Sağlıklı Kilo Aralığı</span>
                            <span className="result-row-value">
                                {result.min.toFixed(1)} - {result.max.toFixed(1)} kg
                            </span>
                        </div>
                        <div style={{ marginTop: 'var(--space-4)', borderTop: '1px solid var(--glass-border)', paddingTop: 'var(--space-4)' }}>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}>
                                Farklı Formüller:
                            </p>
                            {result.formulas.map((formula) => (
                                <div key={formula.name} className="result-row">
                                    <span className="result-row-label">{formula.name}</span>
                                    <span className="result-row-value">{formula.value.toFixed(1)} kg</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
