"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    CheckCircle,
    ArrowRight,
    Play,
    Shield,
    Clock,
    Users,
    ShoppingCart,
    Star,
    AlertTriangle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Bug definitions - 3 UI issues a tester would catch                */
/* ------------------------------------------------------------------ */
interface BugDef {
    id: string;
    label: string;
    explanation: string;
}

const BUGS: BugDef[] = [
    {
        id: "button-color",
        label: "Button-Farbe",
        explanation:
            "Der Kaufen-Button ist ausgegraut und wirkt deaktiviert, obwohl er funktional sein soll. Der Nutzer wird nicht zum Kauf eingeladen.",
    },
    {
        id: "price-mismatch",
        label: "Preisabweichung",
        explanation:
            "Auf der Produktseite steht 29,99 Euro, aber im Warenkorb-Badge steht 39,99 Euro. Eine Dateninkonsistenz, die zu Vertrauensverlust fuehrt.",
    },
    {
        id: "missing-asterisk",
        label: "Pflichtfeld fehlt",
        explanation:
            "Das E-Mail-Feld ist ein Pflichtfeld, aber es fehlt die Kennzeichnung mit einem Stern (*). Der Nutzer weiss nicht, dass die Angabe erforderlich ist.",
    },
];

export default function Hero() {
    const [foundBugs, setFoundBugs] = useState<Set<string>>(new Set());
    const [lastFound, setLastFound] = useState<BugDef | null>(null);
    const allFound = foundBugs.size === BUGS.length;

    const markBug = useCallback(
        (bug: BugDef) => {
            if (foundBugs.has(bug.id)) return;
            setFoundBugs((prev) => {
                const next = new Set(prev);
                next.add(bug.id);
                return next;
            });
            setLastFound(bug);
        },
        [foundBugs]
    );

    return (
        <section id="hero" className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-red-50/30" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#fe0404]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#101010]/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* ───────── Left - Copy ───────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="inline-flex items-center gap-1.5 bg-[#101010] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                <Shield className="w-3.5 h-3.5 text-[#fe0404]" />
                                100% Staatlich Gefördert
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                                <CheckCircle className="w-3.5 h-3.5" />
                                AZAV Zertifiziert
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#101010] leading-[1.1] tracking-tight mb-6">
                            Der sicherste Weg
                            <br />
                            <span className="gradient-text">in die IT.</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl font-bold text-[#101010] mb-6">
                            Lerne Softwaretesten. Nicht nur Folien.
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                            Keine Experimente. Setze auf das vom Regierungspräsidium
                            geprüfte Kompetenzzentrum. In{" "}
                            <strong>15 Tagen</strong> zum ISTQB® zertifizierten
                            Softwaretester – mit unserem exklusiven{" "}
                            <strong>DiTeLe</strong> Praxis-Simulator.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#fe0404] text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-[#d00303] transition-all glow-red group"
                            >
                                Förderfähigkeit prüfen
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#tool-showcase"
                                className="inline-flex items-center justify-center gap-2 border-2 border-[#101010] text-[#101010] px-8 py-4 rounded-xl text-base font-bold hover:bg-[#101010] hover:text-white transition-all group"
                            >
                                <Play className="w-5 h-5" />
                                DiTeLe entdecken
                            </a>
                        </div>

                        {/* Trust stats mini */}
                        <div className="flex items-center gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#fe0404]" />
                                <span>
                                    <strong className="text-[#101010]">25+</strong> Jahre
                                    Erfahrung
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#fe0404]" />
                                <span>
                                    <strong className="text-[#101010]">5.500+</strong> Projekte
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* ───────── Right - UI Inspector Challenge ───────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Mock Browser Window */}
                            <div className="bg-[#101010] rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                                {/* Browser Chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-3 text-xs text-gray-400 font-mono">
                                        shop.demo-app.com/produkt
                                    </span>
                                </div>

                                {/* Challenge Header */}
                                <div className="px-6 pt-5 pb-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Search className="w-5 h-5 text-[#fe0404]" />
                                        <h3 className="text-white font-bold text-base">
                                            {allFound
                                                ? "🎉 Alle Fehler gefunden!"
                                                : "Finde die 3 UI-Fehler!"}
                                        </h3>
                                    </div>
                                    <span className="text-sm font-mono text-[#fe0404]">
                                        {foundBugs.size}/3
                                    </span>
                                </div>

                                <AnimatePresence mode="wait">
                                    {!allFound ? (
                                        <motion.div
                                            key="shop"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="px-6 pb-6"
                                        >
                                            {/* Simulated Product Page */}
                                            <div className="bg-white rounded-xl overflow-hidden">
                                                {/* Product Image Placeholder */}
                                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 flex items-center justify-center relative">
                                                    <div className="text-center text-gray-400">
                                                        <ShoppingCart className="w-8 h-8 mx-auto mb-1" />
                                                        <span className="text-xs">Produktbild</span>
                                                    </div>
                                                    {/* Cart Badge with WRONG price - Bug #2 */}
                                                    <button
                                                        onClick={() => markBug(BUGS[1])}
                                                        className={`absolute top-3 right-3 flex items-center gap-1 text-xs px-2.5 py-1 rounded-full transition-all cursor-pointer ${foundBugs.has("price-mismatch")
                                                            ? "bg-green-100 text-green-700 ring-2 ring-green-400"
                                                            : "bg-gray-800 text-white hover:ring-2 hover:ring-[#fe0404]/50"
                                                            }`}
                                                        title="Warenkorb"
                                                    >
                                                        <ShoppingCart className="w-3 h-3" />
                                                        &euro;39,99
                                                        {foundBugs.has("price-mismatch") && (
                                                            <CheckCircle className="w-3 h-3 ml-0.5" />
                                                        )}
                                                    </button>
                                                </div>

                                                {/* Product Info */}
                                                <div className="p-4 space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="font-bold text-[#101010] text-sm">
                                                            Premium Kopfhörer Pro X
                                                        </h4>
                                                        <div className="flex items-center gap-0.5">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={`w-3 h-3 ${i < 4
                                                                        ? "text-yellow-400 fill-yellow-400"
                                                                        : "text-gray-300"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Price - shows 29,99 but cart shows 39,99 */}
                                                    <p className="text-[#fe0404] font-bold text-lg">
                                                        &euro;29,99
                                                    </p>

                                                    {/* Email field - Bug #3: missing asterisk */}
                                                    <div>
                                                        <button
                                                            onClick={() => markBug(BUGS[2])}
                                                            className={`block w-full text-left cursor-pointer transition-all rounded-lg p-0.5 ${foundBugs.has("missing-asterisk")
                                                                ? "ring-2 ring-green-400"
                                                                : "hover:ring-2 hover:ring-[#fe0404]/50"
                                                                }`}
                                                        >
                                                            <span className="text-xs text-gray-500 mb-0.5 block pl-1">
                                                                E-Mail für Bestellbestätigung
                                                                {/* Intentionally NO asterisk - that is the bug */}
                                                                {foundBugs.has("missing-asterisk") && (
                                                                    <span className="text-green-600 ml-1">
                                                                        ✓ Pflichtfeld-Marker fehlt!
                                                                    </span>
                                                                )}
                                                            </span>
                                                            <div className="w-full h-9 bg-gray-50 rounded-md border border-gray-200 px-2.5 flex items-center text-xs text-gray-400">
                                                                ihre@email.de
                                                            </div>
                                                        </button>
                                                    </div>

                                                    {/* Buy Button - Bug #1: greyed out */}
                                                    <button
                                                        onClick={() => markBug(BUGS[0])}
                                                        className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all cursor-pointer ${foundBugs.has("button-color")
                                                            ? "bg-green-500 text-white ring-2 ring-green-400"
                                                            : "bg-gray-400 text-gray-200 hover:ring-2 hover:ring-[#fe0404]/50"
                                                            }`}
                                                    >
                                                        {foundBugs.has("button-color")
                                                            ? "✓ Bug erkannt!"
                                                            : "Jetzt kaufen"}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Feedback Area */}
                                            <AnimatePresence>
                                                {lastFound && !allFound && (
                                                    <motion.div
                                                        key={lastFound.id}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        className="mt-3 bg-[#1e1e1e] rounded-lg p-3 border border-white/5"
                                                    >
                                                        <div className="flex items-start gap-2">
                                                            <AlertTriangle className="w-4 h-4 text-[#fe0404] shrink-0 mt-0.5" />
                                                            <div>
                                                                <p className="text-xs font-bold text-white">
                                                                    {lastFound.label}
                                                                </p>
                                                                <p className="text-xs text-gray-400 mt-0.5">
                                                                    {lastFound.explanation}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {foundBugs.size === 0 && (
                                                <p className="text-xs text-gray-500 text-center mt-3">
                                                    💡 Klicke auf die Elemente, die dir verdächtig
                                                    vorkommen.
                                                </p>
                                            )}
                                        </motion.div>
                                    ) : (
                                        /* All 3 Bugs Found - Success Screen */
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="px-6 pb-8 text-center"
                                        >
                                            <div className="py-6">
                                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                                </div>
                                                <h4 className="text-white font-bold text-lg mb-2">
                                                    Alle 3 Fehler gefunden! 🏆
                                                </h4>
                                                <p className="text-gray-400 text-sm mb-2 max-w-xs mx-auto">
                                                    Du hast gerade einen vollständigen{" "}
                                                    <strong className="text-white">UI-Test</strong>{" "}
                                                    durchgeführt – genau das, was ein Softwaretester
                                                    täglich macht.
                                                </p>
                                                <div className="text-xs text-gray-500 space-y-1 mb-6">
                                                    <p>✓ Button-Farbe (Usability)</p>
                                                    <p>✓ Preisabweichung (Dateninkonsistenz)</p>
                                                    <p>✓ Pflichtfeld-Marker (Anforderungsfehler)</p>
                                                </div>
                                                <p className="text-xs text-gray-500 mb-5">
                                                    In der WAMOCON Academy lernst du, solche Fehler{" "}
                                                    <em>systematisch</em> zu finden.
                                                </p>
                                                <a
                                                    href="#contact"
                                                    className="inline-flex items-center gap-2 bg-[#fe0404] text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#d00303] transition-all glow-red"
                                                >
                                                    Jetzt Tester werden
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Floating Labels */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100"
                            >
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Erfolgsquote</p>
                                    <p className="font-bold text-[#101010]">87%</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="absolute -top-4 -right-4 bg-[#101010] rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-white/10"
                            >
                                <div className="w-10 h-10 bg-[#fe0404]/20 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-[#fe0404]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300 font-medium">Kosten für dich</p>
                                    <p className="font-bold text-white">0 €</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
