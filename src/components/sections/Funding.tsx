"use client";

import { motion } from "framer-motion";
import { Shield, Euro, BookOpen, Tablet, Award, ArrowRight, CheckCircle } from "lucide-react";

const inclusions = [
    { icon: BookOpen, text: "Vollständiges Kursprogramm (15 Tage)" },
    { icon: Tablet, text: "Tablet & Lehrmaterial inklusive" },
    { icon: Award, text: "ISTQB® Prüfungsgebühr" },
    { icon: Shield, text: "Zugang zum DiTeLe Praxis-Simulator" },
];

export default function Funding() {
    return (
        <section id="funding" className="section-dark section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                            Die „0€ Garantie"
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                            Der Staat investiert
                            <br />
                            <span className="gradient-text">in deine Zukunft.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Du zahlst <strong className="text-white">0 €</strong>. Nicht für den Kurs.
                            Nicht für das Material. Nicht für die Prüfung. Dank
                            <strong className="text-white"> Bildungsgutschein</strong> übernimmt die
                            Agentur für Arbeit 100% der Kosten. Du investierst nur Zeit und Mut.
                        </p>

                        <div className="space-y-4 mb-10">
                            {inclusions.map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, x: -20, scale: 0.97 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                                    <span className="text-sm text-gray-300">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 mb-8">
                            <Euro className="w-8 h-8 text-green-400 shrink-0" />
                            <div>
                                <p className="text-xs text-gray-400">Möglicher Weiterbildungsbonus</p>
                                <p className="text-white font-bold text-lg">+ 150 € pro Monat</p>
                                <p className="text-xs text-gray-500">zusätzlich zum Arbeitslosengeld*</p>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[#fe0404] text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-[#d00303] transition-all glow-red group"
                        >
                            Förderfähigkeit prüfen lassen
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right – Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-white/10 p-8 sm:p-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Deine Investition</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-black text-white">0 €</span>
                                            <span className="text-gray-500 text-sm line-through">3.490 €</span>
                                        </div>
                                    </div>
                                    <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                                        100% gefördert
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-6 space-y-4">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">
                                        Alles inklusive:
                                    </p>
                                    {[
                                        "15-Tage Intensiv-Programm",
                                        "DiTeLe Praxis-Simulator",
                                        "300+ Prüfungsfragen",
                                        "ISTQB® Prüfungsgebühr",
                                        "Tablet & Lehrmaterial",
                                        "Persönliche Betreuung",
                                        "Karriere-Coaching nach Abschluss",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <CheckCircle className="w-4 h-4 text-[#fe0404] shrink-0" />
                                            <span className="text-sm text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-500">
                                        * Voraussetzung: Bildungsgutschein der Agentur für Arbeit oder des Jobcenters.
                                        Weiterbildungsbonus gemäß § 131a SGB III. Angaben ohne Gewähr.
                                    </p>
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="absolute -z-10 -inset-4 bg-[#fe0404]/10 rounded-3xl blur-xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
