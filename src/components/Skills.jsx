import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Cpu } from 'lucide-react';

const categories = [
  'All',
  'Backend',
  'Testing / QA',
  'Database',
  'Frontend',
];

const categoryColors = {
  Backend: { badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' },
  'Testing / QA': { badge: 'bg-teal-500/10 border-teal-500/30 text-teal-300' },
  Database: { badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300' },
  Frontend: { badge: 'bg-lime-500/10 border-lime-500/30 text-lime-300' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070a11]/60">
      <div className="section-container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
                <Cpu size={13} />
                <span>TECH STACK & EXPERTISE</span>
              </div>
              <h2 className="section-title">
                Skills & <span className="neon-text">Keyword Matrix</span>
              </h2>
              <p className="section-subtitle">
                Clear role-based breakdown and core technical disciplines for each tool and language.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-emerald-400 text-black shadow-[0_0_15px_rgba(0,245,155,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const colorConfig = categoryColors[skill.category] || categoryColors.Backend;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="bento-card group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Icon, Category & Level */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                          {skill.icon}
                        </div>
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${colorConfig.badge}`}>
                          {skill.category}
                        </span>
                      </div>

                      {/* Name & Proficiency */}
                      <div className="mb-3">
                        <h3 className="text-white font-bold text-lg group-hover:text-emerald-300 transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Level: <span className="text-emerald-400 font-medium">{skill.level}</span>
                        </p>
                      </div>

                      {/* Small Keyword Description (User requirement) */}
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4 group-hover:border-emerald-500/20 transition-colors">
                        <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                          Role & Application
                        </p>
                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                          {skill.keywordDesc}
                        </p>
                      </div>
                    </div>

                    {/* Micro Tags */}
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-white/[0.05]">
                      {skill.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Continuous Learning Banner */}
          <motion.div
            variants={fadeUp}
            className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm text-slate-300">
                <span className="text-white font-semibold">Currently Deepening:</span> Advanced Spring Boot, Automation Testing with Selenium, and REST API Security in 3rd Year.
              </p>
            </div>
            <a
              href="#contact"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 whitespace-nowrap underline underline-offset-4 font-semibold"
            >
              Discuss Opportunities &rarr;
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
