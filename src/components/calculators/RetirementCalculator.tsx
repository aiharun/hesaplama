'use client';

import { useState } from 'react';

export default function RetirementCalculator() {
    const [birthYear, setBirthYear] = useState<string>('1990');
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [startYear, setStartYear] = useState<string>('2015');
    const [result, setResult] = useState<{
        retirementAge: number;
        retirementYear: number;
        yearsLeft: number;
        daysWorked: number;
    } | null>(null);

    const calculate = () => {
        const birth = parseInt(birthYear);
        const start = parseInt(startYear);
        const today = new Date();
        const currentYear = today.getFullYear();

        // Basitleştirilmiş emeklilik yaşı hesabı (2024 düzenlemesine göre)
        // Gerçek hesap yaş, başlangıç tarihi ve prim gününe bağlıdır
        let retirementAge: number;

        if (birth <= 1960) {
            retirementAge = gender === 'male' ? 60 : 58;
        } else if (birth <= 1970) {
            retirementAge = gender === 'male' ? 61 : 59;
        } else if (birth <= 1980) {
            retirementAge = gender === 'male' ? 63 : 61;
        } else if (birth <= 1990) {
            retirementAge = gender === 'male' ? 64 : 62;
        } else {
            retirementAge = gender === 'male' ? 65 : 63;
        }

        const retirementYear = birth + retirementAge;
        const yearsLeft = Math.max(0, retirementYear - currentYear);

        // Çalışılan gün sayısı (tahmini)
        const yearsWorked = currentYear - start;
        const daysWorked = yearsWorked * 365;

        setResult({ retirementAge, retirementYear, yearsLeft, daysWorked });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">👴</span>
                <div>
                    <h1 className="calc-widget-title">Emeklilik Hesaplama</h1>
                    <p className="calc-widget-subtitle">Ne zaman emekli olursunuz?</p>
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
                    <label className="form-label">Doğum Yılı</label>
                    <input
                        type="number"
                        className="form-input"
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                        min="1950"
                        max="2010"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">İşe Başlama Yılı</label>
                    <input
                        type="number"
                        className="form-input"
                        value={startYear}
                        onChange={(e) => setStartYear(e.target.value)}
                        min="1970"
                        max={new Date().getFullYear().toString()}
                    />
                </div>
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Tahmini Emeklilik Yaşı</p>
                    <p className="result-value">
                        {result.retirementAge} yaş
                    </p>

                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Emeklilik Yılı</span>
                            <span className="result-row-value">{result.retirementYear}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Kalan Süre</span>
                            <span className="result-row-value" style={{ color: result.yearsLeft > 0 ? 'var(--warning)' : 'var(--success)' }}>
                                {result.yearsLeft > 0 ? `${result.yearsLeft} yıl` : 'Emekli olabilirsiniz!'}
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Tahmini Çalışılan Gün</span>
                            <span className="result-row-value">{result.daysWorked.toLocaleString('tr-TR')}</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>⚠️ Önemli Not</h3>
                <p style={{ marginTop: 'var(--space-2)' }}>
                    Bu hesaplama tahmini bir değerdir. Gerçek emeklilik hakkınız için SGK üzerinden
                    sorgulama yapmanız veya yetkili bir kurumla iletişime geçmeniz önerilir.
                    Emeklilik yaşı; prim gün sayısı, sigortalılık süresi ve çeşitli yasal
                    düzenlemelere göre değişiklik gösterebilir.
                </p>
            </div>
        </div>
    );
}
