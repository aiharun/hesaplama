'use client';

import { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // 3 saniye sonra modal'ı kapat
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 3000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Bir hata oluştu');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Bağlantı hatası. Lütfen tekrar deneyin.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 1000,
                    animation: 'fadeIn 0.2s ease'
                }}
            />

            {/* Modal */}
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '500px',
                    maxHeight: '90vh',
                    overflow: 'auto',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-2xl)',
                    padding: 'var(--space-6)',
                    zIndex: 1001,
                    animation: 'resultPop 0.3s ease'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 'var(--space-4)',
                        right: 'var(--space-4)',
                        background: 'var(--surface)',
                        border: 'none',
                        borderRadius: 'var(--radius-full)',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--text-secondary)',
                        transition: 'all var(--transition-fast)'
                    }}
                    aria-label="Kapat"
                >
                    ✕
                </button>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>📬</div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>İletişime Geçin</h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                        Soru, öneri veya geri bildirimlerinizi bekliyoruz
                    </p>
                </div>

                {/* Success State */}
                {status === 'success' && (
                    <div style={{
                        textAlign: 'center',
                        padding: 'var(--space-8)',
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>✅</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>
                            Mesajınız Gönderildi!
                        </h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            En kısa sürede size dönüş yapacağız.
                        </p>
                    </div>
                )}

                {/* Form */}
                {status !== 'success' && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Adınız *</label>
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Adınızı girin"
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">E-posta Adresiniz *</label>
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ornek@email.com"
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Konu *</label>
                            <select
                                name="subject"
                                className="form-select"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            >
                                <option value="">Konu seçin...</option>
                                <option value="Genel Soru">Genel Soru</option>
                                <option value="Yeni Araç Önerisi">Yeni Araç Önerisi</option>
                                <option value="Hata Bildirimi">Hata Bildirimi</option>
                                <option value="İş Birliği">İş Birliği</option>
                                <option value="Diğer">Diğer</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Mesajınız *</label>
                            <textarea
                                name="message"
                                className="form-input"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Mesajınızı yazın..."
                                rows={4}
                                required
                                disabled={status === 'loading'}
                                style={{ resize: 'vertical', minHeight: '100px' }}
                            />
                        </div>

                        {/* Error Message */}
                        {status === 'error' && (
                            <div style={{
                                padding: 'var(--space-3)',
                                marginBottom: 'var(--space-4)',
                                background: 'var(--error-light)',
                                border: '1px solid var(--error)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--error)',
                                fontSize: '0.875rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)'
                            }}>
                                ⚠️ {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary btn-full btn-lg"
                            disabled={status === 'loading'}
                            style={{ marginTop: 'var(--space-2)' }}
                        >
                            {status === 'loading' ? (
                                <>
                                    <span className="animate-pulse">⏳</span>
                                    Gönderiliyor...
                                </>
                            ) : (
                                <>
                                    📤 Gönder
                                </>
                            )}
                        </button>

                        <p style={{
                            textAlign: 'center',
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)',
                            marginTop: 'var(--space-4)'
                        }}>
                            🔒 Bilgileriniz güvende. Üçüncü şahıslarla paylaşılmaz.
                        </p>
                    </form>
                )}
            </div>
        </>
    );
}
