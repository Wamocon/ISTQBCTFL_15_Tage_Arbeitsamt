"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Brain, Beaker, MessageCircle, BarChart3, ArrowRight } from "lucide-react";

const features = [
    {
        icon: Beaker,
        title: "Praxis-Labor",
        desc: "45+ reale Testszenarien – von Webshops bis Banking-Apps. Keine Theorie-PDFs.",
        metric: "45+ Übungen",
    },
    {
        icon: Brain,
        title: "Instant Feedback",
        desc: 'Sofortiges KI-Feedback: „Achtung: Grenzwertanalyse nicht beachtet.“ Du lernst aus jedem Fehler.',
        metric: "Instant Feedback",
    },
    {
        icon: BarChart3,
        title: "Der Simulator",
        desc: "300+ Prüfungsfragen im Original-Layout. Exakt wie die echte ISTQB-Prüfung.",
        metric: "300+ Fragen",
    },
    {
        icon: MessageCircle,
        title: "Der Mentor",
        desc: "Praxis-Mentoren aus echten Projekten. Keine Hochschul-Dozenten, sondern erfahrene IT-Profis.",
        metric: "Echte Profis",
    },
];

export default function ToolShowcase() {
    return (
        <section id="tool-showcase" className="section-dark section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                            Unser Geheimwaffe
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                            DiTeLe – Der Praxis-
                            <br />
                            <span className="gradient-text">Simulator.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Vergiss verstaubte Lehrbücher. DiTeLe ist deine persönliche
                            Test-Umgebung – ein echtes Software-Labor, in dem du wie ein Profi
                            testen lernst. <strong className="text-white">Hands-on ab Tag 1.</strong>
                        </p>

                        <div className="space-y-4 mb-10">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ delay: i * 0.12, duration: 0.45, ease: "easeOut" }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-[#fe0404]/20 group"
                                >
                                    <div className="w-10 h-10 shrink-0 bg-[#fe0404]/20 rounded-lg flex items-center justify-center group-hover:bg-[#fe0404]/30 group-hover:scale-110 transition-all duration-300">
                                        <feature.icon className="w-5 h-5 text-[#fe0404]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                                            <span className="text-xs text-[#fe0404] font-semibold bg-[#fe0404]/10 px-2 py-0.5 rounded-full">
                                                {feature.metric}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[#fe0404] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#d00303] transition-all glow-red group"
                        >
                            Alle 45+ Übungen freischalten
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right – Mock Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                                {/* Window bar */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-white/10">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-3 text-xs text-gray-500 font-mono flex items-center gap-1.5">
                                        <Terminal className="w-3 h-3" />
                                        ditele.wamocon.de
                                    </span>
                                </div>

                                {/* Dashboard Content */}
                                <div className="p-5">
                                    {/* Scenario header */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div>
                                            <h4 className="text-white font-bold text-sm">Übung #17: Online-Shop Checkout</h4>
                                            <p className="text-xs text-gray-500">Testfallentwurf · Grenzwertanalyse</p>
                                        </div>
                                        <span className="text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                                            Level 2
                                        </span>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="mb-5">
                                        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                                            <span>Fortschritt</span>
                                            <span className="text-[#fe0404] font-semibold">4 / 6 Schritte</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-[#fe0404] to-red-400 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "67%" }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5, duration: 1.5 }}
                                            />
                                        </div>
                                    </div>

                                    {/* Test case checklist */}
                                    <div className="bg-[#0d0d0d] rounded-lg p-4 text-xs mb-4 border border-white/5 space-y-2.5">
                                        <p className="text-gray-400 font-semibold mb-2 text-[11px] uppercase tracking-wider">Testschritte – Checkout-Formular</p>
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center text-green-400 text-[10px] font-bold shrink-0">✓</span>
                                            <span className="text-gray-300">Artikelmenge &quot;1&quot; eingeben → Preis korrekt</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center text-green-400 text-[10px] font-bold shrink-0">✓</span>
                                            <span className="text-gray-300">Artikelmenge &quot;99&quot; eingeben → Preis korrekt</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-5 h-5 rounded bg-red-500/20 flex items-center justify-center text-red-400 text-[10px] font-bold shrink-0">✗</span>
                                            <span className="text-white">Artikelmenge &quot;0&quot; eingeben → <span className="text-red-400 font-semibold">Fehler: Bestellung möglich!</span></span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center text-green-400 text-[10px] font-bold shrink-0">✓</span>
                                            <span className="text-gray-300">Artikelmenge &quot;-1&quot; eingeben → Fehlermeldung</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 opacity-40">
                                            <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-gray-500 text-[10px] shrink-0">○</span>
                                            <span className="text-gray-500">Leeres Feld absenden → …</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 opacity-40">
                                            <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-gray-500 text-[10px] shrink-0">○</span>
                                            <span className="text-gray-500">Maximalwert &quot;100&quot; überschreiten → …</span>
                                        </div>
                                    </div>

                                    {/* Bug report mini */}
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <p className="text-xs font-bold text-red-400">Bug gefunden – Schweregrad: Hoch</p>
                                        </div>
                                        <p className="text-[11px] text-gray-300 leading-relaxed">
                                            Bestellung mit Menge &quot;0&quot; wird akzeptiert. Erwartetes Ergebnis: Fehlermeldung. Tatsächlich: Bestellung wird abgeschlossen.
                                        </p>
                                    </div>

                                    {/* AI Coaching Feedback */}
                                    <div className="flex items-start gap-3 bg-[#fe0404]/10 border border-[#fe0404]/20 rounded-lg p-3">
                                        <Cpu className="w-4 h-4 text-[#fe0404] shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-xs font-semibold text-[#fe0404] mb-0.5">AI-Coach</p>
                                            <p className="text-xs text-gray-300">
                                                Sehr gut erkannt! Du hast die Grenzwertanalyse richtig angewandt. Tipp: Teste auch den oberen Grenzwert (100 + 1).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                                className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float animate-pulse-glow"
                            >
                                <div className="w-10 h-10 bg-[#fe0404]/10 rounded-full flex items-center justify-center">
                                    <Beaker className="w-5 h-5 text-[#fe0404]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Praxisanteil</p>
                                    <p className="font-bold text-[#101010]">&gt; 60%</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
