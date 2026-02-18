"use client";

import { motion } from "framer-motion";
import { X, Check, ShieldAlert, Lightbulb, Target } from "lucide-react";

const fears = [
    {
        icon: ShieldAlert,
        question: "Kostet das was?",
        answer: "0 € Eigenanteil. Dank Bildungsgutschein übernimmt der Staat 100% der Kosten. Inklusive Tablet und Lehrmaterial.",
    },
    {
        icon: Target,
        question: "Schaffe ich das?",
        answer: "Erfolgsquote 87%. Unser System ist auf Quereinsteiger spezialisiert. Wir lassen niemanden zurück.",
    },
    {
        icon: Lightbulb,
        question: "Bringt das was?",
        answer: "Weltweit anerkannt. Ihr ISTQB-Zertifikat ist der globale Goldstandard – kein 'Teilnahme-Zettel', sondern ein echter Karriere-Beleg.",
    },
];

const comparisonRows = [
    { feature: "Lernmethode", other: "PDF lesen & Folien gucken", wamocon: "Live-Testen in Software" },
    { feature: "Praxisanteil", other: "< 10%", wamocon: "> 60%" },
    { feature: "Fehlerkultur", other: "Rotstift am Ende", wamocon: "Sofortiges AI-Feedback" },
    { feature: "Prüfungsvorbereitung", other: "Alte Papierbögen", wamocon: "Digitaler Simulator (1:1)" },
    { feature: "Job-Faktor", other: "\"Hat teilgenommen\"", wamocon: "\"Kann Systeme bedienen\"" },
];

export default function ProblemSolution() {
    return (
        <section id="problem-solution" className="section-accent section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Fears Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                        Deine Bedenken – Unsere Antworten
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-4">
                        Herausforderung: Quereinstieg
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Viele Kandidaten scheitern an der reinen Theorie. Wir schließen die Lücke zwischen Wissen und Können.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {fears.map((fear, i) => (
                        <motion.div
                            key={fear.question}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: i * 0.18, duration: 0.5, ease: "easeOut" }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 card-shine"
                        >
                            <div className="w-12 h-12 bg-[#fe0404]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#fe0404]/20 group-hover:scale-110 transition-all duration-300">
                                <fear.icon className="w-6 h-6 text-[#fe0404]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#101010] mb-3">
                                „{fear.question}"
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{fear.answer}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-4">
                        Reine Theorie vs. Gelebte Praxis
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Arbeitgeber suchen keine "Zertifikats-Sammler". Sie suchen Macher, die sofort produktiv sind.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left p-5 text-sm font-semibold text-gray-500 w-1/3">Feature</th>
                                    <th className="text-left p-5 text-sm font-semibold text-gray-400 w-1/3">Typische Umschulung</th>
                                    <th className="text-left p-5 text-sm font-semibold text-[#fe0404] w-1/3 bg-[#fe0404]/5">
                                        WAMOCON (DiTeLe) ✨
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, i) => (
                                    <tr
                                        key={row.feature}
                                        className={`border-b border-gray-50 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}
                                    >
                                        <td className="p-5 text-sm font-semibold text-[#101010]">{row.feature}</td>
                                        <td className="p-5 text-sm text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <X className="w-4 h-4 text-red-400 shrink-0" />
                                                {row.other}
                                            </span>
                                        </td>
                                        <td className="p-5 text-sm text-[#101010] font-medium bg-[#fe0404]/5">
                                            <span className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-green-500 shrink-0" />
                                                {row.wamocon}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
