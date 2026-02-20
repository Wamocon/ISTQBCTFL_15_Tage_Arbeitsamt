"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Award, ChevronRight } from "lucide-react";

const navLinks = [
    { label: "Das Konzept", href: "#problem-solution" },
    { label: "Praxis-Tool", href: "#tool-showcase" },
    { label: "Dein Lernplan", href: "#roadmap" },
    { label: "Erfolgsgeschichten", href: "#testimonials" },
    { label: "Förderung", href: "#funding" },
    { label: "FAQ", href: "#faq" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Trust Bar */}
            <div className="bg-[#101010] text-white text-xs py-2 px-4 text-center">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#fe0404]" />
                        Zugelassener Träger nach AZAV
                    </span>
                    <span className="hidden sm:inline text-white/30">|</span>
                    <span className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#fe0404]" />
                        ISTQB® Platinum Partner
                    </span>
                    <span className="hidden sm:inline text-white/30">|</span>
                    <span className="font-semibold text-[#fe0404]">100% gefördert durch die Agentur für Arbeit</span>
                </div>
            </div>

            {/* Main Nav */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass shadow-lg border-b border-white/10"
                    : "bg-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#hero" className="flex items-center gap-2 group">
                            <div className="relative h-12 w-48 transition-transform group-hover:scale-105">
                                <img
                                    src="/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
                                    alt="WAMOCON Academy Logo"
                                    className="h-full w-full object-contain object-left"
                                />
                            </div>
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#101010] animated-underline transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#fe0404] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#d00303] transition-all glow-red group"
                            >
                                Kostenlose Beratung
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Navigation umschalten"
                        >
                            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
                        >
                            <nav className="flex flex-col px-4 py-4 gap-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#101010] hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="mt-2 text-center bg-[#fe0404] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#d00303] transition-colors"
                                >
                                    Kostenlose Beratung starten
                                </a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
