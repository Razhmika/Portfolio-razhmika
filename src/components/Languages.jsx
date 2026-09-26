import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { languages } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Languages() {
  return (
    <section id="languages" className="py-20 relative overflow-hidden bg-[#06080c]">
      <div className="section-container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <Globe2 size={13} />
              <span>COMMUNICATION PROFICIENCY</span>
            </div>
            <h2 className="section-title">
              Languages I <span className="neon-text">Speak</span>
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {languages.map((lang) => (
              <motion.div key={lang.name} variants={fadeUp}>
                <div className="bento-card group">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl group-hover:text-emerald-300 transition-colors">
                        {lang.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{lang.level}</p>
                    </div>
                    <span className="text-base font-bold font-mono text-emerald-400">
                      {lang.percent}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative mb-3">
                    <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-slate-400">
                    Application: <span className="text-slate-300">{lang.role}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
