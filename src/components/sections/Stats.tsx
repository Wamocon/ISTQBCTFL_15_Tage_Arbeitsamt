"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, FolderKanban, Euro, Award } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animated Counter Hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(end: number, duration = 1800, trigger = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;
        let start = 0;
        const startTime = performance.now();

        const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(eased * end);
            setCount(value);
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [end, duration, trigger]);

    return count;
}

const stats = [
    {
        icon: Clock,
        value: 25,
        suffix: "+",
        label: "Jahre Expertise",
        desc: "am Markt für IT-Qualitätssicherung",
    },
    {
        icon: FolderKanban,
        value: 5500,
        suffix: "+",
        label: "Projekttage",
        desc: "in realen Unternehmensprojekten",
        format: true,
    },
    {
        icon: Euro,
        value: 0,
        suffix: " €",
        label: "Eigenanteil",
        desc: "dank Bildungsgutschein",
    },
    {
        icon: Award,
        value: null,
        text: "ISTQB®",
        label: "Zertifizierung",
        desc: "weltweit anerkannter Standard",
    },
];

export default function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="relative bg-[#101010] py-16 sm:py-20 overflow-hidden">
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Subtle red glow in center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#fe0404]/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} inView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({
    stat,
    index,
    inView,
}: {
    stat: (typeof stats)[number];
    index: number;
    inView: boolean;
}) {
    const count = useCountUp(stat.value ?? 0, 2000, inView);
    const formatted = stat.format
        ? count.toLocaleString("de-DE")
        : String(count);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
            className="text-center group"
        >
            <div className="w-14 h-14 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#fe0404]/20 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="w-6 h-6 text-[#fe0404]" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white mb-1 tabular-nums">
                {stat.text ?? `${formatted}${stat.suffix ?? ""}`}
            </p>
            <p className="text-sm font-semibold text-white/80 mb-1">{stat.label}</p>
            <p className="text-xs text-white/40">{stat.desc}</p>
        </motion.div>
    );
}
