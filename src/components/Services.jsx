import { motion } from 'framer-motion';
import { services } from '../data/portfolio';
import { CheckCircle2, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <Sparkles size={13} />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="section-title">
              What I Bring to <span className="neon-text">the Table</span>
            </h2>
            <p className="section-subtitle">
              Specialized skill domains bridging systematic Java backend engineering with thorough software quality assurance.
            </p>
          </motion.div>

          {/* Capabilities Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                className="group"
              >
                <div className="bento-card h-full flex flex-col justify-between">
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                        {svc.icon}
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                        {svc.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                      {svc.description}
                    </p>
                  </div>

                  {/* Keywords Breakdown (DevSync Key Requirement) */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-[11px] text-slate-500 font-mono uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      Key Disciplines & Tools
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300 group-hover:border-emerald-500/20 group-hover:text-white transition-colors"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
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
