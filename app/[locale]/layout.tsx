import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { IBM_Plex_Sans, Tajawal } from "next/font/google"; // استخدام Tajawal بدلاً من Cairo
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// تعريف النوع لضمان الحماية من أخطاء الـ TypeScript (حل مشكلة الـ any)
type Locale = (typeof routing.locales)[number];

// إعداد الخط الإنجليزي (IBM Plex Sans)
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ibm-plex-sans",
});

// إعداد الخط العربي (Tajawal)
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

// إعداد الـ SEO بشكل احترافي
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      template: `%s | ${t('siteName')}`,
      default: t('title'),
    },
    description: t('description'),
    icons: {
      icon: '/photo.jpg', // تأكد من وجود الملف في مجلد [locale] أو public
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // التحقق من صحة اللغة (Type Guard)
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body
        className={`
          ${ibmPlexSans.variable} 
          ${tajawal.variable} 
          antialiased min-h-screen bg-white text-slate-900 flex flex-col
          ${locale === 'ar' ? 'font-arabic' : 'font-sans'}
        `}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="grow pt-20">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}