import { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    title: "Network Vulnerability Scanner",
    category: "Cybersecurity / VAPT",
    description: "Nmap-based scanning workflow to identify open ports, services, and vulnerabilities as hands-on VAPT practice.",
    tags: ["Nmap", "Linux", "Networking"],
    match: "98%",
    episode: "S01 E01"
  },
  {
    title: "Network Traffic Analyzer",
    category: "Cybersecurity / Network Analysis",
    description: "Wireshark-driven packet capture and analysis to inspect network traffic patterns and flag anomalies.",
    tags: ["Wireshark", "Networking", "Linux"],
    match: "97%",
    episode: "S01 E02"
  },
  {
    title: "AI Chatbot / Q&A Assistant",
    category: "Generative AI",
    description: "Python-based conversational assistant built on the OpenAI API for answering user queries.",
    tags: ["Python", "OpenAI API"],
    match: "99%",
    episode: "S01 E03"
  },
  {
    title: "AI Text Summarizer",
    category: "Generative AI",
    description: "Python tool using the OpenAI API to condense long-form text into concise summaries.",
    tags: ["Python", "OpenAI API"],
    match: "99%",
    episode: "S01 E04"
  },
  {
    title: "Sales Data Analysis",
    category: "Data Analytics",
    description: "Tableau dashboards visualizing sales trends to support data-driven decisions.",
    tags: ["Tableau", "SQL"],
    match: "96%",
    episode: "S01 E05"
  },
  {
    title: "Customer Segmentation",
    category: "Data Analytics",
    description: "SQL-based data wrangling to segment customers for targeted marketing.",
    tags: ["SQL", "Analytics"],
    match: "95%",
    episode: "S01 E06"
  },
  {
    title: "Assistive Device Concept",
    category: "Hardware & Concept Design",
    description: "Concept design for an assistive device supporting sensory-disabled users, drawing on an ECE background.",
    tags: ["ECE", "Concept Design"],
    match: "94%",
    episode: "S01 E07"
  },
  {
    title: "Portfolio Cinematics v2.6",
    category: "UI/UX & Animation",
    description: "This Netflix-inspired interactive portfolio, featuring scroll animations and a cinematic dark UI.",
    tags: ["React", "Animation"],
    match: "100%",
    episode: "S01 E08"
  }
];

// Deterministic "random-looking" rotations so the stacked deck looks natural
const stackRotations = [-5, 3, -2, 6, -4, 2, -6, 4];

const getGridPos = (index) => {
  let row, col;
  if (index < 3) { row = 0; col = index; }
  else if (index === 3) { row = 1; col = 0; }
  else if (index === 4) { row = 1; col = 2; }
  else { row = 2; col = index - 5; }
  return { row, col };
};

const CARD_W = 260;
const CARD_H = 165;
const GAP = 24;

export default function ProjectsPreview() {
  const containerRef = useRef(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setOpened(true);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ background: '#0b0b0b', minHeight: '780px', padding: '80px 16px' }}
    >
      {/* Watermark */}
      <div className="absolute top-6 left-0 w-full flex items-start justify-center pointer-events-none" style={{ zIndex: 0 }}>
        <h1 className="font-black uppercase tracking-tighter whitespace-nowrap" style={{ fontSize: '9vw', color: 'rgba(255,255,255,0.03)' }}>
          ORIGINALS
        </h1>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '50%', left: '50%', width: '55vw', height: '55vw',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(220,38,38,0.15)', filter: 'blur(160px)', zIndex: 0
        }}
      />

      <p className="relative text-xs font-mono uppercase tracking-widest mb-8" style={{ color: 'rgba(255,255,255,0.4)', zIndex: 20 }}>
        {opened ? 'Scroll past this section to replay' : 'Scroll into view to open the folder \u2193'}
      </p>

      {/* Perspective stage */}
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: '1800px', width: '100%', height: '460px', zIndex: 10 }}
      >
        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>

          {/* Folder back */}
          <div
            className="absolute rounded-2xl flex items-center justify-center"
            style={{
              width: 300, height: 190,
              left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
              background: '#141414', border: '1px solid rgba(220,38,38,0.4)',
              boxShadow: '0 20px 50px rgba(229,9,20,0.25)', zIndex: 5
            }}
          >
            <div className="font-mono font-black uppercase" style={{ color: 'rgba(220,38,38,0.6)', fontSize: '18px', letterSpacing: '0.2em' }}>
              ARCHIVE_SLOTS
            </div>
          </div>

          {/* Project cards */}
          {projectsData.map((project, i) => {
            const { row, col } = getGridPos(i);
            const targetX = (col - 1) * (CARD_W + GAP);
            const targetY = (row - 1) * (CARD_H + GAP) - 20;

            const style = opened
              ? {
                  transform: `translate(-50%, -50%) translate(${targetX}px, ${targetY}px) rotate(${(i % 2 === 0 ? 1 : -1) * (1 + i)}deg) scale(1)`,
                  transitionDelay: `${0.5 + i * 0.06}s`,
                  zIndex: 20 + i
                }
              : {
                  transform: `translate(-50%, -50%) rotate(${stackRotations[i]}deg) scale(0.85)`,
                  transitionDelay: '0s',
                  zIndex: 10 + i
                };

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: CARD_W, height: CARD_H,
                  left: '50%', top: '50%',
                  transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)',
                  ...style
                }}
              >
                <div
                  className="w-full h-full rounded-2xl flex flex-col justify-between p-4"
                  style={{
                    background: 'rgba(20,20,20,0.95)', border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.9)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded" style={{ color: '#ef4444', background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)' }}>
                      {project.episode}
                    </span>
                    <span className="text-[10px] font-mono font-bold" style={{ color: '#f87171' }}>{project.match} Match</span>
                  </div>
                  <div>
                    <div className="text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {project.category}
                    </div>
                    <h3 className="font-black text-white" style={{ fontSize: '14px' }}>{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-mono px-1.5 py-0.5 rounded" style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Folder front flap */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 300, height: 190,
              left: '50%', top: '50%',
              transformOrigin: 'bottom center',
              transform: `translate(-50%, -50%) rotateX(${opened ? -130 : 0}deg)`,
              transition: 'transform 1.1s cubic-bezier(0.65,0,0.35,1)',
              transformStyle: 'preserve-3d',
              zIndex: 60
            }}
          >
            <div
              className="absolute bottom-0 w-full flex flex-col justify-end"
              style={{
                height: '85%', background: '#1c1c1c', borderTop: '1px solid rgba(220,38,38,0.4)',
                borderRadius: '4px 4px 24px 24px', padding: '20px',
                boxShadow: '0 -5px 20px rgba(0,0,0,0.8)'
              }}
            >
              <div className="mx-auto mb-2 rounded-full" style={{ width: 60, height: 5, background: 'rgba(255,255,255,0.2)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}