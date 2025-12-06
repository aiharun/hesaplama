import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası',
    description: 'Hesap Merkezi gizlilik politikası. Kişisel verilerinizin nasıl korunduğunu öğrenin.'
};

export default function PrivacyPage() {
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
                    Gizlilik Politikası
                </h1>

                <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>
                    Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </p>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        1. Genel Bakış
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Hesap Merkezi olarak gizliliğinize önem veriyoruz. Bu politika, web sitemizi
                        kullanırken toplanan bilgilerin nasıl işlendiğini açıklar.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        2. Toplanan Bilgiler
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                        <strong>Hesaplama Verileri:</strong> Hesaplama araçlarına girdiğiniz veriler
                        yalnızca tarayıcınızda işlenir ve sunucularımıza iletilmez. Hiçbir hesaplama
                        verisi kaydedilmez veya saklanmaz.
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                        <strong>İletişim Formu:</strong> İletişim formunu kullandığınızda, ad, e-posta
                        ve mesaj içeriğiniz bize iletilir. Bu bilgiler yalnızca talebinizi yanıtlamak
                        için kullanılır.
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        <strong>Otomatik Bilgiler:</strong> Tüm web siteleri gibi, sunucularımız IP
                        adresi, tarayıcı türü ve ziyaret edilen sayfalar gibi standart bilgileri kaydeder.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        3. Çerezler (Cookies)
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek
                        için çerezler kullanabilir. Google AdSense reklamları için gerekli çerezler
                        de kullanılabilir. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        4. Üçüncü Taraf Hizmetler
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Web sitemiz aşağıdaki üçüncü taraf hizmetleri kullanabilir:
                    </p>
                    <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
                        <li><strong>Google AdSense:</strong> Reklam gösterimi için</li>
                        <li><strong>Google Analytics:</strong> Site trafiği analizi için</li>
                        <li><strong>Vercel:</strong> Hosting hizmeti için</li>
                    </ul>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        5. Veri Güvenliği
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Web sitemiz HTTPS protokolü ile korunmaktadır. Tüm veri aktarımları şifrelidir.
                        Hesaplama verileri sunucularımıza gönderilmediği için veri ihlali riski minimumda tutulur.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        6. Haklarınız
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        KVKK kapsamında kişisel verilerinize erişim, düzeltme ve silme haklarına sahipsiniz.
                        Bu haklarınızı kullanmak için iletişim formumuzdan bize ulaşabilirsiniz.
                    </p>
                </div>

                <div className="card">
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        7. İletişim
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Gizlilik politikası hakkında sorularınız için iletişim formumuz aracılığıyla
                        bize ulaşabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
