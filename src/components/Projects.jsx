import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolio';

const categories = ['All Projects', 'Backend & Systems', 'Web Applications', 'Java & Systems'];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Projects');

  const filteredProjects =
    activeTab === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header & Tabs */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
                <FolderGit2 size={13} />
                <span>FEATURED IMPLEMENTATIONS</span>
              </div>
              <h2 className="section-title">
                Selected Works & <span className="neon-text">Case Studies</span>
              </h2>
              <p className="section-subtitle">
                Engineered with clean object-oriented architecture, verified data pipelines, and exhaustive QA test coverage.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-emerald-400 text-black shadow-[0_0_15px_rgba(0,245,155,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Bento Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bento-card group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Banner */}
                    <div
                      className={`h-40 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/[0.08] flex items-center justify-center relative overflow-hidden mb-6 group-hover:border-emerald-500/30 transition-all duration-500`}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <span className="text-5xl relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
                        {project.icon}
                      </span>
                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-emerald-300">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {project.title}
                    </h3>

                    {/* Small Keyword Description (User requirement) */}
                    <p className="text-[11px] font-mono text-emerald-400 mb-3 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {project.keywordDesc}
                    </p>

                    {/* Body */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                      {project.description}
                    </p>

                    {/* QA & Testing Rigor Highlight (Special strength) */}
                    <div className="p-3 rounded-xl bg-[#090e18] border border-white/[0.06] mb-5 group-hover:border-teal-500/20 transition-colors">
                      <div className="flex items-center gap-1.5 text-teal-400 text-xs font-mono font-medium mb-1">
                        <ShieldCheck size={14} />
                        <span>Quality Assurance Verification</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        {project.qaHighlight}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Action Button */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors font-medium"
                    >
                      <GithubIcon size={16} />
                      <span>Review Source Code</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-emerald-500/20 transition-colors"
                      aria-label="Open repository"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub Profile Strip */}
          <motion.div variants={fadeUp} className="text-center mt-14">
            <a
              href="https://github.com/Razhmika"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={18} />
              <span>Explore More Repositories on GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
