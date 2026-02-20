import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ToolShowcase from "@/components/sections/ToolShowcase";
import Roadmap from "@/components/sections/Roadmap";
import Trainers from "@/components/sections/Trainers";
import Certificates from "@/components/sections/Certificates";
import Testimonials from "@/components/sections/Testimonials";
import Funding from "@/components/sections/Funding";
import AvailableDates from "@/components/sections/AvailableDates";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ScrollProgress";

/* ------------------------------------------------------------------ */
/*  Wave SVG Dividers – gap-proof with two-path approach               */
/*  Each SVG has: 1) solid top-fill matching source section            */
/*                2) wave path filling toward destination section       */
/* ------------------------------------------------------------------ */
function WaveLightToDark() {
  return (
    <div className="wave-divider bg-white" aria-hidden="true">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
        <rect width="1440" height="80" fill="#ffffff" />
        <path
          d="M0 40 C360 70, 720 10, 1080 40 S1440 70, 1440 40 V80 H0 Z"
          fill="#101010"
          stroke="#101010"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function WaveDarkToLight() {
  return (
    <div className="wave-divider bg-[#101010]" aria-hidden="true">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
        <rect width="1440" height="80" fill="#101010" />
        <path
          d="M0 40 C360 10, 720 70, 1080 40 S1440 10, 1440 40 V80 H0 Z"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero (White) */}
        <Hero />

        {/* Hero → Stats (White → Black) */}
        <WaveLightToDark />
        <Stats />

        {/* Stats → ProblemSolution (Black → White) */}
        <WaveDarkToLight />
        <ProblemSolution />

        {/* ProblemSolution → ToolShowcase (White → Black) */}
        <WaveLightToDark />
        <ToolShowcase />

        {/* ToolShowcase → Roadmap (Black → White) */}
        <WaveDarkToLight />
        <Roadmap />

        {/* Roadmap → Trainers (White → White) - No Divider needed */}
        <Trainers />

        {/* Trainers → Certificates (White → Black) */}
        <WaveLightToDark />
        <Certificates />

        {/* Certificates → Testimonials (Black → White) */}
        <WaveDarkToLight />
        <Testimonials />

        {/* Testimonials → Funding (White → Black) */}
        <WaveLightToDark />
        <Funding />

        {/* Funding → AvailableDates (Black → White) */}
        <WaveDarkToLight />
        <AvailableDates />

        {/* AvailableDates → FAQ (White → White) - No Divider */}
        <div className="max-w-4xl mx-auto px-8"><div className="border-t border-gray-100" /></div>
        <FAQ />

        {/* FAQ → ContactForm (White → White) - No Divider */}
        <ContactForm />

        {/* ContactForm → Footer (White → Black) */}
        <WaveLightToDark />
      </main>
      <Footer />
    </>
  );
}
