"use client";

import { motion } from "framer-motion";
import { BookOpen, Bug, PenTool, Trophy, Rocket, Swords } from "lucide-react";

const levels = [
    {
        icon: BookOpen,
        day: "Tag 1–3",
        level: "Level 1",
        title: "Das Fundament",
        subtitle: "\"The Cadet\"",
        desc: "Grundlagen des Software-Testings, ISTQB-Terminologie und Testprinzipien. Du verstehst, warum Qualitätssicherung in jedem IT-Projekt existenziell ist.",
        color: "from-gray-400 to-gray-500",
        dotColor: "bg-gray-400",
    },
    {
        icon: Bug,
        day: "Tag 4–6",
        level: "Level 2",
        title: "Die Jagd",
        subtitle: "\"The Hunter\"",
        desc: "Statische und dynamische Testverfahren. Du lernst Äquivalenzklassen, Grenzwertanalyse und Entscheidungstabellen – mit DiTeLe in echten Szenarien.",
        color: "from-yellow-400 to-orange-500",
        dotColor: "bg-yellow-400",
    },
    {
        icon: PenTool,
        day: "Tag 7–9",
        level: "Level 3",
        title: "Der Architekt",
        subtitle: "\"The Architect\"",
        desc: "Testfalldesign in professionellen Tools. Du erstellst Testpläne, Testsuiten und dokumentierst gefundene Defekte wie in großen Projekten.",
        color: "from-blue-400 to-blue-600",
        dotColor: "bg-blue-400",
    },
    {
        icon: Swords,
        day: "Tag 10–12",
        level: "Level 4",
        title: "Der Stratege",
        subtitle: "\"The Strategist\"",
        desc: "Testmanagement, Risikobewertung und Agile Testing. Intensiv-Training mit dem DiTeLe-Simulator und 300+ Prüfungsfragen im Original-Layout.",
        color: "from-purple-400 to-purple-600",
        dotColor: "bg-purple-400",
    },
    {
        icon: Rocket,
        day: "Tag 13–14",
        level: "Level 5",
        title: "Die Generalprobe",
        subtitle: "\"The Pro\"",
        desc: "Probe-Prüfungen unter Echtbedingungen. Persönliches Coaching für deine Schwachstellen. Die letzten Feinschliffe vor dem großen Tag.",
        color: "from-[#fe0404] to-red-600",
        dotColor: "bg-[#fe0404]",
    },
    {
        icon: Trophy,
        day: "Tag 15",
        level: "Boss Fight",
        title: "Die Zertifizierung",
        subtitle: "\"The Certified Pro\"",
        desc: "Offizielle ISTQB® Foundation Level Prüfung. Du bist vorbereitet. Du schaffst das.",
        color: "from-green-400 to-emerald-500",
        dotColor: "bg-green-500",
    },
];

export default function Roadmap() {
    return (
        <section id="roadmap" className="section-light section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                        Strukturiert. Intensiv. Zielgerichtet.
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-4">
                        Dein 15-Tage Karriere-Fahrplan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kein „kreatives Chaos". Ein fester, verlässlicher Fahrplan – vom ersten Tag bis zur Zertifizierung.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-[#fe0404]/30 to-green-400/50 md:-translate-x-0.5" />

                    {levels.map((level, i) => (
                        <motion.div
                            key={level.day}
                            initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 120 }}
                            className={`relative flex items-start gap-6 md:gap-12 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-10" >
                                <div className={`w-full h-full rounded-full ${level.dotColor}`} />
                            </div>

                            {/* Card */}
                            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 card-shine">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center`}>
                                            <level.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-[#fe0404]">{level.level}</span>
                                            <p className="text-xs text-gray-400">{level.day}</p>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-[#101010] mb-1">{level.title}</h3>
                                    <p className="text-xs text-gray-400 italic mb-2">{level.subtitle}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{level.desc}</p>
                                </div>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
