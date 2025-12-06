'use client';

import { useState } from 'react';

export default function AgeCalculator() {
    const [birthDate, setBirthDate] = useState<string>('1990-01-15');
    const [result, setResult] = useState<{
        years: number;
        months: number;
        days: number;
        totalDays: number;
        totalWeeks: number;
        totalMonths: number;
        nextBirthday: number;
    } | null>(null);

    const calculate = () => {
        const birth = new Date(birthDate);
        const today = new Date();

        // Yaş hesaplama
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // Toplam gün
        const diffTime = Math.abs(today.getTime() - birth.getTime());
        const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalMonths = years * 12 + months;

        // Sonraki doğum günü
        const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        setResult({
            years,
            months,
            days,
            totalDays,
            totalWeeks,
            totalMonths,
            nextBirthday: daysUntilBirthday
        });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🎂</span>
                <div>
                    <h1 className="calc-widget-title">Yaş Hesaplama</h1>
                    <p className="calc-widget-subtitle">Kaç yaşındasınız?</p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Doğum Tarihiniz</label>
                <input
                    type="date"
                    className="form-input"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                />
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Yaşınız</p>
                    <p className="result-value">
                        {result.years} yıl
                    </p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                        {result.years} yıl, {result.months} ay, {result.days} gün
                    </p>

                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Toplam Ay</span>
                            <span className="result-row-value">{result.totalMonths.toLocaleString('tr-TR')} ay</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Toplam Hafta</span>
                            <span className="result-row-value">{result.totalWeeks.toLocaleString('tr-TR')} hafta</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Toplam Gün</span>
                            <span className="result-row-value">{result.totalDays.toLocaleString('tr-TR')} gün</span>
                        </div>
                        <div className="result-row" style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--glass-border)' }}>
                            <span className="result-row-label">🎉 Sonraki Doğum Günü</span>
                            <span className="result-row-value" style={{ color: 'var(--primary-400)' }}>
                                {result.nextBirthday} gün
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
