"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { images } from "@/public/assets/images";

export default function Works() {
  const t = useTranslations("Works");
  const locale = useLocale();

  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: t("filters.all") },
    { id: "dashboard", label: t("filters.dashboard") },
    { id: "mobile", label: t("filters.mobile") },
    { id: "web", label: t("filters.web") },
    { id: "frontend", label: t("filters.frontend") },
  ];

  const projects = [
    {
      id: 1,
      category: "web",
      title: t("projects.p1.title"),
      desc: t("projects.p1.desc"),
      image: images.web_1,
      tools: ["Figma", "UI Design", "Prototyping", "E-commerce"],
      link: "https://www.behance.net/gallery/246922021/The-Curated-Frame-Product-Card-UI-Component-Design",
    },
    {
      id: 2,
      category: "mobile",
      title: t("projects.p2.title"),
      desc: t("projects.p2.desc"),
      image: images.app_1,
      tools: ["Figma", "Fintech", "Mobile UI", "User Flow"],
      link: "https://www.behance.net/gallery/234049197/payment-app?tracking_source=project_owner_other_projects",
    },
    {
      id: 3,
      category: "web",
      title: t("projects.p3.title"),
      desc: t("projects.p3.desc"),
      image: images.web_2,
      tools: ["Figma", "Photoshop", "Branding", "Agriculture"],
      link: "https://www.behance.net/gallery/230431497/Website-design-in-the-field-of-agriculture?tracking_source=project_owner_other_projects",
    },
    {
      id: 4,
      category: "web",
      title: t("projects.p4.title"),
      desc: t("projects.p4.desc"),
      image: images.web_3,
      tools: ["Figma", "Next.js", "AI Integration", "IoT UI"],
      link: "https://www.behance.net/gallery/233614409/AgriCode?tracking_source=project_owner_other_projects",
    },
    {
      id: 5,
      category: "mobile",
      title: t("projects.p5.title"),
      desc: t("projects.p5.desc"),
      image: images.app_2,
      tools: ["Figma", "Mobile App", "UX Research", "Bookstore"],
      link: "https://www.behance.net/gallery/230192223/KITAPY-APP?tracking_source=project_owner_other_projects",
    },
    {
      id: 6,
      category: "dashboard",
      title: t("projects.p6.title"),
      desc: t("projects.p6.desc"),
      image: images.dash_1,
      tools: ["Figma", "SAAS", "Dashboard UI", "Data Visualization"],
      link: "https://www.behance.net/gallery/235981417/Doctors-control-panel?tracking_source=project_owner_other_projects",
    },
    {
      id: 7,
      category: "mobile",
      title: t("projects.p7.title"),
      desc: t("projects.p7.desc"),
      image: images.app_3,
      tools: ["Figma", "Mobile App", "Service Booking", "Cleaning Industry"],
      link: "https://www.behance.net/gallery/237279709/cleaner-App",
    },
    {
      id: 8,
      category: "frontend",
      title: t("projects.p8.title"),
      desc: t("projects.p8.desc"),
      image: images.web_4,
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "UI/UX Education",
        "Responsive Design",
      ],
      link: "https://ahmadtawheed.github.io/ui-ux-home/",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="py-24 bg-slate-50/30">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-emerald-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">
            {t("subtitle")}
          </span>
          <h2
            className={`text-4xl md:text-6xl font-black text-slate-900 mb-6 ${locale === "ar" ? "font-arabic" : "font-sans"}`}
          >
            {t("title")}
          </h2>
          <div className="h-1.5 w-12 bg-emerald-500 rounded-full mb-8"></div>
          <p className="max-w-2xl text-slate-500 font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Modern Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-500 border-2 
                ${
                  activeFilter === option.id
                    ? "bg-slate-900 border-slate-900 text-white shadow-xl -translate-y-0.5"
                    : "bg-white border-transparent text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.15)] transition-all duration-700"
            >
              {/* Image Section with Creative Reveal */}
              <div className="relative aspect-4/3 m-3 overflow-hidden rounded-4xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Section */}
              <div className="p-8 pt-4 flex flex-col flex-1">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <h3
                  className={`text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 ${locale === "ar" ? "font-arabic" : "font-sans"}`}
                >
                  {project.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.desc}
                </p>

                {/* Visit Button - Updated with Icon and No Line */}
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-black text-slate-900 group/btn transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full group-hover/btn:opacity-0">
                        {t("viewProject")}
                      </span>
                      <span className="absolute top-0 left-0 inline-block transition-all duration-300 translate-y-full opacity-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100 text-emerald-600 underline decoration-2 underline-offset-4">
                        {t("viewProject")}
                      </span>
                    </span>
                    <div className="p-2 rounded-full bg-slate-100 text-slate-900 group-hover/btn:bg-emerald-600 group-hover/btn:text-white transition-all duration-300 transform group-hover/btn:rotate-45">
                      <FiExternalLink size={14} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
