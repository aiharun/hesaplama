import Link from 'next/link';
import { categories, getCalculatorsByCategory } from '@/data/calculators';

export default function Footer() {
    const categoryKeys = Object.keys(categories) as Array<keyof typeof categories>;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-section">
                        <Link
                            href="/"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                marginBottom: 'var(--space-3)',
                                background: 'linear-gradient(135deg, var(--primary-400), var(--accent-400))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            🧮 Hesap Merkezi
                        </Link>
                        <p style={{ fontSize: '0.8125rem', lineHeight: 1.7 }}>
                            Günlük hayatınızda ihtiyaç duyabileceğiniz tüm hesaplama araçları tek bir çatı altında.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: 'var(--space-3)',
                            marginTop: 'var(--space-4)',
                            fontSize: '1.25rem'
                        }}>
                            <span title="Hızlı">⚡</span>
                            <span title="Güvenli">🔒</span>
                            <span title="Ücretsiz">💯</span>
                            <span title="Mobil Uyumlu">📱</span>
                        </div>
                    </div>

                    {/* Popular Tools */}
                    <div className="footer-section">
                        <h4>Popüler Araçlar</h4>
                        <div className="footer-links">
                            <Link href="/doviz-donusturucu">💱 Döviz Dönüştürücü</Link>
                            <Link href="/kalori-ihtiyaci-hesaplama">🔥 Kalori Hesaplama</Link>
                            <Link href="/vucut-kitle-indeksi">📊 BMI Hesaplama</Link>
                            <Link href="/gelir-vergisi-hesaplama">📋 Gelir Vergisi</Link>
                            <Link href="/yas-hesaplama">🎂 Yaş Hesaplama</Link>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="footer-section">
                        <h4>Kategoriler</h4>
                        <div className="footer-links">
                            {categoryKeys.map((key) => (
                                <Link key={key} href={`/#${key}`}>
                                    {categories[key].icon} {categories[key].name}
                                    <span style={{
                                        marginLeft: 'var(--space-2)',
                                        fontSize: '0.6875rem',
                                        opacity: 0.6
                                    }}>
                                        ({getCalculatorsByCategory(key).length})
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="footer-section">
                        <h4>Bilgi</h4>
                        <div className="footer-links">
                            <Link href="/hakkimizda">Hakkımızda</Link>
                            <Link href="/gizlilik">Gizlilik Politikası</Link>
                            <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
                            <Link href="/iletisim">İletişim</Link>
                        </div>
                        <div style={{
                            marginTop: 'var(--space-4)',
                            padding: 'var(--space-3)',
                            background: 'var(--surface)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)'
                        }}>
                            💡 Öneriniz mi var? <br />
                            <span style={{ color: 'var(--primary-400)' }}>Yeni araç önerilerinizi bekliyoruz!</span>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>© {currentYear} Hesap Merkezi. Tüm hakları saklıdır.</p>
                    <p style={{ marginTop: 'var(--space-2)', fontSize: '0.75rem' }}>
                        🇹🇷 Türkiye&apos;de ❤️ ile geliştirildi
                    </p>
                </div>
            </div>
        </footer>
    );
}
