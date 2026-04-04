"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import { Link } from "@/i18n/routing";
import {
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaFacebookF,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/ahmed-tawheed-165335252/?locale=en_US",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaBehance />,
      href: "https://www.behance.net/ahmadtawheedgd",
      color: "hover:bg-blue-400",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ahmadTawheed",
      color: "hover:bg-slate-800",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/ahmed.tawheed.294446?mibextid=ZbWKwL",
      color: "hover:bg-blue-700",
    },
  ];

  const navLinks = [
    { name: t("links.home"), href: "/" },
    { name: t("links.about"), href: "/#about" },
    { name: t("links.works"), href: "/#works" },
    { name: t("links.contact"), href: "/#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Branding */}
          <div className="lg:col-span-1 space-y-6">
            <Link
              href="/"
              className="text-2xl font-black text-white tracking-tighter"
            >
              AHMED<span className="text-emerald-500">.</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">{t("quickLinks")}</h4>
            <ul className="space-y-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-4"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services / Areas of Expertise */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">{t("services")}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                UI/UX Design & Prototyping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                Web Development (Next.js)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                Dashboard & SaaS Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                Digital Agriculture Solutions
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter or Quote */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800">
              <p className="text-white font-medium italic text-sm">
                &apos;Design is not just what it looks like and feels like.
                Design is how it works.&apos;
              </p>
              <span className="block mt-4 text-xs font-bold text-emerald-500">
                — Steve Jobs
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium tracking-wider uppercase">
          <p>
            © {currentYear} <span className="text-white">Ahmed Tawheed</span>.{" "}
            {t("rights")}
          </p>
          <p className="flex items-center gap-1">
            {t("madeWith")} <FaHeart className="text-red-500 animate-pulse" />{" "}
            Ahmed Tawheed
          </p>
        </div>
      </Container>
    </footer>
  );
}
