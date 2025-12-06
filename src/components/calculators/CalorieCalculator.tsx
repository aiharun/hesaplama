'use client';

import { useState } from 'react';

export default function CalorieCalculator() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [age, setAge] = useState<string>('30');
    const [weight, setWeight] = useState<string>('75');
    const [height, setHeight] = useState<string>('175');
    const [activity, setActivity] = useState<string>('1.55');
    const [result, setResult] = useState<{ bmr: number; maintenance: number; weightLoss: number; weightGain: number } | null>(null);

    const calculate = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseFloat(age);
        const activityFactor = parseFloat(activity);

        // Mifflin-St Jeor Equation
        let bmr: number;
        if (gender === 'male') {
            bmr = 10 * w + 6.25 * h - 5 * a + 5;
        } else {
            bmr = 10 * w + 6.25 * h - 5 * a - 161;
        }

        const maintenance = bmr * activityFactor;
        const weightLoss = maintenance - 500; // 0.5 kg/hafta için
        const weightGain = maintenance + 500; // 0.5 kg/hafta için

        setResult({ bmr, maintenance, weightLoss, weightGain });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🔥</span>
                <div>
                    <h1 className="calc-widget-title">Kalori İhtiyacı Hesaplama</h1>
                    <p className="calc-widget-subtitle">Günlük kalori ihtiyacınızı öğrenin</p>
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

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Yaş</label>
                    <input
                        type="number"
                        className="form-input"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        min="15"
                        max="100"
                    />
                </div>

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

            <div className="form-group">
                <label className="form-label">Aktivite Seviyesi</label>
                <select
                    className="form-select"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                >
                    <option value="1.2">Hareketsiz (masa başı iş)</option>
                    <option value="1.375">Az aktif (hafif egzersiz 1-3 gün/hafta)</option>
                    <option value="1.55">Orta aktif (orta egzersiz 3-5 gün/hafta)</option>
                    <option value="1.725">Çok aktif (yoğun egzersiz 6-7 gün/hafta)</option>
                    <option value="1.9">Ekstra aktif (çok yoğun egzersiz, fiziksel iş)</option>
                </select>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Günlük Kalori İhtiyacı (Kilo Koruma)</p>
                    <p className="result-value">
                        {Math.round(result.maintenance)} kcal
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Bazal Metabolizma (BMR)</span>
                            <span className="result-row-value">{Math.round(result.bmr)} kcal</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Kilo Vermek İçin</span>
                            <span className="result-row-value" style={{ color: 'var(--success)' }}>
                                {Math.round(result.weightLoss)} kcal
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Kilo Almak İçin</span>
                            <span className="result-row-value" style={{ color: 'var(--warning)' }}>
                                {Math.round(result.weightGain)} kcal
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
