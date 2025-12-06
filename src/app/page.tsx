import Link from 'next/link';
import { calculators, getCalculatorsByCategory, categories } from '@/data/calculators';
import { TopBanner, MiddleBanner, BottomBanner } from '@/components/AdBanner';

export default function Home() {
  const categoryKeys = Object.keys(categories) as Array<keyof typeof categories>;

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          <span className="hero-gradient">Hesap Merkezi</span>
        </h1>
        <p>
          Günlük hayatınızda ihtiyaç duyabileceğiniz <strong>{calculators.length}+</strong> ücretsiz hesaplama aracı.
          Hızlı, güvenilir ve kullanımı kolay.
        </p>

        {/* Quick Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-8)',
          marginTop: 'var(--space-8)',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--primary-400), var(--accent-400))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {calculators.length}+
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Hesaplama Aracı</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--primary-400), var(--accent-400))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {categoryKeys.length}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Kategori</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--primary-400), var(--accent-400))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              %100
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Ücretsiz</div>
          </div>
        </div>
      </section>

      {/* Top Ad Banner */}
      <TopBanner />

      {/* Categories */}
      {categoryKeys.map((categoryKey, index) => {
        const category = categories[categoryKey];
        const categoryCalculators = getCalculatorsByCategory(categoryKey);

        return (
          <div key={categoryKey}>
            <section className="category-section" id={categoryKey}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2 className="category-title">{category.name}</h2>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  background: 'var(--surface)',
                  padding: 'var(--space-1) var(--space-2)',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {categoryCalculators.length} araç
                </span>
              </div>
              <div className="cards-grid">
                {categoryCalculators.map((calc, i) => (
                  <Link
                    key={calc.slug}
                    href={`/${calc.slug}`}
                    className="calc-card"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="calc-card-icon">{calc.icon}</span>
                    <h3 className="calc-card-title">{calc.shortTitle}</h3>
                    <p className="calc-card-desc">{calc.description}</p>
                    <span className="calc-card-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Middle Ad Banner after 2nd category */}
            {index === 1 && <MiddleBanner />}
          </div>
        );
      })}

      {/* Bottom Ad Banner */}
      <BottomBanner />

      {/* SEO Content */}
      <section style={{
        marginTop: 'var(--space-12)',
        padding: 'var(--space-8)',
        background: 'var(--surface)',
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--glass-border)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-4)',
          textAlign: 'center'
        }}>
          Hesap Merkezi Nedir?
        </h2>
        <p style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.8
        }}>
          Hesap Merkezi, günlük hayatınızda sıkça ihtiyaç duyabileceğiniz hesaplamaları
          hızlı ve kolay bir şekilde yapmanızı sağlayan ücretsiz online bir platformdur.
          Finansal hesaplamalardan sağlık hesaplayıcılarına, birim dönüştürücülerden
          matematik araçlarına kadar geniş bir yelpazede hizmet sunmaktayız.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-6)',
          marginTop: 'var(--space-8)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>⚡</div>
            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)' }}>Hızlı</h3>
            <p style={{ fontSize: '0.875rem' }}>Anında sonuç alın, beklemeyin</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>🔒</div>
            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)' }}>Güvenli</h3>
            <p style={{ fontSize: '0.875rem' }}>Verileriniz cihazınızda kalır</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>📱</div>
            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)' }}>Mobil Uyumlu</h3>
            <p style={{ fontSize: '0.875rem' }}>Her cihazda mükemmel çalışır</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>💯</div>
            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)' }}>Ücretsiz</h3>
            <p style={{ fontSize: '0.875rem' }}>Tüm araçlar tamamen ücretsiz</p>
          </div>
        </div>
      </section>
    </div>
  );
}
