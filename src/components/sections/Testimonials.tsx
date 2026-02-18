"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, ArrowRight, Briefcase } from "lucide-react";

const testimonials = [
    {
        name: "Markus W.",
        previous: "Lagerist",
        now: "Junior QA-Engineer",
        company: "IT-Dienstleister, Frankfurt",
        stars: 5,
        text: "Ich hätte nie gedacht, dass ich mit 38 noch in die IT einsteigen kann. WAMOCON hat mir gezeigt, dass es möglich ist. Die Praxis mit DiTeLe war der Schlüssel – nach dem Kurs konnte ich sofort im Vorstellungsgespräch zeigen, was ich kann.",
        highlight: "Heute verdiene ich 40% mehr als vorher.",
    },
    {
        name: "Sabine K.",
        previous: "Bürokauffrau",
        now: "Software-Testerin",
        company: "Versicherungsbranche, München",
        stars: 5,
        text: "Die 15 Tage waren intensiv, aber jeder Tag hat sich gelohnt. Was mich am meisten beeindruckt hat: Ich war nicht allein. Die Trainer haben sich wirklich Zeit genommen, bis ich alles verstanden habe.",
        highlight: "ISTQB-Prüfung beim ersten Versuch bestanden.",
    },
    {
        name: "Ahmed R.",
        previous: "Taxifahrer",
        now: "Test-Analyst",
        company: "Software-Startup, Berlin",
        stars: 5,
        text: "Mein Berater beim Arbeitsamt war skeptisch. Nach der Zertifizierung hat er mich angerufen und gratuliert. Der Bildungsgutschein hat die Kosten komplett übernommen. Für mich war es die beste Entscheidung meines Lebens.",
        highlight: "Vom Arbeitsamt direkt ins IT-Projekt.",
    },
    {
        name: "Elena M.",
        previous: "Einzelhandel",
        now: "QA-Spezialistin",
        company: "E-Commerce, Hamburg",
        stars: 5,
        text: "Ich hatte Angst, dass IT nur etwas für Informatiker ist. Aber das WAMOCON-System ist wirklich für Quereinsteiger gemacht. DiTeLe hat mir das Testen beigebracht, nicht das Programmieren.",
        highlight: "Unbefristeter Vertrag nach nur 3 Monaten Bewerbungsphase.",
    },
    {
        name: "Thomas L.",
        previous: "Koch",
        now: "Junior Tester",
        company: "Automotive, Stuttgart",
        stars: 5,
        text: "Nach 15 Jahren in der Gastronomie wollte ich raus. Der strukturierte 15-Tage-Plan hat mir die Sicherheit gegeben, dass ich das schaffe. Die Trainer sind echte Praktiker – kein Uni-Gelaber.",
        highlight: "Erster IT-Job innerhalb von 6 Wochen nach der Prüfung.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    };
    const next = () => {
        setDirection(1);
        setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    };

    const t = testimonials[current];

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    };

    return (
        <section id="testimonials" className="section-light section-padding">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                        Echte Menschen. Echte Ergebnisse.
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-4">
                        Was unsere Absolventen sagen
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hunderte haben bereits den Schritt gewagt. Hier sind ihre Geschichten.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 min-h-[320px] sm:min-h-[380px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="p-8 sm:p-10"
                            >
                                {/* Quote icon */}
                                <Quote className="w-10 h-10 text-[#fe0404]/20 mb-6" />

                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: t.stars }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <blockquote className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                                    &ldquo;{t.text}&rdquo;
                                </blockquote>

                                {/* Highlight */}
                                <p className="text-sm font-bold text-[#fe0404] mb-6 flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4" />
                                    {t.highlight}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#101010] to-[#303030] flex items-center justify-center text-white text-sm font-bold">
                                        {t.name.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#101010] text-sm">{t.name}</p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                            <Briefcase className="w-3 h-3" />
                                            <span className="line-through text-gray-400">{t.previous}</span>
                                            <span className="text-[#fe0404]">→</span>
                                            <span className="font-semibold text-[#101010]">{t.now}</span>
                                        </p>
                                        <p className="text-[10px] text-gray-400">{t.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#fe0404]/10 flex items-center justify-center transition-colors group"
                            aria-label="Vorheriges Testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-[#fe0404]" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-[#fe0404] w-6" : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#fe0404]/10 flex items-center justify-center transition-colors group"
                            aria-label="Nächstes Testimonial"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#fe0404]" />
                        </button>
                    </div>
                </div>

                {/* Success metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 mt-12"
                >
                    {[
                        { value: "87%", label: "Erfolgsquote" },
                        { value: "92%", label: "Empfehlungsrate" },
                        { value: "< 3 Mon.", label: "Ø Zeit bis zum Job" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.45, ease: "easeOut" }}
                            className="text-center bg-gray-50 rounded-xl py-5 px-3 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <p className="text-2xl sm:text-3xl font-black text-[#101010]">{stat.value}</p>
                            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
