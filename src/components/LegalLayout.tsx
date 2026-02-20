"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Award } from "lucide-react";

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <>
            {/* Trust Bar – same as main page */}
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
                </div>
            </div>

            {/* Nav */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative h-8 w-36">
                                <img
                                    src="/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
                                    alt="WAMOCON Academy Logo"
                                    className="h-full w-full object-contain object-left"
                                />
                            </div>
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#101010] transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="bg-white min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-3xl sm:text-4xl font-black text-[#101010] mb-2">{title}</h1>
                    <p className="text-sm text-gray-400 mb-10">Stand: {lastUpdated}</p>

                    <article className="legal-content space-y-6">
                        {children}
                    </article>
                </div>
            </main>

            {/* Minimal Footer */}
            <footer className="bg-[#101010] text-white py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} WAMOCON Academy GmbH. Alle Rechte vorbehalten.
                    </p>
                    <nav className="flex items-center gap-6">
                        <Link href="/impressum" className="text-xs text-gray-400 hover:text-white transition-colors">
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="text-xs text-gray-400 hover:text-white transition-colors">
                            Datenschutz
                        </Link>
                        <Link href="/agb" className="text-xs text-gray-400 hover:text-white transition-colors">
                            AGB
                        </Link>
                    </nav>
                </div>
            </footer>
        </>
    );
}
