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
/*  Wave SVG Dividers – Light-to-Dark and Dark-to-Light variants       */
/* ------------------------------------------------------------------ */
function WaveLightToDark() {
  return (
    <div className="wave-divider bg-white" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 30 C360 60, 720 0, 1080 30 S1440 60, 1440 30 V60 H0 Z"
          fill="#101010"
        />
      </svg>
    </div>
  );
}

function WaveDarkToLight() {
  return (
    <div className="wave-divider bg-[#101010]" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 30 C360 0, 720 60, 1080 30 S1440 0, 1440 30 V60 H0 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

function WaveLightToAccent() {
  return (
    <div className="wave-divider bg-white" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 30 C360 60, 720 0, 1080 30 S1440 60, 1440 30 V60 H0 Z"
          fill="#f6f6f6"
        />
      </svg>
    </div>
  );
}

function WaveAccentToLight() {
  return (
    <div className="wave-divider bg-[#f6f6f6]" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 30 C360 0, 720 60, 1080 30 S1440 0, 1440 30 V60 H0 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

function WaveAccentToDark() {
  return (
    <div className="wave-divider bg-[#f6f6f6]" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 30 C360 60, 720 0, 1080 30 S1440 60, 1440 30 V60 H0 Z"
          fill="#101010"
        />
      </svg>
    </div>
  );
}

function WaveDarkToAccent() {
  return (
    <div className="wave-divider bg-[#101010]" aria-hidden="true">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 30 C360 0, 720 60, 1080 30 S1440 0, 1440 30 V60 H0 Z"
          fill="#f6f6f6"
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
        {/* Hero (light bg) */}
        <Hero />

        {/* Hero → Stats (light → dark) */}
        <WaveLightToDark />
        <Stats />

        {/* Stats → ProblemSolution (dark → accent) */}
        <WaveDarkToAccent />
        <ProblemSolution />

        {/* ProblemSolution → ToolShowcase (accent → dark) */}
        <WaveAccentToDark />
        <ToolShowcase />

        {/* ToolShowcase → Roadmap (dark → light) */}
        <WaveDarkToLight />
        <Roadmap />

        {/* Roadmap → Trainers (light → accent) */}
        <WaveLightToAccent />
        <Trainers />

        {/* Trainers → Certificates (accent → dark) */}
        <WaveAccentToDark />
        <Certificates />

        {/* Certificates → Testimonials (dark → light) */}
        <WaveDarkToLight />
        <Testimonials />

        {/* Testimonials → Funding (light → dark) */}
        <WaveLightToDark />
        <Funding />

        {/* Funding → AvailableDates (dark → accent) */}
        <WaveDarkToAccent />
        <AvailableDates />

        {/* AvailableDates → FAQ (same accent – subtle divider) */}
        <div className="bg-[#f6f6f6]"><div className="max-w-4xl mx-auto px-8"><div className="border-t border-gray-200/60" /></div></div>
        <FAQ />

        {/* FAQ → ContactForm (accent → light) */}
        <WaveAccentToLight />
        <ContactForm />

        {/* ContactForm → Footer (light → dark) */}
        <WaveLightToDark />
      </main>
      <Footer />
    </>
  );
}
