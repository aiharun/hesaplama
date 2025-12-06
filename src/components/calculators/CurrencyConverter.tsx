'use client';

import { useState, useEffect } from 'react';

interface Currency {
    code: string;
    name: string;
    symbol: string;
    rate: number;
}

const defaultCurrencies: Currency[] = [
    { code: 'USD', name: 'Amerikan Doları', symbol: '$', rate: 34.25 },
    { code: 'EUR', name: 'Euro', symbol: '€', rate: 36.50 },
    { code: 'GBP', name: 'İngiliz Sterlini', symbol: '£', rate: 43.20 },
    { code: 'TRY', name: 'Türk Lirası', symbol: '₺', rate: 1 },
    { code: 'CHF', name: 'İsviçre Frangı', symbol: 'Fr', rate: 38.90 },
    { code: 'JPY', name: 'Japon Yeni', symbol: '¥', rate: 0.23 },
    { code: 'CAD', name: 'Kanada Doları', symbol: 'C$', rate: 25.30 },
    { code: 'AUD', name: 'Avustralya Doları', symbol: 'A$', rate: 22.80 },
    { code: 'SAR', name: 'Suudi Riyali', symbol: 'ر.س', rate: 9.13 },
    { code: 'AED', name: 'BAE Dirhemi', symbol: 'د.إ', rate: 9.32 },
];

export default function CurrencyConverter() {
    const [currencies, setCurrencies] = useState<Currency[]>(defaultCurrencies);
    const [amount, setAmount] = useState<string>('100');
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('TRY');
    const [result, setResult] = useState<number | null>(null);
    const [lastUpdate, setLastUpdate] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // API'den kurları çek
    useEffect(() => {
        const fetchRates = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/exchange-rates');

                if (!response.ok) {
                    throw new Error('Kurlar alınamadı');
                }

                const data = await response.json();

                // Kurları güncelle
                const updatedCurrencies = defaultCurrencies.map(currency => ({
                    ...currency,
                    rate: data.rates[currency.code] || currency.rate
                }));

                setCurrencies(updatedCurrencies);
                setLastUpdate(data.lastUpdate);
                setError(null);
            } catch (err) {
                console.error('Kur çekme hatası:', err);
                setError('Güncel kurlar alınamadı, varsayılan değerler kullanılıyor.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRates();

        // Her 5 dakikada bir kurları kontrol et (API 1 saatlik cache kullanıyor)
        const interval = setInterval(fetchRates, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    const calculate = () => {
        const from = currencies.find(c => c.code === fromCurrency);
        const to = currencies.find(c => c.code === toCurrency);

        if (from && to && amount) {
            const amountInTRY = parseFloat(amount) * from.rate;
            const converted = amountInTRY / to.rate;
            setResult(converted);
        }
    };

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setResult(null);
    };

    const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
    const toCurrencyData = currencies.find(c => c.code === toCurrency);

    return (
        <div className="calc-widget">
            <div className="calc-widget-header">
                <span className="calc-widget-icon">💱</span>
                <div>
                    <h1 className="calc-widget-title">Döviz Dönüştürücü</h1>
                    <p className="calc-widget-subtitle">
                        {isLoading ? 'Kurlar yükleniyor...' : 'Güncel kurlarla anlık hesaplama'}
                    </p>
                </div>
            </div>

            {error && (
                <div style={{
                    padding: 'var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid var(--warning)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem',
                    color: 'var(--warning)'
                }}>
                    ⚠️ {error}
                </div>
            )}

            {lastUpdate && !error && (
                <div style={{
                    padding: 'var(--space-2) var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid var(--success)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.75rem',
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                }}>
                    <span>🔄</span>
                    <span>
                        Son güncelleme: {new Date(lastUpdate).toLocaleString('tr-TR')}
                    </span>
                </div>
            )}

            <div className="form-group">
                <label className="form-label">Miktar</label>
                <input
                    type="number"
                    className="form-input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Miktar girin"
                    min="0"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Kaynak Para Birimi</label>
                    <select
                        className="form-select"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {currencies.map((currency) => (
                            <option key={currency.code} value={currency.code}>
                                {currency.symbol} {currency.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <button
                        onClick={swapCurrencies}
                        className="btn"
                        style={{
                            width: '100%',
                            background: 'var(--surface)',
                            border: '1px solid var(--glass-border)',
                            marginBottom: '0'
                        }}
                    >
                        ⇄ Değiştir
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Hedef Para Birimi</label>
                <select
                    className="form-select"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.symbol} {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <button
                onClick={calculate}
                className="btn btn-primary btn-full btn-lg"
                disabled={isLoading}
            >
                {isLoading ? 'Yükleniyor...' : 'Hesapla'}
            </button>

            {result !== null && (
                <div className="result-box">
                    <p className="result-label">
                        {amount} {fromCurrencyData?.name} =
                    </p>
                    <p className="result-value">
                        {toCurrencyData?.symbol} {result.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <div className="result-secondary">
                        <div className="result-row">
                            <span className="result-row-label">Kur</span>
                            <span className="result-row-value">
                                1 {fromCurrency} = {(fromCurrencyData!.rate / toCurrencyData!.rate).toFixed(4)} {toCurrency}
                            </span>
                        </div>
                        {fromCurrency !== 'TRY' && (
                            <div className="result-row">
                                <span className="result-row-label">1 {fromCurrency}</span>
                                <span className="result-row-value">
                                    ₺{fromCurrencyData!.rate.toFixed(4)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                <h3>📊 Güncel Kurlar (TRY)</h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-2)',
                    marginTop: 'var(--space-3)'
                }}>
                    {currencies.filter(c => c.code !== 'TRY').slice(0, 6).map((currency) => (
                        <div key={currency.code} className="result-row">
                            <span className="result-row-label">{currency.symbol} {currency.code}</span>
                            <span className="result-row-value">₺{currency.rate.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
