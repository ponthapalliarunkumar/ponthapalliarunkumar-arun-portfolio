import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Preview placeholder only — see chat notes for how to use your real photo in your project.
import pictureImg from '../assets/Portfolio/picture.png';
// ... other imports ...

const PHOTO_SRC = pictureImg;
const developerRoles = [
  'FEATURE FILM // GENERATIVE AI ENGINEER',
  'ORIGINAL SERIES // PYTHON DEVELOPER',
  'BLOCKBUSTER // PROMPT ENGINEERING',
  'ACCLAIMED // API INTEGRATION SPECIALIST'
];

const contentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotSpringX = useSpring(spotX, { damping: 30, stiffness: 200 });
  const spotSpringY = useSpring(spotY, { damping: 30, stiffness: 200 });

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const dotSpringX = useSpring(dotX, { damping: 25, stiffness: 800 });
  const dotSpringY = useSpring(dotY, { damping: 25, stiffness: 800 });
  const ringSpringX = useSpring(dotX, { damping: 20, stiffness: 200 });
  const ringSpringY = useSpring(dotY, { damping: 20, stiffness: 200 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const tiltX = useSpring(rotateX, { damping: 20, stiffness: 150 });
  const tiltY = useSpring(rotateY, { damping: 20, stiffness: 150 });
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);
  const glareSpringX = useSpring(glareX, { damping: 25, stiffness: 200 });
  const glareSpringY = useSpring(glareY, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotX.set(x - 300);
    spotY.set(y - 300);
    dotX.set(x - 6);
    dotY.set(y - 6);

    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
    const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;

    rotateX.set(-((y - cardCenterY) / (cardRect.height / 2)) * 16);
    rotateY.set(((x - cardCenterX) / (cardRect.width / 2)) * 16);
    glareX.set(x - cardRect.left - cardRect.width / 2);
    glareY.set(y - cardRect.top - cardRect.height / 2);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col justify-between select-none cursor-none"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/90 to-[#050505] z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...developerRoles, ...developerRoles].map((role, idx) => (
              <span key={idx} className="text-[14vw] font-black text-red-600 mx-8 uppercase tracking-tighter">
                {role} &bull;
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        style={{ x: spotSpringX, y: spotSpringY }}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-60 blur-[90px]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(229,9,20,0.35) 0%, rgba(229,9,20,0.1) 40%, transparent 70%)' }}
        />
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-between pt-24 pb-12"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold tracking-wider">DEVELOPER SERIES</span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">SEASONS 2024 - 2026</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
            <span className="px-2 py-0.5 border border-white/20 rounded bg-black/40">GENERATIVE AI</span>
            <span className="px-2 py-0.5 border border-white/20 rounded bg-black/40">PYTHON</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto">

          <div className="lg:col-span-5 flex flex-col items-start space-y-5 text-left">

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-red-600 text-white font-black text-xs rounded tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.8)] animate-pulse">GEN AI</span>
              <span className="text-white/80 text-xs font-mono tracking-widest uppercase">Engineering Graduate & Problem Solver</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            >
              ARUN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]">
                DEV.ENGINE
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 text-xs font-mono text-red-400 font-bold">
              <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-red-500">2 Internships</span>
              <span className="text-white/40">•</span>
              <span>Python • OpenAI API • SQL</span>
              <span className="text-white/40">•</span>
              <span className="text-white/70">HTML & CSS</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm md:text-base text-white/80 font-light leading-relaxed max-w-md drop-shadow">
              Building LLM-powered applications, automating workflows with Python, and integrating the OpenAI API into reliable, data-driven tools.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_10px_35px_rgba(255,255,255,0.3)] flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 bg-neutral-900/80 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded hover:bg-neutral-800 transition-all duration-300 shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex justify-center"
            style={{ perspective: 1200 }}
          >
            <motion.div
              ref={cardRef}
              style={{ rotateX: tiltX, rotateY: tiltY }}
              className="relative group will-change-transform"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-red-600/70 via-rose-600/40 to-purple-600/20 rounded-3xl blur-3xl opacity-90 group-hover:opacity-100 animate-pulse duration-1000"></div>

              <div className="relative w-[340px] md:w-[420px] p-3.5 bg-[#141414]/90 backdrop-blur-2xl rounded-2xl border border-red-600/40 shadow-[0_40px_80px_rgba(0,0,0,0.95)] overflow-hidden">

                <motion.div
                  style={{ x: glareSpringX, y: glareSpringY }}
                  className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-40"
                ></motion.div>

                <img
                  src={PHOTO_SRC}
                  alt="Ponthapalli Arun Kumar"
                  className="w-full aspect-[3/4] object-contain rounded-xl filter contrast-125 brightness-105 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-start lg:items-end space-y-4 text-left lg:text-right"
          >
            <div className="p-5 bg-black/80 backdrop-blur-2xl border border-white/15 rounded-xl shadow-2xl max-w-xs">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-2">Internships & Certifications</h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Python & AI Intern at Blackbucks and SkillDzire, TryHackMe — Intro to Cyber Security Certified.
              </p>
            </div>
          </motion.div>

        </div>

        <motion.div variants={itemVariants} className="flex items-center justify-between text-xs font-mono text-white/50 tracking-widest uppercase">
          <span>BUILDING WITH GENERATIVE AI</span>
          <span>[ PORTFOLIO RELEASE v2.6 ]</span>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: dotSpringX, y: dotSpringY }}
        className="absolute top-0 left-0 z-50 pointer-events-none w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_#E50914]"
      ></motion.div>
      <motion.div
        style={{ x: ringSpringX, y: ringSpringY }}
        className="absolute top-0 left-0 z-50 pointer-events-none w-12 h-12 border border-red-600/60 rounded-full flex items-center justify-center backdrop-blur-[1px] -translate-x-[18px] -translate-y-[18px]"
      ></motion.div>

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between pointer-events-auto"
      >
        <div className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(229,9,20,0.9)]">
          ARUN<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/80">
          <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-red-500 transition-colors">About</a>
          <a href="#expertise" className="hover:text-red-500 transition-colors">Expertise</a>
          <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </nav>
        <a
          href="#hire"
          className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95"
        >
          Hire Me
        </a>
      </motion.header>
    </section>
  );
};

export default Hero;