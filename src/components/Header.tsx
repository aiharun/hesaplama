'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { searchCalculators, Calculator } from '@/data/calculators';
import ContactModal from './ContactModal';

export default function Header() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Calculator[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = useCallback((value: string) => {
        setQuery(value);
        if (value.trim().length >= 2) {
            const searchResults = searchCalculators(value);
            setResults(searchResults.slice(0, 8));
            setIsOpen(true);
            setSelectedIndex(-1);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen || results.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && results[selectedIndex]) {
                    window.location.href = `/${results[selectedIndex].slug}`;
                }
                break;
            case 'Escape':
                setIsOpen(false);
                inputRef.current?.blur();
                break;
        }
    };

    // Keyboard shortcut to focus search (Ctrl+K or /)
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement?.tagName !== 'INPUT')) {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        {/* Logo */}
                        <Link href="/" className="logo">
                            <span className="logo-icon">🧮</span>
                            <span>Hesap Merkezi</span>
                        </Link>

                        {/* Search Box */}
                        <div className="search-box" ref={searchRef}>
                            <input
                                ref={inputRef}
                                type="text"
                                className="search-input"
                                placeholder="Ara..."
                                value={query}
                                onChange={(e) => handleSearch(e.target.value)}
                                onFocus={() => query.length >= 2 && setIsOpen(true)}
                                onKeyDown={handleKeyDown}
                                aria-label="Hesaplama aracı ara"
                                aria-expanded={isOpen}
                                aria-controls="search-results"
                                autoComplete="off"
                            />
                            <svg
                                className="search-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>

                            {/* Search Results Dropdown */}
                            {isOpen && results.length > 0 && (
                                <div
                                    id="search-results"
                                    role="listbox"
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        right: 0,
                                        marginTop: 'var(--space-2)',
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 'var(--radius-lg)',
                                        boxShadow: 'var(--shadow-xl)',
                                        overflow: 'hidden',
                                        zIndex: 200,
                                        maxHeight: '400px',
                                        overflowY: 'auto'
                                    }}
                                >
                                    <div style={{
                                        padding: 'var(--space-2) var(--space-3)',
                                        fontSize: '0.6875rem',
                                        color: 'var(--text-muted)',
                                        borderBottom: '1px solid var(--glass-border)',
                                    }}>
                                        <span>{results.length} sonuç bulundu</span>
                                    </div>
                                    {results.map((calc, index) => (
                                        <Link
                                            key={calc.slug}
                                            href={`/${calc.slug}`}
                                            role="option"
                                            aria-selected={index === selectedIndex}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setQuery('');
                                            }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 'var(--space-2)',
                                                padding: 'var(--space-2) var(--space-3)',
                                                transition: 'all var(--transition-fast)',
                                                background: index === selectedIndex ? 'var(--surface-hover)' : 'transparent',
                                                borderLeft: index === selectedIndex ? '3px solid var(--primary-500)' : '3px solid transparent'
                                            }}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                        >
                                            <span style={{
                                                fontSize: '1rem',
                                                flexShrink: 0,
                                                width: '28px',
                                                height: '28px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: 'var(--surface)',
                                                borderRadius: 'var(--radius-md)'
                                            }}>
                                                {calc.icon}
                                            </span>
                                            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                                                <div style={{
                                                    fontWeight: 500,
                                                    color: 'var(--text-primary)',
                                                    fontSize: '0.8125rem',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>
                                                    {calc.shortTitle}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* No results message */}
                            {isOpen && query.length >= 2 && results.length === 0 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        right: 0,
                                        marginTop: 'var(--space-2)',
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 'var(--radius-lg)',
                                        padding: 'var(--space-4)',
                                        textAlign: 'center',
                                        zIndex: 200
                                    }}
                                >
                                    <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>🔍</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                                        &quot;{query}&quot; için sonuç bulunamadı
                                    </div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: 'var(--space-1)' }}>
                                        Farklı bir terim deneyin
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact Button */}
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="btn"
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-secondary)',
                                padding: 'var(--space-2) var(--space-4)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                                whiteSpace: 'nowrap',
                                transition: 'all var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary-500)';
                                e.currentTarget.style.color = 'var(--primary-400)';
                                e.currentTarget.style.background = 'var(--surface-hover)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.background = 'var(--surface)';
                            }}
                        >
                            <span>📬</span>
                            <span className="contact-text">İletişim</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <style jsx>{`
        @media (max-width: 640px) {
          .contact-text {
            display: none;
          }
        }
      `}</style>
        </>
    );
}
