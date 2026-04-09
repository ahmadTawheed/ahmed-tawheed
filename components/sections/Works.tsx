// components/works/Works.tsx
"use client";
import React, { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/shared/Container";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Works() {
  const t = useTranslations("Works");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = useMemo(() => {
    const categories = new Set(projectsData.map((p) => p.category));
    const options = [
      { id: "all", label: t("filters.all") },
      ...Array.from(categories).map((cat) => ({
        id: cat,
        label: t(`filters.${cat}`),
      })),
    ];
    return options;
  }, [t]);

  // 2. Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="works" className="py-20 md:py-32 bg-slate-50/50">
      <Container>
        {/* Header */}
        <header className="flex flex-col items-center text-center mb-16">
          <span className="inline-block text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 bg-emerald-100 px-4 py-2 rounded-full">
            {t("subtitle")}
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${locale === "ar" ? "font-arabic" : ""}`}
          >
            {t("title")}
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6" />
          <p className="max-w-2xl text-slate-500 font-medium leading-relaxed text-lg">
            {t("description")}
          </p>
        </header>

        {/* Filters */}
        <nav
          className="flex flex-wrap justify-center gap-3 mb-12"
          aria-label="Project Filters"
        >
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 
                ${
                  activeFilter === option.id
                    ? "bg-slate-900 border-slate-900 text-white shadow-lg scale-105"
                    : "bg-white border-transparent text-slate-500 hover:border-slate-200 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              {option.label}
            </button>
          ))}
        </nav>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              t={t}
              locale={locale}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
