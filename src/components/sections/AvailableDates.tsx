"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, Users, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";

const upcomingDates = [
    {
        startDate: "10. März 2026",
        endDate: "28. März 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 4,
        totalSpots: 12,
        status: "fast-voll" as const,
    },
    {
        startDate: "07. April 2026",
        endDate: "25. April 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 9,
        totalSpots: 12,
        status: "verfügbar" as const,
    },
    {
        startDate: "05. Mai 2026",
        endDate: "23. Mai 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 12,
        totalSpots: 12,
        status: "verfügbar" as const,
    },
    {
        startDate: "02. Juni 2026",
        endDate: "20. Juni 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 12,
        totalSpots: 12,
        status: "verfügbar" as const,
    },
];

function StatusBadge({ status, spotsLeft }: { status: string; spotsLeft: number }) {
    if (status === "fast-voll") {
        return (
            <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                <AlertCircle className="w-3.5 h-3.5" />
                Nur noch {spotsLeft} Plätze!
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5" />
            Plätze verfügbar
        </span>
    );
}

export default function AvailableDates() {
    return (
        <section id="dates" className="section-accent section-padding">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                        Nächste Starttermine
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-4">
                        Verfügbare Kurstermine
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Die Gruppenstärke ist auf 12 Teilnehmer begrenzt – für maximale Betreuung.
                        Sicher dir frühzeitig deinen Platz.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {upcomingDates.map((date, i) => (
                        <motion.div
                            key={date.startDate}
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
                            className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border card-shine hover:-translate-y-1 ${date.status === "fast-voll" ? "border-orange-200" : "border-gray-100"
                                }`}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                {/* Date info */}
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 shrink-0 bg-[#fe0404]/10 rounded-xl flex flex-col items-center justify-center">
                                        <CalendarDays className="w-6 h-6 text-[#fe0404]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#101010] text-base">
                                            {date.startDate} – {date.endDate}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {date.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <Clock className="w-3.5 h-3.5" />
                                                {date.format}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <Users className="w-3.5 h-3.5" />
                                                Max. {date.totalSpots} Teilnehmer
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Status + CTA */}
                                <div className="flex items-center gap-3 lg:shrink-0">
                                    <StatusBadge status={date.status} spotsLeft={date.spotsLeft} />
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 bg-[#fe0404] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#d00303] transition-all glow-red group whitespace-nowrap"
                                    >
                                        Platz sichern
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Capacity bar */}
                            <div className="mt-4 pt-3 border-t border-gray-50">
                                <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                                    <span>Belegung</span>
                                    <span className="font-semibold text-[#101010]">
                                        {date.totalSpots - date.spotsLeft}/{date.totalSpots} belegt
                                    </span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all ${date.status === "fast-voll"
                                            ? "bg-orange-400"
                                            : "bg-green-400"
                                            }`}
                                        style={{ width: `${((date.totalSpots - date.spotsLeft) / date.totalSpots) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-sm text-gray-500 mb-4">
                        Kein passender Termin dabei? Wir informieren dich über neue Termine.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 border-2 border-[#101010] text-[#101010] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#101010] hover:text-white transition-all"
                    >
                        Unverbindlich vormerken lassen
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
