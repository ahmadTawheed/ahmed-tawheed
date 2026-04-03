import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // يطبق الميدل وير على كل المسارات ما عدا ملفات النظام والصور
  matcher: ['/', '/(ar|en)/:path*']
};