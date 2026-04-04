"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
import photo from "@/public/photo.jpg";

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale();

  const personalInfo = [
    { label: t("info.fullName"), value: "Ahmed Mohamed" },
    { label: t("info.birthday"), value: "April 4, 2004" },
    { label: t("info.job"), value: "UI/UX Designer" },
    {
      label: t("info.website"),
      value: "ahmed-tawheed.vercel.app/en",
      isLink: true,
    },
    { label: t("info.email"), value: "ahmadtawheed74@gmail.com" },
  ];

  const skills = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "UI Design",
    "UX Strategy",
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Design Systems",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
    "Accessibility",
    "Interaction Design",
    "Visual Design",
    "Information Architecture",
    "User Flows",
    "Usability Testing",
    "web design",
    "git & github",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-black text-slate-900 mb-4 ${locale === "ar" ? "font-arabic" : "font-sans"}`}
          >
            {t("title")}
            <span className="block h-1.5 w-20 bg-emerald-500 mx-auto mt-2 rounded-full"></span>
          </h2>
          <p className="text-emerald-600 font-bold tracking-widest uppercase text-sm">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Profile Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-slate-50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={photo}
                alt="Ahmed Tawheed"
                width={500}
                height={600}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full z-0 blur-2xl opacity-60"></div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h3
                className={`text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-relaxed ${locale === "ar" ? "font-arabic" : "font-sans"}`}
              >
                {t("description")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 py-6 border-y border-slate-100">
                {personalInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-3 items-baseline">
                    <span className="text-emerald-600 font-bold min-w-25 text-xs uppercase tracking-wider">
                      {info.label}:
                    </span>
                    <span
                      className={`text-slate-600 font-medium break-all text-sm ${info.isLink ? "text-emerald-700 hover:underline" : ""}`}
                    >
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-slate-900 font-black text-sm mb-4 uppercase tracking-[0.2em]">
                {t("skillsTitle")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 rounded-lg text-xs font-bold transition-all hover:bg-emerald-500 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* NEW: Action Buttons (Hire Me & Download CV) */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 active:scale-95"
              >
                <FaPaperPlane size={16} />
                {t("hireMe")}
              </Link>

              <a
                href="https://drive.google.com/file/d/1kZXkT8F0gjUW9S8dyHee9K-WVQK87eMS/view?usp=sharing"
                download
                className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold transition-all hover:border-emerald-500 hover:text-emerald-600 active:scale-95 shadow-sm"
              >
                <FaDownload size={16} />
                {t("downloadCV")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
