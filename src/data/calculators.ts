export interface Calculator {
    slug: string;
    title: string;
    shortTitle: string;
    description: string;
    metaDescription: string;
    keywords: string[];
    category: 'finansal' | 'saglik' | 'birim' | 'zaman' | 'matematik' | 'arac';
    icon: string;
}

export const categories = {
    finansal: { name: 'Finansal Hesaplayıcılar', icon: '💰', color: '#10b981' },
    saglik: { name: 'Sağlık Hesaplayıcıları', icon: '🏥', color: '#ef4444' },
    birim: { name: 'Birim Dönüştürücüler', icon: '📏', color: '#3b82f6' },
    zaman: { name: 'Zaman ve Tarih', icon: '📅', color: '#8b5cf6' },
    matematik: { name: 'Matematik', icon: '🔢', color: '#f59e0b' },
    arac: { name: 'Araç ve Yakıt', icon: '🚗', color: '#06b6d4' },
};

export const calculators: Calculator[] = [
    // Finansal Hesaplayıcılar
    {
        slug: 'doviz-donusturucu',
        title: 'Döviz Dönüştürücü - Online Döviz Çevirici',
        shortTitle: 'Döviz Dönüştürücü',
        description: 'Dolar, Euro, Sterlin ve diğer para birimlerini kolayca çevirin. Güncel kurlarla anlık döviz hesaplama.',
        metaDescription: 'Ücretsiz online döviz dönüştürücü. Dolar, Euro, Sterlin ve 10+ para birimini anlık olarak çevirin. Güncel kurlarla hızlı döviz hesaplama.',
        keywords: ['döviz çevirici', 'dolar kuru', 'euro kuru', 'döviz hesaplama', 'para birimi çevirici'],
        category: 'finansal',
        icon: '💱',
    },
    {
        slug: 'basit-faiz-hesaplama',
        title: 'Basit Faiz Hesaplama - Faiz Hesaplayıcı',
        shortTitle: 'Basit Faiz Hesaplama',
        description: 'Yatırımlarınızın basit faiz getirisini hesaplayın. Anapara, faiz oranı ve süreye göre kazancınızı öğrenin.',
        metaDescription: 'Ücretsiz basit faiz hesaplama aracı. Anapara, faiz oranı ve vadeye göre faiz getirinizi anında hesaplayın.',
        keywords: ['basit faiz hesaplama', 'faiz hesaplama', 'yatırım getirisi', 'faiz hesaplayıcı'],
        category: 'finansal',
        icon: '💵',
    },
    {
        slug: 'bilesik-faiz-hesaplama',
        title: 'Bileşik Faiz Hesaplama - Kümülatif Faiz',
        shortTitle: 'Bileşik Faiz Hesaplama',
        description: 'Bileşik faiz ile yatırımlarınızın büyümesini hesaplayın. Faizin faizi kazancınızı görün.',
        metaDescription: 'Bileşik faiz hesaplayıcı ile yatırımlarınızın kümülatif getirisini hesaplayın. Aylık, yıllık bileşik faiz hesaplama.',
        keywords: ['bileşik faiz hesaplama', 'kümülatif faiz', 'faizin faizi', 'yatırım büyümesi'],
        category: 'finansal',
        icon: '📈',
    },
    {
        slug: 'kredi-hesaplama',
        title: 'Kredi Hesaplama - Taksit ve Ödeme Planı',
        shortTitle: 'Kredi Hesaplama',
        description: 'Kredi taksitlerinizi ve toplam ödeme tutarınızı hesaplayın. Konut, taşıt, ihtiyaç kredisi hesaplayıcı.',
        metaDescription: 'Ücretsiz kredi hesaplama aracı. Aylık taksit, toplam faiz ve ödeme planınızı anında öğrenin.',
        keywords: ['kredi hesaplama', 'taksit hesaplama', 'kredi ödeme planı', 'konut kredisi hesaplama'],
        category: 'finansal',
        icon: '🏦',
    },
    {
        slug: 'kdv-hesaplama',
        title: 'KDV Hesaplama - Katma Değer Vergisi',
        shortTitle: 'KDV Hesaplama',
        description: 'KDV dahil ve hariç fiyatları kolayca hesaplayın. %1, %10, %20 KDV oranları ile vergi hesaplama.',
        metaDescription: 'KDV hesaplama aracı. Fiyata KDV ekleme veya KDV\'yi ayırma işlemlerini anında yapın. Tüm KDV oranları desteklenir.',
        keywords: ['kdv hesaplama', 'vergi hesaplama', 'kdv dahil fiyat', 'kdv hariç fiyat'],
        category: 'finansal',
        icon: '🧾',
    },
    {
        slug: 'gelir-vergisi-hesaplama',
        title: 'Gelir Vergisi Hesaplama - Vergi Dilimi',
        shortTitle: 'Gelir Vergisi Hesaplama',
        description: '2024 vergi dilimleriyle gelir verginizi hesaplayın. Net ve brüt maaş hesaplama.',
        metaDescription: 'Gelir vergisi hesaplama aracı. Güncel vergi dilimleriyle yıllık gelir verginizi ve net maaşınızı hesaplayın.',
        keywords: ['gelir vergisi hesaplama', 'vergi dilimi', 'net maaş hesaplama', 'brüt maaş'],
        category: 'finansal',
        icon: '📋',
    },

    // Sağlık Hesaplayıcıları
    {
        slug: 'kalori-ihtiyaci-hesaplama',
        title: 'Günlük Kalori İhtiyacı Hesaplama',
        shortTitle: 'Kalori İhtiyacı',
        description: 'Yaş, boy, kilo ve aktivite düzeyinize göre günlük kalori ihtiyacınızı hesaplayın.',
        metaDescription: 'Günlük kalori ihtiyacı hesaplama aracı. Kilo vermek, almak veya korumak için gereken kalori miktarını öğrenin.',
        keywords: ['kalori hesaplama', 'günlük kalori ihtiyacı', 'kalori sayacı', 'diyet kalori'],
        category: 'saglik',
        icon: '🔥',
    },
    {
        slug: 'ideal-kilo-hesaplama',
        title: 'İdeal Kilo Hesaplama - Sağlıklı Kilo',
        shortTitle: 'İdeal Kilo Hesaplama',
        description: 'Boy ve cinsiyetinize göre ideal kilonuzu öğrenin. Sağlıklı kilo aralığınızı hesaplayın.',
        metaDescription: 'İdeal kilo hesaplama aracı. Boyunuza göre olması gereken ideal kilonuzu ve sağlıklı kilo aralığınızı öğrenin.',
        keywords: ['ideal kilo hesaplama', 'sağlıklı kilo', 'kilo hesaplama', 'ideal ağırlık'],
        category: 'saglik',
        icon: '⚖️',
    },
    {
        slug: 'vucut-kitle-indeksi',
        title: 'Vücut Kitle İndeksi (BMI) Hesaplama',
        shortTitle: 'Vücut Kitle İndeksi',
        description: 'BMI değerinizi hesaplayın ve vücut ağırlığınızın sağlıklı olup olmadığını öğrenin.',
        metaDescription: 'BMI hesaplama aracı. Vücut kitle indeksinizi hesaplayın, zayıf, normal, fazla kilolu veya obez kategorinizi öğrenin.',
        keywords: ['bmi hesaplama', 'vücut kitle indeksi', 'kilo kontrolü', 'obezite hesaplama'],
        category: 'saglik',
        icon: '📊',
    },
    {
        slug: 'su-ihtiyaci-hesaplama',
        title: 'Günlük Su İhtiyacı Hesaplama',
        shortTitle: 'Su İhtiyacı Hesaplama',
        description: 'Kilonuza ve aktivite düzeyinize göre günlük su ihtiyacınızı hesaplayın.',
        metaDescription: 'Günlük su ihtiyacı hesaplama. Kilonuza göre günde kaç litre su içmeniz gerektiğini öğrenin.',
        keywords: ['su ihtiyacı hesaplama', 'günlük su', 'su tüketimi', 'kaç litre su'],
        category: 'saglik',
        icon: '💧',
    },
    {
        slug: 'yuruyus-kalori-yakimi',
        title: 'Yürüyüş Kalori Yakımı Hesaplama',
        shortTitle: 'Yürüyüş Kalori Yakımı',
        description: 'Yürüyüş yaparak ne kadar kalori yaktığınızı hesaplayın. Süre, mesafe ve hıza göre hesaplama.',
        metaDescription: 'Yürüyüş kalori yakımı hesaplama. Yürüyüş sürenize ve hızınıza göre yakılan kalori miktarını öğrenin.',
        keywords: ['yürüyüş kalori', 'kalori yakma', 'egzersiz kalori', 'yürüyüş hesaplama'],
        category: 'saglik',
        icon: '🚶',
    },

    // Birim Dönüştürücüler
    {
        slug: 'km-mil-cevirici',
        title: 'Kilometre - Mil Çevirici',
        shortTitle: 'Km - Mil Çevirici',
        description: 'Kilometre ve mil arasında hızlı dönüşüm yapın. Mesafe birimlerini kolayca çevirin.',
        metaDescription: 'Km mil çevirici. Kilometre\'yi mil\'e veya mil\'i kilometre\'ye anında çevirin. Ücretsiz online dönüştürücü.',
        keywords: ['km mil çevirici', 'kilometre mil', 'mil km', 'mesafe çevirici'],
        category: 'birim',
        icon: '🛣️',
    },
    {
        slug: 'kg-pound-cevirici',
        title: 'Kilogram - Pound Çevirici',
        shortTitle: 'Kg - Pound Çevirici',
        description: 'Kilogram ve pound arasında hızlı dönüşüm. Ağırlık birimlerini kolayca çevirin.',
        metaDescription: 'Kg pound çevirici. Kilogramı pound\'a veya pound\'u kilograma anında çevirin.',
        keywords: ['kg pound çevirici', 'kilo pound', 'pound kg', 'ağırlık çevirici'],
        category: 'birim',
        icon: '🏋️',
    },
    {
        slug: 'sicaklik-cevirici',
        title: 'Sıcaklık Çevirici - Celsius Fahrenheit',
        shortTitle: 'Sıcaklık Çevirici',
        description: 'Celsius ve Fahrenheit arasında sıcaklık dönüşümü yapın. Kelvin desteği ile.',
        metaDescription: 'Sıcaklık çevirici. Celsius\'u Fahrenheit\'a veya Fahrenheit\'ı Celsius\'a çevirin. Kelvin dönüşümü dahil.',
        keywords: ['celsius fahrenheit çevirici', 'sıcaklık çevirici', 'derece çevirici', 'fahrenheit celsius'],
        category: 'birim',
        icon: '🌡️',
    },
    {
        slug: 'cm-inc-cevirici',
        title: 'Santimetre - İnç Çevirici',
        shortTitle: 'Cm - İnç Çevirici',
        description: 'Santimetre ve inç arasında uzunluk dönüşümü. Boy ölçüleri için ideal.',
        metaDescription: 'Cm inç çevirici. Santimetreyi inç\'e veya inç\'i santimetreye anında çevirin.',
        keywords: ['cm inç çevirici', 'santimetre inç', 'inç cm', 'uzunluk çevirici'],
        category: 'birim',
        icon: '📐',
    },
    {
        slug: 'litre-galon-cevirici',
        title: 'Litre - Galon Çevirici',
        shortTitle: 'Litre - Galon Çevirici',
        description: 'Litre ve galon arasında hacim dönüşümü. ABD ve UK galon desteği.',
        metaDescription: 'Litre galon çevirici. Litreyi galona veya galonu litreye çevirin. US ve UK galon desteklenir.',
        keywords: ['litre galon çevirici', 'galon litre', 'hacim çevirici', 'yakıt hesaplama'],
        category: 'birim',
        icon: '⛽',
    },
    {
        slug: 'metrekare-feet-cevirici',
        title: 'Metrekare - Feet Kare Çevirici',
        shortTitle: 'M² - Ft² Çevirici',
        description: 'Metrekare ve feet kare arasında alan dönüşümü. Emlak hesaplamaları için ideal.',
        metaDescription: 'Metrekare feet kare çevirici. m² yi ft² ye veya ft² yi m² ye anında çevirin.',
        keywords: ['metrekare feet çevirici', 'm2 ft2', 'alan çevirici', 'emlak hesaplama'],
        category: 'birim',
        icon: '🏠',
    },

    // Zaman ve Tarih
    {
        slug: 'yas-hesaplama',
        title: 'Yaş Hesaplama - Kaç Yaşındasınız?',
        shortTitle: 'Yaş Hesaplama',
        description: 'Doğum tarihinize göre tam yaşınızı hesaplayın. Yıl, ay, gün detaylı hesaplama.',
        metaDescription: 'Yaş hesaplama aracı. Doğum tarihinizi girin, yaşınızı yıl, ay ve gün olarak öğrenin.',
        keywords: ['yaş hesaplama', 'kaç yaşındayım', 'doğum tarihi hesaplama', 'yaş hesaplayıcı'],
        category: 'zaman',
        icon: '🎂',
    },
    {
        slug: 'gun-sayisi-hesaplama',
        title: 'İki Tarih Arası Gün Hesaplama',
        shortTitle: 'Gün Sayısı Hesaplama',
        description: 'İki tarih arasında kaç gün olduğunu hesaplayın. Hafta, ay, yıl detayları ile.',
        metaDescription: 'İki tarih arası gün hesaplama. Başlangıç ve bitiş tarihleri arasındaki gün sayısını öğrenin.',
        keywords: ['gün hesaplama', 'tarih farkı', 'iki tarih arası', 'gün sayısı'],
        category: 'zaman',
        icon: '📆',
    },
    {
        slug: 'emeklilik-hesaplama',
        title: 'Emeklilik Hesaplama - Ne Zaman Emekli Olursunuz?',
        shortTitle: 'Emeklilik Hesaplama',
        description: 'İşe başlama tarihi ve doğum yılınıza göre emeklilik tarihinizi hesaplayın.',
        metaDescription: 'Emeklilik hesaplama aracı. SGK emeklilik yaşınızı ve tarihinizi öğrenin. 2024 güncel hesaplama.',
        keywords: ['emeklilik hesaplama', 'emeklilik yaşı', 'ne zaman emekli olurum', 'sgk emeklilik'],
        category: 'zaman',
        icon: '👴',
    },
    {
        slug: 'zaman-farki-hesaplama',
        title: 'Zaman Farkı Hesaplama - İki Saat Arası',
        shortTitle: 'Zaman Farkı Hesaplama',
        description: 'İki saat arasındaki farkı hesaplayın. Çalışma saatleri, mesai ve toplantı süreleri için ideal.',
        metaDescription: 'Zaman farkı hesaplama aracı. İki saat arasındaki süreyi saat, dakika ve saniye olarak hesaplayın.',
        keywords: ['zaman farkı hesaplama', 'saat hesaplama', 'süre hesaplama', 'çalışma saati hesaplama', 'mesai hesaplama'],
        category: 'zaman',
        icon: '⏱️',
    },

    // Matematik
    {
        slug: 'yuzde-hesaplama',
        title: 'Yüzde Hesaplama - Yüzdelik Hesaplayıcı',
        shortTitle: 'Yüzde Hesaplama',
        description: 'Yüzde hesaplama işlemlerini kolayca yapın. Yüzde artış, azalış ve oran hesaplama.',
        metaDescription: 'Yüzde hesaplama aracı. Sayının yüzdesini bulun, yüzde artış/azalış ve iki sayı arasındaki yüzde farkını hesaplayın.',
        keywords: ['yüzde hesaplama', 'yüzdelik hesaplama', 'yüzde oranı', 'yüzde farkı'],
        category: 'matematik',
        icon: '%',
    },
    {
        slug: 'alan-hesaplama',
        title: 'Alan Hesaplama - Geometrik Şekiller',
        shortTitle: 'Alan Hesaplama',
        description: 'Kare, dikdörtgen, üçgen, daire ve diğer şekillerin alanını hesaplayın.',
        metaDescription: 'Alan hesaplama aracı. Kare, dikdörtgen, üçgen, daire, yamuk ve diğer geometrik şekillerin alanını hesaplayın.',
        keywords: ['alan hesaplama', 'kare alan', 'daire alan', 'geometrik hesaplama'],
        category: 'matematik',
        icon: '⬜',
    },

    // Araç ve Yakıt
    {
        slug: 'yakit-maliyeti-hesaplama',
        title: 'Yakıt Maliyeti Hesaplama - Benzin Dizel LPG',
        shortTitle: 'Yakıt Maliyeti',
        description: 'Yolculuğunuzun yakıt masrafını hesaplayın. Benzin, dizel ve LPG fiyatlarıyla maliyet hesaplama.',
        metaDescription: 'Ücretsiz yakıt maliyeti hesaplama aracı. Mesafe, tüketim ve yakıt tipine göre yolculuk masrafınızı hesaplayın.',
        keywords: ['yakıt hesaplama', 'benzin maliyeti', 'dizel hesaplama', 'lpg maliyeti', 'yol masrafı'],
        category: 'arac',
        icon: '⛽',
    },
    {
        slug: 'elektrikli-arac-sarj-maliyeti',
        title: 'Elektrikli Araç Şarj Maliyeti - EV Hesaplama',
        shortTitle: 'EV Şarj Maliyeti',
        description: 'Elektrikli aracınızın şarj maliyetini hesaplayın. Benzinli araçla karşılaştırma ve CO₂ tasarrufu.',
        metaDescription: 'Elektrikli araç şarj maliyeti hesaplama. Ev şarjı, halka açık istasyon ve hızlı şarj fiyatlarıyla maliyet hesaplayın.',
        keywords: ['elektrikli araç', 'EV şarj', 'şarj maliyeti', 'Tesla', 'Togg', 'elektrikli araba'],
        category: 'arac',
        icon: '🔋',
    },
];

export function getCalculatorBySlug(slug: string): Calculator | undefined {
    return calculators.find((calc) => calc.slug === slug);
}

export function getCalculatorsByCategory(category: Calculator['category']): Calculator[] {
    return calculators.filter((calc) => calc.category === category);
}

export function searchCalculators(query: string): Calculator[] {
    const lowerQuery = query.toLowerCase();
    return calculators.filter(
        (calc) =>
            calc.title.toLowerCase().includes(lowerQuery) ||
            calc.shortTitle.toLowerCase().includes(lowerQuery) ||
            calc.description.toLowerCase().includes(lowerQuery) ||
            calc.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))
    );
}
