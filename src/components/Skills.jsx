import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Generative AI & Python',
    desc: 'Building LLM-powered tools with the OpenAI API — prompt design, iterative refinement, and real-time AI applications.',
    tag: 'INTELLIGENCE',
    skills: ['Python', 'Generative AI', 'OpenAI API', 'Prompt Engineering', 'NLP Basics'],
  },
  {
    title: 'Web Technologies',
    desc: 'Structuring and styling clean, responsive interfaces for web-based projects and dashboards.',
    tag: 'UI / INTERACTION',
    skills: ['HTML', 'CSS'],
  },
  {
    title: 'Databases',
    desc: 'Designing tables and writing queries to store, retrieve, and manage structured data.',
    tag: 'DATA',
    skills: ['SQL'],
  },
  {
    title: 'Core Competencies',
    desc: 'The connective skills behind every project — integrating APIs, handling data, and shipping with version control.',
    tag: 'ECOSYSTEM',
    skills: ['API Integration', 'Data Handling', 'Problem Solving', 'Git/GitHub'],
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = (e) => {
    const container = e.target;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let idx = 0;
    let minDiff = Infinity;
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < minDiff) {
        minDiff = diff;
        idx = i;
      }
    });
    if (idx !== activeIdx) setActiveIdx(idx);
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-[#0b0b0b] text-white overflow-hidden flex flex-col items-center justify-center select-none py-24"
    >
      {/* Background vignette tied to the active card */}
      {skillCategories.map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: i === activeIdx ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-black via-[#140203] to-black"
        />
      ))}

      {/* Massive background typography */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h1
          className="text-[22vw] md:text-[18vw] font-black uppercase text-transparent leading-none tracking-tighter"
          style={{ WebkitTextStroke: '2px rgba(229,9,20,0.15)' }}
        >
          SKILLS
        </h1>
      </div>

      <p className="relative z-10 mb-8 font-mono text-xs uppercase tracking-widest text-white/40">
        Scroll to browse
      </p>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="relative w-full flex items-center z-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-[9vw] md:px-[20vw] gap-6 touch-pan-x"
      >
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            animate={{
              scale: i === activeIdx ? 1 : 0.9,
              opacity: i === activeIdx ? 1 : 0.5,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="shrink-0 snap-center w-[82vw] sm:w-[360px] md:w-[440px] h-[460px] md:h-[480px] rounded-[32px] p-8 md:p-10 bg-[#141414]/95 backdrop-blur-2xl border border-white/15 flex flex-col justify-between overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:border-red-600/80 transition-colors duration-500"
          >
            {/* Inner Red Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />

            {/* Top Card Metadata */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-3 py-1 rounded border border-red-600/20">
                {category.tag}
              </span>
              <span className="text-xs font-mono text-white/40">
                [ 0{i + 1} / 0{skillCategories.length} ]
              </span>
            </div>

            {/* Middle Title & Description */}
            <div className="space-y-4 relative z-10 my-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                {category.desc}
              </p>
            </div>

            {/* Bottom Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 relative z-10">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-mono text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded group-hover:border-red-600/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
          </motion.div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="relative z-10 flex items-center gap-2 mt-8">
        {skillCategories.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIdx ? 'w-6 bg-red-600' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;