'use client';

import { useState } from 'react';
import { SEOContent } from '@/data/seo-content';
import styles from './SEOContentSection.module.css';

interface SEOContentSectionProps {
  content: SEOContent;
}

export default function SEOContentSection({ content }: SEOContentSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className={styles.seoContent}>
      {/* Ana Başlık ve Giriş */}
      <div className={styles.introCard}>
        <h2 className={styles.mainTitle}>{content.title}</h2>
        <p className={styles.introText}>{content.intro}</p>
      </div>

      {/* Nasıl Çalışır */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>⚙️</span>
          <h3 className={styles.sectionTitle}>Nasıl Çalışır?</h3>
        </div>
        <p className={styles.sectionText}>{content.howItWorks}</p>
      </div>

      {/* İki Kolon: Avantajlar ve İpuçları */}
      <div className={styles.twoColumns}>
        {/* Avantajlar */}
        <div className={styles.column}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>✅</span>
            <h3 className={styles.sectionTitle}>Avantajlar</h3>
          </div>
          <ul className={styles.benefitsList}>
            {content.benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* İpuçları */}
        <div className={styles.column}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>💡</span>
            <h3 className={styles.sectionTitle}>İpuçları</h3>
          </div>
          <ul className={styles.tipsList}>
            {content.tips.map((tip, index) => (
              <li key={index} className={styles.tipItem}>
                <span className={styles.tipNumber}>{index + 1}</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SSS */}
      <div className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>❓</span>
          <h3 className={styles.sectionTitle}>Sıkça Sorulan Sorular</h3>
        </div>
        <div className={styles.faqList}>
          {content.faq.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openFaqIndex === index ? styles.faqItemOpen : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <span className={styles.faqQuestionText}>{item.question}</span>
                <span className={styles.faqArrow}>
                  {openFaqIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {openFaqIndex === index && (
                <div className={styles.faqAnswer}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* İlgili Aramalar */}
      <div className={styles.tagsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>🔍</span>
          <h3 className={styles.sectionTitle}>İlgili Aramalar</h3>
        </div>
        <div className={styles.tagsList}>
          {content.relatedTerms.map((term, index) => (
            <span key={index} className={styles.tag}>{term}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
