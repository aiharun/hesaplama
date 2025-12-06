'use client';

import { useState } from 'react';

export default function WaterIntakeCalculator() {
    const [weight, setWeight] = useState<string>('70');
    const [activity, setActivity] = useState<string>('moderate');
    const [climate, setClimate] = useState<string>('normal');
    const [result, setResult] = useState<{ liters: number; glasses: number; tips: string[] } | null>(null);

    const calculate = () => {
        let baseWater = parseFloat(weight) * 0.033; // 33ml per kg

        // Aktivite düzeyine göre ayarlama
        switch (activity) {
            case 'sedentary':
                baseWater *= 0.9;
                break;
            case 'light':
                baseWater *= 1.0;
                break;
            case 'moderate':
                baseWater *= 1.15;
                break;
            case 'active':
                baseWater *= 1.3;
                break;
            case 'very_active':
                baseWater *= 1.5;
                break;
        }

        // İklim durumuna göre ayarlama
        switch (climate) {
            case 'hot':
                baseWater *= 1.2;
                break;
            case 'humid':
                baseWater *= 1.15;
                break;
        }

        const glasses = Math.ceil(baseWater / 0.25); // 250ml bardak

        const tips = [
            'Sabah kalktığınızda 1-2 bardak su için',
            'Yemeklerden 30 dakika önce su için',
            'Susadığınızı hissetmeden düzenli içmeye çalışın',
            'Yanınızda her zaman su şişesi taşıyın',
        ];

        if (activity === 'active' || activity === 'very_active') {
            tips.push('Egzersiz sırasında ve sonrasında ek su için');
        }

        setResult({ liters: baseWater, glasses, tips });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">💧</span>
                <div>
                    <h1 className="calc-widget-title">Su İhtiyacı Hesaplama</h1>
                    <p className="calc-widget-subtitle">Günlük su ihtiyacınızı öğrenin</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Kilo (kg)</label>
                <input
                    type="number"
                    className="form-input"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    min="30"
                    max="200"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Aktivite Düzeyi</label>
                <select
                    className="form-select"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                >
                    <option value="sedentary">Hareketsiz (masa başı)</option>
                    <option value="light">Hafif aktivite</option>
                    <option value="moderate">Orta aktivite</option>
                    <option value="active">Aktif (düzenli egzersiz)</option>
                    <option value="very_active">Çok aktif (yoğun spor)</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">İklim/Ortam</label>
                <select
                    className="form-select"
                    value={climate}
                    onChange={(e) => setClimate(e.target.value)}
                >
                    <option value="normal">Normal</option>
                    <option value="hot">Sıcak iklim</option>
                    <option value="humid">Nemli ortam</option>
                </select>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Günlük Su İhtiyacınız</p>
                    <p className="result-value">
                        {result.liters.toFixed(1)} L
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                        ({result.glasses} bardak)
                    </p>

                    <div className="result-secondary">
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                            💡 İpuçları:
                        </p>
                        {result.tips.map((tip, index) => (
                            <div key={index} style={{
                                fontSize: '0.8125rem',
                                color: 'var(--text-secondary)',
                                padding: 'var(--space-2) 0',
                                borderBottom: index < result.tips.length - 1 ? '1px solid var(--glass-border)' : 'none'
                            }}>
                                • {tip}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
