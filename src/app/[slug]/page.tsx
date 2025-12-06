import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { calculators, getCalculatorBySlug, getCalculatorsByCategory, categories } from '@/data/calculators';
import { getSEOContent } from '@/data/seo-content';
import { TopBanner, SidebarAd, BottomBanner } from '@/components/AdBanner';
import SEOContentSection from '@/components/SEOContentSection';

// Calculator components
import {
    CurrencyConverter,
    SimpleInterest,
    CompoundInterest,
    LoanCalculator,
    VATCalculator,
    IncomeTaxCalculator,
    CalorieCalculator,
    IdealWeightCalculator,
    BMICalculator,
    WaterIntakeCalculator,
    WalkingCalorieCalculator,
    KmMileConverter,
    KgPoundConverter,
    TemperatureConverter,
    CmInchConverter,
    LiterGallonConverter,
    SquareMeterFeetConverter,
    AgeCalculator,
    DaysBetweenCalculator,
    RetirementCalculator,
    TimeCalculator,
    PercentageCalculator,
    AreaCalculator,
} from '@/components/calculators';

// Map slugs to components
const calculatorComponents: Record<string, React.ComponentType> = {
    'doviz-donusturucu': CurrencyConverter,
    'basit-faiz-hesaplama': SimpleInterest,
    'bilesik-faiz-hesaplama': CompoundInterest,
    'kredi-hesaplama': LoanCalculator,
    'kdv-hesaplama': VATCalculator,
    'gelir-vergisi-hesaplama': IncomeTaxCalculator,
    'kalori-ihtiyaci-hesaplama': CalorieCalculator,
    'ideal-kilo-hesaplama': IdealWeightCalculator,
    'vucut-kitle-indeksi': BMICalculator,
    'su-ihtiyaci-hesaplama': WaterIntakeCalculator,
    'yuruyus-kalori-yakimi': WalkingCalorieCalculator,
    'km-mil-cevirici': KmMileConverter,
    'kg-pound-cevirici': KgPoundConverter,
    'sicaklik-cevirici': TemperatureConverter,
    'cm-inc-cevirici': CmInchConverter,
    'litre-galon-cevirici': LiterGallonConverter,
    'metrekare-feet-cevirici': SquareMeterFeetConverter,
    'yas-hesaplama': AgeCalculator,
    'gun-sayisi-hesaplama': DaysBetweenCalculator,
    'emeklilik-hesaplama': RetirementCalculator,
    'zaman-farki-hesaplama': TimeCalculator,
    'yuzde-hesaplama': PercentageCalculator,
    'alan-hesaplama': AreaCalculator,
};

// Generate static params for all calculators
export async function generateStaticParams() {
    return calculators.map((calc) => ({
        slug: calc.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const calculator = getCalculatorBySlug(slug);

    if (!calculator) {
        return {
            title: 'Sayfa Bulunamadı',
        };
    }

    return {
        title: calculator.title,
        description: calculator.metaDescription,
        keywords: calculator.keywords,
        openGraph: {
            title: calculator.title,
            description: calculator.metaDescription,
            type: 'website',
            locale: 'tr_TR',
        },
        twitter: {
            card: 'summary',
            title: calculator.title,
            description: calculator.metaDescription,
        },
        alternates: {
            canonical: `/${calculator.slug}`,
        },
    };
}

export default async function CalculatorPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const calculator = getCalculatorBySlug(slug);

    if (!calculator) {
        notFound();
    }

    const CalculatorComponent = calculatorComponents[slug];

    if (!CalculatorComponent) {
        notFound();
    }

    // Get related calculators from the same category
    const relatedCalculators = getCalculatorsByCategory(calculator.category)
        .filter((c) => c.slug !== calculator.slug)
        .slice(0, 4);

    const category = categories[calculator.category];

    return (
        <div className="calc-page">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Ana Sayfa</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span>{category.icon} {category.name}</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{calculator.shortTitle}</span>
                </nav>

                {/* Top Ad Banner */}
                <TopBanner />

                {/* Main Content Grid */}
                <div className="calc-page-grid">
                    {/* Main Calculator */}
                    <div className="calc-main">
                        <CalculatorComponent />

                        {/* SEO Content */}
                        {getSEOContent(slug) && (
                            <SEOContentSection content={getSEOContent(slug)!} />
                        )}

                        {/* Related Calculators */}
                        {relatedCalculators.length > 0 && (
                            <section className="related-section">
                                <h2 className="related-title">Benzer Hesaplayıcılar</h2>
                                <div className="related-grid">
                                    {relatedCalculators.map((calc) => (
                                        <Link
                                            key={calc.slug}
                                            href={`/${calc.slug}`}
                                            className="related-card"
                                        >
                                            <span className="related-card-icon">{calc.icon}</span>
                                            <span className="related-card-title">{calc.shortTitle}</span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Bottom Ad Banner */}
                        <div style={{ marginTop: 'var(--space-8)' }}>
                            <BottomBanner />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="calc-sidebar">
                        <SidebarAd />

                        <div className="info-card" style={{ marginTop: 'var(--space-6)' }}>
                            <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-3)' }}>
                                Diğer Araçlar
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                                {calculators
                                    .filter((c) => c.slug !== calculator.slug)
                                    .slice(0, 5)
                                    .map((calc) => (
                                        <Link
                                            key={calc.slug}
                                            href={`/${calc.slug}`}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 'var(--space-2)',
                                                padding: 'var(--space-2)',
                                                borderRadius: 'var(--radius-md)',
                                                fontSize: '0.875rem',
                                                color: 'var(--text-secondary)',
                                                transition: 'all var(--transition-fast)'
                                            }}
                                            className="related-card"
                                        >
                                            <span>{calc.icon}</span>
                                            <span>{calc.shortTitle}</span>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
