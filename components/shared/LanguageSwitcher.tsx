"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      locale={locale === "ar" ? "en" : "ar"}
      className="text-sm font-medium px-3 py-1.5 rounded-full border border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 flex items-center gap-2"
    >
      <span className="uppercase">{locale === "ar" ? "English" : "العربية"}</span>
    </Link>
  );
}