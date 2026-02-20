"use client";

import { motion } from "framer-motion";


const trainers = [
    {
        name: "Waleri Moretz",
        role: "Akkreditierter ISTQB®-Trainer",
        title: "Gründer der WAMOCON Academy",
        image: "/WMA_Waleri_Moretz_Profilfoto.png",
        bio: "Als Gründer der WAMOCON Academy und passionierter Software-Ingenieur habe ich es mir zur Aufgabe gemacht, komplexe IT-Themen verständlich und praxisnah zu vermitteln.",
        highlight: "Mit meiner Erfahrung aus über 50 internationalen IT-Projekten weiß ich genau, worauf es in der Praxis ankommt. Theorie ist die Basis, aber erst die Anwendung macht einen exzellenten Softwaretester aus.",
        mission: "Mein Ziel: Dich nicht nur sicher durch die Prüfung zu bringen, sondern dich zu einem selbstbewussten QA-Experten zu machen, der vom ersten Tag an echten Mehrwert liefert.",

    },
    {
        name: "Daniel Moretz",
        role: "Akkreditierter ISTQB®-Trainer",
        title: "Testmanager & Automatisierer",
        image: "/WMA_Daniel_Moretz_Profilfoto.JPG",
        bio: "ISTQB®-Testmanager und Testautomatisierer mit Fokus auf Praxisnähe und der konkreten Anwendung risikobasierter Teststrategien.",
        highlight: "Als fachlicher Verantwortlicher und Koordinator für DiTeLe hat er großen Wert auf einfache und praxisorientierte Übungen gelegt. Er sorgt dafür, dass du komplexe Zusammenhänge spielerisch verstehst und sofort anwenden kannst.",
        mission: "Mit seiner Erfahrung aus über 10 Jahren Projektarbeit und Zertifizierungen auf ISTQB Advanced Level bringt er tiefes technisches Know-how direkt in deinen Kurs.",

    },
];

export default function Trainers() {
    return (
        <section id="trainers" className="section-accent section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#fe0404] mb-3 block">
                        Keine Dozenten. Praxis-Mentoren.
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#101010] mb-4">
                        Deine Trainer
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lerne von Praktikern, nicht von Theoretikern. Unsere akkreditierten
                        ISTQB®-Trainer bringen echte Projekterfahrung in jeden Unterrichtstag.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {trainers.map((trainer, i) => (
                        <motion.div
                            key={trainer.name}
                            initial={{ opacity: 0, x: i === 0 ? -40 : 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-shine hover:-translate-y-1 overflow-hidden group"
                        >
                            <div>
                                {/* Header */}
                                <div className="flex items-start gap-5 mb-6">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#101010] to-[#303030] flex items-center justify-center text-white text-2xl font-black relative">
                                        {trainer.image ? (
                                            <img
                                                src={trainer.image}
                                                alt={trainer.name}
                                                className={`w-full h-full object-cover ${trainer.name.includes("Daniel") ? "object-top" : ""}`}
                                            />
                                        ) : (
                                            trainer.name.split(" ").map(n => n[0]).join("")
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#101010]">{trainer.name}</h3>
                                        <p className="text-sm text-[#fe0404] font-semibold">{trainer.role}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{trainer.title}</p>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {trainer.bio}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {trainer.highlight}
                                </p>
                                <p className="text-sm text-[#101010] font-medium leading-relaxed mb-6 pl-4 border-l-2 border-[#fe0404]">
                                    {trainer.mission}
                                </p>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
