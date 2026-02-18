"use client";

import { Shield, Award, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#101010] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="relative h-12 w-48 mb-2">
                            <img
                                src="/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
                                alt="WAMOCON Academy Logo"
                                className="h-full w-full object-contain object-left invert brightness-0"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                            Das Kompetenzzentrum für Software Testing & Qualitätssicherung.
                            Seit über 25 Jahren dein Partner für IT-Karrieren. Vom Regierungspräsidium
                            Hessen geprüft und als Kompetenzzentrum gelistet.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                                <Shield className="w-4 h-4 text-[#fe0404]" />
                                <span className="text-xs font-semibold">AZAV</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                                <Award className="w-4 h-4 text-[#fe0404]" />
                                <span className="text-xs font-semibold">ISTQB®</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-sm mb-4">Navigation</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Das Konzept", href: "#problem-solution" },
                                { label: "Praxis-Tool (DiTeLe)", href: "#tool-showcase" },
                                { label: "Lernplan", href: "#roadmap" },
                                { label: "Trainer & Team", href: "#trainers" },
                                { label: "Erfolgsgeschichten", href: "#testimonials" },
                                { label: "FAQ", href: "#faq" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors animated-underline"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Rechtliches */}
                    <div>
                        <h4 className="font-bold text-sm mb-4">Rechtliches</h4>
                        <ul className="space-y-2.5">
                            {[
                                "Impressum",
                                "Datenschutzerklärung",
                                "AGB",
                                "Cookie-Einstellungen",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-400 hover:text-white transition-colors animated-underline"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} WAMOCON Academy. Alle Rechte vorbehalten.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 bg-white/5 hover:bg-[#fe0404]/20 rounded-full flex items-center justify-center transition-colors group"
                        aria-label="Nach oben scrollen"
                    >
                        <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-[#fe0404] transition-colors" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
