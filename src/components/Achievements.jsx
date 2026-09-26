import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#070a12]/70">
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
              <Award size={13} />
              <span>RECOGNITION & CREDENTIALS</span>
            </div>
            <h2 className="section-title">
              Certifications & <span className="neon-text">Conferences</span>
            </h2>
            <p className="section-subtitle">
              Verified certifications, peer-reviewed paper presentations, and international academic conference participation.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group">
                <div className="bento-card h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Top Neon Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

                  <div>
                    {/* Icon & Issuer */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-3">
                      Issued by: <span className="text-slate-200">{item.issuer}</span>
                    </p>

                    <p className="text-slate-300 text-xs leading-relaxed font-light mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Verified Badge */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      Credential Verified
                    </span>
                    <span className="text-slate-400 text-[10px]">Academic Award</span>
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
