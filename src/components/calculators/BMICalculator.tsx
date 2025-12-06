'use client';

import { useState } from 'react';

export default function BMICalculator() {
    const [weight, setWeight] = useState<string>('75');
    const [height, setHeight] = useState<string>('175');
    const [result, setResult] = useState<{ bmi: number; category: string; color: string; idealMin: number; idealMax: number } | null>(null);

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;

        const bmi = w / (h * h);

        let category: string;
        let color: string;

        if (bmi < 18.5) {
            category = 'Zayıf';
            color = '#3b82f6';
        } else if (bmi < 25) {
            category = 'Normal';
            color = '#10b981';
        } else if (bmi < 30) {
            category = 'Fazla Kilolu';
            color = '#f59e0b';
        } else if (bmi < 35) {
            category = 'Obez (Sınıf 1)';
            color = '#f97316';
        } else if (bmi < 40) {
            category = 'Obez (Sınıf 2)';
            color = '#ef4444';
        } else {
            category = 'Aşırı Obez (Sınıf 3)';
            color = '#dc2626';
        }

        const idealMin = 18.5 * h * h;
        const idealMax = 24.9 * h * h;

        setResult({ bmi, category, color, idealMin, idealMax });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">📊</span>
                <div>
                    <h1 className="calc-widget-title">Vücut Kitle İndeksi (BMI)</h1>
                    <p className="calc-widget-subtitle">BMI değerinizi hesaplayın</p>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Kilo (kg)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min="30"
                        max="300"
                    />
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
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Vücut Kitle İndeksiniz</p>
                    <p className="result-value">{result.bmi.toFixed(1)}</p>
                    <p style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: result.color,
                        marginTop: 'var(--space-2)'
                    }}>
                        {result.category}
                    </p>

                    <div className="result-secondary">
                        <div style={{
                            marginBottom: 'var(--space-4)',
                            background: 'var(--bg-secondary)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 'var(--space-4)'
                        }}>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 'var(--space-2)' }}>
                                BMI Skalası
                            </p>
                            <div style={{ display: 'flex', height: '8px', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                                <div style={{ flex: 1, background: '#3b82f6' }} title="Zayıf" />
                                <div style={{ flex: 1, background: '#10b981' }} title="Normal" />
                                <div style={{ flex: 1, background: '#f59e0b' }} title="Fazla Kilolu" />
                                <div style={{ flex: 1, background: '#f97316' }} title="Obez I" />
                                <div style={{ flex: 1, background: '#ef4444' }} title="Obez II" />
                                <div style={{ flex: 1, background: '#dc2626' }} title="Obez III" />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '0.625rem',
                                color: 'var(--text-muted)',
                                marginTop: 'var(--space-1)'
                            }}>
                                <span>18.5</span>
                                <span>25</span>
                                <span>30</span>
                                <span>35</span>
                                <span>40</span>
                            </div>
                        </div>

                        <div className="result-row">
                            <span className="result-row-label">İdeal Kilo Aralığı</span>
                            <span className="result-row-value">
                                {result.idealMin.toFixed(1)} - {result.idealMax.toFixed(1)} kg
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>BMI Kategorileri</h3>
                <ul style={{ marginTop: 'var(--space-2)' }}>
                    <li style={{ color: '#3b82f6' }}>18.5&apos;ten az: Zayıf</li>
                    <li style={{ color: '#10b981' }}>18.5 - 24.9: Normal</li>
                    <li style={{ color: '#f59e0b' }}>25 - 29.9: Fazla Kilolu</li>
                    <li style={{ color: '#f97316' }}>30 - 34.9: Obez (Sınıf 1)</li>
                    <li style={{ color: '#ef4444' }}>35 - 39.9: Obez (Sınıf 2)</li>
                    <li style={{ color: '#dc2626' }}>40 ve üzeri: Aşırı Obez</li>
                </ul>
            </div>
        </div>
    );
}
