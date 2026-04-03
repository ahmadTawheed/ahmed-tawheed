"use client";
import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../shared/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // تأثير عند التمرير (Scroll Effect) لزيادة الاحترافية
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("projects"), href: "/projects" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled 
            ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" 
            : "bg-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="group flex items-center no-underline">
            <span className="text-2xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-105">
              <span className="text-emerald-600">A.</span>
              <span className="text-black font-medium">Tawheed</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive ? "text-emerald-700" : "text-slate-600 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                  {/* Indicator for Active Link */}
                 
                  {/* Hover Background */}
                  <span className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 rounded-lg -z-10 transition-opacity" />
                </Link>
              );
            })}
            
            <div className="w-px h-5 bg-slate-200 mx-4" />
            <LanguageSwitcher />
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5 items-center">
                <span className={`w-5 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-5 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (Overlay Style) */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ zIndex: -1 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-semibold text-slate-800 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}