"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission – replace with Supabase integration
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="section-light section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left – Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                            Kostenlose Beratung
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-6 leading-tight">
                            Starte deine
                            <br />
                            <span className="gradient-text">Erfolgsgeschichte.</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Verlässlichkeit ist unsere Währung. Wir experimentieren nicht mit deiner Zukunft.
                            Lass dich unverbindlich beraten – wir prüfen gemeinsam, ob der
                            Bildungsgutschein für dich infrage kommt.
                        </p>

                        <div className="space-y-5 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#fe0404]/10 rounded-xl flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-[#fe0404]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Telefon</p>
                                    <p className="font-semibold text-[#101010]">+49 (0) 69 123 456 78</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#fe0404]/10 rounded-xl flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#fe0404]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">E-Mail</p>
                                    <p className="font-semibold text-[#101010]">info@wamocon-academy.de</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#fe0404]/10 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#fe0404]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Standort</p>
                                    <p className="font-semibold text-[#101010]">Frankfurt am Main, Deutschland</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                <strong className="text-[#101010]">Datenschutz:</strong> Deine Daten werden
                                ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht an Dritte
                                weitergegeben. Server in Deutschland. DSGVO-konform.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right – Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
                            {!isSubmitted ? (
                                <>
                                    <h3 className="text-xl font-bold text-[#101010] mb-2">
                                        Eignungs-Check anfordern
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-8">
                                        Kostenlos & unverbindlich – wir melden uns innerhalb von 24 Stunden.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                                                    Vorname *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Max"
                                                    className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm focus:border-[#fe0404] focus:ring-2 focus:ring-[#fe0404]/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                                                    Nachname *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Mustermann"
                                                    className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm focus:border-[#fe0404] focus:ring-2 focus:ring-[#fe0404]/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                                                E-Mail Adresse *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="max.mustermann@email.de"
                                                className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm focus:border-[#fe0404] focus:ring-2 focus:ring-[#fe0404]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                                                Telefonnummer
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+49 (0) 123 456 789"
                                                className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm focus:border-[#fe0404] focus:ring-2 focus:ring-[#fe0404]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                                                Deine Situation
                                            </label>
                                            <select
                                                className="w-full h-12 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm focus:border-[#fe0404] focus:ring-2 focus:ring-[#fe0404]/20 outline-none transition-all text-gray-600"
                                            >
                                                <option value="">Bitte wählen...</option>
                                                <option value="arbeitsamt">Bildungsgutschein vorhanden</option>
                                                <option value="interessiert">Bildungsgutschein beantragt</option>
                                                <option value="info">Erst mal informieren</option>
                                                <option value="other">Sonstiges</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">
                                                Deine Nachricht (optional)
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="Ich bin an einer Beratung interessiert..."
                                                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-[#fe0404] focus:ring-2 focus:ring-[#fe0404]/20 outline-none transition-all resize-none"
                                            />
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                required
                                                id="privacy"
                                                className="mt-1 accent-[#fe0404]"
                                            />
                                            <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed">
                                                Ich stimme der Verarbeitung meiner Daten zum Zweck der Kontaktaufnahme zu.
                                                Die <a href="#" className="text-[#fe0404] hover:underline">Datenschutzerklärung</a> habe ich gelesen.*
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center gap-2 bg-[#fe0404] text-white py-4 rounded-xl text-base font-bold hover:bg-[#d00303] transition-all glow-red disabled:opacity-60 disabled:cursor-not-allowed group"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                                    Wird gesendet...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    Beratung anfordern
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#101010] mb-3">
                                        Vielen Dank!
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        Deine Anfrage wurde erfolgreich übermittelt.
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Wir melden uns innerhalb von 24 Stunden bei dir.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
