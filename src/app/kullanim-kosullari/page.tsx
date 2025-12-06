import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kullanım Koşulları',
    description: 'Hesap Merkezi kullanım koşulları ve şartları.'
};

export default function TermsPage() {
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
                    Kullanım Koşulları
                </h1>

                <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>
                    Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </p>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        1. Kabul
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Hesap Merkezi web sitesini kullanarak bu kullanım koşullarını kabul etmiş sayılırsınız.
                        Bu koşulları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        2. Hizmet Tanımı
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Hesap Merkezi, çeşitli hesaplama araçları sunan ücretsiz bir web hizmetidir.
                        Sunulan araçlar bilgilendirme amaçlıdır ve profesyonel danışmanlık yerine geçmez.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        3. Sorumluluk Reddi
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                        <strong>Hesaplama Doğruluğu:</strong> Hesaplama araçlarımız genel bilgilendirme
                        amaçlıdır. Finansal, sağlık veya hukuki kararlar için mutlaka uzman görüşü alınız.
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                        <strong>Döviz Kurları:</strong> Gösterilen kurlar referans niteliğindedir ve
                        gerçek zamanlı banka kurlarından farklılık gösterebilir.
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                        <strong>Vergi Hesaplamaları:</strong> Vergi hesaplamaları tahmini niteliktedir.
                        Kesin vergi hesabı için mali müşavirinize danışınız.
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        <strong>Sağlık Bilgileri:</strong> Sağlık hesaplayıcıları (BMI, kalori vb.)
                        genel bilgi sunar, tıbbi tavsiye niteliği taşımaz.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        4. Kullanım Kısıtlamaları
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Aşağıdaki davranışlar yasaktır:
                    </p>
                    <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
                        <li>Siteye zarar verecek otomatik istekler göndermek</li>
                        <li>Site içeriğini izinsiz kopyalamak veya dağıtmak</li>
                        <li>Siteyi yasadışı amaçlarla kullanmak</li>
                        <li>Güvenlik açıklarını istismar etmeye çalışmak</li>
                    </ul>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        5. Fikri Mülkiyet
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Site içeriği, tasarımı ve logosu Hesap Merkezi&apos;ne aittir. İzinsiz kullanım yasaktır.
                        Hesaplama sonuçları kullanıcıya aittir ve serbestçe kullanılabilir.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        6. Değişiklikler
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Bu kullanım koşullarını önceden bildirim yapmaksızın değiştirme hakkını saklı tutarız.
                        Değişiklikler sitede yayınlandığı anda yürürlüğe girer.
                    </p>
                </div>

                <div className="card">
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        7. İletişim
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Kullanım koşulları hakkında sorularınız için iletişim formumuz aracılığıyla
                        bize ulaşabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
