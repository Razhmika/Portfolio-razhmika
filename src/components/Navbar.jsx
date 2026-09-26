import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { gmailComposeUrl, navLinks } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sectionIds = navLinks.map((l) => l.href.slice(1));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#080c16]/85 backdrop-blur-xl border border-white/[0.12] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-2.5 px-4 sm:px-6'
            : 'bg-[#0a0f1d]/50 backdrop-blur-md border border-white/[0.06] py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Year Status */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-black font-bold text-base shadow-[0_0_15px_rgba(0,245,155,0.4)] group-hover:scale-105 transition-transform duration-300">
                RJ
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-emerald-300 transition-colors">
                  Razhmika J.
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  3rd Year B.Tech IT
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-2 py-1">
            {navLinks.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <button
                  key={label}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-lg bg-emerald-500/15 border border-emerald-500/30 shadow-[0_0_12px_rgba(0,245,155,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={gmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black shadow-[0_0_20px_rgba(0,245,155,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden pt-4 pb-2 border-t border-white/[0.08] mt-3"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map(({ label, href }) => {
                  const id = href.slice(1);
                  const isActive = active === id;
                  return (
                    <button
                      key={label}
                      onClick={() => handleNavClick(href)}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}

                <div className="pt-2 mt-2 border-t border-white/[0.06]">
                  <a
                    href={gmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-400 hover:bg-emerald-300 text-black shadow-md transition-colors"
                  >
                    <span>Connect with Razhmika</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
