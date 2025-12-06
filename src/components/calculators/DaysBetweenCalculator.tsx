'use client';

import { useState } from 'react';

export default function DaysBetweenCalculator() {
    const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState<string>(() => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
        return date.toISOString().split('T')[0];
    });
    const [includeEndDate, setIncludeEndDate] = useState(false);

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (includeEndDate) diffDays += 1;

    const absdays = Math.abs(diffDays);
    const weeks = Math.floor(absdays / 7);
    const remainingDays = absdays % 7;
    const hours = absdays * 24;
    const minutes = hours * 60;

    // İş günleri hesaplama (Cumartesi-Pazar hariç)
    let businessDays = 0;
    const current = new Date(start);
    const endTime = end.getTime();
    while (current.getTime() <= endTime) {
        const dayOfWeek = current.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            businessDays++;
        }
        current.setDate(current.getDate() + 1);
    }

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">📆</span>
                <div>
                    <h1 className="calc-widget-title">Gün Sayısı Hesaplama</h1>
                    <p className="calc-widget-subtitle">İki tarih arasındaki gün sayısı</p>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Başlangıç Tarihi</label>
                    <input
                        type="date"
                        className="form-input"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Bitiş Tarihi</label>
                    <input
                        type="date"
                        className="form-input"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-group">
                <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                }}>
                    <input
                        type="checkbox"
                        checked={includeEndDate}
                        onChange={(e) => setIncludeEndDate(e.target.checked)}
                        style={{ width: 18, height: 18 }}
                    />
                    Bitiş tarihini dahil et
                </label>
            </div>

            <div className="result-box">
                <p className="result-label">İki Tarih Arasında</p>
                <p className="result-value">
                    {Math.abs(diffDays)} gün
                </p>
                {diffDays < 0 && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--warning)', marginTop: 'var(--space-2)' }}>
                        ⚠️ Bitiş tarihi başlangıçtan önce
                    </p>
                )}

                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">Hafta + Gün</span>
                        <span className="result-row-value">{weeks} hafta, {remainingDays} gün</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">İş Günü</span>
                        <span className="result-row-value">{businessDays} gün</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Toplam Saat</span>
                        <span className="result-row-value">{hours.toLocaleString('tr-TR')}</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Toplam Dakika</span>
                        <span className="result-row-value">{minutes.toLocaleString('tr-TR')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
