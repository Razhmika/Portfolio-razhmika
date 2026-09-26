import { motion } from 'framer-motion';
import { User, MapPin, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { gmailComposeUrl, personalInfo, quickStats } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070910]/70">
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
              <User size={13} />
              <span>ABOUT THE DEVELOPER</span>
            </div>
            <h2 className="section-title">
              Driven by Logic, <span className="neon-text">Validated by Testing</span>
            </h2>
            <p className="section-subtitle">
              Currently in my 3rd year of B.Tech Information Technology, developing robust software solutions and verifying software quality.
            </p>  
          </motion.div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">

            {/* Left 7 Columns: In-depth Bio & Engineering Principles */}
            <motion.div variants={fadeUp} className="lg:col-span-7 flex">
              <div className="bento-card w-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Razhmika Jayakrishnan</h3>
                        <p className="text-xs text-emerald-400 font-mono">3rd Year B.Tech IT · KGISL</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      Open to Internships
                    </span>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light mb-6">
                    {personalInfo.about}
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                      Core Philosophies & Focus
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300 font-light">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                        <span>Defect Prevention over Defect Fixing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                        <span>Structured OOP & Modular Codebases</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                        <span>Exhaustive Boundary Value Testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                        <span>ACID Compliant Database Design</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Trait Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {['Problem Solver', 'Test-Driven Mindset', 'Agile Learner', 'Detail-Oriented', 'Team Player'].map((t) => (
                    <span key={t} className="tag text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right 5 Columns: Key Metrics & Fast Connectivity Bento */}
            <motion.div variants={stagger} className="lg:col-span-5 flex flex-col gap-6">

              {/* Quick Stats Bento Card */}
              <motion.div variants={fadeUp} className="bento-card">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Academic & Technical Metrics
                </p>
                <div className="grid grid-cols-2 gap-3.5">
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/20 transition-colors">
                      <p className="text-2xl font-bold text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {stat.value}
                      </p>
                      <p className="text-xs font-medium text-emerald-400">{stat.label}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Direct Info Card */}
              <motion.div variants={fadeUp} className="bento-card flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Fast Connectivity
                  </p>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <Mail size={15} className="text-emerald-400" />
                      <a href={gmailComposeUrl()} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors truncate">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <MapPin size={15} className="text-cyan-400" />
                      <span className="text-slate-300">{personalInfo.address}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 mt-4 border-t border-white/[0.06]">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-emerald-500/30 transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-emerald-500/30 transition-colors"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
