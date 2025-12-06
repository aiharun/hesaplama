'use client';

import { useState } from 'react';

export default function SimpleInterest() {
    const [principal, setPrincipal] = useState<string>('10000');
    const [rate, setRate] = useState<string>('15');
    const [time, setTime] = useState<string>('12');
    const [timeUnit, setTimeUnit] = useState<string>('month');
    const [result, setResult] = useState<{ interest: number; total: number } | null>(null);

    const calculate = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 100;
        let t = parseFloat(time);

        if (timeUnit === 'month') {
            t = t / 12;
        } else if (timeUnit === 'day') {
            t = t / 365;
        }

        const interest = p * r * t;
        const total = p + interest;

        setResult({ interest, total });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">💵</span>
                <div>
                    <h1 className="calc-widget-title">Basit Faiz Hesaplama</h1>
                    <p className="calc-widget-subtitle">Yatırımınızın faiz getirisini hesaplayın</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Anapara (₺)</label>
                <input
                    type="number"
                    className="form-input"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Yatırım tutarı"
                    min="0"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Yıllık Faiz Oranı (%)</label>
                <input
                    type="number"
                    className="form-input"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Faiz oranı"
                    min="0"
                    max="100"
                    step="0.1"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Süre</label>
                    <input
                        type="number"
                        className="form-input"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="Vade süresi"
                        min="1"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Birim</label>
                    <select
                        className="form-select"
                        value={timeUnit}
                        onChange={(e) => setTimeUnit(e.target.value)}
                    >
                        <option value="day">Gün</option>
                        <option value="month">Ay</option>
                        <option value="year">Yıl</option>
                    </select>
                </div>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Faiz Getirisi</p>
                    <p className="result-value">
                        ₺{result.interest.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Anapara</span>
                            <span className="result-row-value">
                                ₺{parseFloat(principal).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Toplam Tutar</span>
                            <span className="result-row-value">
                                ₺{result.total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
