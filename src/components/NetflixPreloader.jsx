import { useState } from 'react';
import { motion } from 'framer-motion';

// --- This is the actual component to use in your project ---
// Import it in App.jsx, render it while `loading` is true, and pass
// onComplete={() => setLoading(false)} to reveal your real site underneath.
export const MinimalPreloader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.8 }}
      onAnimationComplete={onComplete}
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ scale: 0.95, opacity: 0, filter: 'blur(8px)' }}
        animate={{
          scale: [0.95, 1, 1.05],
          opacity: [0, 1, 1, 0],
          filter: ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'],
        }}
        transition={{ duration: 1.8, times: [0, 0.4, 0.85, 1], ease: 'easeOut' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></div>
        <h1
          className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] text-white"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          ARUN
        </h1>
      </motion.div>
    </motion.div>
  );
};

// --- Demo wrapper, preview only — shows a mock background + replay button ---
// so you can see the fade-out actually reveal something. Delete this default
// export in your real project; only the named MinimalPreloader above is needed.
export default function PreloaderDemo() {
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  return (
    <div className="relative w-full h-screen bg-[#141414] flex items-center justify-center">
      <div className="text-center text-white/70 font-mono text-sm px-6">
        <p className="text-red-500 uppercase tracking-widest mb-2">Mock site content</p>
        <p>This stands in for your real Hero section.</p>
        <p className="mt-1">Once the preloader fades out, you'll see this behind it.</p>
        {!loading && (
          <button
            onClick={() => { setLoading(true); setKey((k) => k + 1); }}
            className="mt-6 px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-xs uppercase tracking-widest transition-colors"
          >
            Replay preloader
          </button>
        )}
      </div>

      {loading && <MinimalPreloader key={key} onComplete={() => setLoading(false)} />}
    </div>
  );
}