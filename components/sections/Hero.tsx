"use client";
import React from "react";
import dynamic from 'next/dynamic';
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Container from "@/components/shared/Container";

// استيراد الأيقونات
import { 
  FaGithub, FaLinkedinIn, FaBehance, 
  FaFacebookF, FaWhatsapp, FaYoutube, 
} from "react-icons/fa";
import { SiFigma, SiCanva } from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

// تحميل التايب رايتر ديناميكياً
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ahmadTawheed", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmed-tawheed-165335252/?locale=en_US", label: "LinkedIn" },
    { icon: FaBehance, href: "https://www.behance.net/ahmadtawheedgd", label: "Behance" },
    { icon: FaWhatsapp, href: "https://wa.me/201013598053", label: "WhatsApp" },
    { icon: FaFacebookF, href: "https://www.facebook.com/ahmed.tawheed.294446?mibextid=ZbWKwL", label: "Facebook" },
    { icon: FaYoutube, href: "https://www.youtube.com/@AhmedMohamed_t1", label: "YouTube" },
  ];

  const tools = [
    { icon: SiFigma, name: "Figma", color: "text-[#F24E1E]" },
    { icon: DiIllustrator, name: "Illustrator", color: "text-[#FF9A00]" },
    { icon: DiPhotoshop, name: "Photoshop", color: "text-[#31A8FF]" },
    { icon: SiCanva, name: "Canva", color: "text-[#00C4CC]" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50/50 pt-20 pb-24 md:pb-32">
      
      {/* تأثير الخلفية */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-emerald-100/30 blur-[80px] rounded-full"></div>
      </div>

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-4 md:mb-8 transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-emerald-500"></span>
            </span>
            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-800 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t("availableForWork")}
            </span>
          </div>

          {/* Main Title */}
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] mb-1 md:mb-6 min-h-25 md:min-h-auto ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            <Typewriter
              options={{
                strings: [
                  t("greeting"),
                  t("welcomeMessage"),
                  t("introduceMe"),
                  t("mySpecialty"),
                  t("creativeDesigns")
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </h1>

          {/* Tools Grid */}
          <div className="mt-2 md:mt-8 mb-8 md:mb-14 w-full">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4 md:mb-8 italic">
              {t("toolsImaster")}
            </p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-12">
              {tools.map((tool, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-2 transition-all duration-300">
                  <tool.icon className={`text-3xl md:text-5xl ${tool.color} filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110`} />
                  <span className="text-[8px] md:text-[10px] font-bold text-slate-400 group-hover:text-emerald-600 uppercase tracking-widest">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col items-center mb-10 md:mb-14">
            <Link
              href="/contact"
              className="group relative px-10 py-4 md:px-12 md:py-5 bg-emerald-600 text-white rounded-2xl text-base md:text-lg font-bold overflow-hidden transition-all duration-300 hover:bg-emerald-700 shadow-xl hover:-translate-y-1"
            >
              <span className="relative z-10">{t("letTalk")}</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Social Icons - تأكدنا هنا من وجود مسافة كافية */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 shadow-sm transition-all duration-300"
              >
                <social.icon size={18} className="md:text-[22px]" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Creative Scroll Indicator - تم ضبط الموقع بدقة لعدم التداخل */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 transition-opacity duration-500 opacity-50 hover:opacity-100">
        <div className="w-5 h-8.5 md:w-6.5 md:h-10.5 rounded-full border-2 border-emerald-200 flex justify-center p-1 shadow-sm">
          <div className="w-0.5 md:w-1 h-1.5 md:h-2 bg-emerald-500 rounded-full animate-bounce"></div>
        </div>
        <span className="text-[8px] md:text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">Scroll</span>
      </div>

    </section>
  );
}