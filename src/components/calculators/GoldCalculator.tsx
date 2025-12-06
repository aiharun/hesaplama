'use client';

import { useState, useEffect } from 'react';

interface GoldPrices {
    gram: number;
    ceyrek: number;
    yarim: number;
    tam: number;
    cumhuriyet: number;
    ata: number;
    lastUpdated: string;
}

// Aralık 2025 güncel altın fiyatları
const DEFAULT_PRICES: GoldPrices = {
    gram: 3150,
    ceyrek: 5150,
    yarim: 10300,
    tam: 20600,
    cumhuriyet: 21500,
    ata: 21800,
    lastUpdated: '2025-12-07'
};

const GOLD_TYPES = [
    { key: 'gram', label: 'Gram Altın', icon: '🪙', weight: 1 },
    { key: 'ceyrek', label: 'Çeyrek Altın', icon: '🥇', weight: 1.75 },
    { key: 'yarim', label: 'Yarım Altın', icon: '🥈', weight: 3.5 },
    { key: 'tam', label: 'Tam Altın', icon: '🏅', weight: 7 },
    { key: 'cumhuriyet', label: 'Cumhuriyet Altını', icon: '🎖️', weight: 7.2 },
    { key: 'ata', label: 'Ata Altın', icon: '🏆', weight: 7.2 },
];

export default function GoldCalculator() {
    const [prices, setPrices] = useState<GoldPrices>(DEFAULT_PRICES);
    const [selectedType, setSelectedType] = useState<string>('gram');
    const [amount, setAmount] = useState<string>('1');
    const [mode, setMode] = useState<'buy' | 'sell'>('buy');
    const [customPrice, setCustomPrice] = useState<string>('');

    // Altın fiyatlarını API'den çek (opsiyonel)
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch('/api/gold-prices');
                if (response.ok) {
                    const data = await response.json();
                    setPrices(data);
                }
            } catch {
                // Fallback to default prices
            }
        };

        fetchPrices();
    }, []);

    const currentPrice = customPrice
        ? parseFloat(customPrice)
        : prices[selectedType as keyof GoldPrices] as number;

    const total = currentPrice * (parseFloat(amount) || 0);

    // Alış-Satış farkı (spread) ~%2
    const adjustedTotal = mode === 'sell' ? total * 0.98 : total;

    const selectedGold = GOLD_TYPES.find(g => g.key === selectedType);

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🪙</span>
                <div>
                    <h1 className="calc-widget-title">Altın Hesaplama</h1>
                    <p className="calc-widget-subtitle">Güncel fiyatlarla altın değeri hesaplayın</p>
                </div>
            </div>

            {/* Fiyat Güncelleme Bilgisi */}
            <div style={{
                padding: 'var(--space-2) var(--space-3)',
                background: 'var(--surface)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-4)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span>📅 Fiyatlar: {prices.lastUpdated}</span>
                <span style={{ color: 'var(--warning)' }}>• Güncel</span>
            </div>

            {/* Alış / Satış Mode */}
            <div className="form-group">
                <label className="form-label">İşlem Türü</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button
                        onClick={() => setMode('buy')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'buy' ? 'var(--success)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'buy' ? 'var(--success)' : 'var(--glass-border)'),
                            color: mode === 'buy' ? 'white' : 'var(--text-secondary)',
                        }}
                    >
                        💰 Alış
                    </button>
                    <button
                        onClick={() => setMode('sell')}
                        className="btn"
                        style={{
                            flex: 1,
                            background: mode === 'sell' ? 'var(--error)' : 'var(--surface)',
                            border: '1px solid ' + (mode === 'sell' ? 'var(--error)' : 'var(--glass-border)'),
                            color: mode === 'sell' ? 'white' : 'var(--text-secondary)',
                        }}
                    >
                        📤 Satış
                    </button>
                </div>
            </div>

            {/* Altın Tipi Seçimi */}
            <div className="form-group">
                <label className="form-label">Altın Türü</label>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-2)'
                }}>
                    {GOLD_TYPES.map((gold) => (
                        <button
                            key={gold.key}
                            onClick={() => {
                                setSelectedType(gold.key);
                                setCustomPrice('');
                            }}
                            className="btn"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 'var(--space-3)',
                                background: selectedType === gold.key ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : 'var(--surface)',
                                border: '1px solid ' + (selectedType === gold.key ? '#f59e0b' : 'var(--glass-border)'),
                                color: selectedType === gold.key ? 'white' : 'var(--text-secondary)',
                            }}
                        >
                            <span style={{ fontSize: '1.25rem' }}>{gold.icon}</span>
                            <span style={{ fontSize: '0.75rem', marginTop: 'var(--space-1)' }}>{gold.label}</span>
                            <span style={{ fontSize: '0.6875rem', opacity: 0.8 }}>
                                ₺{(prices[gold.key as keyof GoldPrices] as number).toLocaleString('tr-TR')}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Adet / Gram</label>
                    <input
                        type="number"
                        className="form-input"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Örn: 5"
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Özel Fiyat (opsiyonel)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={customPrice}
                        onChange={(e) => setCustomPrice(e.target.value)}
                        placeholder={`₺${currentPrice?.toLocaleString('tr-TR') || '0'}`}
                        min="0"
                    />
                </div>
            </div>

            {/* Sonuç */}
            <div className="result-box" style={{
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
                border: '1px solid rgba(251, 191, 36, 0.3)'
            }}>
                <p className="result-label">{mode === 'buy' ? 'Toplam Alış Tutarı' : 'Tahmini Satış Tutarı'}</p>
                <p className="result-value" style={{ color: '#fbbf24' }}>
                    ₺{adjustedTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <div className="result-secondary">
                    <div className="result-row">
                        <span className="result-row-label">{selectedGold?.label} Birim Fiyat</span>
                        <span className="result-row-value">₺{currentPrice?.toLocaleString('tr-TR')}</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Adet / Gram</span>
                        <span className="result-row-value">{amount || 0}</span>
                    </div>
                    {selectedGold && selectedGold.weight !== 1 && (
                        <div className="result-row">
                            <span className="result-row-label">Toplam Gram</span>
                            <span className="result-row-value">{(selectedGold.weight * (parseFloat(amount) || 0)).toFixed(2)} gr</span>
                        </div>
                    )}
                    {mode === 'sell' && (
                        <div className="result-row">
                            <span className="result-row-label" style={{ color: 'var(--warning)' }}>⚠️ Satış Spreadı</span>
                            <span className="result-row-value">~%2</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Güncel Fiyatlar Tablosu */}
            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>📊 Güncel Altın Fiyatları</h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-2)',
                    marginTop: 'var(--space-3)',
                    fontSize: '0.8125rem'
                }}>
                    {GOLD_TYPES.map((gold) => (
                        <div key={gold.key} className="result-row">
                            <span className="result-row-label">{gold.icon} {gold.label}</span>
                            <span className="result-row-value" style={{ color: '#fbbf24' }}>
                                ₺{(prices[gold.key as keyof GoldPrices] as number).toLocaleString('tr-TR')}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
