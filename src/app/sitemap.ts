import { MetadataRoute } from 'next';
import { calculators } from '@/data/calculators';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hesaplas.vercel.app/'; // Gerçek domain ile değiştirin

    // Ana sayfa
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];

    // Hesaplayıcı sayfaları
    const calculatorRoutes = calculators.map((calc) => ({
        url: `${baseUrl}/${calc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...routes, ...calculatorRoutes];
}
