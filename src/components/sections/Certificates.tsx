"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck, FileCheck, Building2, Globe } from "lucide-react";

const certifications = [
    {
        icon: ShieldCheck,
        name: "AZAV Zertifizierung",
        issuer: "Akkreditierungs- und Zulassungsverordnung",
        desc: "Offiziell zugelassener Träger für Maßnahmen der Arbeitsförderung. Voraussetzung für die Förderung durch Bildungsgutschein.",
        badge: "Pflicht für Förderung",
        badgeColor: "bg-green-100 text-green-800",
    },
    {
        icon: Award,
        name: "ISTQB® Akkreditierter Trainings-Anbieter",
        issuer: "International Software Testing Qualifications Board",
        desc: "Offiziell akkreditierter Trainingsanbieter. Wir erfüllen die strengen Qualitätsstandards des ISTQB®.",
        badge: "Offiziell Akkreditiert",
        badgeColor: "bg-blue-100 text-blue-800",
        image: "/WMA_Akkreditierung_ISTQB.png",
    },
    {
        icon: Building2,
        name: "Regierungspräsidium Hessen",
        issuer: "Staatliche Prüfbehörde",
        desc: "Als Kompetenzzentrum für IT-Qualitätssicherung gelistet. Staatlich geprüft und zugelassen.",
        badge: "Staatlich geprüft",
        badgeColor: "bg-purple-100 text-purple-800",
    },
];

export default function Certificates() {
    return (
        <section id="certificates" className="section-dark section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                        Vertrauen durch Beweise
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                        Unsere Zertifizierungen & Akkreditierungen
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Keine leeren Versprechen. Jedes Siegel ist nachprüfbar. Jede Akkreditierung ist offiziell.
                        Das ist dein Sicherheitsnetz.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group card-shine hover:-translate-y-1 h-full flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-[#fe0404]/20 rounded-xl flex items-center justify-center group-hover:bg-[#fe0404]/30 transition-colors shrink-0">
                                    <cert.icon className="w-6 h-6 text-[#fe0404]" />
                                </div>
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${cert.badgeColor}`}>
                                    {cert.badge}
                                </span>
                            </div>
                            <h3 className="text-white font-bold text-base mb-1">{cert.name}</h3>
                            <p className="text-xs text-gray-500 mb-3">{cert.issuer}</p>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">{cert.desc}</p>

                            {/* @ts-ignore - image property is optional */}
                            {cert.image && (
                                <div className="mt-auto pt-4 border-t border-white/10 w-full">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-auto rounded border border-white/10"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Trust summary bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-[#fe0404]/10 to-transparent rounded-xl p-6 border border-[#fe0404]/20 flex flex-col sm:flex-row items-center gap-4"
                >
                    <ShieldCheck className="w-8 h-8 text-[#fe0404] shrink-0" />
                    <p className="text-sm text-gray-300 text-center sm:text-left">
                        <strong className="text-white">Alle Zertifizierungen sind aktuell gültig und öffentlich nachprüfbar.</strong>{" "}
                        Auf Anfrage stellen wir dir gerne die entsprechenden Nachweise und Urkunden zur Verfügung.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
