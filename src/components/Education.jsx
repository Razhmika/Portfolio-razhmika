import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#060910]">
      <div className="section-container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <GraduationCap size={13} />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="section-title">
              Education & <span className="neon-text">Coursework</span>
            </h2>
            <p className="section-subtitle">
              Building a rigorous theoretical and applied foundation in Information Technology at KGISL.
            </p>
          </motion.div>

          {/* Education Card */}
          <div className="max-w-4xl">
            {education.map((edu, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <div className="bento-card group">
                  {/* Top Bar with Status Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl group-hover:scale-105 transition-transform duration-300">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {edu.degree}
                        </h3>
                        <p className="text-emerald-400 font-medium text-sm sm:text-base">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(0,245,155,0.2)]">
                        <Sparkles size={12} />
                        {edu.statusBadge}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.08]">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-8">
                    {edu.description}
                  </p>

                  {/* Coursework & Technical Modules */}
                  <div>
                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <BookOpen size={14} />
                      <span>Key Academic Disciplines & Laboratories (3rd Year)</span>
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {edu.coursework.map((course) => (
                        <div
                          key={course}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-colors"
                        >
                          <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                          <span className="text-xs text-slate-200 font-medium">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
                    <span>Program Progress: <strong className="text-emerald-400">3rd Year of 4-Year B.Tech Program</strong></span>
                    <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300">
                      Expected Graduation: 2028
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
