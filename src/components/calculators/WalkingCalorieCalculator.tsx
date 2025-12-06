'use client';

import { useState } from 'react';

export default function WalkingCalorieCalculator() {
    const [weight, setWeight] = useState<string>('70');
    const [duration, setDuration] = useState<string>('30');
    const [pace, setPace] = useState<string>('4');
    const [result, setResult] = useState<{ calories: number; distance: number; steps: number } | null>(null);

    const calculate = () => {
        const w = parseFloat(weight);
        const minutes = parseFloat(duration);
        const speed = parseFloat(pace); // km/h

        // MET (Metabolic Equivalent) değerleri hıza göre
        let met: number;
        if (speed <= 3) {
            met = 2.5; // Yavaş yürüyüş
        } else if (speed <= 4) {
            met = 3.0; // Normal yürüyüş
        } else if (speed <= 5) {
            met = 3.5; // Tempolu yürüyüş
        } else if (speed <= 6) {
            met = 5.0; // Hızlı yürüyüş
        } else {
            met = 6.5; // Çok hızlı yürüyüş
        }

        // Kalori hesaplama: calories = MET × weight × hours
        const hours = minutes / 60;
        const calories = met * w * hours;

        // Mesafe hesaplama
        const distance = speed * hours;

        // Tahmini adım sayısı (ortalama 1.3 metre adım)
        const steps = Math.round((distance * 1000) / 0.75);

        setResult({ calories, distance, steps });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🚶</span>
                <div>
                    <h1 className="calc-widget-title">Yürüyüş Kalori Yakımı</h1>
                    <p className="calc-widget-subtitle">Yürüyüşte yakılan kaloriyi hesaplayın</p>
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
                        max="200"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Süre (dakika)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        min="1"
                        max="300"
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Yürüyüş Hızı</label>
                <select
                    className="form-select"
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
                >
                    <option value="3">Yavaş (3 km/s) - Gezinti</option>
                    <option value="4">Normal (4 km/s) - Rahat yürüyüş</option>
                    <option value="5">Tempolu (5 km/s) - Egzersiz yürüyüşü</option>
                    <option value="6">Hızlı (6 km/s) - Power walking</option>
                    <option value="7">Çok Hızlı (7 km/s) - Yarış yürüyüşü</option>
                </select>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Yakılan Kalori</p>
                    <p className="result-value">
                        {Math.round(result.calories)} kcal
                    </p>

                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Kat Edilen Mesafe</span>
                            <span className="result-row-value">{result.distance.toFixed(2)} km</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Tahmini Adım</span>
                            <span className="result-row-value">{result.steps.toLocaleString('tr-TR')}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Dakika Başına Kalori</span>
                            <span className="result-row-value">
                                {(result.calories / parseFloat(duration)).toFixed(1)} kcal
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>Yürüyüşün Faydaları</h3>
                <ul>
                    <li>Kalp sağlığını destekler</li>
                    <li>Kas ve kemik gücünü artırır</li>
                    <li>Stresi azaltır ve ruh halini iyileştirir</li>
                    <li>Kilo kontrolüne yardımcı olur</li>
                </ul>
            </div>
        </div>
    );
}
