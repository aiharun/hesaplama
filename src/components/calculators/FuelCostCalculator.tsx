'use client';

import { useState, useEffect } from 'react';

interface FuelPricesData {
    benzin: number;
    dizel: number;
    lpg: number;
    lastUpdated: string;
    source: string;
}

export default function FuelCostCalculator() {
    const [distance, setDistance] = useState<string>('100');
    const [consumption, setConsumption] = useState<string>('7');
    const [fuelType, setFuelType] = useState<'benzin' | 'dizel' | 'lpg'>('benzin');
    const [customPrice, setCustomPrice] = useState<string>('');
    const [fuelPrices, setFuelPrices] = useState<FuelPricesData>({
        benzin: 44.50,
        dizel: 44.00,
        lpg: 18.50,
        lastUpdated: '',
        source: ''
    });
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState<{
        fuelNeeded: number;
        totalCost: number;
        costPerKm: number;
    } | null>(null);

    // Yakıt fiyatlarını API'den çek
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch('/api/fuel-prices');
                if (response.ok) {
                    const data = await response.json();
                    setFuelPrices(data);
                }
            } catch (error) {
                console.error('Yakıt fiyatları alınamadı:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrices();

        // Her 1 saatte bir güncelle
        const interval = setInterval(fetchPrices, 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const calculate = () => {
        const dist = parseFloat(distance);
        const cons = parseFloat(consumption);
        const price = customPrice ? parseFloat(customPrice) : fuelPrices[fuelType];

        if (dist && cons && price) {
            const fuelNeeded = (dist * cons) / 100;
            const totalCost = fuelNeeded * price;
            const costPerKm = totalCost / dist;

            setResult({ fuelNeeded, totalCost, costPerKm });
        }
    };

    const currentPrice = customPrice ? parseFloat(customPrice) : fuelPrices[fuelType];

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">⛽</span>
                <div>
                    <h1 className="calc-widget-title">Yakıt Maliyeti Hesaplama</h1>
                    <p className="calc-widget-subtitle">Yolculuğunuzun yakıt masrafını hesaplayın</p>
                </div>
            </div>

            {/* Fiyat Güncelleme Bilgisi */}
            {fuelPrices.lastUpdated && (
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
                    <span>🔄 Son güncelleme: {formatDate(fuelPrices.lastUpdated)}</span>
                    <span style={{ color: 'var(--success)' }}>• Canlı</span>
                </div>
            )}

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Mesafe (km)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        placeholder="Örn: 500"
                        min="0"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Tüketim (lt/100km)</label>
                    <input
                        type="number"
                        className="form-input"
                        value={consumption}
                        onChange={(e) => setConsumption(e.target.value)}
                        placeholder="Örn: 7"
                        min="0"
                        step="0.1"
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Yakıt Tipi</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {[
                        { key: 'benzin', label: '⛽ Benzin', price: fuelPrices.benzin },
                        { key: 'dizel', label: '🛢️ Dizel', price: fuelPrices.dizel },
                        { key: 'lpg', label: '🔵 LPG', price: fuelPrices.lpg },
                    ].map((fuel) => (
                        <button
                            key={fuel.key}
                            onClick={() => {
                                setFuelType(fuel.key as 'benzin' | 'dizel' | 'lpg');
                                setCustomPrice('');
                            }}
                            className="btn"
                            disabled={loading}
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                padding: 'var(--space-3)',
                                background: fuelType === fuel.key ? 'var(--primary-600)' : 'var(--surface)',
                                border: '1px solid ' + (fuelType === fuel.key ? 'var(--primary-600)' : 'var(--glass-border)'),
                                color: fuelType === fuel.key ? 'white' : 'var(--text-secondary)',
                                fontSize: '0.875rem',
                                opacity: loading ? 0.7 : 1
                            }}
                        >
                            <span>{fuel.label}</span>
                            <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                                {loading ? '...' : `₺${fuel.price.toFixed(2)}/lt`}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Özel Fiyat (opsiyonel)</label>
                <input
                    type="number"
                    className="form-input"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(e.target.value)}
                    placeholder={`Varsayılan: ₺${fuelPrices[fuelType]?.toFixed(2) || '0.00'}/lt`}
                    min="0"
                    step="0.01"
                />
            </div>

            <button onClick={calculate} className="btn btn-primary btn-full btn-lg">
                Hesapla
            </button>

            {result && (
                <div className="result-box">
                    <p className="result-label">Toplam Yakıt Maliyeti</p>
                    <p className="result-value">
                        ₺{result.totalCost.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Gerekli Yakıt</span>
                            <span className="result-row-value">{result.fuelNeeded.toFixed(2)} litre</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Km Başına Maliyet</span>
                            <span className="result-row-value">₺{result.costPerKm.toFixed(2)}/km</span>
                        </div>
                        <div className="result-row">
                            <span className="result-row-label">Yakıt Fiyatı</span>
                            <span className="result-row-value">₺{currentPrice?.toFixed(2) || '0.00'}/lt</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>💡 Yakıt Tasarrufu İpuçları</h3>
                <ul style={{ marginTop: 'var(--space-3)', fontSize: '0.875rem' }}>
                    <li>Ani hızlanma ve frenden kaçının</li>
                    <li>Lastik basıncını düzenli kontrol edin</li>
                    <li>Gereksiz ağırlıkları araçtan çıkarın</li>
                    <li>Sabit hızda seyretmeye çalışın</li>
                </ul>
            </div>
        </div>
    );
}
