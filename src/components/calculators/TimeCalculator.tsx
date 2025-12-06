'use client';

import { useState } from 'react';

export default function TimeCalculator() {
    const [startTime, setStartTime] = useState<string>('09:00');
    const [endTime, setEndTime] = useState<string>('17:30');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [includeDate, setIncludeDate] = useState(false);

    const calculateDifference = () => {
        let startMinutes = 0;
        let endMinutes = 0;

        if (includeDate && startDate && endDate) {
            const start = new Date(`${startDate}T${startTime}`);
            const end = new Date(`${endDate}T${endTime}`);
            const diffMs = end.getTime() - start.getTime();
            return Math.floor(diffMs / (1000 * 60));
        } else {
            const [startH, startM] = startTime.split(':').map(Number);
            const [endH, endM] = endTime.split(':').map(Number);
            startMinutes = startH * 60 + startM;
            endMinutes = endH * 60 + endM;

            // Gece yarısını geçtiyse
            if (endMinutes < startMinutes) {
                endMinutes += 24 * 60;
            }

            return endMinutes - startMinutes;
        }
    };

    const totalMinutes = calculateDifference();
    const isNegative = totalMinutes < 0;
    const absMinutes = Math.abs(totalMinutes);

    const days = Math.floor(absMinutes / (24 * 60));
    const hours = Math.floor((absMinutes % (24 * 60)) / 60);
    const minutes = absMinutes % 60;

    const totalHours = absMinutes / 60;
    const totalSeconds = absMinutes * 60;

    // Çalışma saati hesabı (8 saatlik iş günü)
    const workDays = totalHours / 8;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">⏱️</span>
                <div>
                    <h1 className="calc-widget-title">Zaman Farkı Hesaplama</h1>
                    <p className="calc-widget-subtitle">İki zaman arasındaki farkı hesaplayın</p>
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
                        checked={includeDate}
                        onChange={(e) => setIncludeDate(e.target.checked)}
                        style={{ width: 18, height: 18 }}
                    />
                    Tarih dahil et (birden fazla gün için)
                </label>
            </div>

            {includeDate && (
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
            )}

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Başlangıç Saati</label>
                    <input
                        type="time"
                        className="form-input"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Bitiş Saati</label>
                    <input
                        type="time"
                        className="form-input"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>
            </div>

            <div className="result-box">
                <p className="result-label">Zaman Farkı</p>
                <p className="result-value" style={{ color: isNegative ? 'var(--error)' : undefined }}>
                    {isNegative && '- '}
                    {days > 0 && `${days} gün `}
                    {hours} saat {minutes} dakika
                </p>

                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">Toplam Saat</span>
                        <span className="result-row-value">{totalHours.toFixed(2)} saat</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Toplam Dakika</span>
                        <span className="result-row-value">{absMinutes.toLocaleString('tr-TR')} dakika</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Toplam Saniye</span>
                        <span className="result-row-value">{totalSeconds.toLocaleString('tr-TR')} saniye</span>
                    </div>
                    {totalHours >= 8 && (
                        <div className="result-row" style={{ marginTop: 'var(--space-3)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--glass-border)' }}>
                            <span className="result-row-label">İş Günü (8 saat)</span>
                            <span className="result-row-value">{workDays.toFixed(2)} gün</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>Kullanım Örnekleri</h3>
                <ul>
                    <li>Çalışma saatlerini hesaplama</li>
                    <li>Toplantı sürelerini ölçme</li>
                    <li>Mesai saati takibi</li>
                    <li>Etkinlik süresini belirleme</li>
                </ul>
            </div>
        </div>
    );
}
