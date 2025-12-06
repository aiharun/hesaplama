import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// SendGrid API Key'i ayarla
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();
        const { name, email, subject, message } = body;

        // Validasyon
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tüm alanlar zorunludur' },
                { status: 400 }
            );
        }

        // E-posta formatı kontrolü
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Geçerli bir e-posta adresi girin' },
                { status: 400 }
            );
        }

        const contactEmail = process.env.CONTACT_EMAIL || 'widrivite@gmail.com';

        // E-posta içeriği
        const msg = {
            to: contactEmail,
            from: contactEmail, // SendGrid'de doğrulanmış e-posta
            replyTo: email,
            subject: `[Hesap Merkezi] ${subject}`,
            text: `
İletişim Formu Mesajı

Gönderen: ${name}
E-posta: ${email}
Konu: ${subject}

Mesaj:
${message}

---
Bu mesaj Hesap Merkezi web sitesindeki iletişim formu üzerinden gönderilmiştir.
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">📧 Yeni İletişim Mesajı</h2>
          </div>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Gönderen:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">E-posta:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Konu:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #8b5cf6;">
              <strong>Mesaj:</strong>
              <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #666;">
              Bu mesaj Hesap Merkezi web sitesindeki iletişim formu üzerinden gönderilmiştir.
            </p>
          </div>
        </div>
      `,
        };

        // E-postayı gönder
        await sgMail.send(msg);

        return NextResponse.json(
            { success: true, message: 'Mesajınız başarıyla gönderildi!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('SendGrid Error:', error);
        return NextResponse.json(
            { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' },
            { status: 500 }
        );
    }
}
