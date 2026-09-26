import { motion } from 'framer-motion';
import { Mail, ArrowDown, ArrowUpRight, Sparkles, Terminal, ShieldCheck, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { gmailComposeUrl, marqueeItems, personalInfo } from '../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 devsync-radial-glow devsync-grid overflow-hidden flex flex-col justify-between">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10 my-auto py-8 lg:py-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 lg:gap-16">

          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* 3rd Year Available Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shadow-[0_0_20px_rgba(0,245,155,0.18)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-mono font-medium tracking-wide">
                  3rd Year B.Tech IT Student · Open to Opportunities
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Building <span className="neon-text">Reliable Systems</span> & Tested Code.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-6 max-w-xl"
            >
              Hi, I'm <span className="text-white font-semibold">Razhmika Jayakrishnan</span>. Currently in my{' '}
              <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                3rd Year of B.Tech IT
              </span>{' '}
              at KGISL Institute of Technology, specializing in{' '}
              <span className="text-white font-medium">Java development</span>,{' '}
              <span className="text-white font-medium">relational databases</span>, and{' '}
              <span className="text-white font-medium">manual software quality assurance</span>.
            </motion.p>

            {/* Micro keyword descriptors */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
              {[
                { label: 'Java Backend', icon: Code2 },
                { label: 'Manual QA & STLC', icon: ShieldCheck },
                { label: 'MySQL Relational Data', icon: Terminal },
                { label: '3rd Year B.Tech IT', icon: Sparkles },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:border-emerald-500/30 hover:text-white transition-colors"
                >
                  <Icon size={13} className="text-emerald-400" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a href="#projects" className="btn-primary">
                <span>View Selected Works</span>
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Let's Connect</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Social & Contact Strip */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4 border-t border-white/[0.08]"
            >
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Socials</span>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={gmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Bento Hero Visual with Floating Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-[24rem]">
              {/* Outer decorative halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-cyan-500/20 rounded-[36px] blur-2xl opacity-70 animate-pulse-slow" />

              {/* Portrait Frame */}
              <div className="hero-portrait-frame bg-[#0d121e] aspect-[3/4] relative z-10 group">
                <img
                  src="/profile.png"
                  alt="Razhmika Jayakrishnan - 3rd Year B.Tech IT Student"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle bottom gradient on portrait */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06080c] via-[#06080c]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-semibold text-sm">Razhmika Jayakrishnan</p>
                  <p className="text-xs text-emerald-400 font-mono">B.Tech IT · 3rd Year</p>
                </div>
              </div>

              {/* Floating Chip 1: 3rd Year Milestone */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -top-5 -left-6 sm:-left-10 z-20 bg-[#0d1322]/90 backdrop-blur-xl border border-white/[0.12] rounded-2xl px-4 py-2.5 shadow-2xl animate-float"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Status</p>
                    <p className="text-xs font-bold text-white">3rd Year B.Tech IT</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Chip 2: Focus & Rigor */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -bottom-5 -right-6 sm:-right-8 z-20 bg-[#0d1322]/90 backdrop-blur-xl border border-white/[0.12] rounded-2xl px-4 py-2.5 shadow-2xl"
                style={{ animation: 'float 6s ease-in-out infinite 3s' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Engineering Focus</p>
                    <p className="text-xs font-bold text-white">Java & Software QA</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Infinite Marquee Ticker (DevSync Signature) */}
      <div className="w-full relative py-4 bg-[#0a0e1a]/80 border-y border-white/[0.06] backdrop-blur-md overflow-hidden marquee-mask">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(0,245,155,0.8)]" />
              <span className="tracking-widest uppercase hover:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
