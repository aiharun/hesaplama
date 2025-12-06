'use client';

import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(true);

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
                    İletişim
                </h1>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        📧 Bize Ulaşın
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                        Sorularınız, önerileriniz veya geri bildirimleriniz için aşağıdaki formu kullanarak
                        bize ulaşabilirsiniz. En kısa sürede yanıt vermeye çalışacağız.
                    </p>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        📬 İletişim Formunu Aç
                    </button>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        💡 Yeni Araç Önerisi
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Sitemize eklemememizi istediğiniz yeni hesaplama araçları mı var?
                        Önerilerinizi memnuniyetle değerlendiriyoruz. İletişim formunda &quot;Öneri&quot;
                        konusunu seçerek bize bildirebilirsiniz.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        🐛 Hata Bildirimi
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Bir hesaplama aracında hata mı buldunuz? Lütfen bize bildirin!
                        Hangi araçta, ne tür bir hata olduğunu ve mümkünse kullandığınız
                        değerleri belirtirseniz sorunu daha hızlı çözebiliriz.
                    </p>
                </div>

                <div className="card">
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)', color: 'var(--primary-400)' }}>
                        ⏰ Yanıt Süresi
                    </h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        Mesajlarınıza genellikle 24-48 saat içinde yanıt veriyoruz.
                        Hafta sonları ve resmi tatillerde yanıt süremiz uzayabilir.
                    </p>
                </div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
