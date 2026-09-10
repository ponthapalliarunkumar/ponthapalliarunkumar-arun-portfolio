import { useRef } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

function BentoCard({ className = '', children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className={`p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Spotlight({ size = 400 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)`,
      }}
    />
  );
}

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Cinematic Red Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 01</span>
            <span className="text-white/40">|</span>
            <span>ABOUT THE ENGINEER</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            EPISODE SYNOPSIS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              ORIGIN & VISION.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout with Interactive Mouse Light Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Bio & Academic Core (Span 7) */}
          <BentoCard className="md:col-span-7 flex flex-col justify-between">
            <Spotlight />
            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              01
            </div>

            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Cast & Background</h3>
              <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">
                I am <span className="text-white font-bold drop-shadow">Ponthapalli Arun Kumar</span>, a B.Tech student in Electronics and Communication Engineering at Godavari Institute of Engineering and Technology.
              </p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                My technical narrative bridges an ECE foundation with hands-on Python and Generative AI work, translating prompt design and API integration into real, working tools.
              </p>

              {/* Academic Timeline */}
              <div className="pt-4 space-y-2 border-t border-white/10 mt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Intermediate (MPC), Sri Chaitanya Junior College</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Secondary School (SSC), Z P P High School</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-2 relative z-10">
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">Generative AI</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">Python</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">API Integration</span>
            </div>
          </BentoCard>

          {/* Card 2: Internships & Certifications (Span 5) */}
          <BentoCard className="md:col-span-5 flex flex-col justify-between">
            <Spotlight />
            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              02
            </div>

            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Milestones & Credentials</h3>
              <ul className="space-y-3.5 text-sm text-white/80 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">&#8250;</span>
                  <span>Python & AI Intern at <strong className="text-white">Blackbucks</strong> (Nov 2024 – Apr 2025).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">&#8250;</span>
                  <span>Python & AI Intern at <strong className="text-white">SkillDzire</strong> (May 2024 – Oct 2024).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">&#8250;</span>
                  <span>Certified in <strong className="text-white">TryHackMe — Intro to Cyber Security</strong>.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 font-mono text-xs text-white/40 relative z-10">
              // SEASON_01 HIGHLIGHTS
            </div>
          </BentoCard>

          {/* Card 3: Technical Ecosystem (Span 12) */}
          <BentoCard className="md:col-span-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <Spotlight size={500} />

            <div className="space-y-2 text-left relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Production Tech Stack</h3>
              <p className="text-base md:text-lg font-semibold text-white">Tools behind the AI chatbot, summarizer, and web projects.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 relative z-10">
              {['Python', 'OpenAI API', 'HTML', 'CSS', 'SQL', 'Git/GitHub'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-white shadow-inner hover:bg-red-600/20 hover:border-red-600/40 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>

      </div>
    </section>
  );
};

export default About;