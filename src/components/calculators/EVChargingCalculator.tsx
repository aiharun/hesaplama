'use client';

import { useState } from 'react';

interface EVResult {
    energyNeeded: number;
    chargingCost: number;
    costPerKm: number;
    co2Saved: number;
    fuelEquivalent: number;
}

export default function EVChargingCalculator() {
    const [distance, setDistance] = useState<string>('100');
    const [consumption, setConsumption] = useState<string>('18');
    const [chargeType, setChargeType] = useState<'home' | 'public' | 'fast'>('home');
    const [customPrice, setCustomPrice] = useState<string>('');
    const [result, setResult] = useState<EVResult | null>(null);

    // Güncel elektrik fiyatları (TL/kWh)
    const electricityPrices = {
        home: 4.25,      // Ev şarjı (gece tarife)
        public: 8.50,    // Halka açık şarj istasyonu
        fast: 12.00      // Hızlı şarj (DC)
    };

    const chargeTypeInfo = {
        home: { label: '🏠 Ev Şarjı', desc: 'AC 7-22 kW', time: '6-8 saat' },
        public: { label: '🔌 Şarj İstasyonu', desc: 'AC 22 kW', time: '2-4 saat' },
        fast: { label: '⚡ Hızlı Şarj', desc: 'DC 50-150 kW', time: '20-40 dk' }
    };

    const calculate = () => {
        const dist = parseFloat(distance);
        const cons = parseFloat(consumption);
        const price = customPrice ? parseFloat(customPrice) : electricityPrices[chargeType];

        if (dist && cons && price) {
            // kWh ihtiyacı = mesafe * tüketim (kWh/100km) / 100
            const energyNeeded = (dist * cons) / 100;
            const chargingCost = energyNeeded * price;
            const costPerKm = chargingCost / dist;

            // Benzinli araçla karşılaştırma (7 lt/100km, 44.50 TL/lt)
            const fuelEquivalent = (dist * 7 / 100) * 44.50;

            // CO2 tasarrufu (benzinli araç ~2.3 kg CO2/lt)
            const co2Saved = (dist * 7 / 100) * 2.3;

            setResult({ energyNeeded, chargingCost, costPerKm, co2Saved, fuelEquivalent });
        }
    };

    const currentPrice = customPrice ? parseFloat(customPrice) : electricityPrices[chargeType];
    const savings = result ? result.fuelEquivalent - result.chargingCost : 0;

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">🔋</span>
                <div>
                    <h1 className="calc-widget-title">Elektrikli Araç Şarj Maliyeti</h1>
                    <p className="calc-widget-subtitle">EV şarj masrafınızı ve tasarrufunuzu hesaplayın</p>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Mesafe (km)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        placeholder="Örn: 300"
                        min="0"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Tüketim (kWh/100km)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={consumption}
                        onChange={(e) => setConsumption(e.target.value)}
                        placeholder="Örn: 18"
                        min="0"
                        step="0.1"
                    />
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>
                        Ortalama: 15-20 kWh/100km
                    </p>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Şarj Tipi</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {Object.entries(chargeTypeInfo).map(([key, info]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setChargeType(key as 'home' | 'public' | 'fast');
                                setCustomPrice('');
                            }}
                            className="btn"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 'var(--space-3) var(--space-4)',
                                background: chargeType === key ? 'var(--primary-600)' : 'var(--surface)',
                                border: '1px solid ' + (chargeType === key ? 'var(--primary-600)' : 'var(--glass-border)'),
                                color: chargeType === key ? 'white' : 'var(--text-secondary)',
                            }}
                        >
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 600 }}>{info.label}</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{info.desc} • {info.time}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 600 }}>₺{electricityPrices[key as keyof typeof electricityPrices]}</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>/kWh</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Özel Elektrik Fiyatı (opsiyonel)</label>
                <input
                    type="number"
                    className="form-input"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(e.target.value)}
                    placeholder={`Varsayılan: ₺${electricityPrices[chargeType]}/kWh`}
                    min="0"
                    step="0.01"
                />
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Toplam Şarj Maliyeti</p>
                    <p className="result-value">
                        ₺{result.chargingCost.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Gerekli Enerji</span>
                            <span className="result-row-value">{result.energyNeeded.toFixed(1)} kWh</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Km Başına Maliyet</span>
                            <span className="result-row-value">₺{result.costPerKm.toFixed(2)}/km</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Elektrik Fiyatı</span>
                            <span className="result-row-value">₺{currentPrice}/kWh</span>
                        </div>
                    </div>

                    {/* Karşılaştırma */}
                    <div style={{
                        marginTop: 'var(--space-4)',
                        padding: 'var(--space-4)',
                        background: savings > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        border: `1px solid ${savings > 0 ? 'var(--success)' : 'var(--error)'}`,
                        borderRadius: 'var(--radius-lg)'
                    }}>
                        <div style={{ fontSize: '0.875rem', marginBottom: 'var(--space-2)' }}>
                            🆚 Benzinli araçla karşılaştırma
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Benzin maliyeti olsaydı</span>
                            <span className="result-row-value">₺{result.fuelEquivalent.toFixed(2)}</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label" style={{ fontWeight: 600 }}>
                                {savings > 0 ? '✅ Tasarruf' : '❌ Fark'}
                            </span>
                            <span className="result-row-value" style={{
                                color: savings > 0 ? 'var(--success)' : 'var(--error)',
                                fontWeight: 600
                            }}>
                                ₺{Math.abs(savings).toFixed(2)} ({savings > 0 ? `%${((savings / result.fuelEquivalent) * 100).toFixed(0)}` : 'fazla'})
                            </span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">🌱 CO₂ Tasarrufu</span>
                            <span className="result-row-value">{result.co2Saved.toFixed(1)} kg</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>⚡ Popüler EV Tüketim Değerleri</h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-2)',
                    marginTop: 'var(--space-3)',
                    fontSize: '0.8125rem'
                }}>
                    <div className="result-row">
                        <span className="result-row-label">Tesla Model 3</span>
                        <span className="result-row-value">14-16 kWh</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Tesla Model Y</span>
                        <span className="result-row-value">16-18 kWh</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">Togg T10X</span>
                        <span className="result-row-value">18-20 kWh</span>
                    </div>
                    <div className="result-row">
                        <span className="result-row-label">VW ID.4</span>
                        <span className="result-row-value">17-19 kWh</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
