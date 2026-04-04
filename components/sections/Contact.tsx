"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/shared/Container";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "201013598053";
    const text =
      `*New Project Inquiry* 🚀%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Project:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4 block">
                {t("subtitle")}
              </span>
              <h2
                className={`text-4xl md:text-5xl font-black text-slate-900 mb-6 ${locale === "ar" ? "font-arabic" : "font-sans"}`}
              >
                {t("title")}
              </h2>
              <p className="text-slate-500 leading-relaxed max-w-md">
                {t("description")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <span className="font-bold text-slate-700">
                  {t("info.location")}
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <FaEnvelope size={20} />
                </div>
                <span className="font-bold text-slate-700">
                  ahmadtawheed74@gmail.com
                </span>
              </div>
            </div>

            <div className="inline-block px-6 py-3 bg-emerald-50 rounded-full border border-emerald-100">
              <span className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                {t("info.available")}
              </span>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:col-span-7 bg-slate-50/50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-2">
                    {t("form.name")}
                  </label>
                  <input
                    required
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white border-2 border-transparent focus:border-emerald-500 rounded-2xl px-6 py-4 outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-2">
                    {t("form.email")}
                  </label>
                  <input
                    required
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white border-2 border-transparent focus:border-emerald-500 rounded-2xl px-6 py-4 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-2">
                  {t("form.subject")}
                </label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-white border-2 border-transparent focus:border-emerald-500 rounded-2xl px-6 py-4 outline-none transition-all shadow-sm appearance-none"
                >
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App Design</option>
                  <option value="Dashboard">Dashboard Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-2">
                  {t("form.message")}
                </label>
                <textarea
                  required
                  rows={4}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white border-2 border-transparent focus:border-emerald-500 rounded-2xl px-6 py-4 outline-none transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-100 transition-all active:scale-[0.98]"
              >
                <FaWhatsapp size={22} />
                {t("form.send")}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
