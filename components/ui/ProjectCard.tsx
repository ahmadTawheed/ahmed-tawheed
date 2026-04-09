"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiPlayCircle, FiInfo } from "react-icons/fi";
import { Project } from "@/types/works";

interface ProjectCardProps {
  project: Project;
  t: (key: string) => string;
  locale: string;
}

export const ProjectCard = React.memo(
  ({ project, t, locale }: ProjectCardProps) => {
    const { image, tools, link, videoLink } = project;

    const title = t(project.titleKey);
    const desc = t(project.descKey);

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -8 }} // رفع خفيف عند الهوفر
        className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-colors duration-500"
      >
        {/* Image Section */}
        <div className="relative aspect-4/3 m-3 overflow-hidden rounded-3xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-6 pt-2 flex flex-col flex-1">
          {/* 3. إظهار كل المهارات (Tags) */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="text-[10px] font-bold tracking-wider px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>

          <h3
            className={`text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300 ${locale === "ar" ? "font-arabic" : ""}`}
          >
            {title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 grow">
            {desc}
          </p>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
            {/* Project Link */}
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-slate-900 text-white rounded-2xl hover:bg-emerald-600 active:scale-[0.98] transition-all duration-300 group/btn"
              >
                <span className="text-sm font-bold">{t("viewProject")}</span>
                <FiExternalLink className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              <div className="flex items-center justify-center gap-2 p-3 bg-slate-50 text-slate-400 rounded-2xl border border-dashed border-slate-200">
                <FiInfo size={14} />
                <span className="text-xs font-semibold">{t("comingSoon")}</span>
              </div>
            )}

            {/* Video Link */}
            {videoLink && (
              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 border-2 border-slate-100 text-slate-600 rounded-2xl hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/50 transition-all duration-300"
              >
                <FiPlayCircle size={18} />
                <span className="text-sm font-bold">{t("viewVideo")}</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
