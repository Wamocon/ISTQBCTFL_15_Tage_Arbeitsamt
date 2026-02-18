"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Verliere ich mein Arbeitslosengeld während der Weiterbildung?",
        a: "Nein! Während einer geförderten Weiterbildung erhältst du weiterhin dein Arbeitslosengeld. Du kannst sogar einen zusätzlichen Weiterbildungsbonus von bis zu 150 € pro Monat erhalten (§ 131a SGB III)."
    },
    {
        q: "Was ist ein Bildungsgutschein und woher bekomme ich ihn?",
        a: "Ein Bildungsgutschein ist wie ein Scheck vom Staat, der 100% der Kosten übernimmt. Du erhältst ihn bei deiner Agentur für Arbeit oder dem Jobcenter. Wir unterstützen dich gerne bei der Beantragung und Argumentation."
    },
    {
        q: "Muss ich programmieren können?",
        a: "Nein, absolut nicht. Softwaretesten ist ein eigenständiges Handwerk. Du benötigst logisches Denken und Neugier – Programmiercode musst du nicht schreiben können."
    },
    {
        q: "Was ist das ISTQB® Zertifikat und wird es von Arbeitgebern anerkannt?",
        a: "Das ISTQB® Certified Tester Foundation Level ist der weltweit anerkannte Standard im Software Testing. Mit über 1 Million Zertifizierungen weltweit ist es der Goldstandard in der IT-Qualitätssicherung. Arbeitgeber kennen und schätzen dieses Zertifikat."
    },
    {
        q: "Was passiert, wenn ich die Prüfung nicht bestehe?",
        a: "Dank unseres intensiven Vorbereitungsprogramms mit DiTeLe liegt die Erfolgsquote bei 87%. Sollte es wider Erwarten nicht klappen, bieten wir intensive Nachbetreuung und Unterstützung bei der Wiederholungsprüfung."
    },
    {
        q: "Was ist DiTeLe und wie unterscheidet es sich von anderen Lernmethoden?",
        a: "DiTeLe ist unser exklusiver Praxis-Simulator. Im Gegensatz zu PDF-basiertem Lernen testest du hier in echten Software-Szenarien – mit KI-gestütztem Feedback. Der Praxisanteil liegt bei über 60%, während typische Umschulungen oft bei unter 10% bleiben."
    },
    {
        q: "Kann ich den Kurs auch in Teilzeit machen?",
        a: "Der Intensivkurs ist als Vollzeit-Programm über 15 Werktage (3 Wochen) konzipiert. Dies ermöglicht das beste Lernergebnis und die optimale Prüfungsvorbereitung. Bitte sprich uns an, wenn du individuelle Bedürfnisse hast."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section-accent section-padding">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                        Häufige Fragen
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-4">
                        Deine Fragen – Unsere Antworten
                    </h2>
                    <p className="text-gray-600">
                        Alles, was du wissen musst – transparent und ehrlich.
                    </p>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 card-shine"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left group"
                            >
                                <span className="font-semibold text-sm text-[#101010] pr-4 group-hover:text-[#fe0404] transition-colors">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-[#fe0404]" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
