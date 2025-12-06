// SEO İçerikleri - Her hesaplayıcı için detaylı açıklamalar
export interface SEOContent {
    slug: string;
    title: string;
    intro: string;
    howItWorks: string;
    benefits: string[];
    tips: string[];
    faq: { question: string; answer: string }[];
    relatedTerms: string[];
}

export const seoContents: Record<string, SEOContent> = {
    'doviz-donusturucu': {
        slug: 'doviz-donusturucu',
        title: 'Döviz Dönüştürücü Nedir?',
        intro: 'Döviz dönüştürücü, farklı para birimleri arasında anlık çeviri yapmanızı sağlayan online bir araçtır. Türk Lirası (TRY), Amerikan Doları (USD), Euro (EUR), İngiliz Sterlini (GBP) ve diğer dünya para birimleri arasında hızlı ve doğru hesaplama yapabilirsiniz.',
        howItWorks: 'Döviz kurları, Avrupa Merkez Bankası (ECB) verilerinden anlık olarak çekilir ve 1 saatlik aralıklarla güncellenir. Hesaplama yaparken kaynak para birimini, hedef para birimini ve miktarı girmeniz yeterlidir.',
        benefits: [
            'Anlık ve güncel döviz kurları',
            '10+ farklı para birimi desteği',
            'Kolay kullanım arayüzü',
            'Mobil uyumlu tasarım',
            'Ücretsiz ve sınırsız kullanım'
        ],
        tips: [
            'Döviz kurları sürekli değişir, önemli işlemler için bankanızla teyit edin',
            'Alış ve satış kurları arasında fark (spread) olduğunu unutmayın',
            'Büyük miktarlı döviz işlemlerinde banka komisyonlarını hesaba katın'
        ],
        faq: [
            {
                question: 'Döviz kurları ne sıklıkla güncelleniyor?',
                answer: 'Döviz kurları 1 saatlik aralıklarla Avrupa Merkez Bankası verilerinden güncellenmektedir.'
            },
            {
                question: 'Hangi para birimleri destekleniyor?',
                answer: 'USD, EUR, GBP, CHF, JPY, CAD, AUD, TRY, SAR ve AED dahil 10 farklı para birimi desteklenmektedir.'
            },
            {
                question: 'Bu kurlar bankalarla aynı mı?',
                answer: 'Gösterilen kurlar referans kurlardır. Bankalar kendi alış-satış spreadlerini uygular, bu nedenle küçük farklılıklar olabilir.'
            }
        ],
        relatedTerms: ['döviz kuru', 'dolar kuru', 'euro kuru', 'para çevirici', 'kur hesaplama']
    },

    'basit-faiz-hesaplama': {
        slug: 'basit-faiz-hesaplama',
        title: 'Basit Faiz Nedir ve Nasıl Hesaplanır?',
        intro: 'Basit faiz, yatırılan anaparanın belirli bir süre boyunca sabit bir faiz oranıyla kazandığı getiriyi ifade eder. Bileşik faizden farklı olarak, kazanılan faiz anaparaya eklenmez ve her dönem aynı tutar üzerinden hesaplanır.',
        howItWorks: 'Basit faiz formülü: Faiz = Anapara × Faiz Oranı × Süre. Örneğin, 10.000 TL\'yi %20 yıllık faizle 1 yıl yatırırsanız: 10.000 × 0.20 × 1 = 2.000 TL faiz kazanırsınız.',
        benefits: [
            'Kolay hesaplama ve anlaşılır yapı',
            'Kısa vadeli yatırımlar için ideal',
            'Öngörülebilir getiri',
            'Gün, ay veya yıl bazında hesaplama'
        ],
        tips: [
            'Uzun vadeli yatırımlarda bileşik faiz daha avantajlıdır',
            'Vergi kesintilerini hesaba katmayı unutmayın',
            'Enflasyon oranını düşerek reel getiriyi değerlendirin'
        ],
        faq: [
            {
                question: 'Basit faiz ile bileşik faiz arasındaki fark nedir?',
                answer: 'Basit faizde kazanılan faiz anaparaya eklenmez, her dönem aynı tutar üzerinden hesaplanır. Bileşik faizde ise kazanılan faiz anaparaya eklenerek "faizin faizi" de kazanılır.'
            },
            {
                question: 'Hangi yatırımlarda basit faiz uygulanır?',
                answer: 'Genellikle kısa vadeli mevduat hesapları, bazı devlet tahvilleri ve kısa vadeli borç senetlerinde basit faiz uygulanır.'
            }
        ],
        relatedTerms: ['faiz hesaplama', 'mevduat faizi', 'yatırım getirisi', 'anapara']
    },
    'altin-hesaplama': {
        slug: 'altin-hesaplama',
        title: 'Altın Hesaplaması Nasıl Yapılır?',
        intro: 'Altın hesaplama aracı, gram, çeyrek, yarım, tam ve cumhuriyet altını gibi farklı altın türlerinin güncel TL karşılığını hesaplamanıza yardımcı olur. İster yatırım amaçlı olsun ister düğün takısı, altın değerini anında öğrenin.',
        howItWorks: 'Yatırım yapmak istediğiniz altın türünü seçin ve adet/gram miktarını girin. Hesaplayıcı, en güncel altın fiyatlarını kullanarak toplam tutarı otomatik olarak hesaplar. Alış ve satış modları sayesinde spread dahil gerçekçi rakamları görebilirsiniz.',
        benefits: [
            'Canlı altın fiyatları ile anlık hesaplama',
            'Gram, çeyrek, yarım, tam ve cumhuriyet altını desteği',
            'Alış ve satış fiyatı simülasyonu',
            'Toplam gram ve TL tutarı gösterimi',
            'Kolay ve hızlı arayüz'
        ],
        tips: [
            'Altın yatırımı uzun vadeli bir tasarruf aracıdır',
            'Kuyumcudan kuyumcuya fiyatlar ufak farklılıklar gösterebilir',
            'İşçiliksiz ürünler (gram altın, cumhuriyet altını) yatırım için daha avantajlıdır',
            'Fiziki altın alırken güvenilir yerleri tercih edin'
        ],
        faq: [
            {
                question: 'Çeyrek altın kaç gram?',
                answer: 'Çeyrek altın, 22 ayar olup 1.75 gram ağırlığındadır. İçerisinde 1.6065 gram has altın bulunur.'
            },
            {
                question: 'Cumhuriyet altını ile Ata altın aynı mı?',
                answer: 'Cumhuriyet altını ve Ata altın benzer özelliklere sahip olsa da basım yılları ve ufak boyut farkları olabilir. İkisi de 7.20 gram ağırlığındadır ve yatırım için tercih edilir.'
            },
            {
                question: 'Altın fiyatları neye göre değişir?',
                answer: 'Altın fiyatları, küresel piyasalardaki ons altın fiyatı ve Dolar/TL kurundaki değişimlere göre belirlenir.'
            }
        ],
        relatedTerms: ['gram altın fiyatı', 'çeyrek altın', 'altın borsası', 'altın yatırım', 'cumhuriyet altını']
    },

    'bilesik-faiz-hesaplama': {
        slug: 'bilesik-faiz-hesaplama',
        title: 'Bileşik Faiz Nedir? Faizin Faizi Nasıl Hesaplanır?',
        intro: 'Bileşik faiz, yatırımınızın hem anaparası hem de biriken faizi üzerinden faiz kazanmanızı sağlayan güçlü bir finansal kavramdır. Albert Einstein\'ın "dünyanın sekizinci harikası" olarak nitelendirdiği bileşik faiz, uzun vadeli yatırımlarda servet oluşturmanın temel taşıdır.',
        howItWorks: 'Bileşik faiz formülü: A = P(1 + r/n)^(nt). Burada A = toplam tutar, P = anapara, r = yıllık faiz oranı, n = yılda kaç kez faiz uygulandığı, t = yıl sayısı.',
        benefits: [
            'Uzun vadede katlanarak büyüyen getiri',
            'Faizin faizi etkisi',
            'Erken başlamanın avantajı',
            'Düzenli yatırımla güçlenen etki'
        ],
        tips: [
            'Ne kadar erken başlarsanız, bileşik faiz o kadar çok çalışır',
            'Aylık bileşik faiz, yıllık bileşik faizden daha avantajlıdır',
            'Küçük miktarlarla bile başlamak, başlamamaktan iyidir'
        ],
        faq: [
            {
                question: '72 kuralı nedir?',
                answer: '72 kuralı, paranızın ne kadar sürede ikiye katlanacağını tahmin etmek için kullanılır. 72\'yi faiz oranına bölersiniz. Örneğin %8 faizle: 72/8 = 9 yıl.'
            },
            {
                question: 'Bileşik faiz ne sıklıkla uygulanmalı?',
                answer: 'Faiz ne kadar sık uygulanırsa (günlük > aylık > yıllık), getiri o kadar yüksek olur. Ancak fark genellikle küçüktür.'
            }
        ],
        relatedTerms: ['kümülatif faiz', 'faizin faizi', 'yatırım büyümesi', 'servet oluşturma']
    },

    'kredi-hesaplama': {
        slug: 'kredi-hesaplama',
        title: 'Kredi Hesaplama: Taksit ve Toplam Ödeme',
        intro: 'Kredi hesaplama aracı, konut kredisi, taşıt kredisi veya ihtiyaç kredisi için aylık taksit tutarınızı, toplam faiz maliyetinizi ve toplam geri ödeme tutarınızı hesaplamanızı sağlar. Kredi çekmeden önce maliyetleri karşılaştırmak için idealdir.',
        howItWorks: 'Aylık taksit hesaplaması için annüite formülü kullanılır: Taksit = Anapara × [r(1+r)^n] / [(1+r)^n - 1]. Burada r = aylık faiz oranı, n = toplam taksit sayısı.',
        benefits: [
            'Aylık taksit tutarını önceden görme',
            'Toplam faiz maliyetini hesaplama',
            'Farklı vade seçeneklerini karşılaştırma',
            'Bütçe planlaması yapabilme'
        ],
        tips: [
            'Daha kısa vade = daha yüksek taksit ama daha az toplam faiz',
            'Kredi faiz oranını yıllık bazda karşılaştırın (yıllık maliyet oranı)',
            'KKDF ve BSMV gibi ek maliyetleri de hesaba katın',
            'Erken ödeme koşullarını mutlaka öğrenin'
        ],
        faq: [
            {
                question: 'Kredi faiz oranı nasıl belirlenir?',
                answer: 'Kredi faiz oranları, merkez bankası politika faizi, bankanın fonlama maliyeti, kredi riski ve piyasa koşullarına göre belirlenir.'
            },
            {
                question: 'Sabit faiz mi değişken faiz mi seçmeliyim?',
                answer: 'Sabit faiz, taksitinizin değişmeyeceği anlamına gelir - öngörülebilirlik sağlar. Değişken faiz başlangıçta düşük olabilir ama risk taşır.'
            },
            {
                question: 'Erken ödeme cezası ne kadardır?',
                answer: 'Türkiye\'de konut kredilerinde erken ödeme cezası kalan anaparanın %2\'sini geçemez. İhtiyaç kredilerinde farklı oranlar uygulanabilir.'
            }
        ],
        relatedTerms: ['taksit hesaplama', 'konut kredisi', 'ihtiyaç kredisi', 'kredi maliyeti', 'faiz oranı']
    },

    'kdv-hesaplama': {
        slug: 'kdv-hesaplama',
        title: 'KDV Hesaplama: Katma Değer Vergisi Nedir?',
        intro: 'Katma Değer Vergisi (KDV), mal ve hizmet satışlarında uygulanan dolaylı bir vergidir. Türkiye\'de %1, %10 ve %20 olmak üzere üç farklı KDV oranı uygulanmaktadır. Bu araçla KDV dahil veya hariç fiyatları kolayca hesaplayabilirsiniz.',
        howItWorks: 'KDV ekleme: KDV Dahil Fiyat = Fiyat × (1 + KDV Oranı). KDV çıkarma: KDV Hariç Fiyat = KDV Dahil Fiyat / (1 + KDV Oranı). Örneğin %20 KDV için: 100 TL × 1.20 = 120 TL.',
        benefits: [
            'Hızlı KDV hesaplama',
            'Hem KDV ekleme hem çıkarma',
            '%1, %10, %20 tüm oranlar',
            'Fatura ve muhasebe işlemleri için ideal'
        ],
        tips: [
            'Gıda ürünlerinin çoğunda %10 KDV uygulanır',
            'Temel gıda maddelerinde %1 KDV uygulanır',
            'Genel mal ve hizmetlerde %20 KDV uygulanır',
            'E-faturada KDV tutarı kuruş hassasiyetinde olmalıdır'
        ],
        faq: [
            {
                question: 'Hangi ürünlerde %1 KDV uygulanır?',
                answer: 'Temel gıda maddeleri (ekmek, un, süt vb.), gazete ve dergiler, tarımsal ürünler gibi kalemlerde %1 KDV uygulanır.'
            },
            {
                question: 'KDV indirimi nasıl yapılır?',
                answer: 'İşletmeler, satın aldıkları mal ve hizmetler için ödedikleri KDV\'yi, sattıkları mal ve hizmetler için tahsil ettikleri KDV\'den düşebilirler.'
            },
            {
                question: 'E-ticaret sitelerinde KDV nasıl gösterilmeli?',
                answer: 'Tüketiciye yönelik satışlarda fiyatların KDV dahil gösterilmesi zorunludur.'
            }
        ],
        relatedTerms: ['vergi hesaplama', 'katma değer vergisi', 'fatura', 'KDV oranları']
    },

    'gelir-vergisi-hesaplama': {
        slug: 'gelir-vergisi-hesaplama',
        title: 'Gelir Vergisi Hesaplama: 2025 Vergi Dilimleri',
        intro: 'Gelir vergisi, gerçek kişilerin bir takvim yılı içinde elde ettikleri kazançlar üzerinden ödedikleri doğrudan bir vergidir. Türkiye\'de artan oranlı vergi sistemi uygulanır; geliriniz arttıkça vergi oranı da yükselir.',
        howItWorks: 'Gelir vergisi dilim usulüyle hesaplanır. 2025 yılında ilk 158.000 TL için %15, 330.000 TL\'ye kadar %20, 800.000/1.200.000 TL\'ye kadar %27, 4.300.000 TL\'ye kadar %35 ve üzeri için %40 oran uygulanır.',
        benefits: [
            '2025 güncel vergi dilimleri',
            'Ücret ve diğer gelir ayrımı',
            'Efektif vergi oranı hesaplama',
            'Dilim bazlı detaylı döküm'
        ],
        tips: [
            'Ücret gelirleri için farklı dilim sınırları uygulanır',
            'Bireysel emeklilik (BES) katkıları vergi avantajı sağlar',
            'Bağış ve yardımlar vergi matrahından düşülebilir',
            'Beyanname verme sürelerini kaçırmayın'
        ],
        faq: [
            {
                question: 'Gelir vergisi dilimleri ne zaman güncellenir?',
                answer: 'Gelir vergisi dilimleri her yıl yeniden değerleme oranında (%43.93 - 2024) artırılarak güncellenir.'
            },
            {
                question: 'Ücret geliri ile serbest meslek geliri farkı nedir?',
                answer: 'Ücret gelirleri için 3. dilim sınırı 1.200.000 TL iken, serbest meslek ve diğer gelirler için 800.000 TL\'dir.'
            },
            {
                question: 'Asgari ücretliler gelir vergisi öder mi?',
                answer: 'Asgari ücretliler gelir vergisinden muaftır (2025 yılı için asgari ücret istisnası uygulanmaktadır).'
            }
        ],
        relatedTerms: ['vergi dilimi', 'net maaş', 'brüt maaş', 'gelir beyannamesi', 'vergi indirimi']
    },

    'kalori-ihtiyaci-hesaplama': {
        slug: 'kalori-ihtiyaci-hesaplama',
        title: 'Günlük Kalori İhtiyacı Nasıl Hesaplanır?',
        intro: 'Günlük kalori ihtiyacı, vücudunuzun temel metabolik fonksiyonları ve günlük aktivitelerinizi sürdürmek için gereken enerji miktarıdır. Bu değer yaş, cinsiyet, boy, kilo ve aktivite düzeyine göre değişir.',
        howItWorks: 'Mifflin-St Jeor denklemi kullanılır. Erkekler için BMR = 10×kilo + 6.25×boy - 5×yaş + 5. Kadınlar için BMR = 10×kilo + 6.25×boy - 5×yaş - 161. BMR, aktivite faktörüyle çarpılarak günlük kalori ihtiyacı bulunur.',
        benefits: [
            'Kişiselleştirilmiş kalori hesabı',
            '5 farklı aktivite seviyesi',
            'Kilo verme/alma hedefleri',
            'Bilimsel formül (Mifflin-St Jeor)'
        ],
        tips: [
            'Kilo vermek için günlük 500 kalori açık oluşturun (haftada ~0.5 kg)',
            'Protein alımını artırmak tokluk hissini uzatır',
            'Kalori saymak farkındalık oluşturur ama takıntı haline getirmeyin',
            'Egzersiz yaparken kalori ihtiyacınız artar'
        ],
        faq: [
            {
                question: 'BMR (Bazal Metabolizma Hızı) nedir?',
                answer: 'BMR, vücudunuzun hiçbir şey yapmadan, sadece yaşamsal fonksiyonları sürdürmek için harcadığı enerjidir (kalp atışı, nefes alma, hücre yenilenmesi vb.).'
            },
            {
                question: 'TDEE nedir?',
                answer: 'TDEE (Total Daily Energy Expenditure), BMR\'nizin aktivite faktörüyle çarpılmasıyla bulunan günlük toplam enerji harcamanızdır.'
            },
            {
                question: 'Çok düşük kalori diyeti zararlı mı?',
                answer: 'Evet, günlük 1200 kalorinin altına inmek metabolizmayı yavaşlatabilir, kas kaybına ve besin eksikliklerine yol açabilir.'
            }
        ],
        relatedTerms: ['kalori sayacı', 'diyet', 'metabolizma', 'kilo verme', 'BMR hesaplama']
    },

    'ideal-kilo-hesaplama': {
        slug: 'ideal-kilo-hesaplama',
        title: 'İdeal Kilo Nasıl Hesaplanır?',
        intro: 'İdeal kilo, boyunuza göre sağlıklı kabul edilen ağırlık aralığını ifade eder. Ancak ideal kilo sadece bir rehberdir; kas kütlesi, kemik yapısı ve genel sağlık durumu da önemlidir.',
        howItWorks: 'Devine, Robinson, Miller ve Hamwi formülleri kullanılır. Her formül farklı bir sonuç verir; ortalaması alınarak ideal kilo aralığı belirlenir. Bu formüller boy ve cinsiyet temel alınarak geliştirilmiştir.',
        benefits: [
            '4 farklı bilimsel formül',
            'Cinsiyet bazlı hesaplama',
            'Sağlıklı kilo aralığı',
            'Karşılaştırmalı sonuçlar'
        ],
        tips: [
            'İdeal kilo sabit bir değil, bir aralıktır',
            'Sporcular için kas kütlesi değerlendirmesi farklıdır',
            'Bel çevresi ölçümü de sağlık göstergesidir',
            'Kilo kaybı haftada 0.5-1 kg\'ı geçmemelidir'
        ],
        faq: [
            {
                question: 'İdeal kilo formülleri neden farklı sonuç veriyor?',
                answer: 'Her formül farklı popülasyonlar ve dönemlerde geliştirilmiştir. Devine 1974, Robinson 1983, Miller 1983, Hamwi 1964 yıllarında oluşturulmuştur.'
            },
            {
                question: 'Hangi formül en doğru?',
                answer: 'Hiçbir formül tek başına doğru değildir. Ortalamaları kullanmak daha makul bir tahmin sağlar.'
            }
        ],
        relatedTerms: ['sağlıklı kilo', 'kilo hesaplama', 'boy kilo oranı', 'ideal ağırlık']
    },

    'vucut-kitle-indeksi': {
        slug: 'vucut-kitle-indeksi',
        title: 'Vücut Kitle İndeksi (BMI) Nedir?',
        intro: 'Vücut Kitle İndeksi (BMI), kilo ve boy ölçülerinizi kullanarak vücut ağırlığınızın sağlıklı bir aralıkta olup olmadığını değerlendiren bir ölçüttür. DSÖ (Dünya Sağlık Örgütü) tarafından dünya genelinde kabul görmektedir.',
        howItWorks: 'BMI = Kilo (kg) / Boy² (m). Örneğin, 75 kg ağırlığında ve 1.75 m boyunda birinin BMI\'si: 75 / (1.75²) = 24.5 olur.',
        benefits: [
            'Hızlı sağlık değerlendirmesi',
            'Uluslararası standart',
            'Kolay hesaplama',
            'Kategori sınıflandırması'
        ],
        tips: [
            'BMI kas kütlesini dikkate almaz, sporcular için yanıltıcı olabilir',
            'Bel çevresi ölçümü BMI\'yi tamamlayıcı bir göstergedir',
            'Çocuklar için yaşa göre düzeltilmiş BMI kullanılmalıdır',
            'Normal BMI tek başına sağlıklı olduğunuz anlamına gelmez'
        ],
        faq: [
            {
                question: 'Normal BMI aralığı nedir?',
                answer: '18.5 ile 24.9 arası normal kabul edilir. 18.5 altı zayıf, 25-29.9 fazla kilolu, 30 ve üzeri obez kategorisindedir.'
            },
            {
                question: 'BMI kaslı kişiler için güvenilir mi?',
                answer: 'Hayır, kas dokusu yağdan daha ağır olduğu için kaslı kişilerin BMI\'si yanıltıcı yüksek çıkabilir.'
            },
            {
                question: 'Yaşlılarda BMI nasıl değerlendirilmeli?',
                answer: 'Yaşlılarda biraz daha yüksek BMI (25-27 arası) koruyucu olabilir. Bu konuda doktorunuza danışın.'
            }
        ],
        relatedTerms: ['bmi hesaplama', 'kilo kontrolü', 'obezite', 'kilolu', 'zayıf']
    },

    'su-ihtiyaci-hesaplama': {
        slug: 'su-ihtiyaci-hesaplama',
        title: 'Günlük Su İhtiyacı Nasıl Hesaplanır?',
        intro: 'Su, vücudumuzun en temel ihtiyacıdır. Yeterli su tüketimi metabolizmayı hızlandırır, toksinlerin atılmasını sağlar, cilt sağlığını destekler ve genel performansı artırır.',
        howItWorks: 'Temel formül: Günlük su ihtiyacı (ml) = Kilo (kg) × 35. Bu değer aktivite seviyesi, iklim ve genel sağlık durumuna göre ayarlanır.',
        benefits: [
            'Kişiselleştirilmiş su önerisi',
            'Aktivite seviyesi hesaba katılır',
            'İklim faktörü dahil',
            'Bardak ve litre cinsinden gösterim'
        ],
        tips: [
            'Susadığınızda zaten hafif dehidrate olmuşsunuzdur',
            'Sabah kalktığınızda 1-2 bardak su için',
            'Kahve ve çay su yerine geçmez, ek su için',
            'İdrar renginiz açık sarı olmalı - koyu renk dehidrasyonu gösterir'
        ],
        faq: [
            {
                question: 'Günde 8 bardak su içmek doğru mu?',
                answer: 'Bu genel bir kuraldır ancak herkes için geçerli değildir. Su ihtiyacı kilo, aktivite ve iklime göre değişir.'
            },
            {
                question: 'Çok su içmek zararlı mı?',
                answer: 'Aşırı su tüketimi (hiponatremi) nadir ama ciddi bir durumdur. Normal koşullarda günde 3-4 litre üzerini aşmayın.'
            }
        ],
        relatedTerms: ['su içmek', 'hidrasyon', 'günlük su', 'dehidrasyon', 'su tüketimi']
    },

    'yuruyus-kalori-yakimi': {
        slug: 'yuruyus-kalori-yakimi',
        title: 'Yürüyüşte Ne Kadar Kalori Yakılır?',
        intro: 'Yürüyüş, en erişilebilir ve etkili egzersiz türlerinden biridir. Kalp sağlığını destekler, kilo kontrolüne yardımcı olur ve mental sağlığı iyileştirir. Yakılan kalori miktarı kilo, hız ve süreye bağlıdır.',
        howItWorks: 'MET (Metabolik Eşdeğer) değerleri kullanılır. Kalori = MET × Kilo (kg) × Süre (saat). Normal yürüyüş MET değeri 3.5, tempolu yürüyüş 5.0, hızlı yürüyüş 6.5 olarak kabul edilir.',
        benefits: [
            'Farklı yürüyüş hızları',
            'Adım sayısı tahmini',
            'Kilo bazlı hesaplama',
            'MET değerleri ile doğru sonuç'
        ],
        tips: [
            'Günde 10.000 adım genel sağlık için önerilir (~5-6 km)',
            'Tempolu yürüyüş, yavaş koşudan daha kolay ve eklemlere nazik',
            'Yokuş yukarı yürümek kalori yakımını %50 artırabilir',
            'Yürüyüş öncesi ve sonrası hafif esneme yapın'
        ],
        faq: [
            {
                question: '1 saat yürüyüşte kaç kalori yakılır?',
                answer: '70 kg bir kişi normal tempoda 1 saat yürüyüşte yaklaşık 250-300 kalori yakar. Hızlı tempoda bu 400-450 kaloriye çıkabilir.'
            },
            {
                question: 'Koşmak mı yürümek mi daha çok kalori yakar?',
                answer: 'Koşmak aynı sürede daha çok kalori yakar, ancak yürüyüş daha sürdürülebilir ve eklemlere daha az yük bindirir.'
            }
        ],
        relatedTerms: ['kalori yakma', 'yürüyüş egzersizi', 'adım sayısı', 'tempolu yürüyüş']
    },

    'km-mil-cevirici': {
        slug: 'km-mil-cevirici',
        title: 'Kilometre - Mil Çevirici',
        intro: 'Kilometre ve mil, mesafe ölçümünde kullanılan iki farklı birimdir. Türkiye ve çoğu ülke metrik sistemi (kilometre) kullanırken, ABD, İngiltere ve bazı ülkeler mil sistemini tercih eder.',
        howItWorks: '1 mil = 1.60934 kilometre. Dönüşüm: Mil → Km: Mil × 1.60934. Km → Mil: Km / 1.60934.',
        benefits: [
            'Anlık çift yönlü dönüşüm',
            'Araç hız göstergesi çevirisi',
            'Koşu mesafeleri hesaplama',
            'Uluslararası mesafe karşılaştırması'
        ],
        tips: [
            'Maraton mesafesi: 42.195 km = 26.2 mil',
            'ABD\'de hız sınırları mil/saat olarak verilir',
            'Yaklaşık hesap için km\'yi 1.6\'ya bölün',
            '100 km/saat ≈ 62 mil/saat'
        ],
        faq: [
            {
                question: 'Neden bazı ülkeler mil kullanıyor?',
                answer: 'Tarihsel nedenlerle ABD ve İngiltere Imperial sistemini benimsemiştir. Çoğu ülke metrik sisteme geçmiş olsa da bu ülkelerde alışkanlık devam ediyor.'
            },
            {
                question: 'Deniz mili farklı mı?',
                answer: 'Evet, deniz mili (nautical mile) 1.852 km\'dir ve denizcilik/havacılıkta kullanılır.'
            }
        ],
        relatedTerms: ['mesafe çevirici', 'mil km', 'hız çevirici', 'uzunluk birimi']
    },

    'kg-pound-cevirici': {
        slug: 'kg-pound-cevirici',
        title: 'Kilogram - Pound Çevirici',
        intro: 'Kilogram (kg) ve pound (lb) ağırlık ölçü birimleridir. Türkiye metrik sistemi kullanırken, ABD ve İngiltere pound sistemini kullanır. Spor, fitness ve uluslararası ticaret için dönüşüm sıkça gereklidir.',
        howItWorks: '1 kilogram = 2.20462 pound. Dönüşüm: Kg → Lb: Kg × 2.20462. Lb → Kg: Lb / 2.20462.',
        benefits: [
            'Spor ve fitness hesaplamaları',
            'Uluslararası kargo ağırlığı',
            'Halter ve ağırlık çevirisi',
            'Anlık çift yönlü dönüşüm'
        ],
        tips: [
            'Yaklaşık hesap için kiloyu 2.2 ile çarpın',
            'ABD\'de vücut ağırlığı pound olarak ifade edilir',
            '1 stone = 14 pound (İngiltere\'de kullanılır)',
            'Halter plakalarında pound ve kg ayrı verilir'
        ],
        faq: [
            {
                question: '100 kg kaç pound?',
                answer: '100 kg = 220.46 pound (yaklaşık 220 lb).'
            },
            {
                question: 'Pound ve libre aynı mı?',
                answer: 'Evet, "libre" poundun Latince kökenli eski adıdır. "lb" kısaltması "libra"dan gelir.'
            }
        ],
        relatedTerms: ['ağırlık çevirici', 'kilo pound', 'lb kg', 'vücut ağırlığı']
    },

    'sicaklik-cevirici': {
        slug: 'sicaklik-cevirici',
        title: 'Celsius - Fahrenheit Çevirici',
        intro: 'Sıcaklık ölçümünde Celsius (°C), Fahrenheit (°F) ve Kelvin (K) olmak üzere üç ana birim kullanılır. Türkiye ve çoğu ülke Celsius kullanırken, ABD Fahrenheit tercih eder. Kelvin ise bilimsel çalışmalarda standart birimdir.',
        howItWorks: 'Formüller: °F = (°C × 9/5) + 32. °C = (°F - 32) × 5/9. K = °C + 273.15.',
        benefits: [
            'Üç sıcaklık birimi desteği',
            'Hava durumu çevirisi',
            'Yemek tarifleri için',
            'Bilimsel hesaplamalar'
        ],
        tips: [
            'Su 0°C\'de donar, 100°C\'de kaynar (deniz seviyesinde)',
            'Normal vücut ısısı: 37°C = 98.6°F',
            'Oda sıcaklığı: ~20-22°C = 68-72°F',
            '-40\'ta Celsius ve Fahrenheit eşittir'
        ],
        faq: [
            {
                question: 'Mutfakta hangi birim kullanılmalı?',
                answer: 'Türk yemek tariflerinde Celsius, Amerikan tariflerinde Fahrenheit kullanılır. Fırın sıcaklıklarını doğru çevirmek önemlidir.'
            },
            {
                question: 'Kelvin neden 0\'dan başlamıyor?',
                answer: 'Kelvin sıfırı mutlak sıfırdır (-273.15°C) - maddenin teorik olarak en düşük sıcaklığı.'
            }
        ],
        relatedTerms: ['derece çevirici', 'fahrenheit celsius', 'sıcaklık birimi', 'hava durumu']
    },

    'cm-inc-cevirici': {
        slug: 'cm-inc-cevirici',
        title: 'Santimetre - İnç Çevirici',
        intro: 'Santimetre (cm) ve inç (inch) uzunluk ölçü birimleridir. Elektronik cihaz ekranları, giysi bedenleri ve mobilya ölçülerinde sıkça dönüşüm gerekir.',
        howItWorks: '1 inç = 2.54 cm. Dönüşüm: Cm → İnç: Cm / 2.54. İnç → Cm: İnç × 2.54.',
        benefits: [
            'Ekran boyutu hesaplama',
            'Boy ölçüsü çevirme',
            'Feet+inch gösterimi',
            'Giysi bedeni hesaplama'
        ],
        tips: [
            'TV/monitör ekran boyutları inç olarak verilir (köşegen)',
            'Boy ölçümünde 1 feet = 12 inç = 30.48 cm',
            '5 feet 9 inç = 175 cm (ortalama erkek boyu)',
            'Ayakkabı numaraları ülkeden ülkeye farklıdır'
        ],
        faq: [
            {
                question: '170 cm kaç feet kaç inch?',
                answer: '170 cm = 5 feet 7 inch (5\'7").'
            },
            {
                question: 'Ekran boyutu nasıl ölçülür?',
                answer: 'Ekran boyutu köşegen olarak (bir köşeden karşı köşeye) inç cinsinden ölçülür.'
            }
        ],
        relatedTerms: ['uzunluk çevirici', 'boy ölçüsü', 'inch cm', 'ekran boyutu']
    },

    'litre-galon-cevirici': {
        slug: 'litre-galon-cevirici',
        title: 'Litre - Galon Çevirici',
        intro: 'Litre ve galon, hacim ölçü birimleridir. Önemli bir fark: ABD galonu (3.785 L) ve İngiliz galonu (4.546 L) farklıdır. Yakıt tüketimi, sıvı ürünler ve tarımda sıkça kullanılır.',
        howItWorks: '1 ABD galonu = 3.78541 litre. 1 İngiliz galonu = 4.54609 litre. Dönüşüm formülü galona göre değişir.',
        benefits: [
            'ABD ve İngiliz galonu desteği',
            'Yakıt hesaplama',
            'Tarım ve sanayi için',
            'Çift yönlü dönüşüm'
        ],
        tips: [
            'Amerikan araçlarının yakıt verimliliği MPG (miles per gallon) olarak verilir',
            'Türkiye\'de lt/100km kullanılır',
            'MPG → lt/100km: 235.21 / MPG',
            'İngiliz galonu Amerikan galonundan %20 daha büyük'
        ],
        faq: [
            {
                question: '1 galon benzin kaç litre?',
                answer: 'ABD galonu = 3.79 litre, İngiliz galonu = 4.55 litre.'
            },
            {
                question: 'lt/100km nasıl MPG\'ye çevrilir?',
                answer: '235.21 sayısını lt/100km değerine bölün. Örneğin 8 lt/100km = 29.4 MPG.'
            }
        ],
        relatedTerms: ['yakıt hesaplama', 'hacim çevirici', 'galon litre', 'benzin litre']
    },

    'metrekare-feet-cevirici': {
        slug: 'metrekare-feet-cevirici',
        title: 'Metrekare - Feet Kare Çevirici',
        intro: 'Metrekare (m²) ve feet kare (ft² veya sq ft), alan ölçü birimleridir. Emlak ilanları, inşaat ve mimarlıkta sıkça karşılaşılır.',
        howItWorks: '1 metrekare = 10.7639 feet kare. Dönüşüm: m² → ft²: m² × 10.7639. ft² → m²: ft² / 10.7639.',
        benefits: [
            'Emlak alanı hesaplama',
            'Uluslararası ilan karşılaştırması',
            'İnşaat projeleri için',
            'Zemin kaplama hesabı'
        ],
        tips: [
            '100 m² = 1076 sq ft (tipik 3+1 daire)',
            'ABD emlak ilanları sq ft kullanır',
            '1 dönüm = 1000 m² = 10764 sq ft',
            'Paint için alan hesabı yaparken duvar yüzeyini ölçün, zemin değil'
        ],
        faq: [
            {
                question: '150 m² daire kaç ft²?',
                answer: '150 m² = 1614.5 feet kare.'
            },
            {
                question: 'Acre ve dönüm karşılaştırması?',
                answer: '1 acre = 4046.86 m² = 4.047 dönüm. 1 dönüm = 1000 m².'
            }
        ],
        relatedTerms: ['alan çevirici', 'emlak hesaplama', 'm2 ft2', 'daire metrekare']
    },

    'yas-hesaplama': {
        slug: 'yas-hesaplama',
        title: 'Yaş Hesaplama: Kaç Yaşındasınız?',
        intro: 'Yaş hesaplama aracı, doğum tarihinize göre tam yaşınızı yıl, ay ve gün olarak hesaplar. Ayrıca toplam yaşadığınız gün sayısını ve bir sonraki doğum gününüze kaç gün kaldığını gösterir.',
        howItWorks: 'Bugünün tarihi ile doğum tarihiniz arasındaki fark hesaplanır. Ay ve gün eksiklikleri dikkate alınarak tam yaş belirlenir.',
        benefits: [
            'Tam yaş hesaplama (yıl, ay, gün)',
            'Toplam gün sayısı',
            'Doğum günü sayaç',
            'Kolay kullanım'
        ],
        tips: [
            'Resmi işlemlerde genellikle sadece tamamlanan yıllar sayılır',
            'Bazı kültürlerde yaş hesabı farklıdır (Kore\'de +1)',
            'Emeklilik hesaplamalarında doğum tarihi kritik önem taşır',
            'Sigorta primlerinde yaş grupları önemlidir'
        ],
        faq: [
            {
                question: 'Kronolojik yaş ile biyolojik yaş farkı nedir?',
                answer: 'Kronolojik yaş doğum tarihine göre hesaplanır. Biyolojik yaş ise vücudunuzun gerçek yaşlanma düzeyini ifade eder ve yaşam tarzına göre değişir.'
            },
            {
                question: '10.000 gün kaç yıl eder?',
                answer: '10.000 gün yaklaşık 27 yıl 5 aydır.'
            }
        ],
        relatedTerms: ['doğum tarihi', 'yaş hesaplayıcı', 'kaç yaşındayım', 'doğum günü']
    },

    'gun-sayisi-hesaplama': {
        slug: 'gun-sayisi-hesaplama',
        title: 'İki Tarih Arasındaki Gün Sayısı',
        intro: 'İki tarih arasında kaç gün olduğunu hesaplayın. Proje süreleri, hamilelik takibi, etkinlik planlaması ve iş günü hesaplamalarında kullanışlıdır.',
        howItWorks: 'Başlangıç ve bitiş tarihleri arasındaki fark milisaniye cinsinden hesaplanır ve gün sayısına dönüştürülür. İş günü hesabında cumartesi-pazar hariç tutulur.',
        benefits: [
            'Toplam gün sayısı',
            'İş günü hesaplama',
            'Hafta ve ay dökümü',
            'Bitiş tarihi dahil etme seçeneği'
        ],
        tips: [
            'İş günü hesabında resmi tatiller manuel çıkarılmalıdır',
            'Proje planlamada iş günlerini kullanın',
            'Hamilelik süresi genellikle 280 gün (40 hafta) olarak hesaplanır',
            'Sözleşmelerde gün sayısı açıkça belirtilmelidir'
        ],
        faq: [
            {
                question: '1 yılda kaç gün var?',
                answer: 'Normal yılda 365, artık yılda 366 gün vardır. 4\'e bölünen yıllar genellikle artık yıldır (istisnalar hariç).'
            },
            {
                question: 'İş günü nasıl hesaplanır?',
                answer: 'Toplam günden cumartesi ve pazarları çıkararak iş günü bulunur. Resmi tatiller ayrıca düşülmelidir.'
            }
        ],
        relatedTerms: ['tarih hesaplama', 'gün farkı', 'iş günü', 'süre hesaplama']
    },

    'emeklilik-hesaplama': {
        slug: 'emeklilik-hesaplama',
        title: 'Emeklilik Hesaplama: Ne Zaman Emekli Olursunuz?',
        intro: 'Emeklilik hesaplama aracı, doğum yılınız ve işe başlama tarihinize göre tahmini emeklilik yaşınızı ve yılını hesaplar. SGK (4a, 4b, 4c) güncelemeleri doğrultusunda bilgi verir.',
        howItWorks: 'Emeklilik yaşı doğum yılı, cinsiyet ve sigorta başlangıç tarihine göre belirlenir. 2024 düzenlemelerine göre kademeli yaş artışı uygulanmaktadır.',
        benefits: [
            'Tahmini emeklilik yaşı',
            'Kalan süre hesaplama',
            'Cinsiyet bazlı hesaplama',
            '2024 güncel düzenlemeler'
        ],
        tips: [
            'Kesin hesaplama için SGK e-Devlet sorgulama kullanın',
            'Yurtdışı borçlanma emeklilik süresini azaltabilir',
            'Askerlik borçlanması erkekler için avantaj sağlar',
            'Erken emeklilik için prim gün sayısı kritik önem taşır'
        ],
        faq: [
            {
                question: 'Prim gün sayısı nedir?',
                answer: 'SGK\'ya prim ödenen toplam gün sayısıdır. Emeklilik için genellikle 7200-9000 gün arası prim gün şartı aranır.'
            },
            {
                question: 'Kademeli emeklilik nedir?',
                answer: 'Yaş ve prim şartlarını tamamlayanlar belirli bir yaşa kadar %50 maaşla çalışmaya devam edebilir.'
            },
            {
                question: 'EYT nedir?',
                answer: 'Emeklilikte Yaşa Takılanlar, 1999 öncesi sigortalı olup yaş şartını bekleyenler için çıkarılan düzenlemedir.'
            }
        ],
        relatedTerms: ['SGK emeklilik', 'emeklilik yaşı', 'prim gün sayısı', 'EYT hesaplama']
    },

    'zaman-farki-hesaplama': {
        slug: 'zaman-farki-hesaplama',
        title: 'Zaman Farkı Hesaplama: İki Saat Arası',
        intro: 'İki saat arasındaki süreyi hesaplayın. Çalışma saatleri, mesai takibi, toplantı süreleri ve proje zaman yönetimi için kullanışlı bir araçtır.',
        howItWorks: 'Başlangıç ve bitiş saatleri arasındaki fark dakika cinsinden hesaplanır ve saat/dakika/saniye formatına dönüştürülür. Gece yarısını geçen hesaplamalar da desteklenir.',
        benefits: [
            'Saat ve dakika hesabı',
            'Gece yarısını geçen hesaplama',
            'İş günü hesabı (8 saat)',
            'Tarih dahil etme seçeneği'
        ],
        tips: [
            'Mesai hesabında yasal mola sürelerini düşmeyi unutmayın',
            'Fazla mesai hesabında haftalık 45 saat sınırını göz önünde bulundurun',
            'Uluslararası toplantılarda saat dilimi farkını hesaplayın',
            'Proje yönetiminde gerçekçi süre tahminleri yapın'
        ],
        faq: [
            {
                question: 'Yasal çalışma süresi nedir?',
                answer: 'Türkiye\'de haftalık yasal çalışma süresi 45 saattir. Günlük en fazla 11 saat çalışılabilir.'
            },
            {
                question: 'Mola süreleri çalışma süresine dahil mi?',
                answer: 'Günlük 4 saati aşan çalışmalarda 15 dakika, 7.5 saati aşan çalışmalarda 1 saat mola zorunludur ve genellikle çalışma süresinden sayılmaz.'
            }
        ],
        relatedTerms: ['saat hesaplama', 'mesai hesaplama', 'çalışma süresi', 'zaman yönetimi']
    },

    'yuzde-hesaplama': {
        slug: 'yuzde-hesaplama',
        title: 'Yüzde Hesaplama: Yüzdelik İşlemler',
        intro: 'Yüzde hesaplama aracı ile bir sayının yüzdesini bulabilir, iki sayı arasındaki yüzde oranını hesaplayabilir ve yüzde değişimini (artış/azalış) öğrenebilirsiniz.',
        howItWorks: 'Üç farklı hesaplama modu: 1) Sayının yüzdesi: Değer × Yüzde / 100. 2) Yüzde oranı: (Kısım / Bütün) × 100. 3) Yüzde değişimi: ((Yeni - Eski) / Eski) × 100.',
        benefits: [
            'Üç farklı hesaplama modu',
            'İndirim hesabı',
            'Artış/azalış oranı',
            'Kolay formül gösterimi'
        ],
        tips: [
            '%50 artış sonrası %50 indirim başa dönmez (100 → 150 → 75)',
            'KDV dahil fiyattan KDV\'yi çıkarmak için 1.20\'ye bölün, 0.20 ile çarpmayın',
            'Faiz oranlarını karşılaştırırken yıllık bazda değerlendirin',
            'İndirim oranlarını kıyaslarken baz fiyatı kontrol edin'
        ],
        faq: [
            {
                question: 'Yüzde artış sonrası aynı oranda indirim başa döndürür mü?',
                answer: 'Hayır. %50 artış sonrası %50 indirim başlangıç değerinin %75\'ine düşürür. Örnek: 100 → 150 → 75.'
            },
            {
                question: 'Yüzde değişimi negatif olabilir mi?',
                answer: 'Evet, değer düşüşlerinde yüzde değişimi negatif olur (azalış).'
            }
        ],
        relatedTerms: ['yüzde formülü', 'oran hesaplama', 'indirim hesaplama', 'artış oranı']
    },

    'alan-hesaplama': {
        slug: 'alan-hesaplama',
        title: 'Alan Hesaplama: Geometrik Şekiller',
        intro: 'Kare, dikdörtgen, üçgen, daire, yamuk ve paralelkenar gibi geometrik şekillerin alan hesaplamasını yapın. İnşaat, dekorasyon, bahçe düzenleme ve matematik problemlerinde kullanışlıdır.',
        howItWorks: 'Her şeklin kendine özgü formülü vardır: Kare = a², Dikdörtgen = a×b, Daire = πr², Üçgen = (a×h)/2, Yamuk = ((a+b)×h)/2, Paralelkenar = a×h.',
        benefits: [
            '6 farklı geometrik şekil',
            'Formül gösterimi',
            'Anlık hesaplama',
            'Ek bilgiler (çevre vb.)'
        ],
        tips: [
            'Zemin kaplama yaparken %10 fire payı ekleyin',
            'Boya hesabında duvar yüzeylerini ayrı hesaplayın',
            'Arazi ölçümünde düzensiz şekilleri parçalara bölün',
            'İnşaat hesaplamalarında metrekare birimi kullanın'
        ],
        faq: [
            {
                question: 'Düzensiz şekillerin alanı nasıl hesaplanır?',
                answer: 'Düzensiz şekiller bilinen geometrik şekillere (üçgen, dikdörtgen vb.) bölünür ve toplam alan hesaplanır.'
            },
            {
                question: 'Pi (π) değeri nedir?',
                answer: 'π = 3.14159... (yaklaşık 3.14). Daire ve silindir hesaplamalarında kullanılır.'
            }
        ],
        relatedTerms: ['geometri', 'kare alan', 'daire alan', 'üçgen alan', 'metrekare']
    },

    'yakit-maliyeti-hesaplama': {
        slug: 'yakit-maliyeti-hesaplama',
        title: 'Yakıt Maliyeti Hesaplama: Benzin, Dizel, LPG',
        intro: 'Yakıt maliyeti hesaplama aracı, yolculuğunuzun benzin, dizel veya LPG masrafını hesaplamanızı sağlar. Mesafe, ortalama tüketim ve güncel yakıt fiyatlarına göre toplam maliyetinizi öğrenin.',
        howItWorks: 'Yakıt maliyeti = (Mesafe × Tüketim / 100) × Yakıt Fiyatı. Örneğin 500 km yolculuk, 7 lt/100km tüketim ve 44.50 TL/lt benzin fiyatıyla: (500 × 7 / 100) × 44.50 = 1557.50 TL.',
        benefits: [
            'Benzin, dizel ve LPG desteği',
            'Km başına maliyet hesaplama',
            'Güncel yakıt fiyatları',
            'Özel fiyat girişi seçeneği'
        ],
        tips: [
            'Şehir içi sürüşte tüketim %20-30 daha yüksek olabilir',
            'Klima kullanımı yakıt tüketimini %10-15 artırır',
            'Lastik basıncını kontrol edin - düşük basınç tüketimi artırır',
            'Sabit hızda seyretmek yakıt tasarrufu sağlar'
        ],
        faq: [
            {
                question: 'LPG mi benzin mi daha ekonomik?',
                answer: 'LPG genellikle benzinden %40-50 daha ucuzdur, ancak tüketim %10-15 daha yüksektir. Yine de LPG toplam maliyette avantajlıdır.'
            },
            {
                question: 'Dizel mi benzin mi tercih etmeliyim?',
                answer: 'Yıllık 20.000 km üzeri kullanım için dizel avantajlıdır. Daha düşük kullanımda benzin/LPG tercih edilebilir.'
            },
            {
                question: 'Ortalama tüketimi nasıl öğrenirim?',
                answer: 'Aracınızın kullanım kılavuzuna bakın veya birkaç depo dolumu arasındaki km\'yi takip ederek hesaplayın.'
            }
        ],
        relatedTerms: ['benzin hesaplama', 'yakıt tüketimi', 'dizel maliyet', 'LPG hesaplama', 'yol masrafı']
    },

    'elektrikli-arac-sarj-maliyeti': {
        slug: 'elektrikli-arac-sarj-maliyeti',
        title: 'Elektrikli Araç Şarj Maliyeti Hesaplama',
        intro: 'Elektrikli araç (EV) şarj maliyeti hesaplama aracı, Tesla, Togg ve diğer elektrikli araçların şarj masrafını hesaplamanızı sağlar. Benzinli araçlarla karşılaştırma ve CO₂ tasarrufu bilgisi de sunar.',
        howItWorks: 'Şarj maliyeti = (Mesafe × Tüketim / 100) × Elektrik Fiyatı. Örneğin 300 km, 18 kWh/100km tüketim ve 4.25 TL/kWh ev şarjı fiyatıyla: (300 × 18 / 100) × 4.25 = 229.50 TL.',
        benefits: [
            'Ev, halka açık ve hızlı şarj seçenekleri',
            'Benzinli araçla maliyet karşılaştırması',
            'CO₂ tasarrufu hesaplama',
            'Popüler EV tüketim değerleri'
        ],
        tips: [
            'Gece tarifesinde ev şarjı en ekonomik seçenektir',
            'Bataryayı %20-80 arasında tutmak ömrünü uzatır',
            'Hızlı şarj (DC) acil durumlar için tercih edilmeli',
            'Kış aylarında elektrik tüketimi %20-30 artabilir'
        ],
        faq: [
            {
                question: 'Elektrikli araç benzinliden ne kadar tasarruflu?',
                answer: 'Ev şarjıyla elektrikli araç, benzinli araca göre ortalama %60-70 daha ucuzdur. Halka açık şarjda bu oran %30-40\'a düşer.'
            },
            {
                question: 'Bir şarjda kaç km gidilir?',
                answer: 'Batarya kapasitesine göre değişir. 60 kWh batarya ve 18 kWh/100km tüketimle yaklaşık 330 km menzil elde edilir.'
            },
            {
                question: 'Ev şarjı için ne gerekli?',
                answer: 'Standart prize bağlanabilir (yavaş) veya 7-22 kW wallbox kurulabilir. Wallbox için elektrik tesisat uygunluğu kontrol edilmelidir.'
            }
        ],
        relatedTerms: ['elektrikli araç', 'EV şarj', 'Tesla maliyet', 'Togg şarj', 'elektrik arabası', 'şarj istasyonu']
    }
};

export function getSEOContent(slug: string): SEOContent | undefined {
    return seoContents[slug];
}
