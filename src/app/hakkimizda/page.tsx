import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hakkımızda',
    description: 'Hesap Merkezi hakkında bilgi edinin. Misyonumuz, vizyonumuz ve sunduğumuz hizmetler.'
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    marginBottom: 'var(--space-6)',
                    background: 'linear-gradient(135deg, var(--primary-400), var(--accent-400))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Hakkımızda
                </h1>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        🧮 Hesap Merkezi Nedir?
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Hesap Merkezi, günlük hayatınızda ihtiyaç duyabileceğiniz tüm hesaplama araçlarını
                        tek bir çatı altında toplayan ücretsiz bir online platformdur. Finansal hesaplamalardan
                        sağlık metriklerine, birim dönüşümlerinden zaman hesaplamalarına kadar geniş bir
                        yelpazede hizmet sunuyoruz.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        🎯 Misyonumuz
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Karmaşık hesaplamaları herkes için erişilebilir ve anlaşılır hale getirmek.
                        Kullanıcılarımıza hızlı, güvenilir ve kolay kullanımlı araçlar sunarak
                        günlük kararlarını daha bilinçli almalarına yardımcı olmak.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        ✨ Neler Sunuyoruz?
                    </h2>
                    <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)' }}>
                        <li><strong>25+ Hesaplama Aracı:</strong> Finansal, sağlık, birim ve matematik hesaplayıcıları</li>
                        <li><strong>Güncel Veriler:</strong> Döviz kurları ve yakıt fiyatları düzenli güncellenir</li>
                        <li><strong>Mobil Uyumlu:</strong> Tüm cihazlarda sorunsuz çalışır</li>
                        <li><strong>%100 Ücretsiz:</strong> Hiçbir ücret veya üyelik gerektirmez</li>
                        <li><strong>Reklamsız Deneyim:</strong> Minimum reklam ile temiz arayüz</li>
                        <li><strong>Gizlilik Odaklı:</strong> Verileriniz asla kaydedilmez</li>
                    </ul>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        🛠️ Teknolojimiz
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Hesap Merkezi, modern web teknolojileri kullanılarak geliştirilmiştir.
                        Next.js 14, React ve TypeScript ile oluşturulan platformumuz, hız ve
                        güvenilirlik açısından en iyi uygulamaları takip eder.
                    </p>
                </div>

                <div className="card">
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        📧 İletişim
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Sorularınız, önerileriniz veya geri bildirimleriniz için iletişim formumuz
                        aracılığıyla bize ulaşabilirsiniz. Yeni hesaplama aracı önerilerinizi de
                        memnuniyetle değerlendiriyoruz.
                    </p>
                </div>
            </div>
        </div>
    );
}
